import './App.css';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import RecentProperties from "./RecentProperties";
import PropertyDetails from './PropertyDetails';
import SoldProperties from './SoldProperties';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Page → Hero + Recent + Sold */}
        <Route path="/" element={<><HeroSection /><RecentProperties /><SoldProperties /></>} />
        
        {/* Property details page */}
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
