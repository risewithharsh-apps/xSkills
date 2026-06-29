import React, { useState } from "react";
import { ChevronDown, CheckCircle2, Star, Trophy, Sparkles } from "lucide-react";
import { SYLLABUS } from "../data";
import { motion, AnimatePresence } from "motion/react";

export const Syllabus: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"beginner" | "intermediate" | "advanced">("beginner");
  const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(() => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      return null;
    }
    return 0;
  });

  const tabs = [
    { id: "beginner" as const, label: "Beginner", icon: Star },
    { id: "intermediate" as const, label: "Intermediate", icon: SpeedIcon },
    { id: "advanced" as const, label: "Advanced", icon: Trophy }
  ];

  function SpeedIcon() {
    return <Sparkles className="w-4 h-4" />;
  }

  const handleToggle = (index: number) => {
    setOpenAccordionIndex(openAccordionIndex === index ? null : index);
  };

  const currentSyllabus = SYLLABUS[activeTab] || [];

  return (
    <section id="curriculum" className="w-[100%] scroll-mt-[60px] md:scroll-mt-[100px] pt-10 pb-6 md:py-16 px-4 md:px-8 bg-slate-50 flex flex-col items-center">
      <div className="w-full max-w-4xl">
        
        {/* Title Block */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-black text-slate-800 tracking-tight font-display flex flex-wrap justify-center gap-2">
            Course <span className="text-brand-orange">Curriculum</span>
          </h2>
          <p className="text-sm text-slate-500 mt-2 max-w-md mx-auto">
            Choose your starting level and explore the modules structured to advance your solve speeds.
          </p>
        </div>

        {/* Tab Switcher Headers */}
        <div className="flex justify-center mb-10">
          <div className="flex flex-row p-1.5 bg-brand-purple rounded-2xl w-full sm:w-auto shadow-lg max-w-xl">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setOpenAccordionIndex(typeof window !== "undefined" && window.innerWidth < 768 ? null : 0); // auto-open first accordion in new tab unless on mobile
                  }}
                  className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 sm:px-8 py-3 text-sm md:text-base font-bold rounded-xl transition-all cursor-pointer ${
                    isActive
                      ? "bg-brand-orange text-white shadow-md shadow-brand-orange/15"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span className="hidden sm:inline-block">
                    <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-white/70"}`} />
                  </span>
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Accordions Content */}
        <div className="space-y-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-4"
            >
              {currentSyllabus.map((module, index) => {
                const isOpen = openAccordionIndex === index;
                return (
                  <div
                    key={index}
                    className="border-2 border-brand-purple/15 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    {/* Accordion Trigger */}
                    <button
                      onClick={() => handleToggle(index)}
                      className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-800 hover:bg-[#fafbfc] transition-colors gap-4"
                    >
                      <span className="text-[14px] md:text-lg font-display text-brand-purple font-bold">
                        {module.title}
                      </span>
                      <div className={`p-1 rounded-lg bg-brand-purple/5 text-brand-purple transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </button>

                    {/* Accordion Content Panel */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="p-5 pt-1 border-t border-slate-100 bg-[#fbfbfe]">
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pl-2 py-3">
                              {module.items.map((item, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-2.5 text-sm md:text-base text-slate-600 leading-relaxed font-medium"
                                >
                                  <div className="mt-1 flex-shrink-0 text-brand-orange">
                                    <CheckCircle2 className="w-5 h-5 fill-brand-orange/10 stroke-[2]" />
                                  </div>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
export default Syllabus;
