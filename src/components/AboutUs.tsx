import React from "react";
import displeasedGirl from "@/assets/girl2.jpg";
import happyGirl from "@/assets/girl3.jpg";
import logo from "@/assets/logo.jpg";

const handleScrollToContact = () => {
  const contact = document.getElementById("contact");
  if (contact) contact.scrollIntoView({ behavior: "smooth" });
};

const ABOUT_SIZES = {
  imgWidth: 440,
  imgHeight: 360,
  pointFont: 17,
  listGap: 16,
  bulletSize: 10,
  columnWidth: 360,
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

const ListItem = ({ text, isSolution, isLast }) => (
  <div
    className="flex relative items-start"
    style={{
      flexDirection: isSolution ? "row" : "row-reverse",
      marginBottom: ABOUT_SIZES.listGap,
      width: ABOUT_SIZES.columnWidth,
    }}
  >
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

    {!isLast && (
      <div
        style={{
          position: "absolute",
          [isSolution ? "left" : "right"]:
            ABOUT_SIZES.bulletSize / 2 + "px",
          top: 22,
          height: "calc(100% - 4px)",
          width: "2px",
          backgroundColor: isSolution ? "#FFC7A8" : "#BFBFBF",
        }}
      />
    )}
  </div>
);

const AboutUs = () => {
  return (
    <section id="about" className="font-urbanist">

      {/* ==================== MOBILE VERSION ==================== */}
      <div className="lg:hidden">

        {/* PROBLEM */}
        <div className="bg-white px-6 py-10">
          <h3 className="text-center text-lg font-bold italic text-gray-500">
            - The Problem -
          </h3>

          <img src={displeasedGirl} className="w-full max-w-xs mx-auto mt-5" />

          <h2 className="text-2xl font-bold text-center mt-4 leading-snug">
            The ultimate goal of education isn’t good marks — it’s a good life
            and a great career
          </h2>

          <p className="italic text-center text-gray-600 mt-2">
            Unfortunately, Our Education System
          </p>

          <div className="mt-6">
            {systemIssues.map((item, i) => (
              <ListItem key={i} text={item} />
            ))}
          </div>

          <p className="mt-4 text-center italic font-semibold text-gray-700">
            Leading to Low Confidence, poor problem-solving, stress &
            unemployable graduates.
          </p>
        </div>

        {/* SOLUTION */}
        <div className="bg-orange-50 px-6 py-10 mt-8">
          <h3 className="text-center text-lg font-bold italic text-orange-600">
            - The Solution -
          </h3>

          <img src={happyGirl} className="w-full max-w-xs mx-auto mt-5" />

          <img src={logo} className="h-20 mx-auto my-3" />

          <p className="text-center font-semibold text-gray-800">
            Nirmaan partners with schools to complement academics with skills
            that truly matter.
          </p>

          <div className="mt-6">
            {solutionItems.map((item, i) => (
              <ListItem key={i} text={item} isSolution />
            ))}
          </div>

          <p className="mt-4 text-center italic font-semibold text-gray-700">
            We shape{" "}
            <span className="text-orange-600 font-bold">
              future-ready leaders
            </span>{" "}
            with confidence, curiosity & 21st-century skills.
          </p>
        </div>

        {/* CTA */}
        <div className="py-10 flex justify-center">
          <button
            onClick={handleScrollToContact}
            className="px-8 py-4 bg-orange-500 text-white font-bold rounded-xl"
          >
            Explore Partnership Opportunities
          </button>
        </div>
      </div>

      {/* ==================== DESKTOP VERSION ==================== */}
      <div
        className="hidden lg:block py-20 relative overflow-visible"
        style={{
          background: "linear-gradient(to right, #ffffff 50%, #FFF1E6 50%)",
        }}
      >

        {/* Edge images */}
        <img
          src={displeasedGirl}
          className="absolute left-0 top-1/2 -translate-y-1/2 grayscale object-contain"
          style={{ width: ABOUT_SIZES.imgWidth, height: ABOUT_SIZES.imgHeight }}
        />

        <img
          src={happyGirl}
          className="absolute right-0 top-1/2 -translate-y-1/2 object-contain"
          style={{ width: ABOUT_SIZES.imgWidth, height: ABOUT_SIZES.imgHeight }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          {/* Header row */}
          <div className="flex justify-between items-start gap-10">
            <div className="w-1/2 text-center">
              <p className="italic text-lg font-bold text-gray-500">
                - The Problem -
              </p>

              <h2 className="text-4xl font-bold leading-tight mt-2">
                The ultimate goal of education isn’t good marks — it’s a good
                life and a great career
              </h2>

              <p className="italic text-lg text-gray-600 mt-2">
                Unfortunately, Our Education System
              </p>
            </div>

            <div className="w-1/2 text-center">
              <p className="italic text-lg font-bold text-orange-600">
                - The Solution -
              </p>

              <img src={logo} className="mx-auto h-20 my-2" />

              <p className="text-lg font-semibold text-gray-800">
                Nirmaan partners with schools to complement academics with
                skills that truly matter.
              </p>
            </div>
          </div>

          {/* Main content row */}
          <div className="flex justify-between items-start gap-20 mt-14 flex-nowrap">

            {/* LEFT POINTS */}
            <div className="w-1/2 min-w-[520px] flex flex-col items-center relative">
              {systemIssues.map((text, i) => (
                <ListItem
                  key={i}
                  text={text}
                  isSolution={false}
                  isLast={i === systemIssues.length - 1}
                />
              ))}

              <p className="mt-6 text-base italic font-semibold text-gray-600 text-center max-w-md">
                Leading to Low Confidence, poor problem-solving, stress &
                unemployable graduates.
              </p>
            </div>

            {/* RIGHT POINTS */}
            <div className="w-1/2 min-w-[520px] flex flex-col items-center relative">
              {solutionItems.map((text, i) => (
                <ListItem
                  key={i}
                  text={text}
                  isSolution={true}
                  isLast={i === solutionItems.length - 1}
                />
              ))}

              <p className="mt-12 text-base italic font-semibold text-gray-600 text-center max-w-md">
                We shape{" "}
                <span className="text-[#FF4D01] font-bold">
                  future-ready leaders
                </span>{" "}
                with confidence, curiosity & 21st-century skills.
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
      </div>
    </section>
  );
};

export default AboutUs;
