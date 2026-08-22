import { NextRequest, NextResponse } from "next/server";
import { clinicData } from "@/lib/content/clinic";
import { treatments } from "@/lib/content/treatments";

export const runtime = "nodejs";

type AppointmentPayload = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  category?: unknown;
  treatment?: unknown;
  branch?: unknown;
  date?: unknown;
  message?: unknown;
};

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const attempts = new Map<string, { count: number; resetAt: number }>();

function text(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function isRateLimited(key: string) {
  const now = Date.now();
  const current = attempts.get(key);
  if (!current || current.resetAt <= now) {
    attempts.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  current.count += 1;
  return current.count > RATE_LIMIT_MAX_REQUESTS;
}

export async function POST(request: NextRequest) {
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 12_000) {
    return NextResponse.json({ error: "Request is too large." }, { status: 413 });
  }

  const fetchSite = request.headers.get("sec-fetch-site");
  if (fetchSite && fetchSite !== "same-origin") {
    return NextResponse.json({ error: "Invalid request origin." }, { status: 403 });
  }

  const clientKey = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    || request.headers.get("x-real-ip")
    || "unknown";
  if (isRateLimited(clientKey)) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a few minutes and try again." },
      { status: 429, headers: { "Retry-After": "600" } },
    );
  }

  let body: AppointmentPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const appointment = {
    name: text(body.name, 80),
    phone: text(body.phone, 20),
    email: text(body.email, 120),
    category: text(body.category, 30),
    treatment: text(body.treatment, 100),
    branch: text(body.branch, 100),
    date: text(body.date, 10),
    message: text(body.message, 1000),
  };

  const allowedCategories = new Set(["skin", "hair", "laser", "anti-ageing", ""]);
  const allowedTreatments = new Set(["", ...treatments.map((item) => item.slug)]);
  const allowedBranches = new Set(clinicData.branches.map((branch) => branch.name));
  const phonePattern = /^[0-9+() -]{7,20}$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const datePattern = /^\d{4}-\d{2}-\d{2}$/;

  if (
    appointment.name.length < 2
    || !phonePattern.test(appointment.phone)
    || (appointment.email && !emailPattern.test(appointment.email))
    || !allowedCategories.has(appointment.category)
    || !allowedTreatments.has(appointment.treatment)
    || !allowedBranches.has(appointment.branch)
    || !datePattern.test(appointment.date)
  ) {
    return NextResponse.json({ error: "Please check the form details and try again." }, { status: 400 });
  }

  const webhookUrl = process.env.CRM_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json(
      { error: "Online booking is temporarily unavailable. Please call the clinic." },
      { status: 503 },
    );
  }

  try {
    const headers: Record<string, string> = { "Content-Type": "application/json" };
    if (process.env.CRM_WEBHOOK_BEARER_TOKEN) {
      headers.Authorization = `Bearer ${process.env.CRM_WEBHOOK_BEARER_TOKEN}`;
    }
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers,
      body: JSON.stringify({ ...appointment, source: "reviveskinclinics.in" }),
      signal: AbortSignal.timeout(8_000),
      cache: "no-store",
    });
    if (!response.ok) throw new Error("Webhook rejected request");
  } catch {
    return NextResponse.json({ error: "Unable to send request. Please call the clinic." }, { status: 502 });
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
