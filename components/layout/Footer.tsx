import Link from "next/link";
import Image from "next/image";
import { FiInstagram, FiFacebook, FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { clinicData } from "@/lib/content/clinic";
import { treatmentCategories } from "@/lib/content/treatments";

export default function Footer() {
  return (
    <footer className="bg-[#FFF5F2] text-body pt-20 pb-8 border-t border-black/5 relative overflow-hidden">
      {/* Editorial aesthetic: thin accent top gradient line */}
      <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#7C131F]/30 to-transparent" />

      {/* Decorative background blur blob */}
      <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-[#F06722]/5 filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16 relative z-10">
        {/* Col 1: Brand & Socials */}
        <div className="flex flex-col gap-6">
          <Link href="/" className="inline-block shrink-0">
            <Image
              src="/images/REVIVE_LOGO.svg"
              alt="Revive Skin Hair Clinic & Laser Centre"
              width={150}
              height={48}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>
          <p className="font-inter text-sm leading-relaxed text-body/80">
            {clinicData.description}
          </p>
          <div className="flex items-center gap-4 mt-2">
            <a
              href={clinicData.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-body/60 hover:text-white hover:bg-[#7C131F] hover:border-[#7C131F] transition-all duration-300 shadow-sm active:scale-95"
              aria-label="Instagram Profile"
            >
              <FiInstagram className="text-base" />
            </a>
            <a
              href={clinicData.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-body/60 hover:text-white hover:bg-[#7C131F] hover:border-[#7C131F] transition-all duration-300 shadow-sm active:scale-95"
              aria-label="Facebook Page"
            >
              <FiFacebook className="text-base" />
            </a>
          </div>
        </div>

        {/* Col 2: Treatments Categories Directory */}
        <div className="flex flex-col gap-5">
          <h4 className="font-playfair text-lg text-heading font-semibold tracking-wide">Treatments</h4>
          <ul className="flex flex-col gap-3.5 font-inter text-sm">
            {treatmentCategories.map((cat) => (
              <li key={cat.id}>
                <Link
                  href={`/treatments?category=${cat.id}`}
                  className="text-body/70 hover:text-[#7C131F] transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7C131F] scale-0 group-hover:scale-100 transition-transform duration-300 shrink-0" />
                  <span>{cat.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Quick Links */}
        <div className="flex flex-col gap-5">
          <h4 className="font-playfair text-lg text-heading font-semibold tracking-wide">Explore</h4>
          <ul className="flex flex-col gap-3.5 font-inter text-sm">
            <li>
              <Link href="/" className="text-body/70 hover:text-[#7C131F] transition-colors duration-300 flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7C131F] scale-0 group-hover:scale-100 transition-transform duration-300 shrink-0" />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-body/70 hover:text-[#7C131F] transition-colors duration-300 flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7C131F] scale-0 group-hover:scale-100 transition-transform duration-300 shrink-0" />
                <span>About Dr. Shraddha</span>
              </Link>
            </li>
            <li>
              <Link href="/treatments" className="text-body/70 hover:text-[#7C131F] transition-colors duration-300 flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7C131F] scale-0 group-hover:scale-100 transition-transform duration-300 shrink-0" />
                <span>All Procedures</span>
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="text-body/70 hover:text-[#7C131F] transition-colors duration-300 flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7C131F] scale-0 group-hover:scale-100 transition-transform duration-300 shrink-0" />
                <span>Before & After Gallery</span>
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-body/70 hover:text-[#7C131F] transition-colors duration-300 flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7C131F] scale-0 group-hover:scale-100 transition-transform duration-300 shrink-0" />
                <span>Contact & Booking</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Contact & Locations */}
        <div className="flex flex-col gap-5">
          <h4 className="font-playfair text-lg text-heading font-semibold tracking-wide">Branches</h4>
          <div className="flex flex-col gap-5 font-inter text-xs leading-relaxed text-body/70">
            {clinicData.branches.map((branch) => (
              <div
                key={branch.id}
                className="flex gap-3 items-start"
              >
                <FiMapPin className="text-[#7C131F] shrink-0 mt-1 text-sm" />
                <div className="space-y-0.5">
                  <p className="font-semibold text-heading text-xs tracking-wide">{branch.name}</p>
                  <p className="text-[11px] text-body/80 leading-relaxed">{branch.address}</p>
                  <p className="text-[10px] text-[#7C131F] font-semibold tracking-wider uppercase mt-1">
                    {branch.timings}
                  </p>
                </div>
              </div>
            ))}
            <div className="flex flex-col gap-3 mt-2 pt-4 border-t border-black/5">
              <a
                href={`tel:${clinicData.mobile}`}
                className="flex items-center gap-3 text-xs text-body hover:text-[#7C131F] transition-colors font-medium group"
              >
                <FiPhone className="text-[#7C131F] text-sm shrink-0" />
                <span>{clinicData.mobile}</span>
              </a>
              <a
                href={`mailto:${clinicData.email}`}
                className="flex items-center gap-3 text-xs text-body hover:text-[#7C131F] transition-colors font-medium group"
              >
                <FiMail className="text-[#7C131F] text-sm shrink-0" />
                <span className="truncate">{clinicData.email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-inter text-body/45 relative z-10">
        <p>© {new Date().getFullYear()} {clinicData.name}. All Rights Reserved.</p>
        <p className="tracking-wide">
          Designed with editorial luxury for <span className="text-[#7C131F] font-semibold">Revive</span>.
        </p>
      </div>
    </footer>
  );
}
