import './App.css';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import { HashRouter as Router,Routes,Route } from 'react-router-dom';
import RecentProperties from "./RecentProperties";
import PropertyDetails from './PropertyDetails';

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<><HeroSection /><RecentProperties /></>} />
      <Route path="/property/:id" element={<PropertyDetails />} />
    </Routes>
  </Router>
  );
}

export default App;
