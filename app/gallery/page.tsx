import GalleryHero from "@/components/gallery/GalleryHero";
import ClinicImages from "@/components/gallery/ClinicImages";

export const metadata = {
  title: "Clinic Gallery — Revive Skin Clinic Nashik",
  description:
    "Explore Revive Skin Hair Clinic & Laser Centre in Nashik, including our consultation spaces, treatment rooms, and clinical technology.",
  keywords: [
    "Revive Skin Clinic Gallery",
    "Skin Clinic Nashik",
    "Dermatology Clinic Nashik",
    "Laser Clinic Nashik",
    "Revive Skin Clinics Nashik",
  ],
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Clinic Gallery — Revive Skin Clinic Nashik",
    description:
      "Explore Revive Skin Hair Clinic & Laser Centre, its treatment rooms, and clinical technology in Nashik.",
    url: "https://www.reviveskinclinics.in/gallery",
    type: "website",
  },
};

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <ClinicImages />
    </>
  );
}
