import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Administration from './pages/Administration';
import Departments, { InstituteDetail } from './pages/Departments';
import Programs from './pages/Programs';
import Recruitment from './pages/Recruitment';
import Donations from './pages/Donations';
import News from './pages/News';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/administration" element={<Administration />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/departments/:id" element={<InstituteDetail />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/recruitment" element={<Recruitment />} />
            <Route path="/donations" element={<Donations />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
