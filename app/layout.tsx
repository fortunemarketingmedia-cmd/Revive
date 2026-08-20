import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LenisProvider from "@/components/providers/LenisProvider";
import AIChatbot from "@/components/ui/AIChatbot";
import BookingPopup from "@/components/layout/BookingPopup";
import TreatmentModalProvider from "@/components/providers/TreatmentModalProvider";

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
  title: "Revive Skin Hair Clinic & Laser Centre — Dr. Shraddha Sonanis",
  description:
    "Nashik's premier skin, hair & laser clinic led by Dr. Shraddha Sonanis. Specialized in medical dermatology, USFDA diode laser hair reduction, anti-aging, PRP hair restoration.",
  keywords: [
    "Skin Clinic Nashik",
    "Laser Hair Reduction Nashik",
    "Dr. Shraddha Sonanis",
    "Best Dermatologist Nashik",
    "Aesthetic Clinic Nashik",
    "Botox Nashik",
    "Fillers Nashik",
    "PRP Hair Therapy Nashik",
    "Acne Treatment Nashik",
    "Vitiligo Treatment Nashik",
  ],
  authors: [{ name: "Dr. Shraddha Sonanis" }],
  openGraph: {
    title: "Revive Skin Hair Clinic & Laser Centre",
    description: "Premium skin, hair & laser care in Nashik by expert Dermatologist Dr. Shraddha Sonanis.",
    url: "https://www.reviveskinclinics.in",
    siteName: "Revive Skin Clinics",
    locale: "en_IN",
    type: "website",
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
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable} ${playfairDisplay.variable}`} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
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
