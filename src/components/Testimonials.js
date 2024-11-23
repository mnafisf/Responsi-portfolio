import React, { useState } from 'react';
import { Star } from 'react-feather';
import './Testimonials.css';

const initialTestimonials = [
  {
    id: 1,
    name: 'Muhammad Nafis',
    review: 'Excellent service! The job was completed on time and exceeded our expectations.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Robi',
    review: 'Very satisfied with the results! Smooth communication and quality work.',
    rating: 4,
  },
  {
    id: 3,
    name: 'Ridho',
    review: 'Very professional work, the results are really satisfying.',
    rating: 5,
  },
];

function Testimonials() {
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [formData, setFormData] = useState({
    name: '',
    review: '',
    rating: 0,
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'rating' ? parseInt(value) : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create new testimonial with unique ID
    const newTestimonial = {
      ...formData,
      id: Date.now(),
    };

    // Update testimonials list
    setTestimonials((prevTestimonials) => [...prevTestimonials, newTestimonial]);

    // Reset form
    setFormData({
      name: '',
      review: '',
      rating: 0,
    });
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        {/* Section Title */}
        <h2>Client Reviews</h2>
        <p className="subtitle">What clients are saying about my work</p>

        {/* Add Testimonial Form */}
        <form onSubmit={handleSubmit} className="testimonial-form">
          <h3>Add Testimonial</h3>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
            required
          />
          <textarea
            name="review"
            value={formData.review}
            onChange={handleInputChange}
            placeholder="Testimonial"
            required
          />
          <label>
            Ratings
            <select
              name="rating"
              value={formData.rating}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Rating</option>
              {[1, 2, 3, 4, 5].map((rating) => (
                <option key={rating} value={rating}>
                  {rating} Star{rating > 1 ? 's' : ''}
                </option>
              ))}
            </select>
          </label>
          <button type="submit">Add Testimonial</button>
        </form>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div className="testimonial-card" key={testimonial.id}>
              <div className="testimonial-header">
                <h3>{testimonial.name}</h3>
              </div>
              <p className="testimonial-text">{testimonial.review}</p>
              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill={i < testimonial.rating ? '#FFC107' : 'none'}
                    stroke={i < testimonial.rating ? '#FFC107' : '#CBD5E0'}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
