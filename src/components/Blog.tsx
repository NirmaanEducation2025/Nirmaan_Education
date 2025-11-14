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

      {/* ===================== PROSPECTUS SECTION ===================== */}
      <div
        className="relative bg-[#E46016] py-1 overflow-visible flex flex-col lg:flex-row items-center justify-center gap-10"
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
        {/* Left Image */}
        <div className="relative flex justify-center lg:justify-end w-full lg:w-1/2">
          {isVisible && (
            <img
              src={prospectusImage}
              alt="Nirmaan Prospectus Cover"
              className="rounded-2xl shadow-2xl w-full max-w-sm lg:max-w-md animate-fadeInUp object-cover"
              style={{
                position: "relative",
                top: "-70px",   // reduced height from earlier -70px
                zIndex: 5,
              }}
            />
          )}
        </div>

        {/* Text + Email */}
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
              {isSubmitting ? "Sending..." : isSubmitted ? "Sent ✔" : (
                <>
                  <Download className="w-5 h-5" />
                  <span>Download</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* ===================== ADVANCED BLOG SECTION ===================== */}

      <div className="max-w-7xl mx-auto px-6 mt-28 mb-20 font-urbanist">

        <h2 className="text-4xl lg:text-5xl font-bold text-center text-[#FF4D01] mb-6">
          Insights That Inspire Better Learning
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16 text-lg">
          Expert perspectives, research-backed strategies, and stories that help 
          parents & educators support every child's learning journey.
        </p>

        <style>{`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .fadeUp {
            animation: fadeUp 0.9s ease-out forwards;
            opacity: 0;
          }
        `}</style>

        <div className="grid lg:grid-cols-2 gap-14 fadeUp" style={{ animationDelay: "0.2s" }}>
          
          {/* Left — Featured Article */}
          <div className="relative group rounded-3xl overflow-hidden shadow-xl bg-white hover:shadow-2xl transition-all duration-300">
            <img
              src="https://images.pexels.com/photos/4143791/pexels-photo-4143791.jpeg"
              alt="Featured Blog"
              className="w-full h-[380px] object-cover group-hover:scale-105 transition-all duration-500"
            />

            <div className="absolute top-5 left-5 bg-[#FF4D01] text-white px-5 py-1.5 text-sm rounded-full shadow-md">
              Emotional Intelligence
            </div>

            <div className="p-8">
              <h3 className="text-3xl font-bold mb-4 leading-snug">
                Why Emotional Intelligence Will Shape the Next Generation of Leaders
              </h3>
              <p className="text-gray-600 text-lg mb-6">
                Research shows that children with higher emotional intelligence 
                perform better academically, socially, and professionally.
              </p>

              <button className="px-6 py-2 rounded-full bg-[#FF4D01] text-white font-semibold hover:bg-[#d44300] transition">
                Read More →
              </button>
            </div>
          </div>

          {/* Right — Mini Articles */}
          <div className="grid gap-10">

            {/* Card 1 */}
            <div className="flex gap-6 rounded-2xl bg-white shadow-lg p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <img
                src="https://images.pexels.com/photos/5212335/pexels-photo-5212335.jpeg"
                className="w-40 h-32 rounded-xl object-cover"
              />
              <div>
                <p className="text-sm text-[#FF4D01] font-semibold mb-1">
                  Personalized Learning
                </p>
                <h4 className="text-xl font-bold mb-2">
                  How AI Creates a Unique Learning Path For Every Child
                </h4>
                <p className="text-gray-600 text-sm">
                  Adaptive systems help students learn at their own pace.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex gap-6 rounded-2xl bg-white shadow-lg p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <img
                src="https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg"
                className="w-40 h-32 rounded-xl object-cover"
              />
              <div>
                <p className="text-sm text-[#FF4D01] font-semibold mb-1">
                  21st Century Skills
                </p>
                <h4 className="text-xl font-bold mb-2">
                  4 Essential Skills Every Child Must Develop Today
                </h4>
                <p className="text-gray-600 text-sm">
                  The world is changing — learn what skills matter most.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex gap-6 rounded-2xl bg-white shadow-lg p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <img
                src="https://images.pexels.com/photos/5212655/pexels-photo-5212655.jpeg"
                className="w-40 h-32 rounded-xl object-cover"
              />
              <div>
                <p className="text-sm text-[#FF4D01] font-semibold mb-1">
                  Parenting Tips
                </p>
                <h4 className="text-xl font-bold mb-2">
                  How Parents Can Build Curiosity & Confidence at Home
                </h4>
                <p className="text-gray-600 text-sm">
                  Small daily habits that make kids lifelong learners.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center fadeUp" style={{ animationDelay: "0.5s" }}>
          <button className="px-10 py-3 bg-[#FF4D01] text-white font-semibold rounded-full text-lg shadow-lg hover:bg-[#d44300] transition">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Prospectus;
