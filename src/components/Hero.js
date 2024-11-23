import React from "react";
import "./Hero.css";
import profileImage from "../assets/IMG-20230904-WA0013.jpg";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        {/* Gambar 3D */}
        <div className="hero-image" aria-hidden="true">
          <div className="cube">
            <div className="side front">
              <img src={profileImage} alt="Front" />
            </div>
            <div className="side back">
              <img src={profileImage} alt="Back" />
            </div>
            <div className="side left">
              <img src={profileImage} alt="Left" />
            </div>
            <div className="side right">
              <img src={profileImage} alt="Right" />
            </div>
            <div className="side top">
              <img src={profileImage} alt="Top" />
            </div>
            <div className="side bottom">
              <img src={profileImage} alt="Bottom" />
            </div>
          </div>
        </div>

        {/* Teks Deskripsi */}
        <div className="hero-text">
          <p className="intro">Hi, It's me</p>
          <h1>
            <span className="highlight">Muhammad</span> Nafis Firdaus
          </h1>
          <h2>
            Fullstack <span className="highlight">Developer</span>
          </h2>
          <a href="#about" className="btn btn-primary" aria-label="Learn more about me">
            About Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
