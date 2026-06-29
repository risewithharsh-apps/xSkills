export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Mentor {
  name: string;
  wcaUrl: string;
  experience: string;
  description: string;
  image: string;
}

export interface Testimonial {
  name: string;
  feedback: string;
  avatar: string;
  subtitle?: string;
}

export interface Feature {
  title: string;
  description: string;
  image: string;
}

export interface PlanFeature {
  text: string;
  included: boolean;
}

export interface PlanCard {
  title: string;
  price: string;
  originalPrice: string | null;
  features: PlanFeature[];
  isPopular?: boolean;
}

export interface SyllabusAccord {
  title: string;
  items: string[];
}

export interface Milestone {
  value: string;
  label: string;
}

export const FAQs: FAQItem[] = [
  {
    id: "faq-1",
    question: "What are the objectives of this program?",
    answer: "The primary objective of xSkills by Cubelelo is to take you from a curious beginner who may not even know how to rotate a side, to an advanced speedcuber. You will learn notation, basic techniques, pattern recognition, and elite finger tricks designed by global cubing champions."
  },
  {
    id: "faq-2",
    question: "Do I need to have a strong IQ before taking this course?",
    answer: "Absolutely not! Speedcubing is not about genetic IQ; it is about pattern recognition, algorithms, and muscle memory. Our structured modules teach these concepts in step-by-step videos so that anyone can learn and excel, regardless of starting background."
  },
  {
    id: "faq-3",
    question: "What are the prerequisites for enrolling in this program?",
    answer: "No prior experience is necessary for the Beginner Course. If you want to join the Intermediate or Advanced modules directly, we recommend already knowing how to solve the basic 3x3 cube in under 90 seconds."
  },
  {
    id: "faq-4",
    question: "What is the mode of payment?",
    answer: "Our payments are completely secure and powered by standard online payment gateways. We accept credit/debit cards, UPI, net banking, and international payments to ensure seamless enrollment."
  },
  {
    id: "faq-5",
    question: "Why I should not learn directly from YouTube and opt for your LMS program?",
    answer: "While YouTube has thousands of videos, they are highly unstructured, conflicting, and full of bad finger shortcuts that limit your potential speed later. xSkills provides a systematic roadmap created by National Record holders, ensuring you build correct habits from Day 1, with curated cheat sheets, guides, and personal tracking."
  },
  {
    id: "faq-6",
    question: "Are there any certifications offered upon completion of the program?",
    answer: "Yes, once you complete all course modules and pass the final evaluation, you will receive an elegant digital certification of completion signed by Cubelelo and your WCA mentors, validating your speedcubing status."
  }
];

export const MENTORS: Mentor[] = [
  {
    name: "KUNAL OAK",
    wcaUrl: "https://www.worldcubeassociation.org/persons/2015OAKK01",
    experience: "9 years of Teaching Experience (3x3, 3x3 OH, 4x4, 5x5, 6x6, 7x7)",
    description: "I coach people in a very personalized, holistic, and solution-oriented manner. My students have won several competitions against far more experienced cubers and several of them are highly ranked in the country in a matter of weeks.",
    image: "https://raw.githubusercontent.com/Cubelelo-admin/XSkills/main/kunal.png"
  },
  {
    name: "BHARGAV NARASIMHAN",
    wcaUrl: "https://www.worldcubeassociation.org/persons/2011NARA02",
    experience: "13 years of Teaching Experience (3x3, 3x3 OH, 3x3 FMC)",
    description: "I enjoy training people in a simple and structured manner. With some effort from your side, the masterclass tutorials here will help you progress from zero to master in one of the shortest possible times and enable you to get the best bang for your buck!",
    image: "https://raw.githubusercontent.com/Cubelelo-admin/XSkills/main/bhargav.png"
  },
  {
    name: "SHUBHAM MAHARANA",
    wcaUrl: "https://www.worldcubeassociation.org/persons/2016MAHA07",
    experience: "10 years of Teaching Experience (2x2, 3x3, Megaminx)",
    description: "I have a simple belief: if you want to achieve anything, you have to put all the time you have into it. My course is structured in a minimalistic way and has all the resources you need to make learning simple. Put in the effort, and surely you’ll see your results improve.",
    image: "https://raw.githubusercontent.com/Cubelelo-admin/XSkills/main/shubham.png"
  }
];

