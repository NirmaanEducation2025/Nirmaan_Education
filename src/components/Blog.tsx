import React, { useState, useEffect, useRef } from "react";
import { Download } from "lucide-react";
import prospectusImage from "@/assets/Prospectus.jpg";

const Prospectus: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting || isSubmitted) return;
    setIsSubmitting(true);
    console.log("Prospectus download request for email:", email);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setEmail("");
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section
      className="bg-[#FFF8F1] pt-32 pb-20 lg:pb-24"
      id="prospectus"
      ref={sectionRef}
    >
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
          opacity: 0;
        }
      `}</style>

      {/* ✅ Slimmer full-width orange section */}
      <div
        className="relative bg-[#E46016] py-8 overflow-visible flex flex-col lg:flex-row items-center justify-center gap-10"
        style={{
          width: "100vw",
          position: "relative",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
          paddingLeft: "6%",
          paddingRight: "6%",
        }}
      >
        {/* Left Column: Prospectus Image overlapping */}
        <div className="relative flex justify-center lg:justify-end w-full lg:w-1/2">
          {isVisible && (
            <img
              src={prospectusImage}
              alt="Nirmaan Prospectus Cover"
              className="rounded-2xl shadow-2xl w-full max-w-sm lg:max-w-md animate-fadeInUp object-cover"
              style={{
                position: "relative",
                top: "-70px", // slight lift
                zIndex: 5,
                borderRadius: "1rem",
              }}
            />
          )}
        </div>

        {/* Right Column: Text + Form */}
        <div
          className={`text-white text-center lg:text-left w-full lg:w-1/2 ${
            isVisible ? "animate-fadeInUp" : ""
          }`}
          style={{ animationDelay: "0.3s" }}
        >
          <p className="font-semibold tracking-widest text-sm mb-4 text-white/90">
            — DOWNLOAD THE PROSPECTUS
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold font-poppins mb-8 leading-tight">
            Download our prospectus to know more about our program and curriculum
          </h2>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-2 rounded-full flex items-center max-w-lg mx-auto lg:mx-0 shadow-lg"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-grow bg-transparent px-4 py-2 text-gray-700 focus:outline-none w-full"
              disabled={isSubmitting || isSubmitted}
            />
            <button
              type="submit"
              className="bg-[#D94E00] hover:bg-[#C34300] text-white font-semibold px-6 py-3 rounded-full transition-colors flex items-center gap-2 flex-shrink-0 disabled:bg-gray-400 disabled:cursor-not-allowed"
              disabled={isSubmitting || isSubmitted}
            >
              {isSubmitting ? (
                "Sending..."
              ) : isSubmitted ? (
                "Sent! ✔"
              ) : (
                <>
                  <Download className="w-5 h-5" />
                  <span>Download</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Prospectus;
