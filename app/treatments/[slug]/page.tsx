import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FiCheck, FiArrowLeft, FiClock, FiCalendar, FiActivity, FiShield, FiPhoneCall } from "react-icons/fi";
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
    <article className="py-12 md:py-24 bg-background relative z-10 w-full overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-secondary/5 filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[450px] h-[450px] rounded-full bg-primary/5 filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Back Link Nav - pushed down to clear the floating navbar, styled as a highly visible premium button */}
        <div className="pt-12 md:pt-16 mb-8 md:mb-10">
          <Link
            href="/treatments"
            className="inline-flex items-center gap-2.5 font-inter text-[10px] md:text-xs font-bold uppercase tracking-wider text-heading bg-altbg/80 border border-border/80 px-5 py-2.5 rounded-full transition-all duration-300 hover:bg-primary hover:border-primary hover:text-background shadow-sm hover:shadow group"
          >
            <FiArrowLeft className="text-sm shrink-0 transition-transform duration-300 group-hover:-translate-x-1" />
            <span>Back to all treatments</span>
          </Link>
        </div>

        {/* Split Hero Header Layout */}
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-16 pb-12 border-b border-border/80">
          {/* Left Column: Heading and Tag */}
          <div className="lg:col-span-7">
            <span className="font-inter text-xs font-bold uppercase tracking-widest text-primary bg-primary/5 border border-primary/10 px-3 py-1 rounded-full mb-4 inline-block">
              {treatment.categoryLabel} &bull; {treatment.tagline}
            </span>
            <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl text-heading font-medium tracking-tight leading-[1.1] mb-6">
              {treatment.name}
            </h1>
            <p className="font-inter text-base md:text-lg text-body/90 leading-relaxed border-l-2 border-primary/35 pl-6">
              {treatment.description}
            </p>
          </div>

          {/* Right Column: High-Res Treatment Visual Frame */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] rounded-[2rem] overflow-hidden border border-border shadow-luxury bg-altbg max-w-lg lg:max-w-none">
              <Image
                src={treatment.image}
                alt={treatment.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 border border-white/10 rounded-[2rem] pointer-events-none" />
            </div>
          </div>
        </header>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Main Content Column (Left Side) */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* Detailed Medical Overview */}
            <section>
              <h2 className="font-playfair text-2xl md:text-3xl text-heading font-semibold tracking-tight mb-6">
                Clinical Overview
              </h2>
              <div className="font-inter text-sm md:text-base text-body leading-relaxed space-y-4">
                {treatment.longDescription.split('\n\n').map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </section>

            {/* Key Benefits Grid */}
            <section className="bg-altbg/40 rounded-[2rem] p-8 border border-border/80">
              <h3 className="font-playfair text-2xl text-heading font-semibold tracking-tight mb-6">
                Treatment Benefits
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {treatment.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex gap-3 items-start bg-background rounded-2xl p-5 border border-border/60 hover:border-primary/25 transition-all duration-300">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs shrink-0 mt-0.5 border border-primary/20">
                      <FiCheck />
                    </span>
                    <p className="font-inter text-xs md:text-sm text-body leading-relaxed font-medium">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Treatment Procedure Timeline */}
            <section>
              <h3 className="font-playfair text-2xl md:text-3xl text-heading font-semibold tracking-tight mb-8">
                Your Treatment Journey
              </h3>
              <div className="flex flex-col gap-8 relative pl-6 border-l border-primary/15 ml-4">
                {treatment.procedure.map((step, idx) => (
                  <div key={idx} className="relative group">
                    {/* Timeline brass node */}
                    <span className="absolute -left-[33px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-primary flex items-center justify-center transition-all duration-300 group-hover:bg-primary shadow-sm" />
                    
                    <h4 className="font-playfair text-lg text-heading font-semibold tracking-tight mb-2">
                      Step {idx + 1}
                    </h4>
                    <p className="font-inter text-xs md:text-sm text-body leading-relaxed max-w-3xl">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Sticky Side-specifications Panel (Right Side) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            
            {/* Parameters Glassmorphic Card */}
            <div className="bg-[#FAF8F5] rounded-[2rem] p-6 md:p-8 border border-[#EBE3D5] shadow-luxury space-y-6">
              
              <div className="flex items-center gap-3 pb-4 border-b border-[#EBE3D5]">
                <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                  <FiActivity className="text-xl" />
                </div>
                <div>
                  <h3 className="font-playfair text-lg font-semibold text-heading">
                    Clinical Specs
                  </h3>
                  <p className="font-inter text-[9px] text-primary tracking-wider uppercase font-bold mt-0.5">
                    Fast Parameters
                  </p>
                </div>
              </div>

              {/* Specs items */}
              <div className="space-y-4 font-inter">
                <div>
                  <div className="flex items-center gap-2 text-heading text-xs font-semibold uppercase tracking-wider mb-1.5">
                    <FiClock className="text-secondary" />
                    <span>Downtime & Recovery</span>
                  </div>
                  <p className="text-xs md:text-sm text-body/90 leading-relaxed bg-white/50 rounded-xl p-3 border border-[#EBE3D5]">
                    {treatment.recovery}
                  </p>
                </div>

                {treatment.sessions && (
                  <div>
                    <div className="flex items-center gap-2 text-heading text-xs font-semibold uppercase tracking-wider mb-1.5">
                      <FiCalendar className="text-secondary" />
                      <span>Recommended Program</span>
                    </div>
                    <p className="text-xs md:text-sm text-body/90 leading-relaxed bg-white/50 rounded-xl p-3 border border-[#EBE3D5]">
                      {treatment.sessions}
                    </p>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-[#EBE3D5] space-y-4">
                <div className="flex items-start gap-3 bg-white/40 border border-[#EBE3D5] rounded-xl p-3">
                  <FiShield className="text-primary text-base shrink-0 mt-0.5" />
                  <p className="font-inter text-[10px] text-body/80 leading-relaxed">
                    All treatments are administered by certified medical professionals utilizing only USFDA-cleared technologies.
                  </p>
                </div>

                {/* Primary Gold Call-to-action */}
                <LuxuryButton
                  href={`/contact?book=true&treatment=${treatment.slug}`}
                  variant="primary"
                  className="w-full justify-center text-center py-3.5"
                >
                  Request Appointment
                </LuxuryButton>
              </div>

            </div>

            {/* Quick contact box */}
            <div className="bg-altbg/60 border border-border/80 rounded-3xl p-6 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <FiPhoneCall className="text-secondary shrink-0 text-lg animate-pulse" />
                <div>
                  <h4 className="font-playfair text-xs font-bold text-heading">
                    Clinical Assistance
                  </h4>
                  <p className="font-inter text-[10px] text-body/80 mt-0.5">
                    Call: +91 98230 63063
                  </p>
                </div>
              </div>
              <a
                href="tel:+919823063063"
                className="bg-heading hover:bg-primary text-background font-inter text-[10px] font-bold px-4 py-2 rounded-full transition-colors duration-300"
              >
                Call Now
              </a>
            </div>

          </aside>

        </div>

      </div>
    </article>
  );
}
