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
    "Meet Dr. Shraddha Sonanis (MBBS, FCPS, DNB), lead dermatologist at Revive Skin Hair Clinic & Laser Centre in Nashik. 15+ years experience in medical & cosmetic dermatology.",
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
