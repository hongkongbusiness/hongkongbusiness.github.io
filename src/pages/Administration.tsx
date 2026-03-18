import { motion } from 'motion/react';
import { User, Shield, Award, Users } from 'lucide-react';

const Administration = () => {
  const handleContact = () => {
    window.location.href = 'mailto:admin@hksb.ac.cn?subject=Inquiry for Administration';
  };

  const leaders = [
    { name: 'Dr. Arthur Kwok', title: 'President & Chancellor', image: 'https://picsum.photos/seed/leader1/400/500' },
    { name: 'Prof. Elena Vance', title: 'Provost & VP of Academic Affairs', image: 'https://picsum.photos/seed/leader2/400/500' },
    { name: 'Mr. Simon Cheng', title: 'VP of Finance & Operations', image: 'https://picsum.photos/seed/leader3/400/500' },
    { name: 'Dr. Linda Wu', title: 'VP of External Relations', image: 'https://picsum.photos/seed/leader4/400/500' },
  ];

  return (
    <div className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <span className="section-label">Leadership</span>
          <h1 className="text-6xl text-hksb-navy mb-8">Administration</h1>
          <p className="text-hksb-navy/60 text-lg leading-relaxed">
            The leadership team at HKSB is committed to maintaining the highest standards of academic excellence and operational integrity.
          </p>
        </div>

        <section className="mb-32">
          <h2 className="text-3xl text-hksb-navy mb-12 pb-4 border-b border-hksb-navy/10">University Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((leader, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group card-hover"
              >
                <div className="aspect-[4/5] overflow-hidden mb-6">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-xl text-hksb-navy mb-1">{leader.name}</h3>
                <p className="text-hksb-gold font-display text-[10px] uppercase tracking-widest">{leader.title}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl text-hksb-navy mb-8">Our Mission & Vision</h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="bg-hksb-gold/10 p-4 rounded-full">
                  <Award className="text-hksb-gold" size={24} />
                </div>
                <div>
                  <h4 className="text-xl text-hksb-navy mb-2">Academic Excellence</h4>
                  <p className="text-hksb-navy/60 text-sm leading-relaxed">
                    To provide world-class business education that combines theoretical depth with practical relevance.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="bg-hksb-gold/10 p-4 rounded-full">
                  <Shield className="text-hksb-gold" size={24} />
                </div>
                <div>
                  <h4 className="text-xl text-hksb-navy mb-2">Integrity & Ethics</h4>
                  <p className="text-hksb-navy/60 text-sm leading-relaxed">
                    To foster a culture of ethical leadership and social responsibility in the global business community.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="bg-hksb-gold/10 p-4 rounded-full">
                  <Users className="text-hksb-gold" size={24} />
                </div>
                <div>
                  <h4 className="text-xl text-hksb-navy mb-2">Global Perspective</h4>
                  <p className="text-hksb-navy/60 text-sm leading-relaxed">
                    To cultivate a diverse and inclusive environment that prepares students for the complexities of international commerce.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <button 
                onClick={handleContact}
                className="btn-primary"
              >
                Contact Administration
              </button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
              alt="HKSB Boardroom" 
              className="w-full h-full object-cover shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -left-10 bg-hksb-gold p-12 hidden md:block">
              <p className="text-white text-3xl font-serif italic">"Leadership is not a position, it is a responsibility."</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Administration;
