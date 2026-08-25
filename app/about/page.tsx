import AboutHero from "@/components/about/AboutHero";
import DoctorProfile from "@/components/about/DoctorProfile";
import TeamTicker from "@/components/about/TeamTicker";
import ClinicTimeline from "@/components/about/ClinicTimeline";
import ProfessionalAffiliations from "@/components/about/ProfessionalAffiliations";
import ClinicTeam from "@/components/about/ClinicTeam";
import SocialImpact from "@/components/about/SocialImpact";
import InstagramReels from "@/components/about/InstagramReels";

export const metadata = {
  title: "About Dr. Shraddha Sonanis — Revive Skin Clinic Nashik",
  description:
    "Meet Dr. Shraddha Sonanis (MBBS, FCPS, DNB), lead dermatologist at Revive Skin Hair Clinic & Laser Centre in Nashik. 17+ years' experience in medical & cosmetic dermatology, trichology, and aesthetic medicine.",
  keywords: [
    "Dr. Shraddha Sonanis",
    "Dermatologist Nashik",
    "Best Dermatologist Nashik",
    "Skin Specialist Nashik",
    "Trichologist Nashik",
    "Aesthetic Physician Nashik",
    "IADVL Dermatologist Nashik",
    "Vitiligo Specialist Nashik",
    "Psoriasis Treatment Nashik",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Dr. Shraddha Sonanis — Revive Skin Clinic Nashik",
    description:
      "Meet Dr. Shraddha Sonanis (MBBS, FCPS, DNB), lead dermatologist at Revive Skin Hair Clinic & Laser Centre in Nashik.",
    url: "https://www.reviveskinclinics.in/about",
    type: "profile",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <DoctorProfile />
      <TeamTicker />
      <ClinicTeam />
      <ClinicTimeline />
      <ProfessionalAffiliations />
      <InstagramReels />
      <SocialImpact />
    </>
  );
}
