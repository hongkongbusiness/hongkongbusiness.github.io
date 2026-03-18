import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, FileText, Send, MapPin } from 'lucide-react';

const Recruitment = () => {
  const applyRef = React.useRef<HTMLDivElement>(null);

  const scrollToApply = () => {
    applyRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const positions = [
    {
      title: 'Professor in Sustainable Finance',
      department: 'ESG Research Institute',
      type: 'Full-time',
      location: 'Hong Kong',
      description: 'We are seeking a distinguished scholar to lead our research initiatives in sustainable finance and green investment strategies.'
    },
    {
      title: 'Assistant Professor in Digital Marketing',
      department: 'Department of Business Management',
      type: 'Full-time',
      location: 'Hong Kong',
      description: 'Join our management faculty to explore the intersection of consumer behavior and digital media platforms.'
    },
    {
      title: 'Postdoctoral Fellow',
      department: 'Future Multimedia Laboratory',
      type: 'Contract',
      location: 'Hong Kong',
      description: 'Conduct cutting-edge research on multimedia applications in business communication and virtual environments.'
    }
  ];

  return (
    <div className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <span className="section-label">Careers</span>
          <h1 className="text-6xl text-hksb-navy mb-8">Join Our Faculty</h1>
          <p className="text-hksb-navy/60 text-lg leading-relaxed">
            HKSB is always looking for talented individuals who are passionate about business education and research. Join our diverse community of scholars and professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-2xl text-hksb-navy mb-8 pb-4 border-b border-hksb-navy/10">Open Positions</h2>
            {positions.map((job, i) => (
              <motion.div 
                key={i}
                whileHover={{ x: 10 }}
                className="bg-white p-10 border border-hksb-navy/5 shadow-sm group card-hover"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl text-hksb-navy group-hover:text-hksb-gold transition-colors">{job.title}</h3>
                    <div className="flex items-center space-x-4 mt-2 text-[10px] font-display uppercase tracking-widest text-hksb-navy/40">
                      <span className="flex items-center space-x-1"><Briefcase size={12} /> <span>{job.department}</span></span>
                      <span className="flex items-center space-x-1"><MapPin size={12} /> <span>{job.location}</span></span>
                    </div>
                  </div>
                  <span className="mt-4 md:mt-0 px-3 py-1 bg-hksb-cream text-hksb-navy text-[10px] font-display uppercase tracking-widest border border-hksb-navy/10">
                    {job.type}
                  </span>
                </div>
                <p className="text-hksb-navy/60 text-sm mb-8">
                  {job.description}
                </p>
                <button 
                  onClick={scrollToApply}
                  className="btn-outline py-2 px-6"
                >
                  Apply for Position
                </button>
              </motion.div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-32" ref={applyRef}>
              <div className="bg-hksb-navy text-white p-10">
                <h3 className="text-2xl mb-6">Application Process</h3>
                <p className="text-white/60 text-sm font-light mb-8 leading-relaxed">
                  To apply for a faculty or research position, please submit your application package including:
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center space-x-3 text-sm">
                    <FileText size={18} className="text-hksb-gold" />
                    <span>Cover Letter</span>
                  </li>
                  <li className="flex items-center space-x-3 text-sm">
                    <FileText size={18} className="text-hksb-gold" />
                    <span>Full Curriculum Vitae</span>
                  </li>
                  <li className="flex items-center space-x-3 text-sm">
                    <FileText size={18} className="text-hksb-gold" />
                    <span>Research Statement</span>
                  </li>
                  <li className="flex items-center space-x-3 text-sm">
                    <FileText size={18} className="text-hksb-gold" />
                    <span>Teaching Philosophy</span>
                  </li>
                </ul>
                <div className="space-y-4">
                  <p className="text-[10px] font-display uppercase tracking-widest text-hksb-gold">Submit to HR</p>
                  <a 
                    href="mailto:admin@hksb.ac.cn" 
                    className="flex items-center justify-between bg-white/10 p-4 hover:bg-white/20 transition-colors group"
                  >
                    <span className="text-sm font-mono">admin@hksb.ac.cn</span>
                    <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recruitment;
