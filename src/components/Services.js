import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section id="services" className="services bg-light py-5">
      <div className="container text-center">
        <h2 className="mb-5">
          Our <span className="text-primary">Services</span>
        </h2>
        <div className="row">
          {/* Service 1 */}
          <div className="col-lg-4 col-md-6 mb-4">
            <article className="service p-4 shadow rounded h-100">
              <i className="fas fa-code service-icon mb-3" aria-hidden="true"></i>
              <h3 className="mb-3">Web Development</h3>
              <p>Building modern, responsive websites tailored to your needs.</p>
            </article>
          </div>
          {/* Service 2 */}
          <div className="col-lg-4 col-md-6 mb-4">
            <article className="service p-4 shadow rounded h-100">
              <i className="fas fa-paint-brush service-icon mb-3" aria-hidden="true"></i>
              <h3 className="mb-3">Graphic Design</h3>
              <p>Designing sleek, user-friendly interfaces for web and apps.</p>
            </article>
          </div>
          {/* Service 3 */}
          <div className="col-lg-4 col-md-6 mb-4">
            <article className="service p-4 shadow rounded h-100">
              <i className="fas fa-chart-line service-icon mb-3" aria-hidden="true"></i>
              <h3 className="mb-3">Digital Marketing</h3>
              <p>Boosting your online presence through tailored strategies.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
