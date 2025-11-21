import React, { useState, useEffect, useRef } from "react";

import sdg1Image from "@/assets/SDG1.jpg";
import sdg2Image from "@/assets/SDG2.jpg";
import sdg3Image from "@/assets/SDG3.jpg";

// Count-up hook (unchanged)
const useCountUp = (end: number, duration: number, isVisible: boolean) => {
  const [count, setCount] = useState(0);
  const frameRate = 1000 / 60;
  const totalFrames = Math.round(duration / frameRate);

  useEffect(() => {
    if (!isVisible) return;

    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(end * easedProgress));

      if (frame === totalFrames) {
        clearInterval(counter);
        setCount(end);
      }
    }, frameRate);

    return () => clearInterval(counter);
  }, [end, duration, isVisible]);

  return count;
};

const AnimatedNumber = ({
  value,
  isVisible,
}: {
  value: string;
  isVisible: boolean;
}) => {
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
  const suffix = value.replace(/[0-9.]/g, "");
  const count = useCountUp(numericValue, 2500, isVisible);

  const formattedCount = new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: numericValue % 1 !== 0 ? 2 : 0,
  }).format(count);

  return (
    <>
      {formattedCount}
      {suffix}
    </>
  );
};

const Impact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const impactRef = useRef<HTMLDivElement>(null);

  // Trigger only once on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger once
          observer.disconnect(); // Stop observing
        }
      },
      { threshold: 0.25 }
    );

    if (impactRef.current) observer.observe(impactRef.current);

    return () => observer.disconnect();
  }, []);

  const impactStats = [
    { number: "560", label: "Students" },
    { number: "26.52Cr", label: "More to go" },
  ];

  const sdgGoals = [
    { title: "Quality Education", imgSrc: sdg1Image },
    { title: "Good Health and Well-being", imgSrc: sdg2Image },
    { title: "Decent Work and Economic Growth", imgSrc: sdg3Image },
  ];

  return (
    <section
      id="impact"
      ref={impactRef}
      className="relative py-20 lg:py-32 bg-[#FEF3E9] overflow-hidden"
    >
      <style>{`
        @keyframes fadeInUp { 
          from { opacity: 0; transform: translateY(20px); } 
          to { opacity: 1; transform: translateY(0); } 
        }
        .fade-in-up { 
          animation: fadeInUp 0.8s ease-out forwards; 
          opacity: 0; 
        }
      `}</style>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-6xl font-bold font-poppins text-orange-600">
            Our Impact
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left stats */}
          <div className="text-center lg:text-left">
            <p
              className="text-2xl font-poppins text-gray-600 mb-8 fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Transforming....
            </p>
            <div className="flex justify-center lg:justify-start gap-12">
              {impactStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="fade-in-up"
                  style={{ animationDelay: `${0.4 + index * 0.2}s` }}
                >
                  <div className="text-6xl lg:text-7xl font-bold text-orange-500 font-poppins">
                    <AnimatedNumber value={stat.number} isVisible={isVisible} />
                  </div>
                  <p className="text-xl text-gray-700 mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right SDG */}
          <div
            className="bg-orange-400 p-8 rounded-2xl fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center font-poppins">
              Impact on SDGs
            </h3>
            <div className="flex justify-center gap-6">
              {sdgGoals.map((goal, index) => (
                <div
                  key={goal.title}
                  className="text-center fade-in-up"
                  style={{ animationDelay: `${0.8 + index * 0.2}s` }}
                >
                  <img
                    src={goal.imgSrc}
                    alt={goal.title}
                    className="w-28 h-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
