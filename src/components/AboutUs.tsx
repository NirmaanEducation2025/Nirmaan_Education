import React from 'react';
// IMPORTANT: All image assets are assumed to be in the correct path as provided.
import arrowSvg from '@/assets/Arrow.png';
import quoteUp from '@/assets/quote-up.png';
import displeasedLady from '@/assets/image.jpg'; // This is for the "Problem" section
import happyGirl from '@/assets/happy-girl.jpg'; // This is for the "Future Ready" section
import logo from '@/assets/Logo.jpg';

const handleScrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
};

const AboutUs = () => {
    // Array of tags to map over, making it easier to manage and add unique animation delays
    const problemTags = [
        { text: "Over Reliance on Rote Learning", delay: "0s" },
        { text: "Limited focus on holistic development", delay: "1.5s" },
        { text: "Theory-based learning", delay: "0.5s" },
        { text: "Foundation blocks are weak", delay: "2s" },
        { text: "Outdated Curriculum", delay: "1s" },
        { text: `"One size fits all" approach`, delay: "0.2s" },
    ];

    return (
        <section
            id="about"
            style={{
                background: '#FFF8F1',
                width: '100%',
                overflowX: 'hidden',
                padding: '80px 0',
                fontFamily: 'Poppins, Arial, sans-serif',
                position: 'relative', // Set position to relative to contain the animated background
            }}
        >
            {/* --- ANIMATED BACKGROUND --- */}
            <div className="background-shapes" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, overflow: 'hidden' }}>
                <div style={{ position: 'absolute', width: '80px', height: '80px', background: 'rgba(255, 126, 42, 0.1)', borderRadius: '50%', animation: 'move 15s linear infinite', top: '20%', left: '10%' }} />
                <div style={{ position: 'absolute', width: '120px', height: '120px', background: 'rgba(255, 126, 42, 0.08)', borderRadius: '50%', animation: 'move 20s linear infinite reverse', top: '50%', left: '80%' }} />
                <div style={{ position: 'absolute', width: '60px', height: '60px', background: 'rgba(255, 126, 42, 0.12)', borderRadius: '50%', animation: 'move 25s linear infinite', top: '80%', left: '30%' }} />
                <div style={{ position: 'absolute', width: '150px', height: '150px', background: 'rgba(255, 126, 42, 0.07)', borderRadius: '50%', animation: 'move 18s linear infinite reverse', top: '10%', left: '90%'}} />
            </div>

            <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
                
                {/* --- THE PROBLEM SECTION --- */}
                <div style={{ marginBottom: 80 }}>
                    <div style={{ textAlign: 'center', width: '100%', marginBottom: 16 }}>
                        <span style={{ fontStyle: 'italic', fontWeight: 700, fontSize: 22, color: '#FF4D01' }}>
                            - The Problem -
                        </span>
                    </div>
                    <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: 44, color: '#000', lineHeight: 1.2, marginBottom: 24 }}>
                        The ultimate goal of education isn’t good marks<br />
                        — it’s a good life and a great career
                    </h2>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 40 }}>
                        <span style={{ fontStyle: 'italic', fontSize: 21, color: '#222', marginRight: 16 }}>
                            But Unfortunately, Our Education System
                        </span>
                        <img src={arrowSvg} alt="Arrow pointing towards issues" style={{ width: 70 }} />
                    </div>
                    
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '64px', minHeight: '550px' }}>
                        <div style={{ flexShrink: 0 }}>
                            <img
                                src={displeasedLady}
                                alt="Displeased student"
                                style={{
                                    width: 550,
                                    height: 530,
                                    objectFit: 'cover',
                                    filter: 'grayscale(1)',
                                    borderRadius: '20px',
                                }}
                                draggable={false}
                            />
                        </div>
                        {/* --- Disorganized Tag Buttons --- */}
                        <div style={{ 
                            position: 'relative', 
                            width: '600px', 
                            height: '500px' // Container for tags
                        }}>
                            {problemTags.map((tag, index) => {
                                const positions = [
                                    { top: '0%', left: '10%' },
                                    { top: '15%', left: '60%' },
                                    { top: '30%', left: '5%' },
                                    { top: '45%', left: '55%' },
                                    { top: '60%', left: '15%' },
                                    { top: '75%', left: '50%' },
                                ];
                                return (
                                    <TagBtn key={index} delay={tag.delay} style={{ position: 'absolute', ...positions[index] }}>
                                        {tag.text}
                                    </TagBtn>
                                );
                            })}
                        </div>
                    </div>
                    
                    <p style={{ textAlign: 'center', maxWidth: 1000, margin: '0 auto', fontSize: 21, color: '#4A4A4A', lineHeight: 1.5 }}>
                        Leading to Low Confidence & Self Esteem, Poor Problem-Solving Abilities, poor communication, unhealthy, stressed, stripped of curiosity & Unemployable Graduates
                    </p>
                </div>

                {/* --- DESIGNED SOLUTION BOX (SOLID ORANGE THEME) --- */}
                <div style={{
                    position: 'relative', // Changed from absolute to relative for better flow
                    margin: '120px auto', // Centered with margin
                    width: '600px',
                    background: 'linear-gradient(180deg, #FFF0E6 0%, #FFF8F1 100%)',
                    borderRadius: '24px',
                    border: '1px solid #FFDDCB',
                    boxShadow: '0 8px 32px 0 rgba(230, 209, 196, 0.4)',
                    padding: '40px',
                    textAlign: 'center',
                    animation: 'fadeInUp 1s ease-out forwards' // Added entrance animation
                }}>
                    <div style={{ textAlign: 'center', width: '100%', marginBottom: 16 }}>
                        <span style={{ fontStyle: 'italic', fontWeight: 700, fontSize: 22, color: '#FF4D01' }}>
                            - The Solution -
                        </span>
                    </div>

                    <div style={{ position: 'relative', height: '80px', marginBottom: '16px' }}>
                        <img
                            src={logo}
                            alt="Nirmaan Logo"
                            style={{
                                position: 'absolute',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                top: '10px',
                                height: '60px',
                                width: 'auto'
                            }}
                        />
                    </div>

                    <p style={{
                        fontSize: '20px', color: '#334155',
                        maxWidth: '500px', margin: '0 auto 32px'
                    }}>
                        Nirmaan partners with schools to deliver a transformative education beyond traditional academics.
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button
                            onClick={handleScrollToContact}
                            style={{
                                background: 'linear-gradient(90deg, #FF8C00 0%, #FF6B00 100%)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '12px',
                                padding: '14px 40px',
                                fontSize: '16px',
                                fontWeight: '600',
                                cursor: 'pointer',
                                boxShadow: '0 4px 15px rgba(255, 107, 0, 0.4)',
                                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.transform = 'scale(1.05)';
                                e.currentTarget.style.boxShadow = '0 6px 25px rgba(255, 107, 0, 0.6)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 107, 0, 0.4)';
                            }}
                        >
                            Contact Us
                        </button>
                    </div>
                </div>

                {/* --- FUTURE READY SECTION --- */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '64px', marginTop: '80px' }}>
                    <div style={{ maxWidth: 520 }}>
                        <img src={quoteUp} alt="Quote icon" style={{ width: 62, height: 54, marginBottom: 14 }} draggable={false} />
                        <p style={{ fontFamily: 'Urbanist, sans-serif', fontSize: 27, lineHeight: '38px', color: '#000', width: '900px' }}>
                            We shape your students into <span style={{ color: '#FA7E2A', fontWeight: 700 }}>well rounded, future-ready leaders</span> with full of confidence, curiosity, emotional intelligence, strong social skills, an analytical mindset, and essential 21st-century competencies.
                        </p>
                    </div>
                    <div style={{ position: 'relative', flexShrink: 0 }}>
                        <div style={{
                            position: 'absolute', right: -30, bottom: -85, width: 400, height: 400,
                            borderRadius: '50%', background: 'radial-gradient(circle, #FFC8B0 0%, #FFF8F1 75%)', zIndex: 1,
                        }} />
                        <img
                            src={happyGirl}
                            alt="Confident and happy student"
                            style={{
                                width: 700,
                                height: 'auto', borderRadius: 12, position: 'relative', zIndex: 2, right: '-120px'
                            }}
                            draggable={false}
                        />
                    </div>
                </div>
            </div>

            {/* --- GLOBAL STYLES & KEYFRAMES FOR ANIMATIONS --- */}
            <style>{`
                @keyframes floatAnimation {
                    0% { transform: translateY(0); }
                    50% { transform: translateY(-12px); }
                    100% { transform: translateY(0); }
                }
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes move {
                    0% { transform: translate(0, 0) scale(1); }
                    25% { transform: translate(20px, 40px) scale(1.1); }
                    50% { transform: translate(-30px, -10px) scale(1); }
                    75% { transform: translate(10px, -30px) scale(1.1); }
                    100% { transform: translate(0, 0) scale(1); }
                }
            `}</style>
        </section>
    );
}

