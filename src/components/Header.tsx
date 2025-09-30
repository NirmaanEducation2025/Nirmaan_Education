import React, { useState, useEffect, useRef } from 'react';
import { Menu, ChevronDown } from 'lucide-react';
import logo from '@/assets/logo.jpg'; // Using direct import as requested

const Header: React.FC = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const highlightAI = (text: string) => {
      const parts = text.split(/(AI)/gi);
      return (
        <>
          {parts.map((part, idx) =>
            part.toUpperCase() === 'AI' ? (
              <span key={idx} className="text-orange-500 font-semibold">AI</span>
            ) : (
              part
            )
          )}
        </>
      );
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > -1000); // Control transparency trigger point here
            const sections = ['home', 'about', 'programs', 'ai-promise', 'Our Promise', 'impact', 'prospectus', 'contact'];
            const current = sections.find(id => {
                const element = document.getElementById(id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 120 && rect.bottom >= 120;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const navItems = [
        { name: 'Home', id: 'home' },
        { name: 'About Us', id: 'about' },
        { name: 'Programs', id: 'programs' },
        { name: 'AI ', id: 'ai-promise' },
        { name: 'Our Promise', id: 'highlights' },
        { name: 'Impact', id: 'impact' },
        { name: 'Prospectus', id: 'prospectus' },
        { name: 'Contact', id: 'contact' },
    ];
    
    const dropdownOptions = [
      { label: 'As School', action: () => { setDropdownOpen(false); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }},
      { label: 'As Educator', href: '/hiring' },
      { label: 'As Channel Partner', href: '/hiring' },
    ];
    
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (id === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

  return (
    <header 
        className={`sticky top-0 z-50 transition-all duration-500 font-poppins`}
        style={{
            background: isScrolled ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
            backdropFilter: isScrolled ? 'blur(10px)' : 'none',
            WebkitBackdropFilter: isScrolled ? 'blur(10px)' : 'none',
            boxShadow: isScrolled ? '0 4px_6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' : 'none',
        }}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="flex items-center gap-2">
          <img src={logo} alt="Nirmaan Logo" className="h-12 w-auto" />
        </a>
        
        <nav className="hidden lg:flex items-center gap-1 bg-white/30 border border-white/50 rounded-full px-2 py-1 shadow-sm">
           {navItems.map(item => (
                <a 
                    key={item.id} 
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`px-4 py-2 rounded-full font-semibold capitalize transition-all duration-300 ${activeSection === item.id ? 'bg-orange-500 text-white shadow' : 'text-gray-700 hover:text-orange-500'}`}
                >
                    {item.name}
                </a>
            ))}
        </nav>
        
        <div className="hidden lg:block relative" ref={dropdownRef}>
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors shadow-md">
              Connect <ChevronDown size={18} className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {dropdownOpen && (
                 <div 
                    className="absolute right-0 mt-2 w-48 rounded-xl shadow-lg border origin-top-right transition-all duration-200 ease-out"
                    style={{ 
                        transform: 'scale(1)', 
                        opacity: 1,
                        background: isScrolled ? 'rgba(255, 255, 255, 0.8)' : 'rgb(255, 255, 255)',
                        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
                        WebkitBackdropFilter: isScrolled ? 'blur(10px)' : 'none',
                    }}
                 >
                    {dropdownOptions.map(opt => 
                        opt.action ? 
                        <button key={opt.label} onClick={opt.action} className="w-full text-left px-4 py-2 text-gray-700 hover:bg-orange-50">{opt.label}</button> :
                        <a key={opt.label} href={opt.href} className="block px-4 py-2 text-gray-700 hover:bg-orange-50">{opt.label}</a>
                    )}
                </div>
            )}
        </div>
        
        <button className="lg:hidden text-gray-700">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;

