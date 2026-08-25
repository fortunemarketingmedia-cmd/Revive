import { Suspense } from "react";
import ContactHero from "@/components/contact/ContactHero";
import BookingTutorial from "@/components/contact/BookingTutorial";
import AppointmentForm from "@/components/contact/AppointmentForm";
import BranchCards from "@/components/contact/BranchCards";
import ConsultationExpectations from "@/components/contact/ConsultationExpectations";
import BookingPolicies from "@/components/contact/BookingPolicies";

// Force per-request server rendering — AppointmentForm reads
// useSearchParams(), which under static generation would only resolve
// client-side, leaving a "Loading booking form..." placeholder in the
// crawler's initial HTML instead of the actual form (audit: Contact page
// issue #1, the site's primary lead-capture mechanism).
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Book an Appointment — Revive Skin Clinic Nashik",
  description:
    "Schedule your appointment with lead dermatologist Dr. Shraddha Sonanis at Revive Skin Hair Clinic & Laser Centre. Call, WhatsApp, or visit our Sharanpur Road or Nashik Road branches in Nashik.",
  keywords: [
    "Book Appointment Skin Clinic Nashik",
    "Contact Revive Skin Clinic",
    "Dermatologist Appointment Nashik",
    "Sharanpur Road Skin Clinic",
    "Nashik Road Skin Clinic",
    "Skin Clinic Near Me Nashik",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Book an Appointment — Revive Skin Clinic Nashik",
    description:
      "Schedule your appointment with lead dermatologist Dr. Shraddha Sonanis. Call, WhatsApp, or visit our Sharanpur Road or Nashik Road branches.",
    url: "https://www.reviveskinclinics.in/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <BookingTutorial />
      <Suspense fallback={<div className="py-20 text-center font-inter text-sm text-body/60">Loading booking form...</div>}>
        <AppointmentForm />
      </Suspense>
      <ConsultationExpectations />
      <BranchCards />
      <BookingPolicies />
    </>
  );
}
