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

const SCALE = 0.78;   // 0.78 = 22% reduction. Change to 0.70, 0.85, etc.

// ========================== CONTROL PANEL ==========================
const ABOUT_SIZES = {
  imgWidth: 440,           // bigger & placed at screen edges
  imgHeight: 360,
  imgOffsetY: 20,          // vertical spacing
  pointFont: 17,
  listGap: 16,
  bulletSize: 10,
  columnWidth: 360,
};
// ==================================================================

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

const ListItem = ({ text, isSolution, isLast }) => {
  return (
    <div
      className="flex relative items-start"
      style={{
        flexDirection: isSolution ? "row" : "row-reverse",
        marginBottom: ABOUT_SIZES.listGap,
        width: ABOUT_SIZES.columnWidth,
      }}
    >
      {/* Bullet */}
      <div
        style={{
          width: ABOUT_SIZES.bulletSize,
          height: ABOUT_SIZES.bulletSize,
          borderRadius: "50%",
          marginTop: 6,
          backgroundColor: isSolution ? "#FF4D01" : "#A3A2A2",
          marginLeft: isSolution ? 0 : 12,
          marginRight: isSolution ? 12 : 0,
        }}
      />

      {/* Text */}
      <p
        className="leading-tight"
        style={{
          fontSize: ABOUT_SIZES.pointFont,
          color: isSolution ? "#000" : "#555",
          fontFamily: "Urbanist, sans-serif",
          textAlign: isSolution ? "left" : "right",
        }}
      >
        {text}
      </p>

      {/* Connecting line */}
      {!isLast && (
        <div
          style={{
            position: "absolute",
            [isSolution ? "left" : "right"]: ABOUT_SIZES.bulletSize / 2 + "px",
            top: 22,
            height: "calc(100% - 4px)",
            width: "2px",
            backgroundColor: isSolution ? "#FFC7A8" : "#BFBFBF",
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
      className="w-full py-20 font-urbanist relative overflow-hidden"
      style={{
        background: "linear-gradient(to right, #fff 50%, #FFF1E6 50%)",
      }}
    >

      {/* LEFT EDGE IMAGE */}
      <img
        src={displeasedGirl}
        alt="Displeased student"
        className="absolute left-0 top-1/2 transform -translate-y-1/2 grayscale object-contain hidden lg:block"
        style={{
          width: ABOUT_SIZES.imgWidth,
          height: ABOUT_SIZES.imgHeight,
        }}
      />

      {/* RIGHT EDGE IMAGE */}
      <img
        src={happyGirl}
        alt="Happy student"
        className="absolute right-0 top-1/2 transform -translate-y-1/2 object-contain hidden lg:block"
        style={{
          width: ABOUT_SIZES.imgWidth,
          height: ABOUT_SIZES.imgHeight,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ================= HEADER – Equal for both sides ================ */}
        <div className="flex justify-between items-start gap-10">

          {/* LEFT HEADER */}
          <div className="w-1/2 text-center">
            <p className="italic text-lg font-bold text-gray-500">- The Problem -</p>

            <h2 className="text-4xl font-bold leading-tight mt-2">
              The ultimate goal of education isn’t good marks — it’s a good life and a great career
            </h2>

            <p className="italic text-lg text-gray-600 mt-2">
              Unfortunately, Our Education System
            </p>
          </div>

          {/* RIGHT HEADER */}
          <div className="w-1/2 text-center">
            <p className="italic text-lg font-bold text-[#FF4D01]">- The Solution -</p>

            <img src={logo} className="mx-auto h-20 mb-2" />

            <p className="text-[21px] font-semibold leading-snug text-gray-800 max-w-lg mx-auto">
              Nirmaan partners with schools to complement academics with skills that truly matter.
            </p>
          </div>

        </div>

        {/* ================= MAIN CONTENT ROW — PERFECT SYMMETRY ================= */}
        <div className="flex justify-between items-start gap-20 mt-14">

          {/* LEFT – Points only (Image moved to edge) */}
          <div className="w-1/2 flex flex-col items-center relative">

            <div>
              {systemIssues.map((text, i) => (
                <ListItem
                  key={i}
                  text={text}
                  isSolution={false}
                  isLast={i === systemIssues.length - 1}
                />
              ))}
            </div>

            <p className="mt-6 text-base italic font-semibold text-gray-600 text-center max-w-md">
              Leading to Low Confidence, poor problem-solving, stress & unemployable graduates.
            </p>
          </div>

          {/* RIGHT – Points only (Image at edge) */}
          <div className="w-1/2 flex flex-col items-center relative">

            <div>
              {solutionItems.map((text, i) => (
                <ListItem
                  key={i}
                  text={text}
                  isSolution={true}
                  isLast={i === solutionItems.length - 1}
                />
              ))}
            </div>

            <p className="mt-12 text-base italic font-semibold text-gray-600 text-center max-w-md">
              We shape <span className="text-[#FF4D01] font-bold">future-ready leaders</span> with confidence, curiosity & 21st-century skills.
            </p>
          </div>

        </div>

        {/* CTA BUTTON */}
<div className="mt-16 flex justify-center">
  <button
    onClick={handleScrollToContact}
    className="px-10 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl text-lg font-bold shadow-lg hover:scale-105 transition"
  >
    Explore Partnership Opportunities
  </button>
</div>


      </div>
    </section>
  );
};

export default AboutUs;
