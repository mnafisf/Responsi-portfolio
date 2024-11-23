import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }
    setSubmitted(true);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setTimeout(() => setSubmitted(false), 3000); // Pesan konfirmasi hilang setelah 3 detik
  };

  return (
    <section id="contact" className="contact">
      <h2>
        Contact <span>Me</span>
      </h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name*</label>
        <input
          id="fullName"
          type="text"
          name="fullName"
          placeholder="Your Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
          aria-label="Full Name"
        />

        <label htmlFor="email">Email Address*</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Your Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          aria-label="Email Address"
        />

        <label htmlFor="phone">Mobile Number</label>
        <input
          id="phone"
          type="text"
          name="phone"
          placeholder="Your Mobile Number"
          value={formData.phone}
          onChange={handleChange}
          pattern="[0-9]+"
          title="Only numbers are allowed"
          maxLength="15"
          aria-label="Mobile Number"
        />

        <label htmlFor="subject">Email Subject</label>
        <input
          id="subject"
          type="text"
          name="subject"
          placeholder="Email Subject"
          value={formData.subject}
          onChange={handleChange}
          aria-label="Email Subject"
        />

        <label htmlFor="message">Your Message*</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          aria-label="Your Message"
        ></textarea>

        <button type="submit" className="btn">Send Message</button>
      </form>
      {submitted && (
        <p className="confirmation">Thank you! Your message has been sent.</p>
      )}
    </section>
  );
};

export default Contact;
