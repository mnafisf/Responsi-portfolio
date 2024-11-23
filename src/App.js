import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials"; // Import Testimonials
import Contact from "./components/Contact";
import "./App.css"; // Import gaya global

function App() {
  return (
    <>
      {/* Header Section */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services />

      {/* Portfolio Section */}
      <Portfolio />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Section */}
      <Contact />
    </>
  );
}

export default App;
