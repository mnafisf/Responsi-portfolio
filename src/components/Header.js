import React, { useState } from "react";
import classNames from "classnames";
import "./Header.css";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prevState) => !prevState);
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false); // Tutup menu setelah navigasi
  };

  const navSections = ["home", "about", "services", "portfolio", "contact"];

  return (
    <header className="header">
      {/* Logo */}
      <h1 className="logo">Portfolio.</h1>

      {/* Hamburger Menu Button */}
      <button
        className="hamburger"
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
        aria-expanded={isMobileMenuOpen}
        aria-controls="nav-links"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      {/* Navigation Links */}
      <nav>
        <ul
          id="nav-links"
          className={classNames("nav-links", { active: isMobileMenuOpen })}
          role="menu"
        >
          {navSections.map((section) => (
            <li key={section} className="nav-item">
              <a
                href={`#${section}`}
                className="nav-link"
                onClick={handleLinkClick}
                role="menuitem"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
