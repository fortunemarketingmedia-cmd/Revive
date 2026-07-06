import GalleryHero from "@/components/gallery/GalleryHero";
import BeforeAfterGrid from "@/components/gallery/BeforeAfterGrid";
import ClinicImages from "@/components/gallery/ClinicImages";
import TestimonialCards from "@/components/gallery/TestimonialCards";

export const metadata = {
  title: "Gallery — Before & After Results — Revive Skin Clinic Nashik",
  description:
    "See real patient results and transformations after skin, hair, and laser treatments at Revive Skin Hair Clinic & Laser Centre, Nashik.",
};

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <BeforeAfterGrid />
      <ClinicImages />
      <TestimonialCards />
    </>
  );
}
