import React from 'react';
import { Users, BookOpen, Brain } from 'lucide-react';

// Import image assets correctly
import commImage from '@/assets/commu.jpg';
import lifeImage from '@/assets/lifee.jpg';
import skillsImage from '@/assets/skill.jpg';

// --- HoverSkillCard Component Definition ---
const HoverSkillCard = ({ image, title, description, icon, features }) => (
    <div className="group relative w-full max-w-sm h-[500px] bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl">
        {/* Background Image */}
        <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

        {/* Content Container */}
        <div className="relative h-full p-6 flex flex-col justify-end text-white text-left">
            {/* Visible Content: Fades out and moves up on hover to prevent overlap */}
            <div className="transition-all duration-500 ease-in-out group-hover:-translate-y-96 group-hover:opacity-0">
                <div className="flex items-center gap-4 mb-3">
                    <div className="bg-orange-500/80 p-3 rounded-full">
                        {icon}
                    </div>
                    <h3 className="text-2xl font-bold font-poppins">{title}</h3>
                </div>
                <p className="font-urbanist text-lg opacity-90">{description}</p>
            </div>
            
            {/* Hidden Content (Revealed on Hover) */}
            <div className="absolute bottom-0 left-0 w-full p-6 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 transform translate-y-10 group-hover:translate-y-0">
                <ul className="space-y-1 mt-4">
                    {/* Display all features and add hover effect to each point */}
                    {features.map((feature, i) => (
                        <li key={i} className="text-base font-urbanist text-gray-200 list-disc list-inside transition-colors duration-200 hover:text-orange-400 cursor-pointer">
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
);


const programData = [
  {
    title: "Communication Skills",
    description: "Strengthening solid foundations in communication and language skills.",
    icon: <Users className="w-8 h-8 text-white" />,
    features: [
      "Public Speaking", "Formal and informal Communication", "Active listening",
      "Critical thinking", "Debates", "Essay writing",
      "Non-verbal Communication", "Everyday Communication", "Phonics"
    ],
    image: commImage,
  },
  {
    title: "Life Skills",
    description: "Equipping students with practical skills for everyday success.",
    icon: <BookOpen className="w-8 h-8 text-white" />,
    features: [
      "Entrepreneurship", "Financial Literacy", "Time Management", "Teamwork & Leadership",
      "Public Speaking", "Problem Solving & Decision Making", "Social-Emotional learning",
      "Creativity", "Civic Sense", "Empathy", "Health & Hygiene"
    ],
    image: lifeImage,
  },
  {
    title: "21st Century Skills",
    description: "AI/ML, Robotics, & STEM coding for future readiness.",
    icon: <Brain className="w-8 h-8 text-white" />,
    features: [
      "AI Education for Academics, creativity and productivity", "Ai for Creative Writing & Learning",
      "Robotics", "STEM Education", "Block based coding", "Digital Literacy & Awareness",
      "Cross-Skill 21st-Century Activities"
    ],
    image: skillsImage,
  },
];


const Programs = () => (
  <section id="programs" className="relative py-20 lg:py-32 bg-[#FFF8F1] scroll-mt-16 overflow-hidden">
    {/* --- ANIMATED BACKGROUND --- */}
    <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <div style={{ position: 'absolute', width: '80px', height: '80px', background: 'rgba(255, 126, 42, 0.1)', borderRadius: '50%', animation: 'move 15s linear infinite', top: '20%', left: '10%' }} />
        <div style={{ position: 'absolute', width: '120px', height: '120px', background: 'rgba(255, 126, 42, 0.08)', borderRadius: '50%', animation: 'move 20s linear infinite reverse', top: '50%', left: '80%' }} />
        <div style={{ position: 'absolute', width: '60px', height: '60px', background: 'rgba(255, 126, 42, 0.12)', borderRadius: '50%', animation: 'move 25s linear infinite', top: '80%', left: '30%' }} />
        <div style={{ position: 'absolute', width: '150px', height: '150px', background: 'rgba(255, 126, 42, 0.07)', borderRadius: '50%', animation: 'move 18s linear infinite reverse', top: '10%', left: '90%'}} />
    </div>

    {/* CSS Keyframe Animations */}
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
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .program-card-animation {
            animation: fadeInUp 0.8s ease-out forwards;
            opacity: 0;
        }
    `}</style>
    
    <div className="relative max-w-[1400px] mx-auto px-4 text-center z-10">
      <h2 className="text-3xl lg:text-5xl font-bold mb-4 font-poppins text-[#FF4D01] tracking-tight">
        Our Core Programs
      </h2>
      <p className="text-xl font-urbanist font-bold text-[#FF4D01] mb-12">
        We teach what students need most but textbooks fail to teach.
      </p>
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

