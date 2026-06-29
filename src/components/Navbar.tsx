import React, { useState, useEffect } from "react";
import { Menu, X, CircleUser } from "lucide-react";
import { ShopifyImage } from "./ShopifyImage";

interface NavbarProps {
  onOpenQuiz: () => void;
  onScrollToSection: (elementId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuiz, onScrollToSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const logoSrc = "https://raw.githubusercontent.com/Cubelelo-admin/XSkills/main/logo-new%20(1)%20(1).png";

  return (
    <nav className="h-[60px] md:h-[100px] w-full bg-brand-purple flex flex-row items-center justify-center fixed top-0 left-0 z-50 shadow-lg px-4 md:px-8 border-b border-brand-purple/20">
      <div className="w-full max-w-[1480px] h-full flex flex-row items-center justify-between">
        {/* Brand Logo & Slogan */}
        <div className="flex flex-row items-center gap-3">
          <div className="flex flex-col h-[45px] md:h-[65px] justify-center">
            <a href="#" className="block h-[70%]" onClick={(e) => { e.preventDefault(); onScrollToSection("top"); }}>
              <ShopifyImage
                src={logoSrc}
                alt="xSkills Logo"
                className="h-full object-contain filter brightness-105"
                fallbackType="icon"
              />
            </a>
            <div className="text-[9px] md:text-[11px] text-white/85 font-medium tracking-wide">
              Cubing courses by Cubelelo
            </div>
          </div>
        </div>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex flex-row items-center gap-8 ml-auto mr-8">
          <button
            onClick={() => onScrollToSection("curriculum")}
            className="text-base md:text-lg font-semibold text-white/90 hover:text-brand-orange transition-all cursor-pointer font-display"
          >
            Curriculum
          </button>
          <button
            onClick={onOpenQuiz}
            className="text-base md:text-lg font-semibold text-white/90 hover:text-brand-orange transition-all cursor-pointer font-display"
          >
            Self Quiz
          </button>
          <button
            onClick={() => onScrollToSection("coursePlan")}
            className="text-base md:text-lg font-semibold text-white/90 hover:text-brand-orange transition-all cursor-pointer font-display"
          >
            Course Plan
          </button>
        </div>

        {/* User / Action Buttons */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => window.location.href = "https://app.xskills.cubelelo.com/member/#/login"}
            className="text-white hover:text-brand-orange transition-colors p-2 rounded-full hover:bg-white/10 cursor-pointer"
            aria-label="User Account"
          >
            <CircleUser className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.5]" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="block md:hidden absolute top-[80px] left-0 w-full bg-brand-purple border-t border-brand-purple/20 shadow-xl z-40 transition-all duration-300">
          <div className="flex flex-col p-6 space-y-4 font-display">
            <button
              onClick={() => {
                onScrollToSection("curriculum");
                setIsMobileMenuOpen(false);
              }}
              className="text-left text-lg font-bold text-white hover:text-brand-orange transition-colors py-2 border-b border-white/5"
            >
              Course Curriculum
            </button>
            <button
              onClick={() => {
                onScrollToSection("coursePlan");
                setIsMobileMenuOpen(false);
              }}
              className="text-left text-lg font-bold text-white hover:text-brand-orange transition-colors py-2 border-b border-white/5"
            >
              Course Plans
            </button>
            <button
              onClick={() => {
                onOpenQuiz();
                setIsMobileMenuOpen(false);
              }}
              className="text-left text-lg font-bold text-brand-orange hover:text-white transition-colors py-2 border-b border-white/5"
            >
              Take Onboarding Quiz
            </button>
            <button
              onClick={() => {
                onScrollToSection("freeTrial");
                setIsMobileMenuOpen(false);
              }}
              className="text-left text-lg font-bold text-white hover:text-brand-orange transition-colors py-2"
            >
              Enroll FREE Trial
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
