import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const testimonials = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'Tech YouTuber (1.2M Subs)',
    roleHi: 'टेक यूट्यूबर (1.2M सब्सक्राइबर्स)',
    content: 'Davraj completely transformed my channel\'s CTR. Since he started doing my thumbnails, my average views per video have doubled. He understands the YouTube algorithm better than anyone.',
    contentHi: 'Davraj ने मेरे चैनल के CTR को पूरी तरह से बदल दिया। जब से उन्होंने मेरे थंबनेल बनाना शुरू किया है, मेरे वीडियो पर औसत व्यूज दोगुने हो गए हैं। वह यूट्यूब एल्गोरिदम को किसी से भी बेहतर समझते हैं।',
    image: 'https://picsum.photos/seed/user1/100/100'
  },
  {
    id: 2,
    name: 'Sarah Williams',
    role: 'Startup Founder',
    roleHi: 'स्टार्टअप फाउंडर',
    content: 'We hired Davraj for our company rebrand and the results were phenomenal. He delivered a modern, sleek identity that perfectly captures our vision. Highly recommended!',
    contentHi: 'हमने अपनी कंपनी के रीब्रांड के लिए Davraj को काम पर रखा और परिणाम अभूतपूर्व थे। उन्होंने एक आधुनिक, चिकनी पहचान दी जो हमारी दृष्टि को पूरी तरह से पकड़ती है। अत्यधिक अनुशंसित!',
    image: 'https://picsum.photos/seed/user2/100/100'
  },
  {
    id: 3,
    name: 'Mike Chen',
    role: 'Gaming Creator',
    roleHi: 'गेमिंग क्रिएटर',
    content: 'Fast turnaround, incredible attention to detail, and always open to feedback. Davraj is the secret weapon for any creator looking to level up their visual game.',
    contentHi: 'तेजी से काम, विस्तार पर अविश्वसनीय ध्यान, और हमेशा फीडबैक के लिए तैयार। Davraj किसी भी क्रिएटर के लिए गुप्त हथियार है जो अपने विजुअल गेम को लेवल अप करना चाहता है।',
    image: 'https://picsum.photos/seed/user3/100/100'
  }
];

export default function Testimonials() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Client',
      subtitle: 'Testimonials',
      description: "Don't just take my word for it. Here's what some of my amazing clients have to say about working together."
    },
    hi: {
      title: 'क्लाइंट',
      subtitle: 'प्रशंसापत्र',
      description: "सिर्फ मेरी बात न मानें। यहाँ कुछ ऐसे अद्भुत क्लाइंट्स हैं जो हमारे साथ काम करने के बारे में क्या कहते हैं।"
    }
  };

  const current = content[language];

  return (
    <section id="testimonials" className="py-24 bg-surface">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{current.title} <span className="text-gradient">{current.subtitle}</span></h2>
          <p className="text-text-muted">{current.description}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-bg p-8 rounded-3xl border border-white/5 relative"
            >
              <Quote className="absolute top-8 right-8 text-white/5" size={60} />
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-text-muted">{language === 'en' ? testimonial.role : testimonial.roleHi}</p>
                </div>
              </div>
              <p className="text-text-muted leading-relaxed relative z-10">
                "{language === 'en' ? testimonial.content : testimonial.contentHi}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
