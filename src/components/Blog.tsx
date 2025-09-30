import React, { useState, useEffect, useRef } from 'react';
import { Download } from 'lucide-react';

// NOTE: Placeholder used to resolve compilation error.
 import prospectusImage from '@/assets/Prospectus.jpg';



const Prospectus: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      { threshold: 0.1 } // Trigger a bit earlier
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


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting || isSubmitted) return;

    setIsSubmitting(true);
    console.log('Prospectus download request for email:', email);

    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after a few seconds
      setTimeout(() => {
        setEmail('');
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    // The outer section has a different background to allow the orange box to be seen
    <section className="bg-[#FFF8F1] pt-32 pb-20 lg:pb-24">
        <div 
            id="prospectus" 
            className="bg-[#E87A4D] py-12 lg:py-16 rounded-3xl container mx-auto" 
            ref={sectionRef}
        >
          <style>{`
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(40px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .animate-fadeInUp {
              animation: fadeInUp 1s ease-out forwards;
              opacity: 0;
            }
          `}</style>
          <div className="px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column: Prospectus Image - Pulled up with negative margin */}
              <div className="flex justify-center lg:justify-end -mt-48 lg:-mt-56">
                {isVisible && (
                  <img
                    src={prospectusImage}
                    alt="Nirmaan Prospectus Cover"
                    className="rounded-2xl shadow-2xl w-full max-w-sm animate-fadeInUp"
                  />
                )}
              </div>

              {/* Right Column: Content and Form */}
              <div className={`text-white text-center lg:text-left ${isVisible ? 'animate-fadeInUp' : ''}`} style={{animationDelay: '0.3s'}}>
                <p className="font-semibold tracking-widest text-sm mb-4 text-white/90">
                  — DOWNLOAD THE PROSPECTUS
                </p>
                <h2 className="text-3xl lg:text-4xl font-bold font-poppins mb-8 leading-tight">
                  Download our prospectus to know more about our program and curriculum
                </h2>
                <form
                  onSubmit={handleSubmit}
                  className="bg-white p-2 rounded-full flex items-center max-w-lg mx-auto lg:mx-0 shadow-lg"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-grow bg-transparent px-4 py-2 text-gray-700 focus:outline-none w-full"
                    disabled={isSubmitting || isSubmitted}
                  />
                  <button
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition-colors flex items-center gap-2 flex-shrink-0 disabled:bg-gray-400 disabled:cursor-not-allowed"
                    disabled={isSubmitting || isSubmitted}
                  >
                    {isSubmitting ? 'Sending...' : isSubmitted ? 'Sent! ✔' : (
                      <>
                        <Download className="w-5 h-5" />
                        <span>Download</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Prospectus;

