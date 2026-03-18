import { motion } from 'motion/react';
import { Heart, Globe, ShieldCheck, TrendingUp } from 'lucide-react';

const Donations = () => {
  const handleDonate = () => {
    window.location.href = 'mailto:admin@hksb.ac.cn?subject=Donation Inquiry';
  };

  const funds = [
    {
      title: 'HKSB Excellence Fund',
      description: 'Supports general operations, student scholarships, and faculty research initiatives.',
      icon: TrendingUp
    },
    {
      title: 'Future Business Foundation',
      description: 'Dedicated to funding innovative startups and business research projects by our students.',
      icon: Globe
    },
    {
      title: 'Student Support & Welfare',
      description: 'Ensures that all talented students have access to HKSB education regardless of financial background.',
      icon: Heart
    },
    {
      title: 'Campus Development',
      description: 'Investing in state-of-the-art facilities and laboratories for our research institutes.',
      icon: ShieldCheck
    }
  ];

  return (
    <div className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <span className="section-label">Giving</span>
          <h1 className="text-6xl text-hksb-navy mb-8">Support the Future</h1>
          <p className="text-hksb-navy/60 text-lg leading-relaxed">
            Your contributions help HKSB maintain its position as a world-class institution. Every gift, regardless of size, makes a significant impact on our students and research.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {funds.map((fund, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-12 border border-hksb-navy/5 shadow-sm card-hover"
            >
              <fund.icon className="text-hksb-gold mb-6" size={40} />
              <h3 className="text-2xl text-hksb-navy mb-4">{fund.title}</h3>
              <p className="text-hksb-navy/60 text-sm mb-8">
                {fund.description}
              </p>
              <button 
                onClick={handleDonate}
                className="btn-primary"
              >
                Donate Now
              </button>
            </motion.div>
          ))}
        </div>

        <div className="bg-hksb-navy text-white p-16 relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl mb-6">Legacy Giving</h2>
              <p className="text-white/60 text-lg mb-8">
                Consider making a lasting impact through planned giving. Legacy gifts ensure the long-term sustainability of HKSB's mission and values.
              </p>
              <button 
                onClick={handleDonate}
                className="btn-outline border-white text-white hover:bg-white hover:text-hksb-navy"
              >
                Contact Development Office
              </button>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center p-8 bg-white/5">
                <div className="text-3xl font-serif text-hksb-gold mb-2">500+</div>
                <div className="text-[10px] font-display uppercase tracking-widest text-white/40">Annual Donors</div>
              </div>
              <div className="text-center p-8 bg-white/5">
                <div className="text-3xl font-serif text-hksb-gold mb-2">$20M+</div>
                <div className="text-[10px] font-display uppercase tracking-widest text-white/40">Funds Raised</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donations;
