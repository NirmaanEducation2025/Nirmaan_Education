import React, { useState } from "react";
import { Send, Linkedin, Instagram, Facebook, Globe } from "lucide-react";
import emailjs from "emailjs-com";
import logo from "@/assets/logo.jpg";

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

  // ---------------------------
  // ✅ EMAILJS INTEGRATION
  // ---------------------------
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        "service_gudrsly",      // Service ID
        "template_7a5s6j6",     // Template ID
        {
          full_name: formData.name,
          email: formData.email,
          phone: formData.phone,
          position: formData.position,
          resume_link: formData.resume,
          message: formData.message,
        },
        "7EqvN7DQeDvS-Ziil"     // Public Key
      );

      setStatus("sent");

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "",
        resume: "",
        message: "",
      });

      setTimeout(() => setStatus(""), 2500);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      setTimeout(() => setStatus(""), 2500);
    }
  };

  return (
    <section className="relative py-20 bg-[#FFF8F1] min-h-screen flex flex-col items-center justify-between px-6 lg:px-16 overflow-hidden">
      {/* Background Circles */}
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

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full flex items-center justify-center gap-3 px-6 py-3 rounded-lg text-white font-semibold shadow-md transition-all duration-300 ${
              status === "sent"
                ? "bg-green-600"
                : status === "error"
                ? "bg-red-600"
                : "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
            }`}
          >
            {status === "sent"
              ? "Submitted Successfully!"
              : status === "error"
              ? "Failed! Try Again"
              : (
                <>
                  Submit Application <Send size={18} />
                </>
              )}
          </button>
        </form>
      </div>

           {/* Footer */}
           <footer className="relative z-10 w-full max-w-4xl mt-12 flex flex-col items-center gap-3 text-gray-700">

{/* NEW SOCIAL ICONS */}
<div className="flex gap-6">

  {/* YouTube */}
  <a
    href="https://www.youtube.com/@NirmaanEducation"
    target="_blank"
    rel="noreferrer"
    className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#E74C3C] hover:scale-110 transition-transform"
  >
    <svg width="26" fill="#fff" viewBox="0 0 24 24">
      <path d="M10 15l5.2-3L10 9v6zm12-3c0-2.5-.2-4-.5-5-.3-1-1-2-2-2.3C17.5 4 12 4 12 4s-5.5 0-7.5.7c-1 .3-1.7 1.3-2 2.3-.3 1-.5 2.5-.5 
        5s.2 4 .5 5c.3 1 1 2 2 2.3C6.5 20 12 20 12 20s5.5 0 7.5-.7c1-.3 1.7-1.3 2-2.3.3-1 .5-2.5.5-5z" />
    </svg>
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/company/nirmaan-education/"
    target="_blank"
    rel="noreferrer"
    className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#3B65FF] hover:scale-110 transition-transform"
  >
    <svg width="24" fill="#fff" viewBox="0 0 24 24">
      <path d="M4.98 3.5c0 1.38-1.12 2.5-2.5 
        2.5S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5zM.5 22h4V7h-4v15zm7.5-15h3.8v2h.1c.5-.9 1.7-2.1 3.7-2.1 
        4 0 4.8 2.6 4.8 6V22h-4v-8c0-1.9 0-4.3-2.6-4.3s-3 2-3 4.1V22h-4V7z" />
    </svg>
  </a>

  {/* WhatsApp */}
  <a
    href="https://wa.me/918431234711"
    target="_blank"
    rel="noreferrer"
    className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#34C759] hover:scale-110 transition-transform"
  >
    <svg width="26" fill="#fff" viewBox="0 0 24 24">
      <path d="M17 14.3c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.2-1.5-.8-.7-1.4-1.5-1.6-1.8-.2-.3 
        0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.4.3-.6.1-.2 0-.4 0-.5-.1-.1-.7-1.7-.9-2.3-.2-.5-.4-.5-.7-.5h-.6c-.2 0-.5 0-.7.3-.2.3-1 
        1-1 2.4s1.1 2.8 1.2 3c.2.2 2.1 3.2 5.3 4.5 3.2 1.3 3.2.8 3.8.7.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3z" />
    </svg>
  </a>

  {/* Telegram */}
  <a
    href="https://t.me/nirmaan_education"
    target="_blank"
    rel="noreferrer"
    className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#42A5F5] hover:scale-110 transition-transform"
  >
    <svg width="26" fill="#fff" viewBox="0 0 24 24">
      <path d="M9.3 17.6l-.2 3.1c.3 0 .4-.1.6-.3l2.7-2.7 5.6 4.1c1 .6 1.7.3 
        1.9-1l3.4-18.5c.3-1.3-.5-1.9-1.5-1.6L1.7 8.7c-1.3.5-1.3 1.2-.2 1.5l5.4 1.7L19.6 5" />
    </svg>
  </a>

</div>

<p className="text-sm text-gray-500 mt-3">
  © {new Date().getFullYear()} Nirmaan Education | All Rights Reserved
</p>

<div className="flex gap-6 mt-3 text-sm font-semibold text-orange-600">
  <button onClick={() => (window.location.href = "/educator")} className="hover:underline">
    As Educator
  </button>
  <button onClick={() => (window.location.href = "/partner")} className="hover:underline">
    As Partner
  </button>
</div>
</footer>

    </section>
  );
};

export default Hiring;
