import { Suspense } from "react";
import TreatmentsHero from "@/components/treatments/TreatmentsHero";
import TreatmentGrid from "@/components/treatments/TreatmentGrid";
import BeforeAfterSection from "@/components/treatments/BeforeAfterSection";
import TreatmentCareGuide from "@/components/treatments/TreatmentCareGuide";

// Force per-request server rendering instead of static generation.
// TreatmentGrid reads useSearchParams(), which Next.js can only resolve at
// request time — under static generation the crawler's first (JS-less)
// fetch would see only the Suspense fallback ("Loading treatments...")
// with none of the actual catalog in the HTML. This was flagged as the
// single highest-priority technical risk in the site audit (this page is
// the most valuable, keyword-rich page on the site).
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Skin, Hair & Laser Treatments — Revive Skin Clinic Nashik",
  description:
    "Explore 23+ advanced skin, hair, laser and anti-ageing treatments at Revive Skin Hair Clinic & Laser Centre in Nashik — led by Dr. Shraddha Sonanis. USFDA-approved technology, calibrated for Indian skin, with personalised treatment plans.",
  keywords: [
    "Skin Treatments Nashik",
    "Hair Treatments Nashik",
    "Laser Treatments Nashik",
    "Anti-Ageing Treatments Nashik",
    "Botox Nashik",
    "PRP Therapy Nashik",
    "Laser Hair Reduction Nashik",
    "Acne Scar Treatment Nashik",
    "HIFU Nashik",
    "Vitiligo Treatment Nashik",
  ],
  alternates: { canonical: "/treatments" },
  openGraph: {
    title: "Skin, Hair & Laser Treatments — Revive Skin Clinic Nashik",
    description:
      "Explore 23+ advanced skin, hair, laser and anti-ageing treatments at Revive Skin Hair Clinic & Laser Centre in Nashik.",
    url: "https://www.reviveskinclinics.in/treatments",
    type: "website",
  },
};

export default function TreatmentsPage() {
  return (
    <>
      <TreatmentsHero />
      <Suspense fallback={<div className="py-20 text-center font-inter text-sm text-body/60">Loading treatments...</div>}>
        <TreatmentGrid />
      </Suspense>
      <BeforeAfterSection />
      <TreatmentCareGuide />
    </>
  );
}
