import React from "react";
import "./About.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import profileImage from "../assets/slebew.png"; // Ganti dengan path gambar Anda

const About = () => {
  return (
    <section id="about" className="about bg-light py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Gambar Profil */}
          <div className="col-lg-6 text-center mb-4 mb-lg-0">
            <div className="about-image">
              <img
                src={profileImage}
                alt="Profile"
                className="img-fluid rounded-circle shadow"
              />
            </div>
          </div>

          {/* Teks Deskripsi */}
          <div className="col-lg-6">
            <article className="about-text">
              <h2 className="mb-4">
                About <span className="text-primary">Me</span>
              </h2>
              <p>
                Hello! I’m a passionate web developer dedicated to crafting
                user-friendly and visually appealing digital experiences. With
                expertise in modern web technologies, I enjoy solving complex
                challenges and bringing creative ideas to life.
              </p>
              <p>
                My journey in web development has been fueled by curiosity and
                a desire to continuously learn and grow. I thrive in
                collaborative environments where I can contribute and innovate.
              </p>
              <div className="mt-4">
                <a href="#contact" className="btn btn-primary me-2">
                  Contact Me
                </a>
                <a
                  href="CV Muhammad Nafis Firdaus.pdf" // Ganti dengan path file CV Anda
                  className="btn btn-outline-secondary"
                  download="CV Muhammad Nafis Firdaus.pdf"
                >
                  Download CV
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
