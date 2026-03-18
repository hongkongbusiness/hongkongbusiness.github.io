import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, BookOpen, TrendingUp } from 'lucide-react';
import { NEWS, INSTITUTES } from '../data/mockData';

const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-hksb-navy">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&q=80&w=2000" 
            alt="Hong Kong Skyline" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-hksb-navy via-hksb-navy/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="section-label">Excellence in Business Education</span>
            <h1 className="text-6xl md:text-8xl text-white mb-8 leading-[0.9]">
              Shaping the <span className="italic">Future</span> of Global Commerce
            </h1>
            <p className="text-white/70 text-lg mb-10 max-w-lg leading-relaxed">
              Hong Kong School of Business is a premier institution dedicated to developing visionary leaders through world-class executive education and pioneering research.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/programs" className="btn-primary">Explore Programs</Link>
              <Link to="/administration" className="btn-outline border-white text-white hover:bg-white hover:text-hksb-navy">About HKSB</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white border-b border-hksb-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: 'Global Rank', value: '#12', icon: Award },
              { label: 'Faculty Members', value: '150+', icon: Users },
              { label: 'Research Papers', value: '2.5k+', icon: BookOpen },
              { label: 'Alumni Network', value: '45k+', icon: TrendingUp },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <stat.icon className="mx-auto text-hksb-gold mb-4" size={32} />
                <div className="text-4xl font-serif font-bold text-hksb-navy mb-1">{stat.value}</div>
                <div className="text-[10px] font-display uppercase tracking-widest text-hksb-navy/50">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutes Grid */}
      <section className="py-32 bg-hksb-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-xl">
              <span className="section-label">Our Ecosystem</span>
              <h2 className="text-5xl text-hksb-navy leading-tight">World-Class Research & Academic Institutions</h2>
            </div>
            <Link to="/departments" className="group flex items-center space-x-2 text-hksb-navy font-display text-xs uppercase tracking-widest mt-6 md:mt-0">
              <span>View All Departments</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-hksb-navy/10 border border-hksb-navy/10">
            {INSTITUTES.slice(0, 6).map((inst, i) => (
              <motion.div 
                key={inst.id}
                whileHover={{ backgroundColor: '#fff' }}
                className="bg-hksb-cream p-10 flex flex-col h-full transition-colors duration-300 card-hover"
              >
                <div className="text-hksb-gold font-display text-[10px] mb-4">0{i + 1}</div>
                <h3 className="text-2xl text-hksb-navy mb-4">{inst.name}</h3>
                <p className="text-hksb-navy/60 text-sm mb-8 flex-grow">
                  {inst.description}
                </p>
                <Link to={`/departments/${inst.id}`} className="text-hksb-navy font-display text-[10px] uppercase tracking-widest flex items-center space-x-2 hover:text-hksb-gold transition-colors">
                  <span>Learn More</span>
                  <ArrowRight size={12} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="section-label">Updates</span>
            <h2 className="text-5xl text-hksb-navy">Latest from HKSB</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {NEWS.map((item) => (
              <motion.div 
                key={item.id}
                className="group cursor-pointer card-hover"
              >
                <Link to="/news" className="block">
                  <div className="aspect-[16/9] overflow-hidden mb-6">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-[10px] font-display uppercase tracking-widest text-hksb-gold">{item.date}</span>
                    <div className="h-px w-8 bg-hksb-navy/10"></div>
                    <span className="text-[10px] font-display uppercase tracking-widest text-hksb-navy/40">Press Release</span>
                  </div>
                  <h3 className="text-3xl text-hksb-navy mb-4 group-hover:text-hksb-gold transition-colors">{item.title}</h3>
                  <p className="text-hksb-navy/60 mb-6">
                    {item.summary}
                  </p>
                  <div className="inline-flex items-center space-x-2 text-hksb-navy font-display text-[10px] uppercase tracking-widest border-b border-hksb-navy/20 pb-1">
                    <span>Read Article</span>
                    <ArrowRight size={12} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-hksb-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-hksb-gold/5 -skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-5xl text-white mb-8 leading-tight">Ready to Transform Your <span className="italic">Career</span>?</h2>
            <p className="text-white/60 text-lg mb-12 leading-relaxed">
              Join our community of global leaders. Applications for the 2026 academic year are now open for our MBA, EMBA, and DBA programs.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/programs" className="btn-primary bg-hksb-gold hover:bg-white hover:text-hksb-navy">Apply Now</Link>
              <Link to="/recruitment" className="btn-outline border-white/30 text-white hover:bg-white hover:text-hksb-navy">Join Our Faculty</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
