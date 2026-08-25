export interface FAQ {
  id: number;
  question: string;
  answer: string;
  category?: string;
}

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "How do I book an appointment at Revive Skin Clinic?",
    answer:
      "You can book an appointment by calling us at +91-98230-63063, messaging us on WhatsApp, or filling out the online booking form on our Contact page. We will confirm your appointment within a few hours and send you a reminder before your scheduled date.",
    category: "booking",
  },
  {
    id: 2,
    question: "Is laser hair reduction safe for Indian skin?",
    answer:
      "Absolutely. We use a USFDA-approved Diode Laser specifically suited for Indian skin tones (Fitzpatrick types III–VI). Before any session, we perform a thorough skin assessment and a patch test to ensure the laser parameters are perfectly calibrated for your skin type. Laser hair reduction is one of our most popular and safest procedures.",
    category: "laser",
  },
  {
    id: 3,
    question: "How many laser hair reduction sessions will I need?",
    answer:
      "Laser hair reduction requires multiple sessions because hair grows in cycles — and the laser only affects actively growing follicles. Most patients need 6–8 sessions per body area, spaced 4–6 weeks apart. After completing the recommended sessions, most patients achieve over 80–90% permanent hair reduction.",
    category: "laser",
  },
  {
    id: 4,
    question: "What is the downtime after skin treatments at Revive?",
    answer:
      "Downtime varies by treatment. Many of our procedures — such as the Carbon Peel, Botox, laser photofacial, and mesotherapy — have zero downtime. Procedures like chemical peels may involve 2–5 days of mild peeling, and laser scar resurfacing requires 3–5 days of recovery. Dr. Sonanis will give you a complete aftercare plan before and after every procedure.",
    category: "recovery",
  },
  {
    id: 5,
    question: "Are Botox and filler treatments at Revive natural-looking?",
    answer:
      "Yes — natural results are our priority. Dr. Sonanis approaches every aesthetic treatment with an artistic eye and medical precision. She uses carefully calibrated doses to achieve a refreshed, rejuvenated appearance — never overfilled or frozen. Many of our patients comment that people notice they look better but cannot pinpoint why.",
    category: "anti-ageing",
  },
  {
    id: 6,
    question: "Does Revive treat conditions like Vitiligo and Psoriasis?",
    answer:
      "Yes. Medical dermatology — including Vitiligo, Psoriasis, and other chronic skin conditions — is a core part of what we do. Dr. Sonanis has a special clinical interest in these conditions and offers comprehensive, evidence-based management plans tailored to each patient's severity, lifestyle, and goals.",
    category: "medical",
  },
  {
    id: 7,
    question: "How many branches does Revive have in Nashik?",
    answer:
      "Revive has two clinic branches in Nashik: our Main Branch on Sharanpur Road (Adhaar Bungalow, near Soni Paithani) and our second branch on Nashik Road (Dnyaneshwar Bhuwan, near Muktidham Temple). Both branches are run by Dr. Shraddha Sonanis and offer the same range of treatments.",
    category: "general",
  },
  {
    id: 8,
    question: "How do I know which treatment is right for me?",
    answer:
      "The best first step is a consultation with Dr. Sonanis. She conducts a thorough skin assessment, listens to your concerns, and recommends a personalised treatment plan — never a one-size-fits-all approach. All consultations are detailed and educational, so you fully understand your options before committing to any treatment.",
    category: "general",
  },
  {
    id: 9,
    question: "Is PRP therapy effective for hair loss?",
    answer:
      "PRP (Platelet-Rich Plasma) therapy is one of the most effective and scientifically validated treatments for androgenetic alopecia (pattern hair loss) and certain forms of alopecia areata. Most patients notice a reduction in hair shedding from the 2nd session onward, with visible new growth by the 4th–6th session. Results are best when combined with appropriate medical therapy.",
    category: "hair",
  },
  {
    id: 10,
    question: "What should I do to prepare for my appointment?",
    answer:
      "For your first consultation, simply bring any previous dermatology reports or prescriptions you may have. For treatment sessions, Dr. Sonanis's team will provide specific pre-procedure instructions (e.g., avoid sun exposure, shave the area before laser, avoid blood thinners before certain injections). We send these instructions via WhatsApp before your appointment.",
    category: "booking",
  },
];
