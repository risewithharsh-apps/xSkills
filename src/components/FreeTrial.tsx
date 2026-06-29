import React from "react";
import { ChevronRight } from "lucide-react";
import { ShopifyImage } from "./ShopifyImage";

export const FreeTrial: React.FC = () => {
  return (
    <section id="freeTrial" className="px-4 py-8 md:px-8 w-full max-w-5xl mx-auto my-12 scroll-mt-[60px] md:scroll-mt-[100px]">
      <div className="relative bg-brand-purple rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between shadow-2xl border border-brand-purple/20 gap-8 min-h-[220px]">
        {/* Background Accent grids */}
        <div className="absolute top-[-30px] right-[-30px] w-48 h-48 bg-white/[0.02] rounded-full pointer-events-none" />

        {/* Text details & CTA Button */}
        <div className="flex-1 space-y-6 z-10 text-center md:text-left max-w-xl sm:pr-48 md:pr-64">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3.5xl font-black text-white leading-tight font-display">
              Your speedcubing <br className="hidden sm:inline" />
              <span className="text-brand-orange font-black">journey starts here!</span>
            </h2>
            <p className="text-xs md:text-sm text-white/80 leading-relaxed font-sans max-w-md">
              Get instant access to 3 beginner chapters, notation cheat-sheets, and 1 WCA walkthrough totally free. No registration credit card required.
            </p>
          </div>

          <div className="flex justify-center md:justify-start">
            <button
              onClick={() => window.location.href = "https://app.xskills.cubelelo.com/checkout/ProductBundle/57?utm_source=beginner&utm_medium=in&utm_campaign=xskills-enroll"}
              className="w-full sm:w-auto bg-brand-orange text-white hover:bg-brand-orange/95 px-8 py-3.5 rounded-xl font-extrabold text-sm tracking-wide shadow-lg shadow-brand-orange/30 transition-all flex items-center justify-center gap-2 select-none cursor-pointer group shrink-0"
            >
              <span>Take a Free Trial</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Image loader with fallback aligned perfectly to the right and bottom edge, protruding from the top */}
        <div className="hidden sm:block absolute right-0 bottom-0 top-[-48px] md:top-[-72px] w-[230px] md:w-[320px] pointer-events-none overflow-hidden rounded-br-3xl">
          <ShopifyImage
            src="https://raw.githubusercontent.com/Cubelelo-admin/XSkills/main/free-trial.png"
            alt="Free Trial Speedcubing Starter Onboarding"
            className="absolute bottom-0 right-0 h-full w-full object-contain object-bottom pointer-events-none scale-105"
            fallbackType="icon"
          />
        </div>
      </div>
    </section>
  );
};
export default FreeTrial;
