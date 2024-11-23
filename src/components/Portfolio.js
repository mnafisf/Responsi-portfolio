import React from "react";
import "./Portfolio.css";

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "To-Do-List",
    image: require("../assets/Screenshot 2024-11-15 205941.png"), // Gambar di src/assets
  },
  {
    id: 2,
    title: "Project 2",
    description: "Tampilan admin",
    image: require("../assets/Screenshot 2024-10-30 212128.png"),
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio container">
      <h2 className="mb-5">
        Latest <span>Projects</span>
      </h2>

      {/* Grid Project */}
      <div className="row">
        {projects.map((project) => (
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={project.id}>
            <div className="portfolio-item card shadow-sm">
              <img
                src={project.image}
                alt={project.title}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
