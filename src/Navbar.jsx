import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo Left */}
      <div className="nav-left">
        <img src="/logo.png" alt="Logo" className="logo" />
      </div>

      {/* Desktop Menu */}
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#properties">Properties</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>

      {/* Hamburger for Mobile */}
      <div className="hamburger" onClick={() => setMenuOpen(true)}>
        ☰
      </div>

      {/* Side Menu for Mobile */}
      <div className={`side-menu ${menuOpen ? "open" : ""}`}>
        <div className="side-menu-header">
          <span className="close-btn" onClick={() => setMenuOpen(false)}>✖</span>
        </div>
        <ul>
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About Us</a></li>
          <li><a href="#properties" onClick={() => setMenuOpen(false)}>Properties</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact Us</a></li>
        </ul>
      </div>

      {/* Dark overlay */}
      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)} />}
    </nav>
  );
}
