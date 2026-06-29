import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS_DATA: FAQItem[] = [
  {
    question: "What are the core objectives of this program?",
    answer: "The objective is to guide you from matching absolute beginner methodologies to applying professional speedcubing principles like the Yau Method for 4x4, Ortega for 2x2, and the full CFOP framework for 3x3, enabling you to break personal solve records reliably."
  },
  {
    question: "Do I need to have a high IQ or natural talent before taking this course?",
    answer: "Absolutely not! Speedcubing is a procedural skill based on logic, pattern recognition, and muscle memory. Our mentors break down complex algorithms into simple, memorizable drills that anyone of any age can learn with active practice."
  },
  {
    question: "Are there any prerequisites for enrolling in this program?",
    answer: "None! The Beginner Course starts completely from scratch—no prior cubing knowledge required. For intermediate and advanced tiers, some familiarity with standard 3x3 solving notations is helpful but not mandatory, as we provide walkthrough cheat sheets."
  },
  {
    question: "How and where do I access my course materials?",
    answer: "Once enrolled, you receive life-time logging access to the xSkills Learning Management System (LMS) where you can stream on-demand tutorial videos, check interactive formulas, and download cheat-sheet PDFs at your own pace."
  },
  {
    question: "Why should I learn here instead of directly from YouTube?",
    answer: "While YouTube has many videos, they are highly scattered and often present conflicting finger layouts. xSkills provides a seamless step-by-step masterclass curated directly by National Record Holders. You get standard exercises, structured cheat sheets, clear progression testing, and exclusive access to our active solver community."
  },
  {
    question: "Are there any certifications offered upon completion?",
    answer: "Yes! Every student receives a certificate of completion from xSkills by Cubelelo after finishing all learning milestones and algorithm submissions."
  }
];

export const FAQs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="pt-10 pb-16 md:py-16 px-4 bg-slate-50 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        {/* Title */}
        <div className="text-center mb-8 md:mb-12">
          <span className="text-xs font-bold text-brand-purple uppercase tracking-wider bg-brand-purple/10 px-2.5 py-1 rounded-full font-display">
            Have Questions?
          </span>
          <h2 className="text-2xl md:text-4xl font-black text-slate-800 tracking-tight font-display mt-3 flex flex-wrap justify-center gap-2">
            Frequently Asked <span className="text-brand-orange">Questions</span>
          </h2>
        </div>

        {/* FAQ list */}
        <div className="space-y-4">
          {FAQS_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xs border border-slate-100 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-800 hover:bg-[#fafbfc] transition-colors gap-4"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-brand-purple/40 flex-shrink-0" />
                    <span className="text-sm md:text-base font-display hover:text-brand-purple">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`p-1 rounded-lg bg-brand-purple/5 text-brand-purple transition-transform duration-300 ${isOpen ? "rotate-Rotate" : ""}`} style={{ transform: isOpen ? 'rotate(180deg)' : 'none' }}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 pt-0 border-t border-slate-50 text-slate-600 text-xs md:text-sm leading-relaxed font-medium pl-14">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default FAQs;
