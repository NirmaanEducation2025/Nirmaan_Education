import React, { useEffect, useState } from "react";
import heroImage from "@/assets/hero-image.jpg";
import divider1 from "@/assets/divider1.jpg";
import ellipseBg from "@/assets/back.jpg";

const animatedWords = [
  "Future Leaders",
  "Changemakers",
  "Global Citizens",
  "Innovators",
  "Critical Thinkers",
  "Confident Communicators",
  "Empathetic Humans",
  "Creative Problem-Solvers",
];

const Star = ({
  className,
  size,
  style = {},
}: {
  className?: string;
  size?: number;
  style?: React.CSSProperties;
}) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#FC6B2D"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ opacity: 0.6, ...style }}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

const AnimatedWord = ({ word, onFinished }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const TYPING_SPEED = 100;
  const ERASING_SPEED = 70;

  useEffect(() => {
    let timer;
    if (isTyping && displayedText.length < word.length) {
      timer = setTimeout(
        () => setDisplayedText(word.substring(0, displayedText.length + 1)),
        TYPING_SPEED
      );
    } else if (isTyping && displayedText.length === word.length) {
      timer = setTimeout(() => setIsTyping(false), 1000);
    } else if (!isTyping && displayedText.length > 0) {
      timer = setTimeout(
        () => setDisplayedText(word.substring(0, displayedText.length - 1)),
        ERASING_SPEED
      );
    } else {
      if (onFinished) onFinished();
    }
    return () => clearTimeout(timer);
  }, [displayedText, isTyping, word, onFinished]);

  useEffect(() => {
    setDisplayedText("");
    setIsTyping(true);
  }, [word]);

  return (
    <span style={{ color: "#FC6B2D", fontWeight: 600 }}>
      {displayedText}
      {isTyping && <span className="typing-cursor">|</span>}
    </span>
  );
};

const HeroSection = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const currentWord = animatedWords[wordIndex];
  const moveToNextWord = () =>
    setWordIndex((prev) => (prev + 1) % animatedWords.length);

  return (
    <section
      style={{
        position: "relative",
        background: "#FFF8F1",
        width: "100%",
        //minHeight: "90vh",
        overflow: "hidden",
        fontFamily: "Urbanist, sans-serif",
        display: "flex",
        alignItems: "center",
        paddingTop: "1rem", // ✅ Reduced top padding
        paddingBottom: "2rem", // ✅ Slight bottom padding only
        marginTop: "-60px", // ✅ Lifts entire section up closer to navbar
      }}
    >
      <style>{`
        @keyframes blink { 
          0%, 100% { opacity: 1; } 
          50% { opacity: 0; } 
        }
        .typing-cursor {
          display: inline-block;
          animation: blink 0.7s infinite;
          margin-left: 2px;
          color: #FC6B2D;
        }
      `}</style>

      {/* Stars */}
      <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none">
        <Star className="absolute top-[10%] left-[8%]" size={26} />
        <Star className="absolute top-[40%] right-[8%]" size={24} />
        <Star className="absolute bottom-[25%] left-[12%]" size={22} />
        <Star className="absolute bottom-[15%] right-[10%]" size={28} />
      </div>

      {/* Content */}
      <div className="mx-auto px-4 lg:px-8 relative z-20 flex flex-col lg:flex-row items-center justify-between max-w-7xl w-full gap-10">
        {/* LEFT - Girl with ellipse */}
        <div className="relative flex justify-center items-end w-full lg:w-1/2">
          <img
            src={ellipseBg}
            alt="ellipse background"
            className="absolute z-0"
            style={{
              width: "1500px",
              height: "500px",
              top: "48%",
              left: "50%",
              transform: "translate(-50%, -48%)",
              objectFit: "contain",
              pointerEvents: "none",
            }}
          />

          <img
            src={heroImage}
            alt="Smiling student"
            className="relative z-10"
            style={{
              width: "100%",
              maxWidth: "430px",
              height: "auto",
              objectFit: "contain",
              transform: "translateY(10px)", // ✅ Slight upward lift
            }}
          />
        </div>

        {/* RIGHT - Text content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left relative z-20">
          <h1
            style={{
              fontWeight: 700,
              fontSize: "clamp(2.2rem, 4vw, 4rem)",
              lineHeight: "1.15",
              color: "#000",
            }}
          >
            Shaping a Generation That{" "}
            <span
              style={{
                color: "#FC6B2D",
                display: "inline-block",
                fontStyle: "italic",
              }}
            >
              Thinks, Feels, and Leads.
            </span>
          </h1>

          <p
            style={{
              color: "#374151",
              marginTop: "1.2rem",
              marginBottom: "2rem",
              fontSize: "1.05rem",
              lineHeight: "1.7",
              maxWidth: "520px",
              fontWeight: 400,
              marginInline: "auto",
            }}
          >
            Nirmaan is transforming how schools nurture young minds — going
            beyond traditional academics/textbooks to build confident,
            emotionally intelligent, and future-ready students.
          </p>

          <div
            style={{
              fontSize: "1.5rem",
              fontWeight: 600,
              color: "#000",
            }}
          >
            We are nurturing{" "}
            <AnimatedWord
              key={currentWord}
              word={currentWord}
              onFinished={moveToNextWord}
            />
          </div>
        </div>
      </div>

      {/* Divider */}
      <img
        src={divider1}
        alt="Divider"
        style={{
          position: "absolute",
          bottom: "0",
          left: 0,
          width: "100%",
          height: "6vw",
          objectFit: "cover",
          zIndex: 25,
          pointerEvents: "none",
        }}
      />
    </section>
  );
};

export default HeroSection;
