import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { language } = useLanguage();

  const content = {
    en: {
      badge: 'Available for freelance work',
      title1: 'Davraj',
      title2: 'Graphic Designer &',
      title3: 'Thumbnail Specialist',
      description: 'I create eye-catching thumbnails and designs that boost clicks and engagement.',
      primaryBtn: 'View My Work',
      secondaryBtn: 'Hire Me',
      expCount: '2+',
      expText: 'Year Experience'
    },
    hi: {
      badge: 'फ्रीलांस काम के लिए उपलब्ध',
      title1: 'Davraj',
      title2: 'ग्राफिक डिजाइनर और',
      title3: 'थंबनेल स्पेशलिस्ट',
      description: 'मैं आकर्षक थंबनेल और डिज़ाइन बनाता हूँ जो क्लिक और जुड़ाव बढ़ाते हैं।',
      primaryBtn: 'मेरा काम देखें',
      secondaryBtn: 'हायर करें',
      expCount: '2+',
      expText: 'साल का अनुभव'
    }
  };

  const current = content[language];

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-highlight/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-12">
          
          {/* Left Side: Text */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left pt-10 lg:pt-0"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-primary mb-8 mx-auto lg:mx-0 w-max">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              {current.badge}
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.15] mb-6 tracking-tight">
              {current.title1} <br />
              <span className="text-gradient">{current.title2}</span> <br />
              <span className="text-gradient">{current.title3}</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-text-muted mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {current.description}
            </p>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a href="#portfolio" className="px-8 py-4 bg-primary hover:bg-highlight hover:text-bg text-white rounded-full font-medium flex items-center gap-2 transition-all hover:gap-3 shadow-lg shadow-primary/20">
                {current.primaryBtn} <ArrowRight size={18} />
              </a>
              <a href={`mailto:davrajnath913@gmail.com?subject=${encodeURIComponent("Design Project Inquiry")}`} className="px-8 py-4 bg-surface hover:bg-white/10 border border-white/10 text-white rounded-full font-medium flex items-center gap-2 transition-colors">
                {current.secondaryBtn}
              </a>
            </div>
          </motion.div>

          {/* Right Side: Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2 relative flex justify-center items-center p-4 sm:p-8"
          >
            <div className="relative w-full max-w-2xl">
              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <img 
                  src="/hero-image.png" 
                  alt="Davraj - Graphic Designer Banner" 
                  className="w-full h-auto max-w-full object-contain block rounded-2xl"
                />
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-4 sm:-left-8 bg-surface/90 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-2xl flex items-center gap-4 z-10"
              >
                <div className="text-3xl sm:text-4xl font-display font-bold text-primary">{current.expCount}</div>
                <div className="text-xs sm:text-sm text-text-muted leading-tight font-medium">
                  {current.expText.split(' ')[0]} <br /> {current.expText.split(' ').slice(1).join(' ')}
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
