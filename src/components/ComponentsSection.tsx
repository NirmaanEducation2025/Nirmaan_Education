import React from 'react';
import { 
  CalendarDays,
  Package2,
  BarChart3,
  Users,
  Bot,
  BookOpen
} from 'lucide-react';

// ========================== CONTROL PANEL ==========================
const HIGHLIGHT_SIZES = {
  paddingTop: 30,          
  paddingBottom: 40,      

  gridGap: 22,
  cardPadding: 22,

  titleSize: "20px",
  descriptionSize: "15px",

  iconSize: 56,

  // ⭐ NEW: Hover Animation Controls  
  hoverLift: 16,           // how high it lifts
  hoverScale: 1.08,        // scale effect
  hoverShadow: "0 28px 55px rgba(0,0,0,0.22)",  // premium shadow
  hoverSpeed: "0.55s",     // speed of animation
};
// ================================================================

const componentsData = [
  {
    title: "Seamlessly Integrated with School Timetable",
    icon: <CalendarDays className="w-8 h-8" />,
    description: "Designed to fit within your existing curriculum — no extra load. No extra time, just extra value."
  },
  {
    title: "Activity-Based & Experiential Learning",
    icon: <Package2 className="w-8 h-8" />,
    description: "Every class is interactive, story-driven, and fun, making students fall in love with learning."
  },
  {
    title: "Holistic & Measurable Outcomes",
    icon: <BarChart3 className="w-8 h-8" />,
    description: "Beyond grades — measurable insights into IQ, EQ, communication & behavioral development."
  },
  {
    title: "Trained Expert Facilitators",
    icon: <Users className="w-8 h-8" />,
    description: "Delivered by vetted educators who bring empathy, engagement, and energy to every session."
  },
  {
    title: "AI-Enabled Personalized Learning",
    icon: <Bot className="w-8 h-8" />,
    description: "Our AI platform acts like a personal tutor for every learner — adapting to how they learn best."
  },
  {
    title: "Reinforced Learning through Handouts",
    icon: <BookOpen className="w-8 h-8" />,
    description: "Handouts & worksheets help students apply concepts, ensuring deeper retention and real-life understanding."
  }
];

const ProgramHighlights = () => {
  return (
    <section
      id="components"
      className="relative bg-[#FFF8F1] overflow-hidden font-urbanist"
      style={{
        paddingTop: HIGHLIGHT_SIZES.paddingTop,
        paddingBottom: HIGHLIGHT_SIZES.paddingBottom,
      }}
    >
      {/* Animations */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(25px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .highlight-card-animation {
          animation: fadeInUp 0.7s ease-out forwards;
          opacity: 0;
        }

        /* ⭐ PREMIUM HOVER CONTROLS */
        .card-hover {
          transition: all ${HIGHLIGHT_SIZES.hoverSpeed} ease;
        }
        .card-hover:hover {
          transform: translateY(-${HIGHLIGHT_SIZES.hoverLift}px) scale(${HIGHLIGHT_SIZES.hoverScale});
          box-shadow: ${HIGHLIGHT_SIZES.hoverShadow};
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold mb-3 text-[#FC6B2D] font-urbanist">
            Our Core Programs
          </h2>

          <p className="text-lg lg:text-xl max-w-3xl mx-auto font-medium text-black font-urbanist">
            We teach what students need most but textbooks fail to teach.
          </p>
        </div>

        {/* GRID */}
        <div
          className="grid md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: HIGHLIGHT_SIZES.gridGap }}
        >
          {componentsData.map((component, i) => (
            <div 
              key={component.title}
              className="bg-white rounded-2xl shadow-md card-hover highlight-card-animation"
              style={{
                padding: HIGHLIGHT_SIZES.cardPadding,
                animationDelay: `${i * 0.12}s`
              }}
            >
              {/* ICON BOX */}
              <div
                className="rounded-xl flex items-center justify-center text-white mb-5"
                style={{
                  width: HIGHLIGHT_SIZES.iconSize,
                  height: HIGHLIGHT_SIZES.iconSize,
                  background: '#FF4D01',
                }}
              >
                {component.icon}
              </div>

              {/* TITLE */}
              <h3
                className="font-bold mb-3 font-urbanist text-black"
                style={{
                  fontSize: HIGHLIGHT_SIZES.titleSize,
                }}
              >
                {component.title}
              </h3>

              {/* DESCRIPTION */}
              <p
                className="font-urbanist text-gray-600"
                style={{
                  fontSize: HIGHLIGHT_SIZES.descriptionSize,
                  lineHeight: "22px",
                }}
              >
                {component.description}
              </p>
            </div>
          ))}
        </div>

        {/* FOOTER TEXT */}
        <div className="text-center mt-6">
          <p className="text-2xl lg:text-3xl font-semibold font-urbanist text-black">
            Loved by Students ❤️, Trusted by Schools 🤝
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProgramHighlights;
