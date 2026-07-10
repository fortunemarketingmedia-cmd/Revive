import { Suspense } from "react";
import TreatmentsHero from "@/components/treatments/TreatmentsHero";
import TreatmentGrid from "@/components/treatments/TreatmentGrid";
import BeforeAfterSection from "@/components/treatments/BeforeAfterSection";
import TreatmentCareGuide from "@/components/treatments/TreatmentCareGuide";

export const metadata = {
  title: "Skin, Hair & Laser Treatments — Revive Skin Clinic Nashik",
  description:
    "Explore 20+ advanced dermatological and cosmetic treatments offered at Revive Skin Hair Clinic & Laser Centre in Nashik. Led by Dr. Shraddha Sonanis.",
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
