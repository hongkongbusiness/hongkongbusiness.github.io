import { motion } from 'motion/react';
import { NEWS } from '../data/mockData';
import { ArrowRight, Calendar } from 'lucide-react';

const News = () => {
  return (
    <div className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <span className="font-display text-[10px] uppercase tracking-[0.3em] text-hksb-gold mb-4 block">Updates</span>
          <h1 className="text-6xl text-hksb-navy mb-8">News & Events</h1>
          <p className="text-hksb-navy/60 text-lg font-light leading-relaxed">
            Stay informed about the latest research breakthroughs, campus events, and academic achievements at the Hong Kong School of Business.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16">
          {NEWS.map((item, i) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <span className="flex items-center space-x-2 text-[10px] font-display uppercase tracking-widest text-hksb-gold">
                    <Calendar size={14} />
                    <span>{item.date}</span>
                  </span>
                  <div className="h-px w-8 bg-hksb-navy/10"></div>
                  <span className="text-[10px] font-display uppercase tracking-widest text-hksb-navy/40">Academic News</span>
                </div>
                <h2 className="text-4xl text-hksb-navy mb-6 group-hover:text-hksb-gold transition-colors">{item.title}</h2>
                <p className="text-hksb-navy/60 text-lg font-light leading-relaxed mb-8">
                  {item.summary}
                </p>
                <button className="inline-flex items-center space-x-2 text-hksb-navy font-display text-[10px] uppercase tracking-widest border-b border-hksb-navy/20 pb-1">
                  <span>Read Full Story</span>
                  <ArrowRight size={12} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
