import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, Send, Linkedin, Youtube, MessageSquare, Send as TelegramIcon } from 'lucide-react';

const Button = ({ children, ...props }) => (
  <button {...props}>{children}</button>
);

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleInputChange = (
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
    setStatus('sending');

    emailjs
      .send(
        'service_gudrsly', // ✅ Your Service ID
        'template_c1w9mzz', // ✅ Your Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          organization: formData.organization,
          message: formData.message,
          to_name: 'Nirmaan Team',
        },
        '7EqvN7DQeDvS-Ziil' // ✅ Your Public Key
      )
      .then(
        () => {
          setStatus('sent');
          setFormData({ name: '', email: '', phone: '', organization: '', message: '' });
          setTimeout(() => setStatus(''), 3000);
        },
        (error) => {
          console.error('FAILED...', error);
          setStatus('error');
          setTimeout(() => setStatus(''), 3000);
        }
      );
  };

  return (
    <section id="contact" className="relative py-20 lg:py-32 bg-[#FFF8F1] overflow-hidden">
      {/* --- ANIMATED BACKGROUND --- */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div style={{ position: 'absolute', width: '80px', height: '80px', background: 'rgba(255, 126, 42, 0.1)', borderRadius: '50%', animation: 'move 15s linear infinite', top: '20%', left: '10%' }} />
        <div style={{ position: 'absolute', width: '120px', height: '120px', background: 'rgba(255, 126, 42, 0.08)', borderRadius: '50%', animation: 'move 20s linear infinite reverse', top: '50%', left: '80%' }} />
        <div style={{ position: 'absolute', width: '60px', height: '60px', background: 'rgba(255, 126, 42, 0.12)', borderRadius: '50%', animation: 'move 25s linear infinite', top: '80%', left: '30%' }} />
        <div style={{ position: 'absolute', width: '150px', height: '150px', background: 'rgba(255, 126, 42, 0.07)', borderRadius: '50%', animation: 'move 18s linear infinite reverse', top: '10%', left: '90%' }} />
      </div>
      <style>{`
        @keyframes move { 
          0% { transform: translate(0, 0) scale(1); } 
          25% { transform: translate(20px, 40px) scale(1.1); } 
          50% { transform: translate(-30px, -10px) scale(1); } 
          75% { transform: translate(10px, -30px) scale(1.1); } 
          100% { transform: translate(0, 0) scale(1); } 
        }
      `}</style>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-orange-600 font-poppins">
            Join Us
          </h2>
          <p className="text-xl text-gray-600 mt-4 font-inter">
            Let's Create tomorrow's leaders today
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 font-poppins mb-4">
                Get in touch
              </h3>
              <p className="text-gray-600 font-inter leading-relaxed">
                We're always excited to work on new projects and collaborate with talented schools and educators. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-500">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">Email</h4>
                  <a href="mailto:hello@nirmaan.education" className="text-orange-600 hover:underline">
                    hello@nirmaan.education
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-500">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">Phone</h4>
                  <a href="tel:+918431234711" className="text-orange-600 hover:underline">
                    +91 84312 34711
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 font-poppins mb-4">
                Connect with us
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://www.youtube.com/@NirmaanEducation"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Youtube"
                  className="w-12 h-12 bg-red-500 text-white rounded-lg flex items-center justify-center transition-transform hover:scale-110 shadow-md"
                >
                  <Youtube />
                </a>
                <a
                  href="https://www.linkedin.com/company/nirmaan-education/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center transition-transform hover:scale-110 shadow-md"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://wa.me/918431234711"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-12 h-12 bg-green-500 text-white rounded-lg flex items-center justify-center transition-transform hover:scale-110 shadow-md"
                >
                  <MessageSquare />
                </a>
                <a
                  href="https://t.me/nirmaan_education"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                  className="w-12 h-12 bg-sky-500 text-white rounded-lg flex items-center justify-center transition-transform hover:scale-110 shadow-md"
                >
                  <TelegramIcon />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 font-poppins mb-6">
              Send us a message
            </h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Enter your full name"/>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Enter your email address"/>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Enter your phone number"/>
              </div>
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">Institution / Organization</label>
                <input type="text" id="organization" name="organization" value={formData.organization} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Your school or company name"/>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none" placeholder="Tell us how we can help!"/>
              </div>

              <Button
                type="submit"
                disabled={status === 'sending'}
                style={{
                  width: '100%',
                  background: status === 'sent' ? '#16A34A' : 'linear-gradient(to right, #F97316, #EA580C)',
                  color: 'white',
                  fontWeight: '600',
                  padding: '12px 0',
                  borderRadius: '8px',
                  boxShadow: '0 4px 15px rgba(249, 115, 22, 0.4)',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  border: 'none',
                  cursor: status === 'sending' ? 'not-allowed' : 'pointer'
                }}
              >
                {status === 'sending'
                  ? 'Sending...'
                  : status === 'sent'
                  ? 'Message Sent! ✔'
                  : status === 'error'
                  ? 'Failed ❌'
                  : <>Send Message <Send className="w-5 h-5" /></>}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
