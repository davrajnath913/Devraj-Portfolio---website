import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

const skills = [
  { name: 'Thumbnail Design', level: 95 },
  { name: 'Branding Design', level: 85 },
  { name: 'Photoshop', level: 98 },
  { name: 'Canva', level: 90 },
  { name: 'Illustrator', level: 80 },
];

export default function About() {
  const { language, setLanguage } = useLanguage();

  const content = {
    en: {
      title: 'About',
      subtitle: 'Me',
      paragraphs: [
        'Hi, I’m Davraj, a creative graphic designer focused on YouTube thumbnails and modern visual design.',
        'I create bold, clean, and engaging designs that help creators increase clicks and improve their content performance. I believe good design is not just about looks, but also about results.',
        'I am always learning and improving to deliver high-quality work and better value to my clients.',
        'Let’s work together to make your content stand out.'
      ],
      stats: [
        { value: '150+', label: 'Designs Created' },
        { value: '26+', label: 'Projects Completed' },
        { value: 'High-Quality', label: 'Delivering Designs' }
      ],
      skillsTitle: 'My Skills',
      quote: '"Worked with various clients and continuously improving design quality."'
    },
    hi: {
      title: 'मेरे',
      subtitle: 'बारे में',
      paragraphs: [
        'नमस्ते, मैं Davraj हूँ, एक क्रिएटिव ग्राफिक डिजाइनर जो यूट्यूब थंबनेल और मॉडर्न डिजाइन पर फोकस करता है।',
        'मैं ऐसे डिज़ाइन बनाता हूँ जो साफ, आकर्षक और ध्यान खींचने वाले होते हैं, जिससे आपके कंटेंट पर ज्यादा क्लिक आते हैं और परफॉर्मेंस बेहतर होती है। मेरा मानना है कि अच्छा डिज़ाइन सिर्फ दिखने में ही नहीं, बल्कि रिजल्ट देने में भी अच्छा होना चाहिए।',
        'मैं लगातार सीख रहा हूँ और अपने स्किल्स को बेहतर बना रहा हूँ ताकि अपने क्लाइंट्स को हाई-क्वालिटी काम दे सकूं।',
        'आइए साथ मिलकर आपके कंटेंट को और बेहतर बनाते हैं।'
      ],
      stats: [
        { value: '150+', label: 'डिज़ाइन बनाए गए' },
        { value: '26+', label: 'प्रोजेक्ट्स पूरे हुए' },
        { value: 'हाई-क्वालिटी', label: 'डिज़ाइन प्रदान करना' }
      ],
      skillsTitle: 'मेरे स्किल्स',
      quote: '"विभिन्न क्लाइंट्स के साथ काम किया और लगातार डिज़ाइन की गुणवत्ता में सुधार कर रहा हूँ।"'
    }
  };

  const current = content[language];

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <h2 className="text-4xl md:text-5xl font-bold">{current.title} <span className="text-gradient">{current.subtitle}</span></h2>
          
          {/* Language Toggle inside About Section */}
          <div className="flex items-center bg-surface border border-white/10 rounded-full p-1 self-start md:self-center">
            <button 
              onClick={() => setLanguage('en')}
              className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all ${language === 'en' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-text-muted hover:text-white'}`}
            >
              English
            </button>
            <button 
              onClick={() => setLanguage('hi')}
              className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all ${language === 'hi' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-text-muted hover:text-white'}`}
            >
              हिंदी
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6 text-text-muted text-lg leading-relaxed">
              {current.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
              {current.stats.map((stat, i) => (
                <div key={i} className={`p-5 rounded-2xl border ${i === 2 ? 'bg-surface/50 border-primary/20 flex items-center justify-center text-center' : 'bg-surface border-white/5'}`}>
                  {i === 2 ? (
                    <div className="text-xs font-bold text-highlight uppercase tracking-widest leading-tight">
                      {stat.value} <br /> {stat.label}
                    </div>
                  ) : (
                    <>
                      <div className="text-3xl font-display font-bold text-primary mb-1">{stat.value}</div>
                      <div className="text-xs text-text-muted uppercase tracking-wider font-medium">{stat.label}</div>
                    </>
                  )}
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-text-muted italic">
              {current.quote}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-surface p-8 md:p-10 rounded-3xl border border-white/5 sticky top-32"
          >
            <h3 className="text-2xl font-bold mb-8">{current.skillsTitle}</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-text-muted">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-bg rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-primary to-highlight rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
