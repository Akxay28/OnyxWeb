import { useEffect } from 'react';
import { Route, HashRouter as Router, Routes, useLocation } from 'react-router-dom'; // Use HashRouter instead of BrowserRouter
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import './App.css';
import MainLayout from './Views/Layout/MainLayout';
import About from './Views/Pages/About/About.jsx';
import AIML from './Views/Pages/AIML.jsx';
import BusinessAnalysis from './Views/Pages/BusinessAnalysis/BusinessAnalysis.jsx';
import Cloud from './Views/Pages/Cloud.jsx';
import Contact from './Views/Pages/Contact/Contact.jsx';
import DataAnalysis from './Views/Pages/DataAnalysis/DataAnalysis.jsx';
import DigitalMarketing from './Views/Pages/DigitalMarketing.jsx';
import DigitalTransforamtion from './Views/Pages/DigitalTransforamtion.jsx';
import Ecommerce from './Views/Pages/Ecommerce.jsx';
import FullStack from './Views/Pages/FullStack.jsx';
import HealthCare from './Views/Pages/HealthCare/HealthCare.jsx';
import Home from './Views/Pages/Home/Home';
import Microsoft from './Views/Pages/Microsoft.jsx';
import Mobile from './Views/Pages/Mobile.jsx';
import QualityAssurance from './Views/Pages/QualityAssurance/QualityAssurance.jsx';
import ScrumMaster from './Views/Pages/ScrumMaster/ScrumMaster.jsx';
import Itstaffing from './Views/Pages/Services/ITStaffing/Itstaffing.jsx';

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
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/scrumMaster" element={<ScrumMaster />} />
            <Route path="/healthcare" element={<HealthCare />} />
            <Route path="/businessAnalysis" element={<BusinessAnalysis />} />
            <Route path='/dataAnalysis' element={<DataAnalysis />} />
            <Route path='/qualityAssurance' element={<QualityAssurance />} />
            <Route path="/ecommerce" element={<Ecommerce />} />
            <Route path="/mobile" element={<Mobile />} />
            <Route path="/fullStack" element={<FullStack />} />
            <Route path="/aiml" element={<AIML />} />
            <Route path="/microsoft" element={<Microsoft />} />
            <Route path="/cloud" element={<Cloud />} />
            <Route path="/digitalTransformation" element={<DigitalTransforamtion />} />
            <Route path="/digitalMarketing" element={<DigitalMarketing />} />
            <Route path="/itStaffing" element={<Itstaffing />} />
          </Routes>
        </MainLayout>
      </Router>
    </>
  )
}

export default App;
