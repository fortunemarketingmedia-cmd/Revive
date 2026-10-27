import type { Metadata } from "next";
import Link from "next/link";
import { clinicData } from "@/lib/content/clinic";

export const metadata: Metadata = {
  title: "Privacy Policy — Revive Skin Clinics Nashik",
  description: "How Revive Skin Clinics collects, uses, stores, and protects information submitted through its website and appointment form.",
  alternates: { canonical: "/privacy" },
};

const sections = [
  ["Information we collect", "When you request an appointment, we may collect your name, phone number, email address, preferred clinic, preferred date, treatment interest, and any message you choose to provide. We also receive limited technical information needed to operate and protect the website, such as an IP address and browser details."],
  ["How we use it", "We use appointment information only to respond to your enquiry, coordinate a consultation, provide requested clinic information, prevent spam or misuse, and maintain appropriate business records. Submitting the form does not create a doctor-patient relationship and should not be used for urgent medical concerns."],
  ["How information is shared", "Appointment requests are sent to Revive's clinic CRM and are available only to authorised clinic staff and service providers needed to operate the website, communications, and CRM. We do not sell appointment information."],
  ["Retention and security", "We keep information only for as long as reasonably necessary for appointment handling, legal obligations, dispute resolution, and clinic operations. We use access controls and technical safeguards, but no internet transmission or storage system can be guaranteed completely secure."],
  ["Your choices", "You may ask us to correct or delete information submitted through the website, subject to clinical, legal, and record-keeping requirements. You may also contact the clinic directly instead of using the online form."],
  ["Medical and emergency information", "Do not submit highly sensitive medical records or emergency information through the appointment form. For an emergency, contact local emergency services or visit the nearest emergency department."],
];

export default function PrivacyPage() {
  return (
    <main className="bg-background px-6 pb-24 pt-32 md:pt-40">
      <article className="mx-auto max-w-3xl">
        <p className="font-inter text-xs font-bold uppercase tracking-[0.18em] text-primary">Privacy & data use</p>
        <h1 className="mt-3 font-playfair text-4xl font-semibold text-heading md:text-6xl">Privacy Policy</h1>
        <p className="mt-5 font-inter text-sm leading-7 text-body/80">Effective 27 October 2026. This policy applies to information submitted through www.reviveskinclinics.in.</p>
        <div className="mt-10 space-y-9">
          {sections.map(([title, body]) => (
            <section key={title}>
              <h2 className="font-playfair text-2xl font-semibold text-heading">{title}</h2>
              <p className="mt-3 font-inter text-sm leading-7 text-body/85">{body}</p>
            </section>
          ))}
          <section>
            <h2 className="font-playfair text-2xl font-semibold text-heading">Contact us</h2>
            <p className="mt-3 font-inter text-sm leading-7 text-body/85">
              Questions or privacy requests can be sent to <a className="font-semibold text-primary underline" href={`mailto:${clinicData.email}`}>{clinicData.email}</a> or made by calling <a className="font-semibold text-primary underline" href={`tel:${clinicData.mobile}`}>{clinicData.mobile}</a>.
            </p>
          </section>
        </div>
        <Link href="/contact" className="mt-12 inline-flex rounded-full bg-primary px-6 py-3 font-inter text-xs font-bold uppercase tracking-wider text-white">Contact Revive</Link>
      </article>
    </main>
  );
}
