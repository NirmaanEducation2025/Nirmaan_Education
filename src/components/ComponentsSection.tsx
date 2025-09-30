import { BookOpen, Bot, FileText, Gift, Users } from 'lucide-react';

const ComponentsSection = () => {
  const components = [
    {
      title: "Interactive Classes",
      icon: <Users className="w-8 h-8" />,
      description: "Engaging, hands-on learning experiences that captivate students."
    },
    {
      title: "Personalized AI Tutor",
      icon: <Bot className="w-8 h-8" />,
      description: "An AI companion that adapts to each student's unique learning style."
    },
    {
      title: "Performance Reports",
      icon: <FileText className="w-8 h-8" />,
      description: "Detailed, behavior-based reports that measure what truly matters."
    },
    {
      title: "Showcase Talent",
      icon: <Gift className="w-8 h-8" />,
      description: "Opportunities for students to present their skills and build confidence."
    },
    {
      title: "Worksheets & Handouts",
      icon: <BookOpen className="w-8 h-8" />,
      description: "Supportive materials designed to reinforce concepts and deepen understanding."
    }
  ];

  return (
    // Replaced original className with style for animated background and set position: relative
    <section 
      id="components" 
      style={{ 
        position: 'relative', 
        width: '100%', 
        background: '#FFF8F1', // Light, warm background color
        padding: '80px 24px', 
        overflow: 'hidden' 
      }}
    >
      {/* --- ANIMATED BACKGROUND ELEMENTS (The same as in your example) --- */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div style={{ 
          position: 'absolute', 
          width: '80px', 
          height: '80px', 
          background: 'rgba(255, 126, 42, 0.1)', 
          borderRadius: '50%', 
          animation: 'move 15s linear infinite', 
          top: '20%', 
          left: '10%' 
        }} />
        <div style={{ 
          position: 'absolute', 
          width: '120px', 
          height: '120px', 
          background: 'rgba(255, 126, 42, 0.08)', 
          borderRadius: '50%', 
          animation: 'move 20s linear infinite reverse', 
          top: '50%', 
          left: '80%' 
        }} />
        <div style={{ 
          position: 'absolute', 
          width: '60px', 
          height: '60px', 
          background: 'rgba(255, 126, 42, 0.12)', 
          borderRadius: '50%', 
          animation: 'move 25s linear infinite', 
          top: '80%', 
          left: '30%' 
        }} />
        <div style={{ 
          position: 'absolute', 
          width: '150px', 
          height: '150px', 
          background: 'rgba(255, 126, 42, 0.07)', 
          borderRadius: '50%', 
          animation: 'move 18s linear infinite reverse', 
          top: '10%', 
          left: '90%' 
        }} />
      </div>

      {/* --- KEYFRAMES CSS for the animation (use a style tag) --- */}
      <style global jsx>{`
        @keyframes move {
          0% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, 40px) scale(1.1); }
          50% { transform: translate(-30px, -10px) scale(1); }
          75% { transform: translate(10px, -30px) scale(1.1); }
          100% { transform: translate(0, 0) scale(1); }
        }
      `}</style>
      
      {/* --- ORIGINAL CONTENT (Ensuring it's above the z-0 background) --- */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10"> {/* Added relative z-10 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold font-poppins">Our Program Highlights</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-inter">
            Key features that make our educational approach transformative and effective.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {components.map((c, i) => (
            <div key={i} className="bg-background p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center text-white mb-6">
                {c.icon}
              </div>
              <h3 className="text-xl font-semibold font-poppins mb-4">{c.title}</h3>
              <p className="text-muted-foreground">{c.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComponentsSection;