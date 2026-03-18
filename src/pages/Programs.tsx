import React from 'react';
import { motion } from 'motion/react';
import { Mail, FileText, Send } from 'lucide-react';

const Programs = () => {
  const applicationRef = React.useRef<HTMLDivElement>(null);

  const scrollToApply = () => {
    applicationRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const programs = [
    {
      category: 'Executive Education',
      items: [
        { name: 'MBA (Master of Business Administration)', type: 'Mixed Online/Offline', duration: '18-24 Months' },
        { name: 'EMBA (Executive MBA)', type: 'Mixed Online/Offline', duration: '12-18 Months' },
        { name: 'DBA (Doctor of Business Administration)', type: 'Mixed Online/Offline', duration: '3-4 Years' },
        { name: 'Short-term Executive Exchange', type: 'Intensive Workshop', duration: '1-4 Weeks' },
      ]
    },
    {
      category: 'Research & Advanced Studies',
      items: [
        { name: 'Undergraduate Summer Research', type: 'On-campus', duration: '8 Weeks' },
        { name: 'High School Summer Research', type: 'On-campus', duration: '4 Weeks' },
        { name: 'Joint PhD Program', type: 'Collaborative', duration: '4-5 Years' },
        { name: 'In-service Postdoctoral Program', type: 'Flexible', duration: '2 Years' },
      ]
    }
  ];

  return (
    <div className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <span className="section-label">Education</span>
          <h1 className="text-6xl text-hksb-navy mb-8">Academic Programs</h1>
          <p className="text-hksb-navy/60 text-lg leading-relaxed">
            HKSB offers a diverse range of programs designed for different stages of professional and academic development, with a focus on flexible, high-impact learning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-16">
            {programs.map((group, idx) => (
              <div key={idx}>
                <h2 className="text-2xl text-hksb-navy mb-8 pb-4 border-b border-hksb-navy/10">{group.category}</h2>
                <div className="grid grid-cols-1 gap-6">
                  {group.items.map((item, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ x: 10 }}
                      className="bg-white p-8 border border-hksb-navy/5 shadow-sm flex flex-col md:flex-row md:items-center justify-between group card-hover"
                    >
                      <div>
                        <h3 className="text-xl text-hksb-navy mb-2 group-hover:text-hksb-gold transition-colors">{item.name}</h3>
                        <div className="flex space-x-4 text-[10px] font-display uppercase tracking-widest text-hksb-navy/40">
                          <span>{item.type}</span>
                          <span>•</span>
                          <span>{item.duration}</span>
                        </div>
                      </div>
                      <button 
                        onClick={scrollToApply}
                        className="mt-4 md:mt-0 text-hksb-navy font-display text-[10px] uppercase tracking-widest border border-hksb-navy/20 px-4 py-2 hover:bg-hksb-navy hover:text-white transition-all"
                      >
                        Details
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-32" ref={applicationRef}>
              <div className="bg-hksb-navy text-white p-10">
                <h3 className="text-2xl mb-6">How to Apply</h3>
                <p className="text-white/60 text-sm font-light mb-8 leading-relaxed">
                  We welcome applications from motivated individuals worldwide. Please prepare the following documents:
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center space-x-3 text-sm">
                    <FileText size={18} className="text-hksb-gold" />
                    <span>Official Academic Transcripts</span>
                  </li>
                  <li className="flex items-center space-x-3 text-sm">
                    <FileText size={18} className="text-hksb-gold" />
                    <span>Updated Curriculum Vitae (CV)</span>
                  </li>
                  <li className="flex items-center space-x-3 text-sm">
                    <FileText size={18} className="text-hksb-gold" />
                    <span>Personal Statement</span>
                  </li>
                </ul>
                <div className="space-y-4">
                  <p className="text-[10px] font-display uppercase tracking-widest text-hksb-gold">Submit via Email</p>
                  <a 
                    href="mailto:admin@hksb.ac.cn" 
                    className="flex items-center justify-between bg-white/10 p-4 hover:bg-white/20 transition-colors group"
                  >
                    <span className="text-sm font-mono">admin@hksb.ac.cn</span>
                    <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              <div className="mt-8 p-10 border border-hksb-navy/10 bg-white">
                <h4 className="font-display text-xs uppercase tracking-widest text-hksb-gold mb-4">Admissions Office</h4>
                <p className="text-sm text-hksb-navy/60 leading-relaxed">
                  For inquiries regarding specific programs or the application process, please contact our admissions team.
                </p>
                <div className="mt-6 flex items-center space-x-3 text-hksb-navy">
                  <Mail size={16} />
                  <span className="text-sm">admissions@hksb.ac.cn</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
