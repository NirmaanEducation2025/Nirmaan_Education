import React, { useEffect, useRef, useState } from "react";
import schoolLogo1 from "@/assets/scllogo1.jpg";
import schoolLogo2 from "@/assets/scllogo2.jpg";
import wavyBackground from "@/assets/wavy-background.jpg";
import quoteUp from "@/assets/quote-up.jpg";
import avatar1 from "@/assets/avatar1.jpg";
import avatar2 from "@/assets/avatar2.jpg";
import avatar3 from "@/assets/avatar3.jpg";

const StarIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="#FC6B2D"
    stroke="#FC6B2D"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-star"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const testimonialsData = [
  {
    name: "Aarav Sharma",
    title: "School Principal",
    rating: 5,
    avatar: avatar1,
    text: "The Nirmaan platform has genuinely transformed our classrooms. We've seen a measurable increase in student engagement and critical thinking."
  },
  {
    name: "Riya Verma",
    title: "Parent",
    rating: 5,
    avatar: avatar2,
    text: "My daughter is more confident and articulate. The focus on communication skills is exactly what she needed."
  },
  {
    name: "Manoj Kumar",
    title: "Educator",
    rating: 4,
    avatar: avatar3,
    text: "As a teacher, the AI tools for personalized learning are a game-changer. It helps me support students who need extra attention."
  },
  {
    name: "Sneha Patel",
    title: "Parent",
    rating: 5,
    avatar: avatar2, // Reuse avatar1 or replace with avatar4 if available
    text: "The detailed report cards measure curiosity and EQ — far more meaningful than just grades."
  }
];

const TestimonialCard = ({ name, title, rating, text, avatar }) => (
  <div
    className="flex-shrink-0 w-[380px] h-[340px] bg-white bg-opacity-[0.03] backdrop-blur-md rounded-xl p-8 flex flex-col justify-between border border-white border-opacity-10 relative overflow-hidden"
    style={{
      boxShadow: "0 8px 32px 0 rgba(0,0,0,0.1)",
      minWidth: "380px"
    }}
  >
    <img
      src={quoteUp}
      alt="Quote"
      className="absolute -top-4 -left-4 w-24 h-auto opacity-5 select-none z-0"
    />

    <div className="relative z-10">
      <div className="flex items-center mb-4">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-[#FC6B2D]"
        />
        <div>
          <p className="text-white font-urbanist font-bold text-lg">{name}</p>
          <p className="text-gray-400 font-urbanist text-sm">{title}</p>
        </div>
      </div>
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <StarIcon key={i} />
        ))}
        <span className="text-white ml-2">{rating.toFixed(1)}</span>
      </div>
      <p className="text-gray-300 font-urbanist text-base leading-relaxed">
        {text}
      </p>
    </div>

    <img
      src={quoteUp}
      alt="Quote"
      className="absolute -bottom-4 -right-4 w-24 h-auto opacity-5 rotate-180 select-none z-0"
    />
  </div>
);

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="testimonials"
      className="relative py-20 lg:py-32 overflow-hidden"
      ref={sectionRef}
      style={{
        backgroundImage: `url(${wavyBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 lg:px-8 text-center">
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold font-poppins text-white">
            Testimonials That{" "}
            <span className="text-[#FC6B2D]">Speak to My Results</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-4">
            Hear from educators, parents, and students who have experienced
            meaningful transformation with our platform.
          </p>
        </div>

        <div className="flex pb-4 overflow-hidden">
          <div className="animate-marquee">
            {[...testimonialsData, ...testimonialsData].map((t, index) => (
              <div key={index} className="mx-4">
                <TestimonialCard {...t} />
              </div>
            ))}
          </div>
        </div>

        {/* Centered Logos */}
        <div className="mt-20 flex justify-center items-center gap-24 lg:gap-32">
          <img
            src={schoolLogo1}
            alt="School Logo 1"
            className="h-44 w-auto object-contain transition-transform duration-300 hover:scale-110"
            style={{ filter: "grayscale(0%) brightness(100%)" }}
          />
          <img
            src={schoolLogo2}
            alt="School Logo 2"
            className="h-44 w-auto object-contain transition-transform duration-300 hover:scale-110"
            style={{ filter: "grayscale(0%) brightness(100%)" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