export const ACHIEVERS: Testimonial[] = [
  {
    name: "Arunav",
    feedback: "Kunal Sir’s simple explanations transformed my F2L efficiency and finger tricks. I improved from 30 seconds to sub-20 solves, thanks to his clear guidance.",
    avatar: "https://raw.githubusercontent.com/Cubelelo-admin/XSkills/main/arunav.png"
  },
  {
    name: "Reuben",
    feedback: "xSkills took my solving to the next level! I went from 15 seconds to a Sub-10 average, all thanks to their advanced techniques and support.",
    avatar: "https://raw.githubusercontent.com/Cubelelo-admin/XSkills/main/reuben.png"
  },
  {
    name: "Advay Suvarna",
    feedback: "Kunal Sir’s teaching made complex moves feel easy. My times dropped from 25 seconds to sub-15 within 3 months – a real game-changer!",
    avatar: "https://raw.githubusercontent.com/Cubelelo-admin/XSkills/main/advay.png"
  },
  {
    name: "Divyaansh",
    feedback: "The courses were amazing! The 2x2 and 3x3 modules, plus new one-handed algorithms, helped me improve from 40 seconds to a solid 25-second average. Highly recommend!",
    avatar: "https://raw.githubusercontent.com/Cubelelo-admin/XSkills/main/divyaansh.png"
  }
];

export const PARENTS: Testimonial[] = [
  {
    name: "Kavita",
    feedback: "Each xSkills course is well-designed and easy to follow. The self-paced videos gave Arunav the liberty to learn at his speed and practice before moving on to the next one. I would like to thank team Cubelelo for making the tutorials. Kudos to the team!",
    avatar: "https://raw.githubusercontent.com/Cubelelo-admin/XSkills/main/kavita.png"
  },
  {
    name: "Dipti",
    feedback: "xSkills course modules are very structured and easy to understand. The flow of the course is very well organized. One can skip a module if needed. You also get an email confirmation about the course completion. The best part is - you get to learn the skills from the national record holders.",
    avatar: "https://raw.githubusercontent.com/Cubelelo-admin/XSkills/main/dipti.png"
  },
  {
    name: "Dency",
    feedback: "xSkills cubing training material is well-structured and tailored for all skills. The material progresses logically, guiding learners through beginner methods and advancing to more complex algorithms and techniques for experienced cubers.",
    avatar: "https://raw.githubusercontent.com/Cubelelo-admin/XSkills/main/dency.png"
  },
  {
    name: "Parul Khatri",
    feedback: "The xSkills courses are excellent! My child enjoyed the 2x2 and 3x3 advanced courses and picked up many new skills. The 4x4 and one-handed courses were also very useful. Overall, we found the courses to be highly educational and enjoyable.",
    avatar: "https://raw.githubusercontent.com/Cubelelo-admin/XSkills/main/parul.png"
  }
];

export const UNIQUE_FEATURES_1: Feature[] = [
  {
    title: "Learn from the Top Cubers",
    description: "Get trained by official National Record Holders and world-class Speedcubing mentors.",
    image: "https://raw.githubusercontent.com/Cubelelo-admin/XSkills/main/top-cubers.png"
  },
  {
    title: "Access to Secret Cheat Sheets",
    description: "Equip yourself with downloadable high-quality step maps, PDFs, and algorithms.",
    image: "https://raw.githubusercontent.com/Cubelelo-admin/XSkills/main/cheat-sheets.png"
  },
  {
    title: "Curated Speed Cubing Courses",
    description: "Courses perfectly planned into small chapters to ensure complete step progression.",
    image: "https://raw.githubusercontent.com/Cubelelo-admin/XSkills/main/speed-cubing.png"
  },
  {
    title: "Get Free Cubing Guides",
    description: "Exclusive bonus checklists and handbook documents for absolute beginners.",
    image: "https://raw.githubusercontent.com/Cubelelo-admin/XSkills/main/cubing-guides.png"
  }
];

export const UNIQUE_FEATURES_2: Feature[] = [
  {
    title: "Become 5x Faster at Cubing",
    description: "Proven speed roadmaps with instant drops in solve durations.",
    image: "https://raw.githubusercontent.com/Cubelelo-admin/XSkills/main/faster.png"
  },
  {
    title: "Logic-Driven Methods",
    description: "No blind memorizing. Understand piece interactions and intuitive solves.",
    image: "https://raw.githubusercontent.com/Cubelelo-admin/XSkills/main/logic.png"
  },
  {
    title: "A Supportive Cubing Community",
    description: "Unlock permanent premium access to official community channels and support.",
    image: "https://raw.githubusercontent.com/Cubelelo-admin/XSkills/main/community.png"
  },
  {
    title: "Certificate upon Completion",
    description: "Enjoy downloadable high-definition quick guides and reference sheets.",
    image: "https://raw.githubusercontent.com/Cubelelo-admin/XSkills/main/certificate.png"
  },
  {
    title: "Self-Paced Training Flow",
    description: "Watch anywhere, on any device (phone, laptop, tablet), whenever it suits you.",
    image: "https://raw.githubusercontent.com/Cubelelo-admin/XSkills/main/pace.png"
  }
];

