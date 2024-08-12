import React, { useState } from 'react';
import axios from 'axios';
import './ContactForm.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/contact', formData);
    } catch (error) {
      console.error('There was an error sending the message!', error);
    }
  };

  return (
    <>
    <Header />
    <div className="contact-container">
      <div className="contact-info">
        <div className="contact-items">
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <div>
              <h4>Call Us On </h4>
              <p>We are available 24/7 and feel free to contact us for any enquiries.</p>
              <p>Phone: +254-799-064-500</p>
            </div>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <div>
              <h4>Contact Us</h4>
              <p>Fill out the form and we will contact you within 24 hours.</p>
              <p>Email: customer@onestop.com</p>
              <p>Email: support@onestop.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name *"
              required
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email *"
              required
            />
          </div>
          <div>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone Number *"
              required
            />
          </div>
          <div>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
            />
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default ContactForm;
