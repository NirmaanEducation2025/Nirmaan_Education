import React, { useEffect, useRef, useState } from 'react';
import heroImage from '@/assets/hero-image.jpg';
import vector1 from '@/assets/Vector-1.jpg';
import vector2 from '@/assets/Vector-2.jpg';
import quoteUp from '@/assets/quote-up.png';

const Hero = () => {
  const plusAiRef = useRef(null);
  const [headline1, setHeadline1] = useState('');
  const [headline2, setHeadline2] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  // Animation for the "+ AI" element
  useEffect(() => {
    let frameId;
    let direction = 1;
    let position = 0;
    const maxMovement = 15; // pixels
    const speed = -0.2; // Slowed down the animation speed

    const animate = () => {
      if (plusAiRef.current) {
        position += direction * speed;
        if (position > maxMovement || position < -maxMovement) {
          direction *= -1;
        }
        plusAiRef.current.style.transform = `translateY(${position}px)`;
      }
      frameId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frameId);
  }, []);

  // Looping typing animation for the headline
  useEffect(() => {
    const text1 = 'Redefining Indian Education through ';
    const text2 = 'Real Learning';
    const typingSpeed = 75;
    const erasingSpeed = 50;
    const pauseDuration = 3500; // 3.5-second pause

    let timeoutId;

    const handleTyping = () => {
      const fullText1 = headline1 + headline2;
      const fullText2 = text1 + text2;

      if (isTyping) {
        if (fullText1.length < fullText2.length) {
          if (headline1.length < text1.length) {
            setHeadline1(text1.slice(0, headline1.length + 1));
          } else {
            setHeadline2(text2.slice(0, headline2.length + 1));
          }
        } else {
          timeoutId = setTimeout(() => setIsTyping(false), pauseDuration);
        }
      } else {
        if (fullText1.length > 0) {
          if (headline2.length > 0) {
            setHeadline2(headline2.slice(0, -1));
          } else {
            setHeadline1(headline1.slice(0, -1));
          }
        } else {
          setIsTyping(true);
        }
      }
    };

    timeoutId = setTimeout(handleTyping, isTyping ? typingSpeed : erasingSpeed);

    return () => clearTimeout(timeoutId);
  }, [headline1, headline2, isTyping]);


  return (
    <section
      style={{
        position: 'relative',
        background: '#FFF8F1',
        minHeight: '900px',
        width: '100%', // Use 100% instead of 100vw for better compatibility
        overflow: 'hidden',
        fontFamily: 'Urbanist, sans-serif',
        padding: '2rem 0', // Add some padding
      }}
    >
      {/* --- ANIMATED BACKGROUND --- */}
      <div className="background-shapes" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: '80px', height: '80px', background: 'rgba(255, 126, 42, 0.1)', borderRadius: '50%', animation: 'move 15s linear infinite', top: '20%', left: '10%' }} />
          <div style={{ position: 'absolute', width: '120px', height: '120px', background: 'rgba(255, 126, 42, 0.08)', borderRadius: '50%', animation: 'move 20s linear infinite reverse', top: '50%', left: '80%' }} />
          <div style={{ position: 'absolute', width: '60px', height: '60px', background: 'rgba(255, 126, 42, 0.12)', borderRadius: '50%', animation: 'move 25s linear infinite', top: '80%', left: '30%' }} />
          <div style={{ position: 'absolute', width: '150px', height: '150px', background: 'rgba(255, 126, 42, 0.07)', borderRadius: '50%', animation: 'move 18s linear infinite reverse', top: '10%', left: '90%'}} />
      </div>

      <style>
        {`
          @keyframes floatAnimation { 0%, 100% { transform: translateY(0); filter: drop-shadow(0 10px 10px rgba(0, 0, 0, 0.15)); } 50% { transform: translateY(-20px); filter: drop-shadow(0 30px 15px rgba(0, 0, 0, 0.25)); } }
          @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
          @keyframes move { 0% { transform: translate(0, 0) scale(1); } 25% { transform: translate(20px, 40px) scale(1.1); } 50% { transform: translate(-30px, -10px) scale(1); } 75% { transform: translate(10px, -30px) scale(1.1); } 100% { transform: translate(0, 0) scale(1); } }
          .typing-cursor { font-weight: 400; animation: blink 1s infinite; color: #FF6B00; }
        `}
      </style>
      
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px', position: 'relative', height: '100%', minHeight: '800px'}}>
        {/* Radial orange behind image */}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '220px',
            transform: 'translateX(-50%)',
            width: '480px',
            height: '480px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, #ffc8b0 0%, #fff8f1 75%)',
            zIndex: 1,
          }}
        />

        {/* Vector 2 PNG */}
        <img
          src={vector2}
          alt=""
          style={{
            position: 'absolute',
            width: 'clamp(60px, 7vw, 101px)', // Responsive width
            top: '20%',
            left: '200px',
            zIndex: 30,
            pointerEvents: 'none',
          }}
          draggable={false}
        />

        {/* Vector 1 PNG */}
        <img
          src={vector1}
          alt=""
          style={{
            position: 'absolute',
            width: 'clamp(25px, 3vw, 40px)', // Responsive width
            top: '10%',
            right: '180px',
            border: '8px solid #FEB273',
            zIndex: 30,
            pointerEvents: 'none',
          }}
          draggable={false}
        />

        {/* Headline with Typing Animation */}
        <h1
          style={{
            position: 'absolute',
            top: '90px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '90%',
            maxWidth: '950px',
            minHeight: '154px',
            fontWeight: 600,
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', // Responsive font size
            lineHeight: 1.2,
            textAlign: 'center',
            color: '#000',
            letterSpacing: '-0.015em',
            zIndex: 10,
          }}
        >
          {headline1}
          <span style={{ color: '#FF6B00' }}>{headline2}</span>
          {isTyping && <span className="typing-cursor">|</span>}
        </h1>

        {/* + Sign and AI container with animation */}
        <div
          ref={plusAiRef}
          style={{
            position: 'absolute',
            top: '150px',
            right: '15%', // Responsive positioning
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            zIndex: 15,
            cursor: 'default',
          }}
        >
          <span
            style={{
              fontWeight: 600,
              fontSize: 'clamp(3rem, 6vw, 5rem)', // Responsive font size
              color: '#000',
              userSelect: 'none',
            }}
          >
            +
          </span>
          <span
            style={{
              fontFamily: '"Figma Hand", cursive',
              fontWeight: 700,
              fontSize: 'clamp(3rem, 6vw, 5rem)', // Responsive font size
              color: '#BF3A01',
              textShadow: '0px 4px 4px rgba(0,0,0,0.25)',
              userSelect: 'none',
            }}
          >
            AI
          </span>
        </div>

        {/* Hero Image with opening animation */}
        <img
          src={heroImage}
          alt="Learner"
          style={{
            position: 'absolute',
            left: '500px',
            transform: 'translateX(-50%)',
            top: '200px',
            width: 'clamp(300px, 30vw, 440px)', // Responsive width
            height: 'auto',
            zIndex: 18,
            userSelect: 'none',
            pointerEvents: 'none',
            animation: 'floatAnimation 4s ease-in-out infinite',
          }}
          draggable={false}
        />

        {/* Left Quote */}
        <div style={{ position: 'absolute', left: '5%', top: '270px', zIndex: 20, width: 'clamp(250px, 25vw, 370px)' }}>
            <img src={quoteUp} alt="" style={{ width: '74px', height: '64px' }} draggable={false} />
            <p style={{ marginTop: '1rem', fontWeight: 500, fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', color: '#344054' }}>
                We teach what students need most but textbooks fail to teach
            </p>
        </div>

        {/* Right Quote */}
        <div style={{ position: 'absolute', right: '50px', top: '370px', zIndex: 20, width: 'clamp(250px, 25vw, 370px)', textAlign: 'right' }}>
            <img src={quoteUp} alt="" style={{ width: '74px', height: '64px', marginLeft: 'auto' }} draggable={false} />
            <p style={{ marginTop: '1rem', fontWeight: 500, fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', color: '#344054' }}>
                An AI that truly understands your student and teaches in the way they understand and learn best.
            </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

