import React from 'react';

// NOTE: Placeholder asset is used below to resolve a compilation error.
import highlightsCollageImage from '@/assets/Nirmaanwhyus.jpg'; 


const OurProgramHighlights = () => (
  // Section is now full-width to allow the background to span the entire screen
  <section
    id="highlights"
    style={{
      position: 'relative',
      width: '100%',
      background: '#FFF8F1',
      padding: '80px 24px',
      overflow: 'hidden', // Contains the background animation
    }}
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
    `}</style>

    {/* Centered container for the content */}
    <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative', 
        zIndex: 1 
    }}>
        {/* Title at the top */}
        <h2 style={{
          fontFamily: 'Urbanist, Arial, sans-serif',
          fontWeight: 700,
          fontSize: '4rem',
          color: '#FF4D01',
          marginBottom: '40px',
        }}>
          Nirmaan Promise
        </h2>

        {/* Image directly underneath the title */}
        <div>
          <img 
            src={highlightsCollageImage}
            alt="Nirmaan Program Highlights Collage"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '24px',
              boxShadow: '0 8px 32px rgba(228, 147, 61, 0.15)',
            }}
          />
        </div>
    </div>
  </section>
);

export default OurProgramHighlights;

