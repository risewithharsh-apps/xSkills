import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { FAQs as faqsData } from "../data";

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
          {faqsData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id || index}
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
