import React from 'react';
// FIGMA FIX: Using lucide-react icons that are visually similar to the reference
import { 
  CalendarDays, // For "Seamlessly Integrated"
  Package2,     // For "Activity-Based"
  BarChart3,    // For "Holistic & Measurable"
  Users,        // For "Trained Expert"
  Bot,          // For "AI-Enabled"
  BookOpen      // For "Reinforced Learning"
} from 'lucide-react';

const componentsData = [
  {
    title: "Seamlessly Integrated with School Timetable",
    icon: <CalendarDays className="w-8 h-8" />,
    description: "Designed to fit within your existing curriculum — no extra load. No extra time, just extra value."
  },
  {
    title: "Activity-Based & Experiential Learning",
    icon: <Package2 className="w-8 h-8" />,
    description: "Every class is interactive, story-driven, and filled with fun, making students fall in love with learning and look forward to every session."
  },
  {
    title: "Holistic & Measurable Outcomes",
    icon: <BarChart3 className="w-8 h-8" />,
    description: "Beyond grades — schools get detailed insights and report cards into students' IQ, EQ, communication & behavioral development."
  },
  {
    title: "Trained Expert Facilitators",
    icon: <Users className="w-8 h-8" />,
    description: "Sessions are delivered by experienced vetted educators who bring empathy, engagement, and energy to every classroom with their real world experience."
  },
  {
    title: "AI-Enabled Personalized Learning",
    icon: <Bot className="w-8 h-8" />,
    description: "Our AI platform acts like a personal tutor for every student — continuously tracking growth, and providing learning in the way they understand and learn best."
  },
  {
    title: "Reinforced Learning through Handouts",
    icon: <BookOpen className="w-8 h-8" />,
    description: "Each session includes thoughtfully designed handouts/worksheets that help students apply what they learn, ensuring deeper retention and real-life connection."
  }
];

const ProgramHighlights = () => {
  return (
    <section id="components" className="relative py-20 lg:py-32 bg-[#FFF8F1] overflow-hidden">
      
      {/* CSS Keyframe Animation for fade-in effect */}
      <style>{`
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
        .highlight-card-animation {
            animation: fadeInUp 0.6s ease-out forwards;
            opacity: 0;
        }
      `}</style>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl lg:text-5xl font-bold mb-4 tracking-tight"
            style={{ fontFamily: 'Urbanist, sans-serif', color: '#FC6B2D' }} // FIGMA FIX: Font and Color
          >
            Our Core Programs
          </h2>
          <p 
            className="text-xl max-w-3xl mx-auto"
            style={{ fontFamily: 'Urbanist, sans-serif', color: '#000000', fontWeight: 500 }} // FIGMA FIX: Font and Color
          >
            We teach what students need most but textbooks fail to teach.
          </p>
        </div>

        {/* --- Components Grid --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {componentsData.map((component, i) => (
            <div 
              key={component.title} 
              className="bg-white p-6 rounded-2xl shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.03] highlight-card-animation" // FIGMA FIX: Styles + Hover
              style={{ animationDelay: `${i * 0.1}s` }} // Staggered animation
            >
              {/* FIGMA FIX: Orange icon box */}
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center text-white mb-5"
                style={{ background: '#FF4D01' }}
              >
                {component.icon}
              </div>
              <h3 
                className="text-xl font-bold mb-3"
                style={{ fontFamily: 'Urbanist, sans-serif', color: '#000000' }} // FIGMA FIX: Font and Color
              >
                {component.title}
              </h3>
              <p 
                className="text-base"
                style={{ fontFamily: 'Urbanist, sans-serif', color: '#4B5563' }} // FIGMA FIX: Font and Color
              >
                {component.description}
              </p>
            </div>
          ))}
        </div>

        {/* --- Footer Text --- */}
        <div className="text-center mt-20">
          <p 
            className="text-3xl lg:text-4xl"
            style={{ fontFamily: 'Urbanist, sans-serif', color: '#000000', fontWeight: 600 }}
          >
            Loved by Students ❤️, Trusted by Schools 🤝
          </p>
        </div>

      </div>
    </section>
  );
};

export default ProgramHighlights;
