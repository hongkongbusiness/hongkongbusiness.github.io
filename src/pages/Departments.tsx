import { motion } from 'motion/react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, User, Mail, GraduationCap } from 'lucide-react';
import { INSTITUTES, FACULTY } from '../data/mockData';

const Departments = () => {
  return (
    <div className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <span className="font-display text-[10px] uppercase tracking-[0.3em] text-hksb-gold mb-4 block">Academic Structure</span>
          <h1 className="text-6xl text-hksb-navy mb-8">Departments & Institutes</h1>
          <p className="text-hksb-navy/60 text-lg font-light leading-relaxed">
            HKSB is organized into specialized research institutes and academic departments, each dedicated to advancing knowledge in specific areas of business and management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INSTITUTES.map((inst) => (
            <motion.div 
              key={inst.id}
              whileHover={{ y: -5 }}
              className="bg-white p-10 border border-hksb-navy/5 shadow-sm flex flex-col"
            >
              <h3 className="text-2xl text-hksb-navy mb-4">{inst.name}</h3>
              <p className="text-hksb-navy/60 text-sm font-light mb-8 flex-grow leading-relaxed">
                {inst.description}
              </p>
              <div className="flex items-center justify-between pt-6 border-t border-hksb-navy/5">
                <div className="flex items-center space-x-2 text-[10px] font-display uppercase tracking-widest text-hksb-navy/40">
                  <User size={14} className="text-hksb-gold" />
                  <span>Dean: {inst.dean}</span>
                </div>
                <Link to={`/departments/${inst.id}`} className="text-hksb-navy hover:text-hksb-gold transition-colors">
                  <ArrowLeft className="rotate-180" size={20} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const InstituteDetail = () => {
  const { id } = useParams();
  const institute = INSTITUTES.find(i => i.id === id);
  const facultyMembers = FACULTY.filter(f => institute?.facultyIds.includes(f.id));

  if (!institute) return <div className="pt-40 text-center">Institute not found</div>;

  return (
    <div className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/departments" className="inline-flex items-center space-x-2 text-hksb-navy font-display text-[10px] uppercase tracking-widest mb-12 hover:text-hksb-gold transition-colors">
          <ArrowLeft size={14} />
          <span>Back to Departments</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 mb-32">
          <div className="lg:col-span-2">
            <h1 className="text-6xl text-hksb-navy mb-8">{institute.name}</h1>
            <p className="text-hksb-navy/60 text-xl font-light leading-relaxed mb-12">
              {institute.description}
            </p>
            
            <div className="prose prose-hksb max-w-none text-hksb-navy/80 font-light leading-relaxed">
              <p className="mb-6">
                The {institute.name} at HKSB is a world-renowned center for excellence. Our mission is to bridge the gap between academic theory and practical business application through rigorous research and industry collaboration.
              </p>
              <p>
                We focus on interdisciplinary approaches, bringing together experts from various fields to solve the most pressing challenges facing modern business in Asia and beyond.
              </p>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-hksb-navy text-white p-10">
              <h3 className="text-xl mb-6 border-b border-white/10 pb-4">Leadership</h3>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-hksb-gold/20 rounded-full flex items-center justify-center">
                  <User size={32} className="text-hksb-gold" />
                </div>
                <div>
                  <p className="text-hksb-gold font-display text-[10px] uppercase tracking-widest">Dean</p>
                  <p className="text-lg">{institute.dean}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section>
          <div className="flex items-end justify-between mb-16">
            <div>
              <span className="font-display text-[10px] uppercase tracking-[0.3em] text-hksb-gold mb-4 block">Our People</span>
              <h2 className="text-5xl text-hksb-navy">Faculty Members</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {facultyMembers.map((member) => (
              <motion.div 
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="aspect-[4/5] overflow-hidden mb-6 relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-hksb-navy/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <div className="text-white">
                      <p className="text-[10px] font-display uppercase tracking-widest text-hksb-gold mb-2">Specialization</p>
                      <p className="text-sm font-light">{member.specialization}</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl text-hksb-navy mb-1">{member.name}</h3>
                <p className="text-hksb-gold font-display text-[10px] uppercase tracking-widest mb-4">{member.title}</p>
                <p className="text-hksb-navy/60 text-sm font-light leading-relaxed mb-6 line-clamp-3">
                  {member.bio}
                </p>
                <div className="flex space-x-4">
                  <button className="text-hksb-navy hover:text-hksb-gold transition-colors"><Mail size={18} /></button>
                  <button className="text-hksb-navy hover:text-hksb-gold transition-colors"><GraduationCap size={18} /></button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Departments;
