import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Programs from '@/components/Programs';
import AIPromise from '@/components/AIPromise';
import OurPromise from '@/components/OurPromise';
import ComponentsSection from '@/components/ComponentsSection';
import Impact from '@/components/Impact';
import Blog from '@/components/Blog';
import Testimonials from '@/components/testimonals';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';


const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Programs />
        <ComponentsSection />
        <AIPromise />
        <OurPromise />
        <Impact />
        <Blog />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;