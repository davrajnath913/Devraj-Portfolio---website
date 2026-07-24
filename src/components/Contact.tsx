import { motion } from 'motion/react';
import { Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { language } = useLanguage();
  const whatsappUrl = "https://wa.me/918472973956?text=Hi%20I%20need%20a%20YouTube%20thumbnail";

  const content = {
    en: {
      title: "Let's Work",
      subtitle: "Together",
      description: "Ready to take your visuals to the next level? Drop me a message and let's discuss how I can help you achieve your goals.",
      whatsappLabel: "WhatsApp Me",
      emailLabel: "Email Me",
      locationLabel: "Location",
      locationValue: "Available Worldwide (Remote)",
      nameLabel: "Your Name",
      namePlaceholder: "John Doe",
      emailInputLabel: "Your Email",
      emailPlaceholder: "john@example.com",
      projectLabel: "Project Details",
      projectPlaceholder: "Describe your project, style preferences, and any specific requirements...",
      sendBtn: "Send Message"
    },
    hi: {
      title: "चलो साथ मिलकर",
      subtitle: "काम करते हैं",
      description: "क्या आप अपने विजुअल्स को अगले स्तर पर ले जाने के लिए तैयार हैं? मुझे एक संदेश भेजें और चर्चा करें कि मैं आपके लक्ष्यों को प्राप्त करने में आपकी कैसे मदद कर सकता हूँ।",
      whatsappLabel: "व्हाट्सएप करें",
      emailLabel: "ईमेल करें",
      locationLabel: "स्थान",
      locationValue: "दुनिया भर में उपलब्ध (रिमोट)",
      nameLabel: "आपका नाम",
      namePlaceholder: "जॉन डो",
      emailInputLabel: "आपका ईमेल",
      emailPlaceholder: "john@example.com",
      projectLabel: "प्रोजेक्ट का विवरण",
      projectPlaceholder: "अपने प्रोजेक्ट, स्टाइल पसंद और किसी भी विशिष्ट आवश्यकताओं का वर्णन करें...",
      sendBtn: "संदेश भेजें"
    }
  };

  const current = content[language];
  
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{current.title} <span className="text-gradient">{current.subtitle}</span></h2>
            <p className="text-text-muted text-lg mb-10 max-w-md">
              {current.description}
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-surface rounded-2xl border border-white/5">
                <div className="w-12 h-12 bg-[#25D366]/10 text-[#25D366] rounded-full flex items-center justify-center shrink-0">
                  <MessageCircle size={24} fill="currentColor" />
                </div>
                <div>
                  <p className="text-sm text-text-muted mb-1">{current.whatsappLabel}</p>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-medium hover:text-highlight transition-colors">
                    +91 84729 73956
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-surface rounded-2xl border border-white/5">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-text-muted mb-1">{current.emailLabel}</p>
                  <a href="mailto:davrajnath913@gmail.com" className="font-medium hover:text-highlight transition-colors">
                    davrajnath913@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-surface rounded-2xl border border-white/5">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-text-muted mb-1">{current.locationLabel}</p>
                  <p className="font-medium">{current.locationValue}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="bg-surface p-8 rounded-3xl border border-white/5 flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-text-muted">{current.nameLabel}</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="bg-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-highlight transition-colors"
                    placeholder={current.namePlaceholder}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-text-muted">{current.emailInputLabel}</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="bg-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-highlight transition-colors"
                    placeholder={current.emailPlaceholder}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="project" className="text-sm font-medium text-text-muted">{current.projectLabel}</label>
                <textarea 
                  id="project" 
                  rows={5}
                  className="bg-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-highlight transition-colors resize-none"
                  placeholder={current.projectPlaceholder}
                ></textarea>
              </div>
              <button 
                type="submit" 
                onClick={(e) => {
                  e.preventDefault();
                  const name = (document.getElementById('name') as HTMLInputElement).value;
                  const email = (document.getElementById('email') as HTMLInputElement).value;
                  const details = (document.getElementById('project') as HTMLTextAreaElement).value;
                  const subject = encodeURIComponent("Design Project Inquiry");
                  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nProject Details:\n${details}`);
                  window.location.href = `mailto:davrajnath913@gmail.com?subject=${subject}&body=${body}`;
                }}
                className="bg-primary hover:bg-highlight hover:text-bg text-white font-medium py-4 rounded-xl flex items-center justify-center gap-2 transition-colors mt-2"
              >
                {current.sendBtn} <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
