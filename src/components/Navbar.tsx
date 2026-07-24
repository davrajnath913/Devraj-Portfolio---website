import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Globe } from 'lucide-react';
import Logo from './Logo';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: language === 'en' ? 'Work' : 'काम', href: '#portfolio' },
    { name: language === 'en' ? 'Pricing' : 'कीमत', href: '#pricing' },
    { name: language === 'en' ? 'About' : 'मेरे बारे में', href: '#about' },
    { name: language === 'en' ? 'Testimonials' : 'प्रशंसापत्र', href: '#testimonials' },
    { name: language === 'en' ? 'Contact' : 'संपर्क', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-4' : 'py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Logo />

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-text-muted hover:text-highlight transition-colors">
              {link.name}
            </a>
          ))}
          
          {/* Language Toggle */}
          <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-1">
            <button 
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${language === 'en' ? 'bg-primary text-white' : 'text-text-muted hover:text-white'}`}
            >
              EN
            </button>
            <button 
              onClick={() => setLanguage('hi')}
              className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${language === 'hi' ? 'bg-primary text-white' : 'text-text-muted hover:text-white'}`}
            >
              हिंदी
            </button>
          </div>

          <a href={`mailto:davrajnath913@gmail.com?subject=${encodeURIComponent("Design Project Inquiry")}`} className="px-5 py-2.5 bg-primary hover:bg-highlight hover:text-bg text-white text-sm font-medium rounded-full transition-colors">
            {language === 'en' ? 'Hire Me' : 'हायर करें'}
          </a>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          {/* Language Toggle Mobile */}
          <button 
            onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
            className="flex items-center gap-1 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-text-muted hover:text-white transition-all"
          >
            <Globe size={14} />
            {language === 'en' ? 'हिंदी' : 'EN'}
          </button>
          
          <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 glass-nav border-t border-white/10 p-6 flex flex-col gap-4 md:hidden"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-text-muted hover:text-highlight transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={`mailto:davrajnath913@gmail.com?subject=${encodeURIComponent("Design Project Inquiry")}`} 
            onClick={() => setIsOpen(false)}
            className="px-5 py-3 bg-primary hover:bg-highlight hover:text-bg text-white text-center font-medium rounded-full mt-2 transition-colors"
          >
            {language === 'en' ? 'Hire Me' : 'हायर करें'}
          </a>
        </motion.div>
      )}
    </header>
  );
}
