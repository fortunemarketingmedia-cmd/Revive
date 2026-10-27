import Link from "next/link";
import { FiCalendar, FiMessageCircle, FiPhone } from "react-icons/fi";
import { clinicData } from "@/lib/content/clinic";

const actions = [
  {
    label: "Call",
    href: `tel:${clinicData.mobile}`,
    icon: FiPhone,
    external: true,
  },
  {
    label: "WhatsApp",
    href: `https://wa.me/${clinicData.whatsapp}?text=Hi%20Revive%20Skin%20Clinics,%20I'd%20like%20to%20book%20an%20appointment.`,
    icon: FiMessageCircle,
    external: true,
  },
  {
    label: "Book",
    href: "/contact?book=true#booking-form",
    icon: FiCalendar,
    external: false,
  },
];

export default function MobileContactBar() {
  return (
    <nav
      aria-label="Quick contact"
      className="fixed inset-x-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-[60] grid grid-cols-3 overflow-hidden rounded-2xl border border-white/20 bg-[#7C131F] text-white shadow-[0_12px_35px_rgba(0,0,0,0.28)] md:hidden"
    >
      {actions.map(({ label, href, icon: Icon, external }) => {
        const className = "flex min-h-14 flex-col items-center justify-center gap-1 border-r border-white/15 px-2 py-2 font-inter text-[10px] font-bold uppercase tracking-wider last:border-r-0";
        const content = <><Icon className="text-base" /><span>{label}</span></>;
        return external ? (
          <a key={label} href={href} className={className} target={label === "WhatsApp" ? "_blank" : undefined} rel={label === "WhatsApp" ? "noopener noreferrer" : undefined}>
            {content}
          </a>
        ) : (
          <Link key={label} href={href} className={className}>{content}</Link>
        );
      })}
    </nav>
  );
}
