import "./HeroSection.css";
import { FaPhoneAlt } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="overlay"></div>

      <div className="hero-content">
        <h1>FIND YOUR DREAM<br />PROPERTY TODAY</h1>
        <p>Find best houses, plots and agriculture lands in and around Tenkasi.</p>

        {/* Contact Us button with phone number */}
        <a href="tel:+919999999999" className="contact-btn">
          <FaPhoneAlt /> +91 9999999999
        </a>
      </div>
    </section>
  );
}
