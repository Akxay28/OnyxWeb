import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Import Routes
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import './App.css';
import MainLayout from './Views/Layout/MainLayout';
import Home from './Views/Pages/Home/Home';
import Services from './Views/Pages/Services/Services.jsx';
import About from './Views/Pages/About/About.jsx';

function App() {
  return (
    <>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </MainLayout>
      </Router>
    </>
  )
}

export default App
