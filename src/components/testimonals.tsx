import React, { useEffect, useRef, useState } from 'react';

// NOTE: Placeholders used to resolve compilation errors
 import schoolLogo1 from '@/assets/scllogo1.jpg';
 import schoolLogo2 from '@/assets/scllogo2.jpg';



const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer to trigger animations
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="testimonials" 
      className="relative bg-[#FFF8F1] pt-20 lg:pt-32 pb-60 lg:pb-64 overflow-hidden" // Increased bottom padding to make space for the orange bar
      ref={sectionRef}
    >
      {/* --- ANIMATED BACKGROUND --- */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
          <div style={{ position: 'absolute', width: '80px', height: '80px', background: 'rgba(255, 126, 42, 0.1)', borderRadius: '50%', animation: 'move 15s linear infinite', top: '20%', left: '10%' }} />
          <div style={{ position: 'absolute', width: '120px', height: '120px', background: 'rgba(255, 126, 42, 0.08)', borderRadius: '50%', animation: 'move 20s linear infinite reverse', top: '50%', left: '80%' }} />
          <div style={{ position: 'absolute', width: '60px', height: '60px', background: 'rgba(255, 126, 42, 0.12)', borderRadius: '50%', animation: 'move 25s linear infinite', top: '80%', left: '30%' }} />
          <div style={{ position: 'absolute', width: '150px', height: '150px', background: 'rgba(255, 126, 42, 0.07)', borderRadius: '50%', animation: 'move 18s linear infinite reverse', top: '10%', left: '90%'}} />
      </div>

      <style>{`
          @keyframes move { 
              0% { transform: translate(0, 0) scale(1); } 
              25% { transform: translate(20px, 40px) scale(1.1); } 
              50% { transform: translate(-30px, -10px) scale(1); } 
              75% { transform: translate(10px, -30px) scale(1.1); } 
              100% { transform: translate(0, 0) scale(1); } 
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInUp {
            animation: fadeInUp 1s ease-out forwards;
            opacity: 0;
          }
      `}</style>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fadeInUp' : ''}`}>
          <h2 className="text-4xl lg:text-6xl font-bold font-poppins text-gray-800">
            Testimonials
          </h2>
        </div>

        {/* Placeholder for Testimonial Content */}
        <div className={`max-w-3xl mx-auto text-center ${isVisible ? 'animate-fadeInUp' : ''}`} style={{animationDelay: '0.3s'}}>
            <p className="text-2xl font-light italic text-gray-600 leading-relaxed">
                "Nirmaan has transformed the way our students approach learning. The focus on holistic development is not just a promise; it's a reality we see every day in our classrooms. We've seen a remarkable increase in confidence and curiosity."
            </p>
            <p className="mt-6 font-semibold text-orange-600 text-lg">
                — Principal, The Salonee School
            </p>
        </div>
      </div>
      
      {/* Bottom Orange Bar with Logos */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-[#E87A4D]">
        <div className={`container mx-auto h-full flex items-center justify-center gap-16 lg:gap-24 ${isVisible ? 'animate-fadeInUp' : ''}`} style={{animationDelay: '0.6s'}}>
            <img src={schoolLogo1} alt="School Logo 1" className="h-44 w-auto object-contain filter grayscale brightness-200" />
            <img src={schoolLogo2} alt="School Logo 2" className="h-44 w-auto object-contain filter grayscale brightness-200" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

