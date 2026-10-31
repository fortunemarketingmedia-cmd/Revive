import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiClock, FiMapPin, FiPhone } from "react-icons/fi";
import { clinicData } from "@/lib/content/clinic";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return clinicData.branches.map((branch) => ({ slug: branch.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const branch = clinicData.branches.find((item) => item.slug === slug);
  if (!branch) return {};
  return {
    title: `${branch.name} Skin Clinic in Nashik — Revive`,
    description: `Visit Revive Skin Hair Clinic & Laser Centre at ${branch.name}, ${branch.address}, ${branch.city} ${branch.pincode}. Call to book a dermatology consultation.`,
    alternates: { canonical: `/locations/${branch.slug}` },
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const branch = clinicData.branches.find((item) => item.slug === slug);
  if (!branch) notFound();

  return (
    <main className="bg-background px-6 pb-24 pt-32 md:pt-40">
      <div className="mx-auto max-w-6xl">
        <p className="font-inter text-xs font-bold uppercase tracking-[0.18em] text-primary">Revive clinic location</p>
        <h1 className="mt-3 max-w-4xl font-playfair text-4xl font-semibold leading-tight text-heading md:text-6xl">Dermatologist and Skin Clinic at {branch.name}, Nashik</h1>
        <p className="mt-5 max-w-3xl font-inter text-base leading-8 text-body/80">Consult Dr. Shraddha Sonanis for medical dermatology, hair concerns, laser procedures, and aesthetic treatment planning at our {branch.name} clinic.</p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <section className="rounded-3xl border border-border bg-white p-7 shadow-sm md:p-9">
            <h2 className="font-playfair text-2xl font-semibold text-heading">Address and contact</h2>
            <div className="mt-6 space-y-5 font-inter text-sm leading-7 text-body">
              <div className="flex gap-3"><FiMapPin className="mt-1 shrink-0 text-primary" /><p>{branch.address}, {branch.city}, {branch.state} — {branch.pincode}</p></div>
              <div className="flex gap-3"><FiClock className="mt-1 shrink-0 text-primary" /><p>{branch.timings}</p></div>
              <a className="flex gap-3 font-semibold text-primary" href={`tel:${branch.mobile}`}><FiPhone className="mt-1 shrink-0" />{branch.mobile}</a>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={branch.directionsUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-primary px-6 py-3 font-inter text-xs font-bold uppercase tracking-wider text-white">Get directions</a>
              <Link href="/contact?book=true#booking-form" className="rounded-full border border-primary px-6 py-3 font-inter text-xs font-bold uppercase tracking-wider text-primary">Book appointment</Link>
            </div>
          </section>
          <div className="min-h-[360px] overflow-hidden rounded-3xl border border-border bg-altbg">
            <iframe src={branch.mapUrl} title={`${branch.name} map`} width="100%" height="100%" className="min-h-[360px] border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </div>
    </main>
  );
}
