import { Suspense } from "react";
import ContactHero from "@/components/contact/ContactHero";
import BookingTutorial from "@/components/contact/BookingTutorial";
import AppointmentForm from "@/components/contact/AppointmentForm";
import BranchCards from "@/components/contact/BranchCards";

export const metadata = {
  title: "Book an Appointment — Revive Skin Clinic Nashik",
  description:
    "Schedule your appointment with lead Dermatologist Dr. Shraddha Sonanis. Contact our Sharanpur Road or Nashik Road branches.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <BookingTutorial />
      <Suspense fallback={<div className="py-20 text-center font-inter text-sm text-body/60">Loading booking form...</div>}>
        <AppointmentForm />
      </Suspense>
      <BranchCards />
    </>
  );
}
