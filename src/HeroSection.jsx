import "./HeroSection.css";
import { FaPhoneAlt } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="overlay"></div>

      <div className="hero-content">
        <h1>FIND YOUR PROPERTY</h1>
        
        {/* Contact Us button with phone number */}
        <a href="tel:+919999999999" className="contact-btn">
          <FaPhoneAlt /> +91 9999999999
        </a>
      </div>
    </section>
  );
}
