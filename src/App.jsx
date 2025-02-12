import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom'; // Import Routes
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import './App.css';
import MainLayout from './Views/Layout/MainLayout';
import Home from './Views/Pages/Home/Home';
import Services from './Views/Pages/Services/Services.jsx';
import About from './Views/Pages/About/About.jsx';
import Contact from './Views/Pages/Contact/Contact.jsx';
import { useEffect } from 'react';
import ScrumMaster from './Views/Pages/ScrumMaster/ScrumMaster.jsx';

function App() {

  const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);

    return null;
  };


  return (
    <>
      <Router>
        <ScrollToTop />
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/scrumMaster" element={<ScrumMaster />} />
          </Routes>
        </MainLayout>
      </Router>
    </>
  )
}

export default App
