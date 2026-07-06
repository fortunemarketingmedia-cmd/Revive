export interface Testimonial {
  id: number;
  name: string;
  treatment: string;
  rating: number;
  review: string;
  source: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    treatment: "Laser Hair Reduction",
    rating: 5,
    review:
      "I have been going to Dr. Shraddha for laser hair reduction for the past 8 months and the results have been incredible. She is genuinely one of the most knowledgeable and patient doctors I have ever met. She explains every step clearly and the staff is always warm and welcoming. Highly recommended!",
    source: "Practo",
    avatar: "PS",
  },
  {
    id: 2,
    name: "Rohit Kulkarni",
    treatment: "PRP Hair Therapy",
    rating: 5,
    review:
      "I was losing a lot of hair and was very worried. After just 4 sessions of PRP with Dr. Sonanis, the shedding has reduced drastically and I can see new hair growing. She is very honest about what to expect and doesn't over-promise. That genuinely builds trust. The clinic is clean and professional.",
    source: "JustDial",
    avatar: "RK",
  },
  {
    id: 3,
    name: "Meera Joshi",
    treatment: "Acne Scar Laser",
    rating: 5,
    review:
      "I suffered from deep acne scars for years and was self-conscious about my skin. After 5 sessions of Er:YAG laser at Revive, my skin is smoother than it has ever been. Dr. Shraddha is so caring and skilled. She treats every patient with genuine attention — not just as a number. The results speak for themselves.",
    source: "Practo",
    avatar: "MJ",
  },
  {
    id: 4,
    name: "Anjali Deshmukh",
    treatment: "Botox & Fillers",
    rating: 5,
    review:
      "I was nervous about getting Botox for the first time but Dr. Sonanis made me feel completely comfortable. She has a wonderful artistic eye — the results look incredibly natural. No frozen look at all, just a refreshed version of myself. I get compliments on my skin everywhere now. Will definitely keep coming back.",
    source: "Google",
    avatar: "AD",
  },
  {
    id: 5,
    name: "Sanjay Patil",
    treatment: "Vitiligo Treatment",
    rating: 5,
    review:
      "Dr. Shraddha has been treating my vitiligo for over a year with great results. She is extremely knowledgeable and keeps herself updated with the latest treatments. She provides a thorough explanation at every visit and is always available for queries. The clinic has a warm, homely atmosphere that puts you at ease.",
    source: "JustDial",
    avatar: "SP",
  },
  {
    id: 6,
    name: "Neha Gaikwad",
    treatment: "Carbon Peel",
    rating: 5,
    review:
      "I got the carbon peel done before my wedding and the glow was absolutely stunning! My skin looked clearer, brighter, and the pores were visibly smaller. Dr. Sonanis and her team are so professional and efficient. I have since become a regular patient for various skin treatments. Best skin clinic in Nashik, without a doubt.",
    source: "Practo",
    avatar: "NG",
  },
  {
    id: 7,
    name: "Vivek Mahajan",
    treatment: "Psoriasis Treatment",
    rating: 5,
    review:
      "I have had psoriasis for many years and visited many doctors without lasting relief. Dr. Shraddha took the time to understand my complete history, assessed my case thoroughly, and created a plan that has given me the best remission I have ever had. She genuinely cares about her patients' wellbeing beyond just prescribing medicine.",
    source: "JustDial",
    avatar: "VM",
  },
  {
    id: 8,
    name: "Sunita Bhosale",
    treatment: "HIFU Skin Tightening",
    rating: 5,
    review:
      "I was hesitant about HIFU at first but Dr. Sonanis explained it so well that I felt confident going ahead. The treatment itself was comfortable and the results after 2 months are genuinely amazing — my face looks lifted and the jawline is so much more defined. She is truly an expert in her field.",
    source: "Google",
    avatar: "SB",
  },
];