// Tag Button component now accepts delay and other style props
const TagBtn = ({ children, delay, style }) => (
  <span
    style={{
      background: 'linear-gradient(160.41deg, #FFF 35%, #FFE6DB 85%)',
      border: '0.7px solid #FFD3BD',
      boxShadow: '0 1.5px 6px #F7D8CB, 0 0.5px 0.5px #FFB091',
      borderRadius: 13,
      fontFamily: 'Poppins, Arial, sans-serif',
      fontWeight: 500,
      fontSize: 20,
      color: '#2C2C2C',
      padding: '10px 20px',
      textAlign: 'center',
      minWidth: 220,
      cursor: 'pointer',
      transition: 'all 0.3s cubic-bezier(.38,1.66,.77,1.03)',
      animation: `floatAnimation 8s ease-in-out infinite`,
      animationDelay: delay, // Apply the unique delay
      display: 'inline-block',
      ...style, // Merge passed styles for positioning
    }}
    onMouseEnter={e => {
      e.currentTarget.style.background = '#FA7E2A';
      e.currentTarget.style.color = 'white';
      e.currentTarget.style.boxShadow = '0 6px 22px rgba(250, 126, 42, 0.5), 0 1px 2px #FFB091';
      e.currentTarget.style.transform = 'translateY(-5px) scale(1.04)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.background = 'linear-gradient(160.41deg, #FFF 35%, #FFE6DB 85%)';
      e.currentTarget.style.color = '#2C2C2C';
      e.currentTarget.style.boxShadow = '0 1.5px 6px #F7D8CB, 0 0.5px 0.5px #FFB091';
      e.currentTarget.style.transform = 'translateY(0) scale(1)';
    }}
  >
    {children}
  </span>
);

export default AboutUs;
