import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-hksb-navy text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-16">
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="text-3xl font-serif font-bold tracking-tighter">HKSB</span>
              <span className="text-[10px] font-display uppercase tracking-[0.2em] text-hksb-gold -mt-1">Hong Kong School of Business</span>
            </div>
            <p className="text-white/60 text-sm font-light leading-relaxed">
              Empowering global leaders through innovative business education and cutting-edge research in the heart of Asia.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/40 hover:text-hksb-gold transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-white/40 hover:text-hksb-gold transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-white/40 hover:text-hksb-gold transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-xs uppercase tracking-widest text-hksb-gold mb-8">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link to="/administration" className="hover:text-white transition-colors">Administration</Link></li>
              <li><Link to="/departments" className="hover:text-white transition-colors">Departments</Link></li>
              <li><Link to="/programs" className="hover:text-white transition-colors">Programs</Link></li>
              <li><Link to="/news" className="hover:text-white transition-colors">News & Events</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xs uppercase tracking-widest text-hksb-gold mb-8">Resources</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link to="/recruitment" className="hover:text-white transition-colors">Recruitment</Link></li>
              <li><Link to="/donations" className="hover:text-white transition-colors">Giving to HKSB</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Library</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Alumni Network</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xs uppercase tracking-widest text-hksb-gold mb-8">Contact Us</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-hksb-gold shrink-0" />
                <span>123 Business Way, Central, Hong Kong</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-hksb-gold shrink-0" />
                <span>+852 1234 5678</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-hksb-gold shrink-0" />
                <span>admin@hksb.ac.cn</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center text-[10px] font-display uppercase tracking-widest text-white/30">
          <p>© 2026 Hong Kong School of Business. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
