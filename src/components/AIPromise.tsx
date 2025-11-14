import React, { useEffect, useRef } from "react";
import { FileText, TrendingUp, UserCheck, GraduationCap } from "lucide-react";
import video1 from "@/assets/v1.mp4";
import video2 from "@/assets/v2.mp4";
import video3 from "@/assets/v3.mp4";
import wavyBg from "@/assets/wavy-background.jpg";

// --- CTA Section ---
const CallToAction = () => {
  const handleScrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="relative py-20 text-center"
      style={{
        background: `url(${wavyBg}) center center / cover no-repeat`,
        width: "100%",
        overflow: "hidden",
        marginTop: "80px",
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-1"></div>

      <div className="relative z-10 text-white font-urbanist">
        <div className="inline-block bg-[#FC6B2D] px-8 py-3 rounded-full font-semibold text-xl mb-6">
          Best Part
        </div>
        <h3 className="text-3xl md:text-4xl font-bold text-[#FF8A43] mb-8 max-w-3xl mx-auto">
          All the learning you need — for less than the cost of a pizza.
        </h3>
        <button
          onClick={handleScrollToContact}
          className="bg-[#FCD7C8] border border-[#FF4D01] text-gray-800 px-8 py-3 rounded-full font-semibold text-lg hover:scale-105 transition-transform shadow-md"
        >
          Connect with us to Know more
        </button>
      </div>
    </div>
  );
};

const AIPromise: React.FC = () => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const features = [
    {
      icon: <FileText className="w-8 h-8 text-white" />,
      title: "We measure what matters",
      videoSrc: video2,
      details: [
        {
          emoji: "📊",
          subtitle: "Behavior-based Student Report Cards",
          point:
            "AI builds a dynamic profile of each learner based on multiple data points.",
        },
        {
          emoji: "🧠",
          subtitle: "Beyond Academic Scores",
          point:
            "Measures curiosity, emotional intelligence, and communication to reflect real growth.",
        },
      ],
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      title: "We teach what lasts",
      videoSrc: video3,
      details: [
        {
          emoji: "📈",
          subtitle: "Measurable Student Progress",
          point:
            "AI tracks and visualizes student growth and program effectiveness.",
        },
        {
          emoji: "🗺️",
          subtitle: "Personalized Learning Journey",
          point:
            "Each student’s path evolves dynamically based on their performance and needs.",
        },
      ],
    },
  ];

  const mainFeature = {
    icon: <UserCheck className="w-7 h-7" />,
    title:
      "Personalized AI that adapts and evolves with your child’s learning curve.",
    videoSrc: video1,
  };

  // 🎥 Smart video playback on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.6 }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="ai-promise"
      className="relative py-20 lg:py-28 bg-[#FFF8F1] overflow-hidden"
    >
      <style>{`
        .video-clean {
          border: none;
          outline: none;
          box-shadow: none;
          background: transparent;
          display: block;
          width: 100%;
          border-radius: 1.5rem;
          object-fit: cover;
          aspect-ratio: 16 / 9; /* ✅ Ensures same size for all videos */
        }
        .section-title {
          font-size: clamp(2.2rem, 4vw, 3rem);
          font-weight: 700;
          color: #FF4D01;
          text-align: center;
          margin-bottom: 3rem;
          line-height: 1.3;
        }
        .feature-title {
          font-size: 2rem;
          color: #1A1A1A;
          font-weight: 700;
        }
      `}</style>

      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-16 px-4">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl flex items-center justify-center">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent font-poppins">
            India’s 1st of its kind Holistic Program using AI
          </h2>
        </div>
        <h3 className="section-title font-urbanist">
          {mainFeature.title}
        </h3>
        <video
          src={mainFeature.videoSrc}
          ref={(el) => (videoRefs.current[0] = el)}
          muted
          playsInline
          className="video-clean max-w-5xl mx-auto"
        />
      </div>

      {/* Two Parallel Features (Perfectly Aligned) */}
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 px-6 max-w-7xl mx-auto items-start">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center h-full justify-start"
          >
            <video
              src={feature.videoSrc}
              ref={(el) => (videoRefs.current[idx + 1] = el)}
              muted
              playsInline
              className="video-clean mb-8"
            />
            <div className="flex items-center gap-3 bg-orange-500 text-white px-6 py-3 rounded-full font-semibold text-xl shadow-md mb-6">
              {feature.icon}
              <span>{feature.title}</span>
            </div>
            <div className="space-y-5 text-left max-w-md mx-auto">
              {feature.details.map((d, i) => (
                <div key={i}>
                  <h4 className="font-semibold text-lg text-gray-800">
                    {d.emoji} {d.subtitle}
                  </h4>
                  <p className="text-gray-600">{d.point}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <CallToAction />
    </section>
  );
};

export default AIPromise;
