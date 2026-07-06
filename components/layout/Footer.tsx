import Link from "next/link";
import { FiInstagram, FiFacebook, FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { clinicData } from "@/lib/content/clinic";
import { treatmentCategories } from "@/lib/content/treatments";

export default function Footer() {
  return (
    <footer className="bg-dark text-white/70 pt-20 pb-8 border-t border-white/5 relative overflow-hidden">
      {/* Editorial aesthetic: thin accent top gradient line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
        {/* Col 1: About & Info */}
        <div className="flex flex-col gap-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-playfair text-2xl font-bold tracking-wide text-white">
              REVIVE
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
          </Link>
          <p className="font-inter text-sm leading-relaxed text-white/50">
            {clinicData.description}
          </p>
          <div className="flex items-center gap-4 mt-2">
            <a
              href={clinicData.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-all duration-300"
            >
              <FiInstagram />
            </a>
            <a
              href={clinicData.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-all duration-300"
            >
              <FiFacebook />
            </a>
          </div>
        </div>

        {/* Col 2: Treatments Categories */}
        <div className="flex flex-col gap-5">
          <h4 className="font-playfair text-lg text-white font-medium tracking-wide">Treatments</h4>
          <ul className="flex flex-col gap-3 font-inter text-sm">
            {treatmentCategories.map((cat) => (
              <li key={cat.id}>
                <Link
                  href={`/treatments?category=${cat.id}`}
                  className="hover:text-secondary transition-colors"
                >
                  {cat.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Quick Links */}
        <div className="flex flex-col gap-5">
          <h4 className="font-playfair text-lg text-white font-medium tracking-wide">Explore</h4>
          <ul className="flex flex-col gap-3 font-inter text-sm">
            <li>
              <Link href="/" className="hover:text-secondary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-secondary transition-colors">
                About Dr. Shraddha
              </Link>
            </li>
            <li>
              <Link href="/treatments" className="hover:text-secondary transition-colors">
                All Procedures
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-secondary transition-colors">
                Before & After Gallery
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-secondary transition-colors">
                Contact & Booking
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Contact & Locations */}
        <div className="flex flex-col gap-5">
          <h4 className="font-playfair text-lg text-white font-medium tracking-wide">Branches</h4>
          <div className="flex flex-col gap-4 font-inter text-xs leading-relaxed text-white/50">
            {clinicData.branches.map((branch) => (
              <div key={branch.id} className="flex gap-2">
                <FiMapPin className="text-secondary shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white/80">{branch.name}</p>
                  <p>{branch.address}</p>
                  <p className="mt-1 text-white/40">{branch.timings}</p>
                </div>
              </div>
            ))}
            <div className="flex items-center gap-2 mt-2 pt-2 border-t border-white/5 text-white/80">
              <FiPhone className="text-secondary" />
              <a href={`tel:${clinicData.mobile}`} className="hover:text-secondary transition-colors font-medium">
                {clinicData.mobile}
              </a>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <FiMail className="text-secondary" />
              <a href={`mailto:${clinicData.email}`} className="hover:text-secondary transition-colors font-medium">
                {clinicData.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-inter text-white/40">
        <p>© {new Date().getFullYear()} {clinicData.name}. All Rights Reserved.</p>
        <p className="tracking-wide">
          Designed with editorial luxury for <span className="text-secondary">Revive</span>.
        </p>
      </div>
    </footer>
  );
}