export const CUBELELO_EFFECTS: Feature[] = [
  {
    title: "Courses Designed by Global Speedcubing Experts",
    description: "Every single curriculum layer is carefully built by WCA stars & Cubelelo coaches.",
    image: "https://raw.githubusercontent.com/Cubelelo-admin/XSkills/main/globe.png"
  },
  {
    title: "Over 10,000 Active Learners",
    description: "Join the most energetic network of speedcubers across the country.",
    image: "https://raw.githubusercontent.com/Cubelelo-admin/XSkills/main/learners.png"
  },
  {
    title: "From India’s No. 1 Puzzle Store",
    description: "Brought to you by Cubelelo, the premier household name for cubes and speed equipment.",
    image: "https://raw.githubusercontent.com/Cubelelo-admin/XSkills/main/store.png"
  },
  {
    title: "Trusted by Over 1 Million Cubers Worldwide",
    description: "Our cubes and tutorials serve top-class players across all cities.",
    image: "https://raw.githubusercontent.com/Cubelelo-admin/XSkills/main/trusted.png"
  },
  {
    title: "Delivering Joy to Cubers for 10 Years",
    description: "A decade of experience fueling speedcubing championships and digital learning.",
    image: "https://raw.githubusercontent.com/Cubelelo-admin/XSkills/main/happiness.png"
  }
];

export const PLANS: PlanCard[] = [
  {
    title: "Beginner Plan",
    price: "FREE",
    originalPrice: null,
    features: [
      { text: "Learn to Solve 3x3 (Beginner Method)", included: true },
      { text: "Learn 2x2 Basic Methods", included: true },
      { text: "Learn 4x4 Standard Edge Reduction", included: true },
      { text: "Learn 5x5 Basics", included: true },
      { text: "Learn One Handed Solving Introductions", included: true }
    ]
  },
  {
    title: "Intermediate Plan",
    price: "₹999",
    originalPrice: "₹1999",
    isPopular: true,
    features: [
      { text: "All Modules of the Beginner Course", included: true },
      { text: "Learn CFOP Method (Intuitive F2L, 4LLL, 2-Look OLL/PLL) in 3x3", included: true },
      { text: "Learn Yau Method in 4x4 for faster speeds", included: true },
      { text: "Learn Ortega Method in 2x2 corners solve", included: true },
      { text: "Learn Free Slice Method for Edge Pairing in 5x5", included: true },
      { text: "Learn Faster Technique at 3x3 One Handed", included: true },
      { text: "Community Channels Premium Access", included: true },
      { text: "Get multiple Detailed Walkthrough Solves", included: true },
      { text: "Get multiple Cheat Sheets and algorithm guides", included: true },
      { text: "WCA Tournament Rules & prep handbook", included: true }
    ]
  },
  {
    title: "Advanced Plan",
    price: "₹2999",
    originalPrice: "₹4999",
    features: [
      { text: "All Modules of Intermediate Course included", included: true },
      { text: "Advanced CFOP Techniques (reach sub-30 on 3x3 easily)", included: true },
      { text: "Introduction to SubSets & Collapsibles", included: true },
      { text: "Additional 3x3 Elite Module to become PRO Cuber", included: true },
      { text: "Learn CLL and EG-1 Methods in 2x2", included: true },
      { text: "Tips for Advanced 4x4 Solving shortcuts", included: true },
      { text: "Tips for Advanced 5x5 Solving shortcuts", included: true },
      { text: "Tips for Advanced 3x3 OH Solving (finger execution)", included: true },
      { text: "Get Advanced Walkthrough Solves", included: true },
      { text: "Get Advanced Premium Cheat Sheets and PDFs", included: true },
      { text: "VIP Community & Priority Mentor feedback", included: true }
    ]
  }
];

