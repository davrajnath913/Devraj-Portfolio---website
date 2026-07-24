import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const featured = [
  {
    id: 1,
    title: 'MrBeast Style Thumbnail',
    description: 'High-contrast, high-CTR thumbnail designed for a viral challenge video.',
    image: 'https://picsum.photos/seed/mrbeast/1200/800',
    tags: ['Thumbnail', 'Photoshop', 'Viral']
  },
  {
    id: 2,
    title: 'Tech Startup Rebrand',
    description: 'Complete visual identity overhaul including logo, typography, and social assets.',
    image: 'https://picsum.photos/seed/startup/1200/800',
    tags: ['Branding', 'Logo', 'Identity']
  }
];

export default function FeaturedWork() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Work</span></h2>
          <p className="text-text-muted max-w-xl">A selection of my proudest projects that showcase my skills and design philosophy.</p>
        </div>

        <div className="flex flex-col gap-16">
          {featured.map((work, index) => (
            <motion.div 
              key={work.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}
            >
              <div className="w-full lg:w-3/5">
                <div className="relative aspect-video rounded-3xl overflow-hidden group">
                  <img 
                    src={work.image} 
                    alt={work.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </div>
              
              <div className="w-full lg:w-2/5 flex flex-col items-start">
                <div className="flex flex-wrap gap-2 mb-6">
                  {work.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl font-bold mb-4">{work.title}</h3>
                <p className="text-text-muted mb-8 text-lg">{work.description}</p>
                <button className="flex items-center gap-2 text-white font-medium hover:text-highlight transition-colors group">
                  View Project Details 
                  <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
