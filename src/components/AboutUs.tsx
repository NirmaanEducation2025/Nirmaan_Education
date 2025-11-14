import React from 'react';
import displeasedGirl from '@/assets/girl2.jpg';
import happyGirl from '@/assets/girl3.jpg';
import logo from '@/assets/logo.jpg';

const handleScrollToContact = () => {
  const contact = document.getElementById("contact");
  if (contact) {
    contact.scrollIntoView({ behavior: "smooth" });
  }
};

const systemIssues = [
  "Focused only on academics",
  "Theory-heavy lessons, No hands-on learning",
  "Over reliance Rote Learning",
  "One-size-fits-all approach",
  "Teacher talks, students listen",
  "Nurtures exam takers",
  "Marks define success",
  "Learning ends at exams",
];

const solutionItems = [
  "Holistic development, not just academics",
  "Practical skills, Hands-on learning",
  "Focus on conceptual understanding",
  "Personalized learning paths",
  "Student-centric, interactive sessions",
  "Nurtures problem solvers",
  "Skills define success",
  "Learning is a lifelong process",
];

const ListItem = ({ text, isSolution = false, isLast = false }) => {
  const bulletColor = isSolution ? '#FF4D01' : '#A3A2A2';
  const lineColor = isSolution ? '#FFDDCB' : '#A3A2A2';
  const textColor = isSolution ? 'text-black' : 'text-gray-700';
  const textAlign = isSolution ? 'text-left' : 'text-right';
  const flexDirection = isSolution ? 'row' : 'row-reverse';

  return (
    <div
      className="flex items-start w-full relative"
      style={{
        flexDirection: flexDirection,
        marginBottom: '16px',
      }}
    >
      <div
        className="w-2 h-2 rounded-full flex-shrink-0 mt-2.5"
        style={{
          backgroundColor: bulletColor,
          marginRight: isSolution ? '12px' : '0',
          marginLeft: isSolution ? '0' : '12px',
          position: 'relative',
          zIndex: 2,
        }}
      />
      <span
        className={`flex-1 text-lg font-medium leading-normal ${textColor} ${textAlign}`}
        style={{
          fontFamily: 'Urbanist, sans-serif',
          wordBreak: 'break-word',
          fontWeight: 500,
        }}
      >
        {text}
      </span>
      {!isLast && (
        <div
          style={{
            position: 'absolute',
            [isSolution ? 'left' : 'right']: '3.5px',
            top: '16px',
            height: 'calc(100% + 4px)',
            width: '1px',
            backgroundColor: lineColor,
            zIndex: 1,
          }}
        />
      )}
    </div>
  );
};

const AboutUs = () => {
  return (
    <section
      id="about"
      className="w-full relative overflow-hidden"
      style={{
        background: 'linear-gradient(to right, white 50%, #FFF1E6 50%)',
        fontFamily: 'Urbanist, sans-serif',
        padding: '80px 0 60px',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row justify-center mt-10 gap-4">
          {/* LEFT SIDE */}
          <div className="w-full lg:w-1/2 flex flex-col items-end relative p-8 lg:p-12">
            <div className="w-full text-center lg:text-right mb-10 lg:mb-0">
              <p className="italic font-bold text-xl mb-2 text-gray-500">- The Problem -</p>
              <h2 className="font-bold text-3xl md:text-4xl leading-tight text-black mx-auto lg:ml-auto lg:mr-0" style={{ maxWidth: '480px' }}>
                The ultimate goal of education isn’t good marks <br /> — it’s a good life and a great career
              </h2>
              <p className="italic font-normal text-lg text-gray-700 mt-4">Unfortunately, Our Education System</p>
            </div>

            <div className="w-full flex justify-end items-start relative mt-12">
              <div className="absolute top-0 -left-24 z-0">
                <img src={displeasedGirl} alt="Displeased student" className="w-80 h-auto object-cover grayscale" draggable={false} />
              </div>

              <div className="w-full max-w-[360px] relative z-20 mr-8">
                {systemIssues.map((issue, index) => (
                  <ListItem key={index} text={issue} isSolution={false} isLast={index === systemIssues.length - 1} />
                ))}
              </div>
            </div>

            <p className="mt-8 text-base italic font-semibold text-center lg:text-right w-full px-8 text-gray-700 max-w-[420px] ml-auto leading-6">
              Leading to Low Confidence, Poor Problem-Solving, poor communication, unhealthy, stressed, stripped of curiosity & Unemployable Graduates
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full lg:w-1/2 flex flex-col items-start relative p-8 lg:p-12">
            <div className="w-full text-center lg:text-left mb-10 lg:mb-0">
              <p className="italic font-bold text-xl mb-2 text-[#FF4D01]">- The Solution -</p>
              <div className="flex justify-center lg:justify-start mb-4">
                <img src={logo} alt="Nirmaan Logo" className="h-16 w-auto" />
              </div>
              <p className="text-lg text-black leading-relaxed font-medium max-w-[600px]">
                Nirmaan partners with schools to complement academics with skills that truly matter for life and career — making education holistic, measurable, and future-ready.
              </p>
            </div>

            <div className="w-full flex justify-start items-start relative mt-12">
              <div className="absolute top-0 -right-24 z-0">
                <img src={happyGirl} alt="Happy student" className="w-80 h-auto object-cover" draggable={false} />
              </div>

              <div className="w-full max-w-[360px] relative z-20 ml-8">
                {solutionItems.map((issue, index) => (
                  <ListItem key={index} text={issue} isSolution={true} isLast={index === systemIssues.length - 1} />
                ))}
              </div>
            </div>

            <p className="mt-8 text-base italic font-semibold text-center lg:text-left w-full px-8 text-gray-700 max-w-[420px] mr-auto leading-6">
              We shape your students into{' '}
              <span className="font-extrabold text-[#FF4D01]">well rounded, future-ready leaders</span> with confidence, curiosity, emotional intelligence, and social skills.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={handleScrollToContact}
            style={{
              background: 'linear-gradient(90deg, #FF8C00 0%, #FF6B00 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              padding: '14px 40px',
              fontSize: '18px',
              fontWeight: '700',
              cursor: 'pointer',
              fontFamily: 'Urbanist, sans-serif',
              boxShadow: '0 4px 15px rgba(255, 107, 0, 0.4)',
            }}
            className="hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-orange-300"
          >
            Explore Partnership Opportunities
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
