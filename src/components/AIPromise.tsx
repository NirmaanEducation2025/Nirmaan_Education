import React, { useEffect, useRef } from 'react';
import {
  FileText,
  TrendingUp,
  UserCheck,
  GraduationCap,
} from 'lucide-react';

// Restoring the exact asset paths as requested
import video1 from '@/assets/v1.mp4';
import video2 from '@/assets/v2.mp4';
import video3 from '@/assets/v3.mp4';
import wavyBg from '@/assets/wavy-background.jpg';

// --- Reusable Call to Action Component ---
const CallToAction = () => {
  const handleScrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div 
      className="cta-container"
      style={{
        position: 'relative',
        padding: '60px 20px',
        overflow: 'hidden',
        textAlign: 'center',
        background: `url(${wavyBg}) center center / cover no-repeat`,
        width: '100vw',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        marginTop: '80px',
      }}
    >
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(23, 23, 23, 0.7)', // Dark overlay for text readability
        zIndex: 1,
      }} />
      
      <div style={{ position: 'relative', zIndex: 2, fontFamily: 'Urbanist, sans-serif' }}>
        <div style={{
          display: 'inline-block',
          background: '#FC6B2D',
          color: '#FFFFFF',
          padding: '10px 24px',
          borderRadius: '999px',
          fontSize: '1.5rem',
          fontWeight: 700,
          marginBottom: '24px',
        }}>
          Best Part
        </div>

        <h3 style={{
          color: '#FF8A43',
          fontSize: '2.25rem',
          fontWeight: 700,
          marginBottom: '32px',
          maxWidth: '800px',
          margin: '0 auto 32px'
        }}>
          All the learning you need — for less than the cost of a pizza.
        </h3>
        
        <button
          onClick={handleScrollToContact}
          style={{
            background: '#FCD7C8',
            border: '1px solid #FF4D01',
            borderRadius: '999px',
            color: '#434242',
            padding: '14px 28px',
            fontSize: '1.25rem',
            fontWeight: 700,
            cursor: 'pointer',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.2)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
          }}
        >
          Connect with us to Know more
        </button>
      </div>
    </div>
  );
};


