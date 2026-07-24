import { motion } from 'motion/react';
import { Check, Zap, Palette, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const pricingData = [
  {
    category: "YouTube Thumbnails",
    categoryHi: "यूट्यूब थंबनेल",
    icon: <Zap className="text-primary" />,
    plans: [
      { 
        name: "Basic", 
        nameHi: "बेसिक",
        usd: 3, 
        inr: 199, 
        features: ["High Quality Design", "1 Revision", "24h Delivery"],
        featuresHi: ["हाई क्वालिटी डिज़ाइन", "1 रिवीज़न", "24 घंटे में डिलीवरी"]
      },
      { 
        name: "Advanced", 
        nameHi: "एडवांस",
        usd: 6, 
        inr: 399, 
        features: ["Premium Quality", "3 Revisions", "Source File", "12h Delivery"],
        featuresHi: ["प्रीमियम क्वालिटी", "3 रिवीज़न", "सोर्स फ़ाइल", "12 घंटे में डिलीवरी"],
        popular: true 
      },
      { 
        name: "Premium", 
        nameHi: "प्रीमियम",
        usd: 10, 
        inr: 699, 
        features: ["Ultra HD Design", "Unlimited Revisions", "Source File", "Priority Support"],
        featuresHi: ["अल्ट्रा एचडी डिज़ाइन", "अनलिमिटेड रिवीज़न", "सोर्स फ़ाइल", "प्रायोरिटी सपोर्ट"]
      },
    ]
  },
  {
    category: "Branding",
    categoryHi: "ब्रांडिंग",
    icon: <Palette className="text-primary" />,
    plans: [
      { 
        name: "Logo Design", 
        nameHi: "लोगो डिज़ाइन",
        usd: 7, 
        inr: 499, 
        features: ["Unique Concept", "Transparent PNG", "High Resolution", "2 Revisions"],
        featuresHi: ["अद्वितीय कॉन्सेप्ट", "ट्रांसपेरेंट PNG", "हाई रेजोल्यूशन", "2 रिवीज़न"]
      },
      { 
        name: "Branding Kit", 
        nameHi: "ब्रांडिंग किट",
        usd: 15, 
        inr: 999, 
        features: ["Logo + Variations", "Social Media Kit", "Brand Guidelines", "Source Files"],
        featuresHi: ["लोगो + वेरिएशंस", "सोशल मीडिया किट", "ब्रांड गाइडलाइन्स", "सोर्स फ़ाइलें"],
        popular: true 
      },
    ]
  }
];

export default function Pricing() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Simple &',
      subtitle: 'Transparent Pricing',
      description: 'Professional design services at affordable rates for both Indian and global clients.',
      popular: 'Most Popular',
      emailBtn: 'Order via Email',
      whatsappBtn: 'Chat on WhatsApp'
    },
    hi: {
      title: 'सरल और',
      subtitle: 'पारदर्शी कीमतें',
      description: 'भारतीय और वैश्विक दोनों क्लाइंट्स के लिए सस्ती दरों पर पेशेवर डिज़ाइन सेवाएँ।',
      popular: 'सबसे लोकप्रिय',
      emailBtn: 'ईमेल द्वारा ऑर्डर करें',
      whatsappBtn: 'व्हाट्सएप पर चैट करें'
    }
  };

  const current = content[language];

  const handleOrder = (planName: string, category: string) => {
    const subject = encodeURIComponent("Design Project Inquiry");
    const body = encodeURIComponent(`Hi Davraj,\n\nI am interested in the ${planName} plan for ${category}.\n\nPlease let me know the next steps.\n\nThanks!`);
    window.location.href = `mailto:davrajnath913@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleWhatsApp = (planName: string, category: string) => {
    const text = encodeURIComponent(`Hi Davraj, I want to order the ${planName} design for ${category}.`);
    window.open(`https://wa.me/918472973956?text=${text}`, '_blank');
  };

  return (
    <section id="pricing" className="py-24 bg-bg">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{current.title} <span className="text-gradient">{current.subtitle}</span></h2>
          <p className="text-text-muted text-lg">{current.description}</p>
        </div>

        <div className="space-y-20">
          {pricingData.map((section, sIdx) => (
            <div key={sIdx}>
              <div className="flex items-center gap-3 mb-10 justify-center md:justify-start">
                <div className="w-10 h-10 bg-surface rounded-xl flex items-center justify-center border border-white/5">
                  {section.icon}
                </div>
                <h3 className="text-2xl font-bold">{language === 'en' ? section.category : section.categoryHi}</h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.plans.map((plan, pIdx) => (
                  <motion.div
                    key={pIdx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: pIdx * 0.1 }}
                    className={`relative p-8 rounded-3xl border transition-all duration-300 group ${
                      plan.popular 
                        ? 'bg-surface border-primary/50 shadow-[0_0_30px_rgba(249,115,22,0.1)]' 
                        : 'bg-surface/50 border-white/5 hover:border-white/20'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-xs font-bold rounded-full uppercase tracking-widest">
                        {current.popular}
                      </div>
                    )}

                    <div className="mb-8">
                      <h4 className="text-xl font-bold mb-4">{language === 'en' ? plan.name : plan.nameHi}</h4>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold text-white">${plan.usd}</span>
                        <span className="text-text-muted">/</span>
                        <span className="text-2xl font-medium text-highlight">₹{plan.inr}</span>
                      </div>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {(language === 'en' ? plan.features : plan.featuresHi).map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-3 text-text-muted text-sm">
                          <Check size={16} className="text-primary shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-col gap-3">
                      <button
                        onClick={() => handleOrder(plan.name, section.category)}
                        className={`w-full py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                          plan.popular
                            ? 'bg-primary text-white hover:bg-highlight hover:text-bg'
                            : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                        }`}
                      >
                        {current.emailBtn}
                      </button>
                      <button
                        onClick={() => handleWhatsApp(plan.name, section.category)}
                        className="w-full py-4 rounded-xl font-bold bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white border border-[#25D366]/20 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <MessageCircle size={18} fill="currentColor" /> {current.whatsappBtn}
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
