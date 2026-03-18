import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe, User, BookOpen, Newspaper, Briefcase, Heart, Building2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'Home', path: '/', icon: Globe },
    { name: 'Administration', path: '/administration', icon: Building2 },
    { name: 'Departments', path: '/departments', icon: BookOpen },
    { name: 'Programs', path: '/programs', icon: User },
    { name: 'News', path: '/news', icon: Newspaper },
    { name: 'Recruitment', path: '/recruitment', icon: Briefcase },
    { name: 'Donations', path: '/donations', icon: Heart },
  ];

  return (
    <nav className="fixed w-full z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex flex-col">
            <span className="text-2xl font-serif font-bold tracking-tighter text-hksb-navy">HKSB</span>
            <span className="text-[10px] font-display uppercase tracking-[0.2em] text-hksb-gold -mt-1">Hong Kong School of Business</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-hksb-navy hover:text-hksb-gold font-display text-xs uppercase tracking-widest transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link to="/programs" className="btn-primary">Apply Now</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-hksb-navy p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-hksb-navy/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 text-hksb-navy hover:bg-hksb-cream px-3 py-4 font-display text-sm uppercase tracking-widest"
                >
                  <link.icon size={18} className="text-hksb-gold" />
                  <span>{link.name}</span>
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  to="/programs"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center btn-primary"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
