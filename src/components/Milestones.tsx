import React, { useEffect, useState, useRef } from "react";
import { MILESTONES } from "../data";
import { Trophy, Users, Star, Calendar } from "lucide-react";

interface CountUpProps {
  value: string;
}

const CountUp: React.FC<CountUpProps> = ({ value }) => {
  const [displayValue, setDisplayValue] = useState("0");
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const match = value.match(/([\d,.]+)/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const numStr = match[1];
    const prefix = value.substring(0, match.index);
    const suffix = value.substring(match.index! + numStr.length);

    const hasCommas = numStr.includes(",");
    const cleanNumStr = numStr.replace(/,/g, "");
    const target = parseFloat(cleanNumStr);

    const hasDecimals = numStr.includes(".");
    let decimals = 0;
    if (hasDecimals) {
      const parts = cleanNumStr.split(".");
      if (parts[1]) {
        decimals = parts[1].length;
      }
    }

    if (isNaN(target)) {
      setDisplayValue(value);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          startAnimation(target, prefix, suffix, decimals, hasCommas);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [value]);

  const startAnimation = (
    target: number,
    prefix: string,
    suffix: string,
    decimals: number,
    hasCommas: boolean
  ) => {
    const duration = 2000; // 2 seconds animation duration
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function: cubic ease-out
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentVal = easeOutCubic * target;

      let formattedVal = "";
      if (decimals > 0) {
        formattedVal = currentVal.toFixed(decimals);
      } else {
        const intVal = Math.floor(currentVal);
        if (hasCommas) {
          formattedVal = intVal.toLocaleString("en-US");
        } else {
          formattedVal = intVal.toString();
        }
      }

      setDisplayValue(`${prefix}${formattedVal}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(animate);
  };

  return <span ref={elementRef}>{displayValue}</span>;
};

export const Milestones: React.FC = () => {
  const getIcon = (idx: number) => {
    switch(idx) {
      case 0: return <Trophy className="w-5 h-5 text-brand-orange" />;
      case 1: return <Calendar className="w-5 h-5 text-brand-orange" />;
      case 2: return <Users className="w-5 h-5 text-brand-orange" />;
      default: return <Star className="w-5 h-5 text-brand-orange" />;
    }
  };

  return (
    <section className="pt-10 pb-16 md:py-16 px-4 bg-brand-purple text-white w-full flex flex-col items-center">
      <div className="w-full max-w-5xl">
        {/* Title */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight font-display">
            Our Milestones: <span className="block sm:inline text-brand-orange mt-1 sm:mt-0">The Cubelelo Effect</span>
          </h2>
          <p className="text-xs md:text-sm text-white/70 mt-2 max-w-md mx-auto">
            A decade of leading speedcubing tournaments, delivering speed, and sparking logic.
          </p>
        </div>

        {/* Milestone Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {MILESTONES.map((mile, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 flex flex-col items-center justify-between text-center relative group hover:bg-white/8 transition-all duration-300 h-[155px] sm:h-auto"
            >
              {/* Decorative top icon indicator */}
              <div className="p-2 sm:p-2.5 rounded-full bg-white/10 mb-2 sm:mb-4 group-hover:scale-110 transition-transform">
                {getIcon(index)}
              </div>

              <div className="flex-1 flex flex-col justify-center gap-1 focus:outline-none">
                <span className="text-2xl sm:text-4xl lg:text-5xl font-black text-brand-orange leading-none font-display">
                  <CountUp value={mile.value} />
                </span>
                <p className="text-[10px] sm:text-xs text-white/80 leading-snug sm:leading-relaxed font-semibold max-w-[140px] sm:max-w-[180px] mx-auto mt-1">
                  {mile.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Milestones;
