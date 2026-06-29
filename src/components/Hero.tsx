import React, { useState, useEffect } from "react";
import { Play, Sparkles, BookOpen, Layers, Award } from "lucide-react";
import { ShopifyImage } from "./ShopifyImage";
import { UNIQUE_FEATURES_1 } from "../data";
import { motion, AnimatePresence } from "motion/react";

interface HeroProps {
  onOpenQuiz: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuiz }) => {
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const words = ["for", "of", "by"];
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full bg-[#fafbfc] pt-[90px] md:pt-[130px] pb-12 overflow-hidden flex flex-col items-center">
      {/* Dynamic Background Mesh Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#530fad_0.08rem,transparent_0.08rem)] [background-size:1.5rem_1.5rem] opacity-[0.04]" />

      <div className="w-full max-w-5xl mx-auto px-4 text-center z-10 flex flex-col items-center">
        {/* Looping Title */}
        <div className="flex flex-row flex-wrap items-center justify-center gap-x-1.5 sm:gap-x-2.5 gap-y-1 mb-4 font-display order-1 md:order-1">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-800 tracking-tight">
            Built
          </h1>
          <div className="h-[35px] sm:h-[50px] md:h-[65px] w-[45px] sm:w-[65px] md:w-[75px] lg:w-[85px] flex items-center justify-center overflow-hidden shrink-0">
            <AnimatePresence mode="wait">
              <motion.span
                key={activeWordIndex}
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -15, opacity: 0 }}
                className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-brand-orange"
              >
                {words[activeWordIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-800 tracking-tight">
            eXceptional Cubers
          </h1>
        </div>

        {/* Desktop-only Sub-text */}
        <p className="hidden md:block text-base text-slate-500 max-w-xl mb-8 leading-relaxed md:order-2">
          Master the standard formulas, intuitive tricks, and speed solving frameworks.
          Learn from Indian National Champions and slash your solving times completely at your own pace.
        </p>

        {/* Mobile-only First Sub-text (above video) */}
        <p className="block md:hidden text-sm text-slate-500 max-w-xl mb-4 leading-relaxed order-2">
          Master the standard formulas, intuitive tricks, and speed solving frameworks.
        </p>

        {/* Video Player Section */}
        <div className="w-full max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-2xl relative bg-slate-900 border border-slate-100 group mb-6 md:mb-16 order-3 md:order-3">
          {!isPlaying ? (
            <div className="absolute inset-0 flex items-center justify-center z-20 cursor-pointer" onClick={() => setIsPlaying(true)}>
              {/* Overlay background */}
              <div className="absolute inset-0 bg-black/45 group-hover:bg-black/40 transition-all duration-300" />
              
              {/* Poster image */}
              <ShopifyImage
                src="https://cdn.shopify.com/s/files/1/0270/0342/0758/files/xskill_thumbnail.png?v=1734436942"
                alt="xSkills Video Outline Thumbnail"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                fallbackType="bg"
              />

              <div className="relative z-30 translate-y-0 group-hover:scale-105 transition-all duration-300 flex flex-col items-center gap-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-brand-orange text-white rounded-full flex items-center justify-center shadow-lg shadow-brand-orange/45 ring-4 ring-white/10 group-hover:ring-brand-orange/30">
                  <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-current translate-x-0.5" />
                </div>
              </div>
            </div>
          ) : (
            <div className="relative w-full h-full">
              <video
                className="w-full h-full object-cover"
                controls
                autoPlay
                src="https://cdn.shopify.com/videos/c/o/v/ea1303a20b1842298470e925cf0815cc.mp4"
                onEnded={() => setVideoEnded(true)}
                onPlay={() => setVideoEnded(false)}
              >
                Your browser does not support the video tag.
              </video>

              {videoEnded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/85 z-30 animate-fade-in p-4 sm:p-8 text-center">
                  <motion.div 
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="max-w-md flex flex-col items-center gap-4"
                  >
                    <h3 className="text-white text-xl sm:text-3xl font-black font-display leading-tight">
                      Ready to Slash Your Solving Times down to Seconds?
                    </h3>
                    <p className="hidden md:block text-slate-300 text-[11px] sm:text-xs max-w-xs leading-relaxed">
                      Take our quick diagnostic assessment to find your ideal learning path and unlock personalized dashboards.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 mt-3 w-full sm:w-auto">
                      <button
                        onClick={onOpenQuiz}
                        className="bg-brand-orange hover:bg-brand-orange/95 text-white font-extrabold text-sm px-8 py-3.5 rounded-full select-none cursor-pointer tracking-wide shadow-lg shadow-brand-orange/30 transform hover:scale-105 transition-all duration-200"
                      >
                        Enroll Now
                      </button>
                      <button
                        onClick={() => {
                          setVideoEnded(false);
                          setIsPlaying(false);
                          setTimeout(() => setIsPlaying(true), 50);
                        }}
                        className="hidden sm:block bg-white/10 hover:bg-white/20 text-white font-bold text-xs px-6 py-3.5 rounded-full select-none cursor-pointer tracking-wide transition-all border border-white/10"
                      >
                        Replay Video
                      </button>
                    </div>
                  </motion.div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile-only Second Sub-text (below video) */}
        <p className="block md:hidden text-sm text-slate-500 max-w-xl mb-8 leading-relaxed order-4">
          Learn from Indian National Champions and slash your solving times completely at your own pace.
        </p>

        {/* Feature Bento Grid (Unique Features row 1) */}
        <div className="w-full order-4 md:order-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {UNIQUE_FEATURES_1.map((feat, index) => {
              return (
                <div
                  key={index}
                  className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm sm:shadow-md border border-slate-100 sm:border-slate-100/50 hover:shadow-lg sm:hover:shadow-xl hover:border-brand-purple/10 flex flex-col items-center text-center transition-all duration-300"
                >
                  <div className="w-[100px] h-[100px] sm:w-[132px] sm:h-[132px] flex items-center justify-center mb-3 sm:mb-4 transition-transform hover:scale-110 duration-300">
                    <ShopifyImage
                      src={feat.image}
                      alt={feat.title}
                      className="max-h-full object-contain"
                      fallbackType="icon"
                    />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-800 font-display mb-1.5 min-h-[36px] sm:min-h-0 flex items-center justify-center sm:block">
                    {feat.title}
                  </h3>
                  <p className="hidden md:block text-xs text-slate-500 leading-relaxed max-w-[200px]">
                    {feat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
