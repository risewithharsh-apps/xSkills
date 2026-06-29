import React, { useState } from "react";
import { X, Award, ChevronRight, CheckCircle2, RotateCcw } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPlan: (planName: string) => void;
}

export const QuizModal: React.FC<QuizModalProps> = ({ isOpen, onClose, onSelectPlan }) => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    canSolve: "",
    avgTime: "",
    goals: ""
  });

  if (!isOpen) return null;

  const handleRestart = () => {
    setStep(1);
    setAnswers({ canSolve: "", avgTime: "", goals: "" });
  };

  const getRecommendation = () => {
    if (answers.canSolve === "no") {
      return {
        title: "Beginner Plan",
        tag: "Absolute Basics",
        desc: "You will master the standard 3x3, pocket 2x2, and standard center and reduction steps for big cubes, completely from scratch.",
        price: "FREE",
        target: "Beginner Plan"
      };
    }
    
    if (answers.avgTime === "under_30" || answers.goals === "elite") {
      return {
        title: "Advanced Plan",
        tag: "Elite Mastery",
        desc: "Focuses on advanced F2L cases, multi-slotting, look-ahead drills, full OLL/PLL algorithms, CLL/EG formats, and tournament preparation.",
        price: "₹2999",
        target: "Advanced Plan"
      };
    }

    return {
      title: "Intermediate Plan",
      tag: "Speedcuber Track",
      desc: "Perfect if you already solve but want to cross the sub-30 barrier with intuitive F2L, 4-Look OLL/PLL, Ortega 2x2, and 4x4 Yau methods.",
      price: "₹999",
      target: "Intermediate Plan"
    };
  };

  const recommendation = getRecommendation();

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs font-sans">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100"
      >
        {/* Header */}
        <div className="p-6 bg-brand-purple text-white flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold font-display">xSkills Level Finder</h3>
            <p className="text-xs text-white/80 mt-1">Discover your ideal road to speedcubing mastery</p>
          </div>
          <button 
            onClick={onClose}
            className="p-1 px-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 min-h-[250px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Question 1 of 3</div>
                <h4 className="text-lg font-bold text-slate-800">Can you currently solve a standard 3x3 Rubik's Cube?</h4>
                <div className="grid grid-cols-1 gap-3 pt-2">
                  <button
                    onClick={() => {
                      setAnswers(prev => ({ ...prev, canSolve: "yes" }));
                      setStep(2);
                    }}
                    className="flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-brand-purple hover:bg-brand-purple/5 transition-all text-left font-semibold text-slate-700"
                  >
                    <span>Yes, I can solve it!</span>
                    <ChevronRight className="w-5 h-5 text-brand-purple" />
                  </button>
                  <button
                    onClick={() => {
                      setAnswers(prev => ({ ...prev, canSolve: "no" }));
                      setStep(3); // skip time averaging since they can't solve
                    }}
                    className="flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-brand-purple hover:bg-brand-purple/5 transition-all text-left font-semibold text-slate-700"
                  >
                    <span>No, I'm an absolute beginner</span>
                    <ChevronRight className="w-5 h-5 text-brand-purple" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Question 2 of 3</div>
                <h4 className="text-lg font-bold text-slate-800">What is your typical average solve time?</h4>
                <div className="grid grid-cols-1 gap-3 pt-2">
                  <button
                    onClick={() => {
                      setAnswers(prev => ({ ...prev, avgTime: "above_90" }));
                      setStep(3);
                    }}
                    className="flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-brand-purple hover:bg-brand-purple/5 transition-all text-left font-semibold text-slate-700"
                  >
                    <span>Over 90 seconds (or layer-by-layer basics)</span>
                    <ChevronRight className="w-5 h-5 text-slate-400" />
                  </button>
                  <button
                    onClick={() => {
                      setAnswers(prev => ({ ...prev, avgTime: "30_90" }));
                      setStep(3);
                    }}
                    className="flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-brand-purple hover:bg-brand-purple/5 transition-all text-left font-semibold text-slate-700"
                  >
                    <span>30 to 90 seconds (Intermediate)</span>
                    <ChevronRight className="w-5 h-5 text-slate-400" />
                  </button>
                  <button
                    onClick={() => {
                      setAnswers(prev => ({ ...prev, avgTime: "under_30" }));
                      setStep(3);
                    }}
                    className="flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-brand-purple hover:bg-brand-purple/5 transition-all text-left font-semibold text-slate-700"
                  >
                    <span>Under 30 seconds (Advanced / Speedcuber)</span>
                    <ChevronRight className="w-5 h-5 text-slate-400" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Question 3 of 3</div>
                <h4 className="text-lg font-bold text-slate-800">What are your main velocity goals?</h4>
                <div className="grid grid-cols-1 gap-3 pt-2">
                  <button
                    onClick={() => {
                      setAnswers(prev => ({ ...prev, goals: "basics" }));
                      setStep(4);
                    }}
                    className="flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-brand-purple hover:bg-brand-purple/5 transition-all text-left font-semibold text-slate-700"
                  >
                    <span>Solve comfortably and teach family / friends</span>
                    <ChevronRight className="w-5 h-5 text-slate-400" />
                  </button>
                  <button
                    onClick={() => {
                      setAnswers(prev => ({ ...prev, goals: "sub_20" }));
                      setStep(4);
                    }}
                    className="flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-brand-purple hover:bg-brand-purple/5 transition-all text-left font-semibold text-slate-700"
                  >
                    <span>Reach Sub-20 second averages consistently</span>
                    <ChevronRight className="w-5 h-5 text-slate-400" />
                  </button>
                  <button
                    onClick={() => {
                      setAnswers(prev => ({ ...prev, goals: "elite" }));
                      setStep(4);
                    }}
                    className="flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-brand-purple hover:bg-brand-purple/5 transition-all text-left font-semibold text-slate-700"
                  >
                    <span>Master multiple big-puzzles & competitive tricks</span>
                    <ChevronRight className="w-5 h-5 text-slate-400" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-4 space-y-4"
              >
                <div className="inline-flex p-3 bg-green-100 text-green-600 rounded-full mb-2">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 font-display">Assessment Complete!</h4>
                <p className="text-sm text-slate-500 max-w-sm mx-auto">
                  Based on your solutions and goals, our head WCA mentors recommend enrolling in:
                </p>

                <div className="bg-brand-purple/5 border border-brand-purple/15 rounded-xl p-5 my-4 max-w-sm mx-auto text-left relative overflow-hidden">
                  <div className="absolute right-[-10px] top-[-10px] w-24 h-24 bg-brand-purple/5 rounded-full pointer-events-none" />
                  <span className="text-xs font-bold text-brand-orange uppercase tracking-wider bg-brand-orange/10 px-2.5 py-1 rounded-full">
                    {recommendation.tag}
                  </span>
                  <h5 className="text-lg font-bold text-slate-800 mt-2 font-display">{recommendation.title}</h5>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {recommendation.desc}
                  </p>
                  <div className="flex justify-between items-center mt-3 pt-3 border-t border-slate-100">
                    <span className="text-xs font-medium text-slate-400">Regular price:</span>
                    <span className="text-lg font-black text-brand-purple">{recommendation.price}</span>
                  </div>
                </div>

                <div className="flex gap-3 justify-center pt-2 max-w-sm mx-auto">
                  <button
                    onClick={handleRestart}
                    className="flex items-center gap-1.5 px-4 py-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 text-sm font-semibold transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Retry
                  </button>
                  <button
                    onClick={() => {
                      onSelectPlan(recommendation.target);
                      onClose();
                    }}
                    className="flex-1 bg-brand-orange text-white py-2 rounded-lg font-bold hover:bg-brand-orange/90 text-sm shadow-md shadow-brand-orange/20 transition-all text-center"
                  >
                    Lock in recommendation
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};
