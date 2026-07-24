import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const projects = [
  // YouTube Thumbnails
{ id: 1, title: 'Design Project 1', titleHi: 'डिज़ाइन प्रोजेक्ट 1', category: 'YouTube Thumbnails', image: '/th1.png' },
  { id: 2, title: 'Design Project 2', titleHi: 'डिज़ाइन प्रोजेक्ट 2', category: 'YouTube Thumbnails', image: '/th2.png' },
  { id: 3, title: 'Design Project 3', titleHi: 'डिज़ाइन प्रोजेक्ट 3', category: 'YouTube Thumbnails', image: '/th3.png' },
  { id: 4, title: 'Design Project 4', titleHi: 'डिज़ाइन प्रोजेक्ट 4', category: 'YouTube Thumbnails', image: '/th4.png' },
  { id: 5, title: 'Design Project 5', titleHi: 'डिज़ाइन प्रोजेक्ट 5', category: 'YouTube Thumbnails', image: '/th5.png' },
  { id: 6, title: 'Design Project 6', titleHi: 'डिज़ाइन प्रोजेक्ट 6', category: 'YouTube Thumbnails', image: '/th6.png' },
  { id: 7, title: 'Design Project 7', titleHi: 'डिज़ाइन प्रोजेक्ट 7', category: 'YouTube Thumbnails', image: '/th7.png' },
  { id: 8, title: 'Design Project 8', titleHi: 'डिज़ाइन प्रोजेक्ट 8', category: 'YouTube Thumbnails', image: '/th8.jpg' },  
  // Branding Designs
  { id: 3, title: 'Modern Logo Design', titleHi: 'आधुनिक लोगो डिज़ाइन', category: 'Branding Designs', image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop' },
  { id: 4, title: 'Brand Identity Mockup', titleHi: 'ब्रांड पहचान मॉकअप', category: 'Branding Designs', image: 'https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?q=80&w=2070&auto=format&fit=crop' },
  { id: 10, title: 'Minimalist Stationery', titleHi: 'मिनिमलिस्ट स्टेशनरी', category: 'Branding Designs', image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?q=80&w=1974&auto=format&fit=crop' },
  
  // Social Media Designs
  { id: 5, title: 'Instagram Post Template', titleHi: 'इंस्टाग्राम पोस्ट टेम्पलेट', category: 'Social Media Designs', image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop' },
  { id: 6, title: 'Podcast Cover Art', titleHi: 'पॉडकास्ट कवर आर्ट', category: 'Social Media Designs', image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1974&auto=format&fit=crop' },
  { id: 11, title: 'Twitter Header Design', titleHi: 'ट्विटर हेडर डिज़ाइन', category: 'Social Media Designs', image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=1974&auto=format&fit=crop' },
  
  // Before & After
  { id: 7, title: 'Thumbnail Redesign', titleHi: 'थंबनेल पुनर्डिज़ाइन', category: 'Before & After', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop', beforeImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop&blur=50' },
  { id: 8, title: 'Color Correction', titleHi: 'कलर करेक्शन', category: 'Before & After', image: 'https://images.unsplash.com/photo-1533158326339-7f3cf2404354?q=80&w=1968&auto=format&fit=crop', beforeImage: 'https://images.unsplash.com/photo-1533158326339-7f3cf2404354?q=80&w=1968&auto=format&fit=crop&sepia=80' },
];

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'My',
      subtitle: 'Portfolio',
      description: 'A showcase of my best work across different design categories. Each project is crafted with precision and purpose.',
      viewProject: 'View Project',
      before: 'Before',
      after: 'After',
      sections: {
        'YouTube Thumbnails': {
          title: 'YouTube Thumbnails',
          desc: 'High-CTR thumbnails designed to grab attention and boost your channel\'s growth.'
        },
        'Branding Designs': {
          title: 'Branding Designs',
          desc: 'Unique logo designs and brand identities that help businesses build a strong visual presence.'
        },
        'Social Media Designs': {
          title: 'Social Media Designs',
          desc: 'Engaging social media graphics tailored for Instagram, Twitter, and other platforms.'
        },
        'Before & After': {
          title: 'Before & After',
          desc: 'See the transformation of designs through professional retouching and redesigning.'
        }
      }
    },
    hi: {
      title: 'मेरा',
      subtitle: 'पोर्टफोलियो',
      description: 'विभिन्न डिज़ाइन श्रेणियों में मेरे सर्वश्रेष्ठ काम का प्रदर्शन। प्रत्येक प्रोजेक्ट सटीकता और उद्देश्य के साथ बनाया गया है।',
      viewProject: 'प्रोजेक्ट देखें',
      before: 'पहले',
      after: 'बाद में',
      sections: {
        'YouTube Thumbnails': {
          title: 'यूट्यूब थंबनेल',
          desc: 'ध्यान खींचने और आपके चैनल की वृद्धि को बढ़ावा देने के लिए डिज़ाइन किए गए हाई-CTR थंबनेल।'
        },
        'Branding Designs': {
          title: 'ब्रांडिंग डिज़ाइन',
          desc: 'अद्वितीय लोगो डिज़ाइन और ब्रांड पहचान जो व्यवसायों को एक मजबूत दृश्य उपस्थिति बनाने में मदद करते हैं।'
        },
        'Social Media Designs': {
          title: 'सोशल मीडिया डिज़ाइन',
          desc: 'इंस्टाग्राम, ट्विटर और अन्य प्लेटफार्मों के लिए तैयार किए गए आकर्षक सोशल मीडिया ग्राफिक्स।'
        },
        'Before & After': {
          title: 'पहले और बाद में',
          desc: 'पेशेवर सुधार और पुनर्डिज़ाइन के माध्यम से डिज़ाइनों का परिवर्तन देखें।'
        }
      }
    }
  };

  const current = content[language];

  // Prevent scroll when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedImage]);

  const renderSection = (categoryKey: string) => {
    const sectionInfo = current.sections[categoryKey as keyof typeof current.sections];
    const categoryProjects = projects.filter(p => p.category === categoryKey);
    
    return (
      <div className="mb-24 last:mb-0">
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-2">
            <div className="h-px flex-1 bg-white/5" />
            <h3 className="text-2xl md:text-3xl font-bold text-white">{sectionInfo.title}</h3>
            <div className="h-px flex-1 bg-white/5" />
          </div>
          <p className="text-text-muted text-center max-w-xl mx-auto">{sectionInfo.desc}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative rounded-2xl overflow-hidden bg-bg border border-white/10 aspect-video shadow-lg"
            >
              {project.category === 'Before & After' && project.beforeImage ? (
                <div className="relative w-full h-full">
                  <BeforeAfterSlider before={project.beforeImage} after={project.image} beforeLabel={current.before} afterLabel={current.after} />
                  <button 
                    onClick={() => setSelectedImage(project.image)}
                    className="absolute bottom-4 right-4 w-10 h-10 bg-black/60 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 hover:bg-primary hover:border-primary"
                  >
                    <Maximize2 size={18} />
                  </button>
                </div>
              ) : (
                <div className="relative w-full h-full cursor-pointer" onClick={() => setSelectedImage(project.image)}>
                  <img 
                    src={project.image} 
                    alt={language === 'en' ? project.title : project.titleHi} 
                    className="w-full h-full block object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  {/* Modern Overlay Hover Effect */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center p-6 text-center backdrop-blur-[2px]">
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white mb-4 translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-out shadow-lg"
                    >
                      <Maximize2 size={24} />
                    </motion.div>
                    <span className="text-highlight text-xs font-bold uppercase tracking-widest mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75 ease-out">
                      {sectionInfo.title}
                    </span>
                    <h3 className="text-xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100 ease-out">
                      {language === 'en' ? project.title : project.titleHi}
                    </h3>
                    <p className="text-white/60 text-xs mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150 ease-out font-medium uppercase tracking-widest">
                      {current.viewProject}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="portfolio" className="py-24 bg-surface">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{current.title} <span className="text-gradient">{current.subtitle}</span></h2>
          <p className="text-text-muted text-lg">{current.description}</p>
        </div>

        {renderSection('YouTube Thumbnails')}
        {renderSection('Branding Designs')}
        {renderSection('Social Media Designs')}
        {renderSection('Before & After')}
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors z-[110]"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X size={24} />
            </motion.button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-7xl w-full max-h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Portfolio Preview"
                className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl border border-white/10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-12 left-0 right-0 text-center">
                <p className="text-white/60 text-sm font-medium">
                  {language === 'en' 
                    ? projects.find(p => p.image === selectedImage)?.title 
                    : projects.find(p => p.image === selectedImage)?.titleHi}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function BeforeAfterSlider({ before, after, beforeLabel, afterLabel }: { before: string, after: string, beforeLabel: string, afterLabel: string }) {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <div 
      className="relative w-full h-full cursor-ew-resize overflow-hidden group/slider"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
        setSliderPosition((x / rect.width) * 100);
      }}
      onTouchMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
        setSliderPosition((x / rect.width) * 100);
      }}
    >
      {/* After Image (Background) */}
      <img src={after} alt="After" className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
      
      {/* Before Image (Foreground, clipped) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <img src={before} alt="Before" className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.8)] cursor-ew-resize"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center pointer-events-none transition-transform group-hover/slider:scale-110">
          <div className="flex gap-1">
            <div className="w-0.5 h-3 bg-gray-400 rounded-full" />
            <div className="w-0.5 h-3 bg-gray-400 rounded-full" />
          </div>
        </div>
      </div>

      {/* Clear Minimal Labels */}
      <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/60 backdrop-blur-md text-white text-[10px] sm:text-xs tracking-widest uppercase rounded font-semibold pointer-events-none border border-white/10 shadow-lg">
        {beforeLabel}
      </div>
      <div className="absolute top-4 right-4 px-3 py-1.5 bg-black/60 backdrop-blur-md text-white text-[10px] sm:text-xs tracking-widest uppercase rounded font-semibold pointer-events-none border border-white/10 shadow-lg">
        {afterLabel}
      </div>
    </div>
  );
}
