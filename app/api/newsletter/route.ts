import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const attempts = new Map<string, { count: number; resetAt: number }>();

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
  if (contentLength > 2_000) {
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

  let body: { email?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email.trim().slice(0, 120) : "";
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  // NEWSLETTER_WEBHOOK_URL should point at your mailing-list provider's
  // subscribe endpoint (e.g. a Mailchimp/Brevo/Zoho Campaigns webhook, or
  // your CRM's list-add endpoint). Until that env var is set in production,
  // this route intentionally responds with 503 rather than silently
  // pretending to subscribe the visitor — see the site audit's note that
  // the previous "Subscribe" button was not connected to anything.
  const webhookUrl = process.env.NEWSLETTER_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json(
      { error: "Newsletter signup is temporarily unavailable. Please try again later." },
      { status: 503 },
    );
  }

  try {
    const headers: Record<string, string> = { "Content-Type": "application/json" };
    if (process.env.NEWSLETTER_WEBHOOK_BEARER_TOKEN) {
      headers.Authorization = `Bearer ${process.env.NEWSLETTER_WEBHOOK_BEARER_TOKEN}`;
    }
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers,
      body: JSON.stringify({ email, source: "reviveskinclinics.in" }),
      signal: AbortSignal.timeout(8_000),
      cache: "no-store",
    });
    if (!response.ok) throw new Error("Webhook rejected request");
  } catch {
    return NextResponse.json({ error: "Unable to subscribe right now. Please try again later." }, { status: 502 });
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
