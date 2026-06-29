import React from "react";
import { Award, Zap, Compass, Star, ChevronRight } from "lucide-react";
import { ShopifyImage } from "./ShopifyImage";

export const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className="pt-10 pb-16 md:py-16 px-4 md:px-8 bg-white flex flex-col items-center overflow-hidden">
      <div className="w-full max-w-5xl">
        {/* Title */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-black text-slate-800 tracking-tight font-display flex flex-wrap justify-center gap-2">
            Roadmap of <span className="text-brand-orange">Mastery</span>
          </h2>
          <p className="text-sm text-slate-500 mt-2 max-w-md mx-auto">
            From picking up a cube for the first time to shaving seconds off on the stage, we guide you at every solve transition.
          </p>
        </div>

        {/* Tree Path Layout */}
        <div className="relative flex flex-col items-center">
          {/* Straight vertical grey dotted learning pathway connecting the three course images */}
          <svg className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-16 h-full pointer-events-none z-0" viewBox="0 0 64 100" preserveAspectRatio="none">
            {/* Upper line segment (between Node 1 and Node 2) */}
            <line
              x1="32"
              y1="22"
              x2="32"
              y2="43"
              stroke="#94a3b8"
              strokeWidth="4"
              strokeDasharray="6,8"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              opacity="0.3"
            />
            {/* Lower line segment (between Node 2 and Node 3) */}
            <line
              x1="32"
              y1="57"
              x2="32"
              y2="81"
              stroke="#94a3b8"
              strokeWidth="4"
              strokeDasharray="6,8"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              opacity="0.3"
            />
          </svg>

          {/* Node 1: Beginner (Left alignment) */}
          <div className="w-full flex flex-col md:flex-row items-center justify-between mb-12 relative z-10 gap-6">
            <div className="w-full md:w-[45%] text-center md:text-right flex flex-col items-center md:items-end p-5 bg-slate-50 rounded-2xl border border-slate-100/80 shadow-sm relative">
              {/* Mobile-only badge at top right corner */}
              <div className="absolute top-3 right-3 w-8 h-8 md:hidden">
                <ShopifyImage
                  src="https://raw.githubusercontent.com/Cubelelo-admin/XSkills/main/beginner.png"
                  alt="Beginner icon"
                  className="w-full h-full object-contain"
                  fallbackType="icon"
                />
              </div>

              <span className="text-xs font-bold text-brand-purple uppercase tracking-wider bg-brand-purple/10 px-2.5 py-1 rounded-full font-display">
                Level 01
              </span>
              <h3 className="text-xl md:text-2xl font-black text-brand-purple font-display mt-2">
                Beginner Course
              </h3>
              <p className="text-xs md:text-sm text-slate-500 mt-2 leading-relaxed max-w-sm">
                Understand the core notations, face movements, and Layer-by-Layer algorithms. You will solve your first 3x3, 2x2 and 4x4 from scratch in no time.
              </p>
            </div>

            {/* Shield Center Icon */}
            <div className="hidden md:block w-16 h-16 flex-shrink-0">
              <ShopifyImage
                src="https://raw.githubusercontent.com/Cubelelo-admin/XSkills/main/beginner.png"
                alt="Beginner icon"
                className="w-full h-full object-contain"
                fallbackType="icon"
              />
            </div>

            <div className="hidden md:block w-[45%]" />
          </div>

          {/* Node 2: Intermediate (Right alignment) */}
          <div className="w-full flex flex-col md:flex-row-reverse items-center justify-between mb-12 relative z-10 gap-6">
            <div className="w-full md:w-[45%] text-center md:text-left flex flex-col items-center md:items-start p-5 bg-slate-50 rounded-2xl border border-slate-100/80 shadow-sm relative">
              {/* Mobile-only badge at top right corner */}
              <div className="absolute top-3 right-3 w-8 h-8 md:hidden">
                <ShopifyImage
                  src="https://raw.githubusercontent.com/Cubelelo-admin/XSkills/main/intermediate.png"
                  alt="Intermediate icon"
                  className="w-full h-full object-contain"
                  fallbackType="icon"
                />
              </div>

              <span className="text-xs font-bold text-brand-orange uppercase tracking-wider bg-brand-orange/10 px-2.5 py-1 rounded-full font-display">
                Level 02
              </span>
              <h3 className="text-xl md:text-2xl font-black text-brand-orange font-display mt-2">
                Intermediate Course
              </h3>
              <p className="text-xs md:text-sm text-slate-500 mt-2 leading-relaxed max-w-sm">
                Master the speed-cubing CFOP method intuitively. Understand F2L slotting, 2-look OLL/PLL controls, 4x4 Yau cross-matching, and Ortega 2x2.
              </p>
            </div>

            {/* Shield Center Icon */}
            <div className="hidden md:block w-16 h-16 flex-shrink-0">
              <ShopifyImage
                src="https://raw.githubusercontent.com/Cubelelo-admin/XSkills/main/intermediate.png"
                alt="Intermediate icon"
                className="w-full h-full object-contain"
                fallbackType="icon"
              />
            </div>

            <div className="hidden md:block w-[45%]" />
          </div>

          {/* Node 3: Advanced & Elite (Left alignment) */}
          <div className="w-full flex flex-col md:flex-row items-center justify-between relative z-10 gap-6">
            <div className="w-full md:w-[45%] text-center md:text-right flex flex-col items-center md:items-end p-5 bg-slate-50 rounded-2xl border border-slate-100/80 shadow-sm relative">
              {/* Mobile-only badge at top right corner */}
              <div className="absolute top-3 right-3 w-8 h-8 md:hidden">
                <ShopifyImage
                  src="https://raw.githubusercontent.com/Cubelelo-admin/XSkills/main/advanced.png"
                  alt="Advanced icon"
                  className="w-full h-full object-contain"
                  fallbackType="icon"
                />
              </div>

              <span className="text-xs font-bold text-amber-500 uppercase tracking-wider bg-amber-500/10 px-2.5 py-1 rounded-full font-display">
                Level 03
              </span>
              <h3 className="text-xl md:text-2xl font-black text-amber-600 font-display mt-2">
                Advanced & Elite Course
              </h3>
              <p className="text-xs md:text-sm text-slate-500 mt-2 leading-relaxed max-w-sm">
                Where speed meets precision, and champions are made. Plan your cross in inspection, learn full 57 OLL/21 PLL formulas, CLL/EG-1 and sub-10 secrets.
              </p>
            </div>

            {/* Shield Center Icon */}
            <div className="hidden md:block w-16 h-16 flex-shrink-0">
              <ShopifyImage
                src="https://raw.githubusercontent.com/Cubelelo-admin/XSkills/main/advanced.png"
                alt="Advanced icon"
                className="w-full h-full object-contain"
                fallbackType="icon"
              />
            </div>

            <div className="hidden md:block w-[45%]" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Roadmap;
