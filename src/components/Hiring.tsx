import React, { useState } from "react";
import { Send, Linkedin, Instagram, Facebook, Globe } from "lucide-react";
import logo from "@/assets/logo.jpg"; // ✅ Your site logo

const Hiring: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    resume: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sent");
    setTimeout(() => {
      setStatus("");
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "",
        resume: "",
        message: "",
      });
    }, 2500);
  };

  const scrollToContact = () => {
    const section = document.getElementById("contact");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-20 bg-[#FFF8F1] min-h-screen flex flex-col items-center justify-between px-6 lg:px-16 overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute w-64 h-64 bg-orange-100 rounded-full top-20 left-12 blur-3xl opacity-40 animate-pulse" />
        <div className="absolute w-96 h-96 bg-orange-200 rounded-full bottom-16 right-12 blur-2xl opacity-30 animate-pulse" />
      </div>

      {/* Form Card */}
      <div className="relative z-10 max-w-4xl w-full bg-white/90 backdrop-blur-sm shadow-2xl rounded-2xl p-10 border border-gray-200">
        <div className="flex flex-col items-center mb-8">
          <img src={logo} alt="Nirmaan Logo" className="h-16 w-auto mb-4" />
          <h2 className="text-4xl font-bold text-center text-orange-600 font-urbanist">
            Join Our Team
          </h2>
          <p className="text-center text-gray-600 mt-3 max-w-2xl font-inter">
            Be part of <span className="text-orange-600 font-semibold">Nirmaan Education</span>’s mission to
            shape the next generation of changemakers. Fill out the form to
            apply for open roles!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Position Applied For
              </label>
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                placeholder="e.g., Educator, Partner, Developer"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Resume / Portfolio Link
              </label>
              <input
                type="url"
                name="resume"
                value={formData.resume}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                placeholder="Paste Google Drive or portfolio link"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Why do you want to join Nirmaan?
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-orange-500 focus:outline-none resize-none"
              placeholder="Tell us briefly about your motivation..."
            />
          </div>

          <button
            type="submit"
            className={`w-full flex items-center justify-center gap-3 px-6 py-3 rounded-lg text-white font-semibold shadow-md transition-all duration-300 ${
              status === "sent"
                ? "bg-green-600"
                : "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
            }`}
          >
            {status === "sent" ? (
              "Submitted Successfully!"
            ) : (
              <>
                Submit Application <Send size={18} />
              </>
            )}
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer className="relative z-10 w-full max-w-4xl mt-12 flex flex-col items-center gap-3 text-gray-700">
        <div className="flex gap-6">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <Linkedin className="text-orange-600 hover:scale-110 transition-transform" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <Instagram className="text-orange-600 hover:scale-110 transition-transform" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <Facebook className="text-orange-600 hover:scale-110 transition-transform" />
          </a>
          <a href="https://nirmaan.education" target="_blank" rel="noreferrer">
            <Globe className="text-orange-600 hover:scale-110 transition-transform" />
          </a>
        </div>

        <p className="text-sm text-gray-500 mt-3">
          © {new Date().getFullYear()} Nirmaan Education | All Rights Reserved
        </p>

        <div className="flex gap-6 mt-3 text-sm font-semibold text-orange-600">
          <button
            onClick={() => (window.location.href = "/educator")}
            className="hover:underline"
          >
            As Educator
          </button>
          <button
            onClick={() => (window.location.href = "/partner")}
            className="hover:underline"
          >
            As Partner
          </button>
        </div>
      </footer>
    </section>
  );
};

export default Hiring;