export const SYLLABUS: Record<string, SyllabusAccord[]> = {
  beginner: [
    {
      title: "3x3 Layer-by-Layer Mastery",
      items: [
        "Notations and Structure of 3x3 (Face rotation vocabulary)",
        "Learn Layer by Layer Method (Cross, Corners, Second Layer, Top Cross)",
        "Special Cases & Parity Covered",
        "Optimizing Beginners Method for sub-60 solves",
        "2 Detailed Walkthrough Solves",
        "2 Printable Cheat Sheets for Beginners"
      ]
    },
    {
      title: "2x2 Pocket Cube Fundamentals",
      items: [
        "Understanding 2x2 notations and layers",
        "Layer-by-layer intuitive corner arrangement",
        "First layer positioning and base orientation algorithms",
        "Solving the top layer and standard parities",
        "Beginners guide and cheat sheet for 2x2"
      ]
    },
    {
      title: "4x4 Revenge Cube - Reduction",
      items: [
        "Introduction to big cubes notation, face centers",
        "How to build the 6 face centers safely",
        "Edge pairing: standard 3-2-3 grouping",
        "Reducing the 4x4 into a virtual 3x3 layout",
        "OLL Parity and PLL Parity algorithms with walkthrough walkthroughs"
      ]
    },
    {
      title: "5x5 Professor's Cube Basics",
      items: [
        "Structure of 5 centres and edge parts",
        "Building absolute centers (3x3 blocks on each side)",
        "Standard edge matching techniques",
        "Virtual 3x3 reduction and solving tips",
        "Walkthrough solve demonstrating safe moves"
      ]
    },
    {
      title: "3x3 One Handed Basics",
      items: [
        "How to comfortably hold the cube with one hand",
        "Standard table starts and corner grip positions",
        "Basic trigger movements using pinky and ring fingers",
        "Solving the first layer with one hand",
        "Basic algorithm adaptations for OH"
      ]
    }
  ],
  intermediate: [
    {
      title: "3x3 Speed Solving (CFOP Method)",
      items: [
        "Intro to CFOP: Cross on bottom (intuitive, under 8 moves)",
        "First Two Layers (F2L): Intuitive corner+edge pair slots",
        "2-Look OLL (Orientation of Last Layer): 10 quick algorithms",
        "2-Look PLL (Permutation of Last Layer): 6 quick algorithms",
        "Developing fluent look-ahead during cross to F2L transitions"
      ]
    },
    {
      title: "2x2 Ortega Method (Sub-5 speed)",
      items: [
        "Ortega overview: building a face instead of a layer",
        "Orienter top face regardless of bottom layers",
        "PBL (Permutation of Both Layers) - The 5 primary cases",
        "Optimizing finger trick grips on 2x2",
        "Walkthroughs of sub-5 second Ortega solves"
      ]
    },
    {
      title: "4x4 Yau Method (The Modern Way)",
      items: [
        "Why Yau is faster: first 3 cross edges on bottom",
        "Pairing remaining centers without breaking bottom edges",
        "Last cross edge insertion to establish permanent bottom slot",
        "Completing 3x3 stage on the face without visual blockades",
        "Advanced tip for recognizing parities on the fly"
      ]
    },
    {
      title: "5x5 Free Slice Method",
      items: [
        "Solving first 8 edges using slice-flip-slice and storage",
        "Solving the final 4 edges on the top layer without center damage",
        "L2E (Last Two Edges) parity solutions",
        "Improving center-building speed with look-ahead",
        "Detailed walkthrough showing efficient free-slice saves"
      ]
    }
  ],
  advanced: [
    {
      title: "3x3 Advanced CFOP & Sub-15 Road",
      items: [
        "Advanced F2L: Back-slot insertions and empty slot usage",
        "Full OLL (Orientation): All 57 algorithms with optimal trigger sheets",
        "Full PLL (Permutation): All 21 algorithms with speed finger tricks",
        "Cross planning: planning into the first F2L pair during blind inspection",
        "Look-ahead drills: continuous turning without pause"
      ]
    },
    {
      title: "2x2 Advanced CLL & EG-1",
      items: [
        "CLL: Solve the top layer and orient corners simultaneously",
        "EG-1: Solving when the bottom layer has adjacent swapped corners",
        "Grip transition shortcuts and predicting orientation before first turn",
        "Walkthroughs of sub-3 second solves"
      ]
    },
    {
      title: "4x4 & 5x5 Elite Techniques",
      items: [
        "Yau advanced: planning first 3 edges in inspection",
        "Multi-pairing center techniques for 5x5",
        "Special algorithm skips and intuitive edge placements",
        "Solving parities inside standard PLL triggers to save fractions of seconds"
      ]
    },
    {
      title: "3x3 One Handed Professional Flicks",
      items: [
        "RU and LU table turning efficiency",
        "OH algorithm set: optimized triggers for OLL/PLL on one hand",
        "Developing pinky strength for fast bottom layer flicking",
        "Dual-hand transition solutions for WCA competitions"
      ]
    }
  ]
};

export const MILESTONES: Milestone[] = [
  { value: "50+ Hours", label: "of interactive high-quality courseware" },
  { value: "15+ Events", label: "online cubing events every month" },
  { value: "10,000+ Students", label: "guided from beginner to elite speedcubers" },
  { value: "1.2 Million", label: "happy cubers served globally for over a decade" }
];
