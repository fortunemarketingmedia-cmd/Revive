import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LenisProvider from "@/components/providers/LenisProvider";
import AIChatbot from "@/components/ui/AIChatbot";
import BookingPopup from "@/components/layout/BookingPopup";
import TreatmentModalProvider from "@/components/providers/TreatmentModalProvider";
import { clinicData, doctorData } from "@/lib/content/clinic";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.reviveskinclinics.in"),
  title: {
    default: "Revive Skin, Hair & Laser Clinic in Nashik | Dr. Shraddha Sonanis",
    template: "%s",
  },
  description:
    "Nashik's trusted skin, hair & laser clinic led by Dr. Shraddha Sonanis (MBBS, FCPS, DNB). USFDA-approved laser hair reduction, PRP hair restoration, Botox, HIFU & more. Two branches — Sharanpur Road & Nashik Road. Book your consultation today.",
  keywords: [
    "Skin Clinic Nashik",
    "Best Dermatologist Nashik",
    "Hair Clinic Nashik",
    "Laser Hair Reduction Nashik",
    "Dr. Shraddha Sonanis",
    "Botox Nashik",
    "Dermal Fillers Nashik",
    "PRP Hair Treatment Nashik",
    "Acne Scar Treatment Nashik",
    "Vitiligo Treatment Nashik",
    "Skin Specialist Sharanpur Road",
    "Skin Clinic Nashik Road",
  ],
  authors: [{ name: "Dr. Shraddha Sonanis" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Revive Skin, Hair & Laser Clinic in Nashik | Dr. Shraddha Sonanis",
    description: "Nashik's trusted skin, hair & laser clinic led by Dr. Shraddha Sonanis. USFDA-approved laser hair reduction, PRP hair restoration, Botox, HIFU & more.",
    url: "https://www.reviveskinclinics.in",
    siteName: "Revive Skin Hair Clinic & Laser Centre",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Revive Skin, Hair & Laser Clinic in Nashik | Dr. Shraddha Sonanis",
    description: "Nashik's trusted skin, hair & laser clinic led by Dr. Shraddha Sonanis.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#FDBD0E",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // LocalBusiness/MedicalClinic structured data per branch — supports local
  // pack rankings and rich results for a city-only SEO scope (see audit S4).
  const medicalClinicSchema = clinicData.branches.map((branch) => ({
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: `${clinicData.name} — ${branch.name}`,
    image: `${clinicData.website}/images/REVIVE_LOGO.svg`,
    url: clinicData.website,
    telephone: branch.mobile,
    email: clinicData.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: branch.address,
      addressLocality: branch.city,
      addressRegion: branch.state,
      postalCode: branch.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: branch.lat,
      longitude: branch.lng,
    },
    hasMap: branch.directionsUrl,
    openingHours: "Mo-Sa 10:00-14:00, 17:00-20:00",
    medicalSpecialty: "Dermatology",
    priceRange: "₹₹",
    sameAs: [clinicData.instagram, clinicData.facebook],
    founder: {
      "@type": "Physician",
      name: doctorData.name,
      medicalSpecialty: "Dermatology",
    },
  }));

  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable} ${playfairDisplay.variable}`} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalClinicSchema) }}
        />
        <LenisProvider>
          <TreatmentModalProvider>
            {/* Subtle global noise overlay to elevate the texture */}
            <div className="noise-bg" />
            
            <Navbar />
            <main className="min-h-screen relative z-10">
              {children}
            </main>
            <Footer />
            <AIChatbot />
            <BookingPopup />
          </TreatmentModalProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