const AIPromise: React.FC = () => {
    
  const features = [
    {
      icon: <FileText className="w-8 h-8 text-white" />,
      title: 'We measure what matters',
      videoSrc: video2,
      details: [
        { emoji: '📊', subtitle: 'Behavior-based Student Report Cards', point: 'AI builds a dynamic profile of each learner based on multiple data points.' },
        { emoji: '🧠', subtitle: 'We measure beyond academic scores', point: 'like IE, EQ, Curiosity, cognitive levels, Communication and more to reflect true potential of student.' }
      ]
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      title: 'We teach what lasts',
      videoSrc: video3,
      details: [
        { emoji: '📈', subtitle: 'Measurable Student Progress', point: 'We can regularly check the progress of student and effectiveness of the program using AI.' },
        { emoji: '🗺️', subtitle: 'Personalize learning journey', point: 'We can measure and customize the learning path for each student based on individual needs' }
      ]
    },
  ];
  
  const video1Feature = {
    icon: <UserCheck className="w-7 h-7" />,
    title: 'Personalize learning journey',
    videoSrc: video1,
  };

  const timelineRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const timeline = timelineRef.current;
      const dot = dotRef.current;
      if (timeline && dot) {
        const timelineRect = timeline.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        const start = timeline.offsetTop - viewportHeight / 1.5;
        const end = timeline.offsetTop + timelineRect.height - viewportHeight / 1.5;

        const currentScroll = window.scrollY;
        
        let progress = 0;
        if (currentScroll > start) {
           progress = (currentScroll - start) / (end - start);
        }
        
        progress = Math.min(Math.max(progress, 0), 1); // Clamp between 0 and 1

        const newY = progress * (timelineRect.height - dot.offsetHeight);
        dot.style.transform = `translateY(${newY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Run on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <section id="ai-promise" className="relative py-20 lg:py-32 bg-[#FFF8F1] overflow-hidden">
        {/* --- ANIMATED BACKGROUND --- */}
        <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
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
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
          }
          .video-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .video-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.15);
          }
          .detail-point {
             animation: fadeInUp 0.5s ease-out forwards;
             opacity: 0;
          }
          .detail-point > p:hover {
            color: #FB923C; /* orange-400 */
          }
        `}</style>
        
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-16 justify-center text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
              <GraduationCap className="w-8 h-8" />
            </div>
            <h2 className="text-3xl lg:text-3xl font-bold font-poppins bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              India's 1st of its kind Holistic Program using AI
            </h2>
          </div>

          {/* Alternating Video Timeline */}
          <div className="relative">
            <div ref={timelineRef} className="absolute left-1/2 top-0 h-full w-1.5 -translate-x-1/2 bg-gradient-to-b from-orange-300 to-amber-300 rounded-full" />
            
            <div ref={dotRef} className="absolute left-1/2 -translate-x-1/2 w-9 h-9 bg-[#FFF8F1] rounded-full flex items-center justify-center" style={{ transition: 'transform 0.1s linear' }}>
                <div className="w-5 h-5 bg-orange-500 rounded-full border-4 border-orange-200" />
            </div>

            <div className="space-y-24">
              {features.map((feature, index) => (
                <div key={index} className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  
                  {index % 2 === 0 ? (
                    <>
                      <div className="md:text-right md:pr-14">
                        <div className="inline-flex items-center gap-4 bg-orange-500 text-white font-bold font-poppins px-6 py-3 rounded-full mb-6 shadow-lg transition-transform duration-300 hover:scale-105">
                          {feature.icon}
                          <span className="text-3xl">{feature.title}</span>
                        </div>
                        <div className="space-y-6">
                        {feature.details.map((detail, i) => (
                          <div key={i} className="detail-point" style={{ animationDelay: `${i * 0.2}s`}}>
                            <h3 className="font-bold font-poppins text-xl text-gray-800 mb-1">{detail.subtitle}</h3>
                            <p className="text-gray-600 font-inter transition-colors cursor-pointer">
                              <span className="mr-2">{detail.emoji}</span>{detail.point}
                            </p>
                          </div>
                        ))}
                        </div>
                      </div>
                      <div className="w-full">
                        <video src={feature.videoSrc} autoPlay loop muted playsInline className="w-full rounded-2xl shadow-xl border-4 border-white video-card" />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-full md:order-first order-last">
                        <video src={feature.videoSrc} autoPlay loop muted playsInline className="w-full rounded-2xl shadow-xl border-4 border-white video-card" />
                      </div>
                      <div className="md:pl-14">
                        <div className="inline-flex items-center gap-4 bg-orange-500 text-white font-bold font-poppins px-6 py-3 rounded-full mb-6 shadow-lg transition-transform duration-300 hover:scale-105">
                          {feature.icon}
                          <span className="text-3xl">{feature.title}</span>
                        </div>
                        <div className="space-y-6">
                        {feature.details.map((detail, i) => (
                          <div key={i} className="detail-point" style={{ animationDelay: `${i * 0.2}s`}}>
                            <h3 className="font-bold font-poppins text-xl text-gray-800 mb-1">{detail.subtitle}</h3>
                            <p className="text-gray-600 font-inter transition-colors cursor-pointer">
                               <span className="mr-2">{detail.emoji}</span>{detail.point}
                            </p>
                          </div>
                        ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-24">
             <h2 className="text-4xl lg:text-5xl font-bold text-[#FF4D01] font-urbanist max-w-5xl mx-auto mb-12">
              Personalized AI that adapts and evolves with your child’s learning curve.
            </h2>
            <video src={video1Feature.videoSrc} autoPlay loop muted playsInline className="w-full rounded-2xl shadow-2xl border-4 border-white" />
          </div>
          
          <CallToAction />

        </div>
      </div>
    </section>
  );
};

export default AIPromise;

