import React, { useState, useEffect, useRef } from 'react';

// Importing image assets from the assets folder as requested
import sdg1Image from '@/assets/SDG1.jpg';
import sdg2Image from '@/assets/SDG2.jpg';
import sdg3Image from '@/assets/SDG3.jpg';

// A custom hook to animate numbers counting up
const useCountUp = (end: number, duration: number, isVisible: boolean, startSignal: boolean) => {
  const [count, setCount] = useState(0);
  const frameRate = 1000 / 60; // 60fps
  const totalFrames = Math.round(duration / frameRate);

  useEffect(() => {
    if (!isVisible) return;
    setCount(0); // Reset count when the animation restarts

    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease-out cubic function for a smoother animation
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(end * easedProgress));

      if (frame === totalFrames) {
        clearInterval(counter);
        setCount(end); // Ensure it ends on the exact number
      }
    }, frameRate);

    return () => clearInterval(counter);
  }, [end, duration, isVisible, totalFrames, frameRate, startSignal]); // Rerun when startSignal changes

  return count;
};

// Animated number component
const AnimatedNumber = ({ value, isVisible, startSignal }: { value: string; isVisible: boolean; startSignal: boolean }) => {
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const suffix = value.replace(/[0-9.]/g, '');
  const count = useCountUp(numericValue, 5000, isVisible, startSignal); // Slowed down duration to 5000ms

  const formattedCount = new Intl.NumberFormat('en-IN', {
    maximumFractionDigits: numericValue % 1 !== 0 ? 2 : 0,
  }).format(count);

  return <>{formattedCount}{suffix}</>;
};

const Impact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [restartCounter, setRestartCounter] = useState(false);
  const impactRef = useRef<HTMLDivElement>(null);

  // This effect triggers the animation loop once the component is visible
  useEffect(() => {
    if (isVisible) {
      const loop = setInterval(() => {
        setRestartCounter(prev => !prev); // Toggle the signal to restart the animation
      }, 6000); // Restart animation every 6 seconds (changed from 4000)

      return () => clearInterval(loop);
    }
  }, [isVisible]);

  // This effect observes when the component enters the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (impactRef.current) {
      observer.observe(impactRef.current);
    }

    return () => {
      if (impactRef.current) {
        observer.unobserve(impactRef.current);
      }
    };
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
    <section id="impact" className="relative py-20 lg:py-32 bg-[#FEF3E9] overflow-hidden" ref={impactRef}>
        {/* --- ANIMATED BACKGROUND --- */}
        <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
            <div style={{ position: 'absolute', width: '80px', height: '80px', background: 'rgba(255, 126, 42, 0.1)', borderRadius: '50%', animation: 'move 15s linear infinite', top: '20%', left: '10%' }} />
            <div style={{ position: 'absolute', width: '120px', height: '120px', background: 'rgba(255, 126, 42, 0.08)', borderRadius: '50%', animation: 'move 20s linear infinite reverse', top: '50%', left: '80%' }} />
            <div style={{ position: 'absolute', width: '60px', height: '60px', background: 'rgba(255, 126, 42, 0.12)', borderRadius: '50%', animation: 'move 25s linear infinite', top: '80%', left: '30%' }} />
            <div style={{ position: 'absolute', width: '150px', height: '150px', background: 'rgba(255, 126, 42, 0.07)', borderRadius: '50%', animation: 'move 18s linear infinite reverse', top: '10%', left: '90%'}} />
        </div>
        
        <style>{`
            @keyframes move { 0% { transform: translate(0, 0) scale(1); } 25% { transform: translate(20px, 40px) scale(1.1); } 50% { transform: translate(-30px, -10px) scale(1); } 75% { transform: translate(10px, -30px) scale(1.1); } 100% { transform: translate(0, 0) scale(1); } }
            @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
            .fade-in-up { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; }
        `}</style>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-6xl font-bold font-poppins text-orange-600">
            Our Impact
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side: Transforming stats */}
          <div className="text-center lg:text-left">
            <p className="text-2xl font-poppins text-gray-600 mb-8 fade-in-up" style={{animationDelay: '0.2s'}}>Transforming....</p>
            <div className="flex justify-center lg:justify-start gap-12">
              {impactStats.map((stat, index) => (
                <div key={stat.label} className="fade-in-up" style={{animationDelay: `${0.4 + index * 0.2}s`}}>
                  <div className="text-6xl lg:text-7xl font-bold text-orange-500 font-poppins">
                    <AnimatedNumber value={stat.number} isVisible={isVisible} startSignal={restartCounter} />
                  </div>
                  <p className="text-xl text-gray-700 mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side: SDG goals with images */}
          <div className="bg-orange-400 p-8 rounded-2xl fade-in-up" style={{animationDelay: '0.6s'}}>
            <h3 className="text-2xl font-bold text-white mb-6 text-center font-poppins">Impact on SDGs</h3>
            <div className="flex justify-center gap-6">
              {sdgGoals.map((goal, index) => (
                <div key={goal.title} className="text-center group fade-in-up" style={{animationDelay: `${0.8 + index * 0.2}s`}}>
                  <img 
                    src={goal.imgSrc} 
                    alt={goal.title}
                    className="w-28 h-auto rounded-lg transition-transform duration-300 group-hover:scale-110 shadow-lg"
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
