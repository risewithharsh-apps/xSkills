import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Roadmap } from "./components/Roadmap";
import { Syllabus } from "./components/Syllabus";
import { PromoBanner } from "./components/PromoBanner";
import { Mentors } from "./components/Mentors";
import Pricing from "./components/Pricing";
import { Milestones } from "./components/Milestones";
import { WhyCubelelo } from "./components/WhyCubelelo";
import { Testimonials } from "./components/Testimonials";
import { FAQs } from "./components/FAQs";
import { FreeTrial } from "./components/FreeTrial";
import { QuizModal } from "./components/QuizModal";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { TermsOfService } from "./components/TermsOfService";
import { AlertCircle, ChevronRight, Puzzle } from "lucide-react";
import { ShopifyImage } from "./components/ShopifyImage";

export default function App() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [currentView, setCurrentView] = useState<"landing" | "privacy" | "terms">("landing");
  const [hideStickyBar, setHideStickyBar] = useState(false);

  useEffect(() => {
    if (currentView !== "landing") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHideStickyBar(entry.isIntersecting);
      },
      {
        threshold: 0.02,
      }
    );

    const target = document.getElementById("coursePlan");
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [currentView]);

  const handleOpenQuiz = () => {
    setIsQuizOpen(true);
  };

  const handleScrollToSection = (elementId: string) => {
    if (elementId === "top") {
      setCurrentView("landing");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (currentView !== "landing") {
      setCurrentView("landing");
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 80);
    } else {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <div className="relative w-full overflow-x-hidden min-h-screen flex flex-col justify-between selection:bg-brand-purple/20">
      
      {/* Top Floating Mobile Sticky Alert Bar (Fixed bottom for mobile CTA optimization) - Only visible on landing */}
      {currentView === "landing" && !hideStickyBar && (
        <div className="fixed bottom-0 sm:bottom-auto sm:top-0 left-0 w-full bg-brand-purple text-white h-[60px] flex items-center justify-between px-4 sm:px-6 z-[100] shadow-2xl border-t sm:border-t-0 sm:border-b border-white/10 sm:hidden">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-brand-orange animate-bounce" />
            <span className="text-xs sm:text-sm font-bold tracking-wide">
              Hurry, limited slots available!
            </span>
          </div>
          <button
            onClick={() => handleScrollToSection("coursePlan")}
            className="bg-brand-orange hover:bg-brand-orange/95 text-white text-xs font-extrabold px-4 py-2 rounded-lg transition-all flex items-center gap-1 cursor-pointer select-none"
          >
            <span>Enroll Now</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Sticky Brand Navigation */}
      <Navbar onOpenQuiz={handleOpenQuiz} onScrollToSection={handleScrollToSection} />

      {currentView === "landing" ? (
        <>
          {/* Hero Video & Feature Bento Section */}
          <Hero onOpenQuiz={handleOpenQuiz} />

          {/* Core Mastery Timeline */}
          <Roadmap />

          {/* Multi-tier Syllabus Module Syllabus Accordions */}
          <Syllabus />

          {/* Dynamic Diagnostic Prompt Onboarding banner */}
          <PromoBanner onOpenQuiz={handleOpenQuiz} />

          {/* Mentor Credentials Flex Cards */}
          <Mentors />

          {/* Showcase Grid (Why Choose, The Cubelelo Effect) */}
          <Features />

          {/* Course Pricing details */}
          <Pricing />

          {/* Why xSkills by Cubelelo */}
          <WhyCubelelo />

          {/* Interactive Milestones Metrics grid */}
          <Milestones />

          {/* Achievers & Parents Reviews masonry blocks */}
          <Testimonials />

          {/* Free Trial Banner */}
          <FreeTrial />

          {/* Collapsible FAQ accordions */}
          <FAQs />
        </>
      ) : currentView === "privacy" ? (
        /* Privacy Policy View */
        <PrivacyPolicy
          onBack={() => {
            setCurrentView("landing");
            window.scrollTo({ top: 0, behavior: "instant" });
          }}
        />
      ) : (
        /* Terms of Service View */
        <TermsOfService
          onBack={() => {
            setCurrentView("landing");
            window.scrollTo({ top: 0, behavior: "instant" });
          }}
        />
      )}

      {/* Standard Footer */}
      <footer className="w-full bg-[#f1f3f5] py-12 px-4 md:px-8 border-t border-slate-200/60 z-10 animate-fade-in">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center sm:items-start gap-1">
            <div className="h-[40px] px-3 py-1 bg-brand-purple rounded-xl shadow-md shadow-brand-purple/15 flex items-center justify-center">
              <ShopifyImage
                src="https://raw.githubusercontent.com/Cubelelo-admin/XSkills/main/logo-new%20(1)%20(1).png"
                alt="xSkills Logo"
                className="h-[22px] object-contain filter brightness-105"
                fallbackType="icon"
              />
            </div>
            <div className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase pl-1 mt-0.5">
              Brought to you by Cubelelo
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-500 font-medium">
            <button
              onClick={() => {
                setCurrentView("privacy");
                window.scrollTo({ top: 0, behavior: "instant" });
              }}
              className="hover:text-brand-purple transition-colors cursor-pointer font-semibold"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => {
                setCurrentView("terms");
                window.scrollTo({ top: 0, behavior: "instant" });
              }}
              className="hover:text-brand-purple transition-colors cursor-pointer font-semibold"
            >
              Terms of Service
            </button>
            <a href="mailto:support@cubelelo.com" className="hover:text-brand-purple transition-colors">support@cubelelo.com</a>
          </div>

          <p className="text-xs text-slate-400 font-semibold">
            &copy; {new Date().getFullYear()} Cubelelo. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Level assessment quiz popup */}
      <QuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onSelectPlan={(planName) => {
          handleScrollToSection("coursePlan");
          // Optionally add a subtle toast or auto-scroll directly
        }}
      />
    </div>
  );
}
