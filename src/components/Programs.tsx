import React from 'react';
import { Users, BookOpen, Brain } from 'lucide-react';

// Import image assets correctly
import commImage from '@/assets/comskills.jpg';
import lifeImage from '@/assets/lifeskills.jpg';
import skillsImage from '@/assets/21skills.jpg';

// ============================
// HOVER CARD COMPONENT
// ============================
const HoverSkillCard = ({ image, title, description, icon, features, tagline }) => (
  <div className="group relative w-full max-w-sm h-[500px] bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl">

    {/* Background Image */}
    <img 
      src={image} 
      alt={title} 
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />

    {/* Darker overlay for readability */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent transition-all duration-500 group-hover:backdrop-blur-sm"></div>

    {/* TEXT CONTAINER */}
    <div className="relative h-full p-6 flex flex-col justify-end text-white text-left">

      {/* === BEFORE HOVER === */}
      <div className="transition-all duration-500 ease-in-out group-hover:-translate-y-10 group-hover:opacity-0 group-hover:blur-sm">
        <div className="flex items-center gap-4 mb-3">
          <div className="bg-orange-500/80 p-3 rounded-full">
            {icon}
          </div>
          <h3 className="text-2xl font-bold font-poppins">{title}</h3>
        </div>

        <p className="font-urbanist text-lg opacity-90 leading-snug">
          {description}
        </p>
      </div>

      {/* === AFTER HOVER === */}
      <div className="absolute bottom-0 left-0 w-full p-6 transition-all duration-700 ease-out opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0">

        {/* Tagline Animated */}
        <h4 
          className="mb-4 animate-fadeUp"
          style={{
            fontFamily: 'Urbanist, sans-serif',
            fontStyle: 'italic',
            fontWeight: 700,
            fontSize: '24px',
            color: '#FC6B2D'
          }}
        >
          {tagline}
        </h4>

        {/* Features */}
        <ul className="space-y-2 mt-4">
          {features.map((feature, index) => (
            <li 
              key={index} 
              className="text-[16px] font-urbanist text-gray-200 list-disc list-inside transition-all duration-200 hover:text-orange-400 hover:translate-x-1 cursor-pointer"
            >
              {feature}
            </li>
          ))}
        </ul>

      </div>

    </div>

  </div>
);

// ============================
// PROGRAM DATA
// ============================
const programData = [
  {
    title: "Communication Skills",
    description: "Students who think clearly, express ideas effectively, and communicate with confidence grow into strong leaders — ready to stand out in school, career, and life.",
    icon: <Users className="w-8 h-8 text-white" />,
    features: [
      "Public Speaking", "Formal & Informal Communication", "Active Listening",
      "Critical Thinking", "Debates", "Essay Writing",
      "Non-verbal Communication", "Everyday Communication", "Phonics"
    ],
    image: commImage,
    tagline: "Because confident communication builds future leaders."
  },
  {
    title: "Life Skills",
    description: "Life skills help students thrive in career and life — building emotional intelligence, empathy, resilience, and responsible decision-making.",
    icon: <BookOpen className="w-8 h-8 text-white" />,
    features: [
      "Entrepreneurship", "Financial Literacy", "Time Management", "Teamwork & Leadership",
      "Public Speaking", "Problem Solving & Decision Making",
      "Social-Emotional Learning", "Creativity", "Civic Sense", "Empathy", "Health & Hygiene"
    ],
    image: lifeImage,
    tagline: "Grades show performance. Life skills build character."
  },
  {
    title: "21st Century Skills",
    description: "Students who can think, innovate, and work with technology gain the strongest advantage in the world of tomorrow.",
    icon: <Brain className="w-8 h-8 text-white" />,
    features: [
      "AI for Academics & Creativity", "Robotics", "STEM Education",
      "Block Based Coding", "Digital Literacy", "Cross-Skill Activities"
    ],
    image: skillsImage,
    tagline: "The world rewards those who can think, solve, and innovate."
  },
];

// ============================
// MAIN PROGRAMS SECTION
// ============================
const Programs = () => (
  <section id="programs" className="relative py-20 lg:py-32 bg-[#FFF8F1] scroll-mt-16 overflow-hidden">

    {/* Background Animation Bubbles */}
    <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
      <div className="bubble-1" />
      <div className="bubble-2" />
      <div className="bubble-3" />
      <div className="bubble-4" />
    </div>

    <style>{`
      @keyframes move {
        0% { transform: translate(0, 0) scale(1); }
        25% { transform: translate(20px, 40px) scale(1.1); }
        50% { transform: translate(-30px, -10px) scale(1); }
        75% { transform: translate(10px, -30px) scale(1.1); }
        100% { transform: translate(0, 0) scale(1); }
      }
      .bubble-1 { position:absolute;width:80px;height:80px;background:rgba(255,126,42,0.1);border-radius:50%;top:20%;left:10%;animation:move 15s linear infinite; }
      .bubble-2 { position:absolute;width:120px;height:120px;background:rgba(255,126,42,0.08);border-radius:50%;top:50%;left:80%;animation:move 20s linear infinite reverse; }
      .bubble-3 { position:absolute;width:60px;height:60px;background:rgba(255,126,42,0.12);border-radius:50%;top:80%;left:30%;animation:move 25s linear infinite; }
      .bubble-4 { position:absolute;width:150px;height:150px;background:rgba(255,126,42,0.07);border-radius:50%;top:10%;left:90%;animation:move 18s linear infinite reverse; }

      @keyframes fadeInUp {
        from { opacity:0; transform:translateY(30px); }
        to { opacity:1; transform:translateY(0); }
      }
      .program-card-animation { 
        animation: fadeInUp 0.8s ease-out forwards;
        opacity: 0;
      }
      @keyframes fadeUp {
        0% { opacity: 0; transform: translateY(10px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      .animate-fadeUp { animation: fadeUp 0.7s ease-out forwards; }
    `}</style>

    <div className="relative max-w-[1400px] mx-auto px-4 text-center z-10">
      <h2 className="text-3xl lg:text-5xl font-bold mb-4 font-poppins text-[#FF4D01] tracking-tight">
        Our Core Programs
      </h2>

      <p className="text-xl font-urbanist font-bold text-[#FF4D01] mb-12">
        We teach what students need most but textbooks fail to teach.
      </p>

      {/* Program Cards */}
      <div className="flex flex-col md:flex-row flex-wrap gap-8 justify-center items-stretch">
        {programData.map(({ image, ...props }, index) => (
          <div
            key={props.title}
            className="program-card-animation"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <HoverSkillCard image={image} {...props} />
          </div>
        ))}
      </div>
    </div>

  </section>
);

export default Programs;
