import { notFound } from "next/navigation";
import Link from "next/link";
import { FiCheck, FiArrowLeft, FiClock, FiCalendar } from "react-icons/fi";
import { treatments, getTreatmentBySlug } from "@/lib/content/treatments";
import LuxuryButton from "@/components/ui/LuxuryButton";

interface TreatmentDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return treatments.map((t) => ({
    slug: t.slug,
  }));
}

export async function generateMetadata({ params }: TreatmentDetailPageProps) {
  const resolvedParams = await params;
  const treatment = getTreatmentBySlug(resolvedParams.slug);
  if (!treatment) return {};

  return {
    title: `${treatment.name} — Revive Skin Clinic Nashik`,
    description: treatment.description,
  };
}

export default async function TreatmentDetailPage({ params }: TreatmentDetailPageProps) {
  const resolvedParams = await params;
  const treatment = getTreatmentBySlug(resolvedParams.slug);

  if (!treatment) {
    notFound();
  }

  return (
    <article className="py-12 md:py-20 bg-background relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Back Link */}
        <Link
          href="/treatments"
          className="inline-flex items-center gap-2 font-inter text-xs font-bold uppercase tracking-wider text-body hover:text-primary mb-12 transition-colors"
        >
          <FiArrowLeft className="text-sm shrink-0" />
          Back to all treatments
        </Link>

        {/* Header Section */}
        <header className="mb-12">
          <span className="font-inter text-xs font-bold uppercase tracking-widest text-accent2 mb-3 block">
            {treatment.categoryLabel} &bull; {treatment.tagline}
          </span>
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl text-heading font-medium tracking-tight leading-tight">
            {treatment.name}
          </h1>
        </header>

        {/* Introduction */}
        <div className="font-inter text-base md:text-lg text-body leading-relaxed mb-12 border-l-2 border-primary/20 pl-6">
          {treatment.longDescription}
        </div>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="font-playfair text-2xl md:text-3xl text-heading font-medium tracking-tight mb-6">
            Key Benefits
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {treatment.benefits.map((benefit, idx) => (
              <div key={idx} className="flex gap-3 items-start">
                <span className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center text-primary text-xs shrink-0 mt-0.5">
                  <FiCheck />
                </span>
                <p className="font-inter text-sm md:text-base text-body leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Procedure Section */}
        <section className="mb-16">
          <h2 className="font-playfair text-2xl md:text-3xl text-heading font-medium tracking-tight mb-8">
            Treatment Procedure
          </h2>
          <div className="flex flex-col gap-8 relative pl-6 border-l border-primary/10">
            {treatment.procedure.map((step, idx) => (
              <div key={idx} className="relative">
                {/* Timeline node */}
                <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-secondary border-4 border-white flex items-center justify-center text-[10px] text-white font-bold shadow-sm" />
                
                <h3 className="font-playfair text-lg text-heading font-medium tracking-tight mb-2">
                  Step {idx + 1}
                </h3>
                <p className="font-inter text-sm md:text-base text-body leading-relaxed">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Recovery / Sessions info */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-8 bg-altbg/60 border border-border/30 rounded-3xl mb-16">
          <div>
            <div className="flex items-center gap-2 text-primary mb-3">
              <FiClock className="text-lg" />
              <h3 className="font-playfair text-lg text-heading font-medium tracking-tight">Recovery & Downtime</h3>
            </div>
            <p className="font-inter text-sm text-body leading-relaxed">{treatment.recovery}</p>
          </div>
          {treatment.sessions && (
            <div>
              <div className="flex items-center gap-2 text-primary mb-3">
                <FiCalendar className="text-lg" />
                <h3 className="font-playfair text-lg text-heading font-medium tracking-tight">Recommended Sessions</h3>
              </div>
              <p className="font-inter text-sm text-body leading-relaxed">{treatment.sessions}</p>
            </div>
          )}
        </section>

        {/* Booking CTA section */}
        <section className="text-center pt-8 border-t border-border">
          <h2 className="font-playfair text-2xl md:text-3xl text-heading font-medium tracking-tight mb-4">
            Interested in {treatment.name}?
          </h2>
          <p className="font-inter text-sm text-body leading-relaxed max-w-lg mx-auto mb-8">
            Consult with Dr. Shraddha Sonanis to design a personalised treatment plan tailored to your skin and lifestyle.
          </p>
          <LuxuryButton href={`/contact?book=true&treatment=${treatment.slug}`} variant="primary">
            Request Appointment
          </LuxuryButton>
        </section>

      </div>
    </article>
  );
}
