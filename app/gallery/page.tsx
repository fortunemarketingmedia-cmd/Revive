import GalleryHero from "@/components/gallery/GalleryHero";
import BeforeAfterGrid from "@/components/gallery/BeforeAfterGrid";
import ClinicImages from "@/components/gallery/ClinicImages";
import TestimonialCards from "@/components/gallery/TestimonialCards";
import GalleryStandards from "@/components/gallery/GalleryStandards";
import GalleryFAQs from "@/components/gallery/GalleryFAQs";

export const metadata = {
  title: "Gallery — Before & After Results — Revive Skin Clinic Nashik",
  description:
    "See real patient results and transformations after skin, hair, and laser treatments at Revive Skin Hair Clinic & Laser Centre, Nashik.",
  keywords: [
    "Before and After Nashik",
    "Skin Clinic Results Nashik",
    "Laser Hair Reduction Results",
    "PRP Hair Restoration Results",
    "HIFU Before After",
    "Botox Results Nashik",
    "Acne Scar Treatment Results",
    "Dermatologist Nashik Reviews",
  ],
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Gallery — Before & After Results — Revive Skin Clinic Nashik",
    description:
      "See real patient results and transformations after skin, hair, and laser treatments at Revive Skin Hair Clinic & Laser Centre, Nashik.",
    url: "https://www.reviveskinclinics.in/gallery",
    type: "website",
  },
};

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <BeforeAfterGrid />
      <GalleryStandards />
      <ClinicImages />
      <TestimonialCards />
      <GalleryFAQs />
    </>
  );
}
