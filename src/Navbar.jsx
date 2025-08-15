import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo Left */}
      <div className="nav-left">
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <img src="/logo.png" alt="Logo" className="logo" />
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="nav-links">
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
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
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
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
