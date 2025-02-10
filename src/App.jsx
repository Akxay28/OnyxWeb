import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Import Routes
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import './App.css';
import MainLayout from './Views/Layout/MainLayout';
import Home from './Views/Pages/Home/Home';
import Services from './Views/Pages/Services/Services.jsx';

function App() {
  return (
    <>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </MainLayout>
      </Router>
    </>
  )
}

export default App
