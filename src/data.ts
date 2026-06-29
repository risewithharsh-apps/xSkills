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
    answer: "The goal of this program is simple: to help you unlock the cube at any level. We start by taking the mystery out of the Rubik's cube, giving beginners a foolproof foundation and the confidence to solve it on their own. From there, our Intermediate and Advanced modules are designed to help you step up your game from basic to elite - cutting out unnecessary moves, boosting your turning speed, and turning you into a true speedcuber."
  },
  {
    id: "faq-2",
    question: "Do I need to have a strong IQ before taking this course?",
    answer: "Absolutely not! Speedcubing is not about genetic IQ; it is about pattern recognition, algorithms, and muscle memory. Our structured modules teach these concepts in step-by-step videos so that anyone can learn and excel, regardless of starting background."
  },
  {
    id: "faq-3",
    question: "What are the prerequisites for enrolling in this program?",
    answer: "Don't worry about hitting a wall - there's a starting point for everyone! If you're picking up a cube for the first time, our Beginner tier requires zero experience. If you can already solve it and know your basic face turns, you're ready for Intermediate. For the Advanced masterclass, you just need a strong foundation in intermediate methods and a willingness to practice hard to push your times lower."
  },
  {
    id: "faq-4",
    question: "How long are the courses valid for?",
    answer: "Your access stays active for 1 full year from the date of purchase. No rush at all - you can learn, practice, and rewatch the walkthroughs whenever it fits your schedule."
  },
  {
    id: "faq-5",
    question: "Why I should not learn directly from YouTube and opt for your program?",
    answer: "YouTube is amazing, but it's a double-edged sword. You can easily waste hours getting lost in a sea of disjointed videos, conflicting advice, and algorithms that aren't meant for your specific skill level. Our program cuts out the noise. Designed by speedcubing experts, it gives you a structured, step-by-step roadmap. Instead of endlessly scrolling and guessing what to learn next, you get a clear, linear path that takes you from where you are to exactly where you want to be - saving you months of frustration."
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
      title: "3x3 Cube - The Classic Cube",
      items: [
        "Notations and Structure of 3x3",
        "Learn Layer by Layer Method",
        "Special Cases and Common Mistakes Covered",
        "Optimizing Beginners Method (Sub-2 Min Prep)",
        "2 Walkthrough Solves",
        "2 Cheat Sheets for Beginners"
      ]
    },
    {
      title: "2x2 Cube - The Pocket Cube",
      items: [
        "Notations and Structural Differences (2x2 vs 3x3)",
        "Solving 2x2 using Layer by Layer Method",
        "1 Walkthrough Solve",
        "1 Cheat Sheet"
      ]
    },
    {
      title: "4x4 Cube - The Master Cube",
      items: [
        "Notations and Structural Differences (3x3 vs 4x4)",
        "Solving Centers and Edges (Reduction Method)",
        "Parity and 3x3 Stage Solving",
        "1 Walkthrough Solve",
        "1 Cheat Sheet"
      ]
    },
    {
      title: "5x5 Cube - The Professor's Cube",
      items: [
        "Structural Differences (5x5 vs 4x4 vs 3x3)",
        "Solving Centers and Edges",
        "Last 4 Edges (L4E) Cases","1 Walkthrough Solve",
        "1 Cheat Sheet"
      ]
    },
    {
      title: "3x3 One Handed Basics",
      items: [
        "About 3x3 One-Handed and Basic Rules",
        "One Hand Solving Ergonomics Explained",
        "Finger Triggers and Muscle Memory",
        "1 Cheat Sheet"
      ]
    }
  ],
  intermediate: [
    {
      title: "3x3 Speedcubing",
      items: [
        "All Modules of Beginner Course",
        "Advanced Notations and Fingertricks (Boost TPS)",
        "Cross on Bottom Tips and Example Solves",
        "F2L Introduction (First 2 Layers Simultaneously)",
        "4-Look Last Layer (2 Look OLL and 2 Look PLL)",
        "5 Example Solves",
        "Efficiently Solving F2L Cases (No Regrips)",
        "Tips on Look-Ahead, TPS, and Turning Speed",
        "Learn Full OLL and Full PLL (78 Algs Roadmap)",
        "5 Walkthrough Solves",
        "4 Cheat Sheets"
      ]
    },
    {
      title: "2x2 Speedcubing",
      items: [
        "All Modules of Beginner Course",
        "Ortega Method: Solving One Face",
        "Ortega Method: Top Layer & Both Layers Permutation",
        "3 Walkthrough Solves",
        "Optimizing Ortega and Inspection Tips",
        "5 Walkthrough Solves",
        "1 Cheat Sheet"
      ]
    },
    {
      title: "4x4 Speedcubing",
      items: [
        "All Modules of Beginner Course",
        "Introduction to Yau Method (Pro Standard)",
        "First Centers and Cross Edges",
        "Last 4 Centers and Last 4 Edges",
        "3-2-3 Edge Pairing and Annoying Cases",
        "High-Speed Parity Execution",
        "2 Walkthrough Solves",
        "1 Cheat Sheet"
      ]
    },
    {
      title: "5x5 Speedcubing",
      items: [
        "All Modules of Beginner Course",
        "Centers Efficiency (Fewer Moves)",
        "Freeslice Method for Edge Pairing",
        "Edges and 3x3 Stage Transition",
        "1 Walkthrough Solve",
        "1 Cheat Sheet"
      ]
    },
    {
      title: "3x3 One-Handed Speedcubing",
      items: [
        "All Modules of Beginner Course",
        "One-Handed Cross Solutions",
        "Look-Ahead Techniques to Get Faster at F2L",
        "Last Layer Algorithms for OH",
        "Color Neutrality Introduction",
        "5 Walkthrough Solves"
      ]
    }
  ],
  advanced: [
    {
      title: "3x3 Masterclass (Sub-15 Focus)",
      items: [
        "All Modules of Intermediate Course",
        "Advanced Cross Solving with Examples",
        "Inspecting Cross + 1st F2L Pair",
        "Efficient Solution for all F2L Cases (Rotationless)",
        "Introduction to Keyhole Technique",
        "How to Build an X-Cross",
        "Improve F2L Selection and Efficiency",
        "Optimizing Cube Rotations",
        "Intro to Subsets (COLL, WV, VLS, ZBLL, ZBLS & OLL CP)",
        "5 Advanced Walkthrough Solves",
        "5 Cheat Sheets"
      ]
    },
    {
      title: "3x3 Elite (Sub-10 Blueprint)",
      items: [
        "All Modules of Advanced Course",
        "Optimizing Keyhole & Multislotting",
        "Pseudo-Slotting Tactics",
        "Elite Fingertricks: 2-gen F",
        "JSS (Jayden's Second Slot)",
        "Reducing Transition Times (Zero Dead Time)",
        "Edge Orientation (EO) + ZBLL",
        "10 Walkthrough Solves",
        "1 Pro Reference Sheet"
      ]
    },
    {
      title: "2x2 Masterclass",
      items: [
        "All Modules of Intermediate Course",
        "Introduction to CLL Method & Fingertricks",
        "EG-1 Method (Solving from a Face)",
        "One-Looking Skill (Predicting the Entire Solve)",
        "AUF (Adjust Upper Layer) Prediction",
        "6 Advanced Walkthrough Solves",
        "1 Cheat Sheet"
      ]
    },
    {
      title: "4x4 Elite (Sub-30 Sprint)",
      items: [
        "All Modules of Intermediate Course",
        "Milestone Split Times Breakdown",
        "Tips for First 2 Centers & First 3 Cross Edges",
        "Tips for Last 4 Centers",
        "Edge Tips (Last 8 Edges & Last 2 Edge Cases)",
        "Transitions & Turning Fluidity",
        "Instant OLL Parity & PLL Parity Recognition",
        "3 Walkthrough Solves",
        "1 Cheat Sheet"
      ]
    },
    {
      title: "5x5 Masterclass",
      items: [
        "All Modules of Intermediate Course",
        "Shaving Seconds off First 2 & Last 4 Centers",
        "Shaving Seconds off First 8 Edges",
        "Flawless L4E (Last 4 Edges) Recognition",
        "High-TPS 3x3 Stage Close-out",
        "3 Walkthrough Solves"
      ]
    },
    {
      title: "3x3 One-Handed (Elite OH)",
      items: [
        "All Modules of Intermediate Course",
        "Advanced OH Fingertricks (Table & Pinky Moves)",
        "Advanced Cross Example Solves",
        "EO Influence (Orienting Edges During F2L)",
        "5 Walkthrough Solves"
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
