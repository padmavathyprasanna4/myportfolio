import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS SDK
import './ContactMe.css';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the email using EmailJS
    emailjs
      .sendForm('service_fu17l9l', 'template_pdhkm4n', e.target, '14-rZm-TTP5SLLIDF')
      .then(
        (result) => {
          alert('Message Sent!');
          setFormData({
            firstName: '',
            email: '',
            subject: '',
            message: '',
          });
        },
        (error) => {
          alert('An error occurred, please try again later');
          console.error(error.text);
        }
      );
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-left">
          <h2 className="contact-title">Get in Touch</h2>
          <p className="contact-subtitle">I'd like to hear from you!</p>
          <p className="contact-description">If you have any inquiries or just want to say hi, please use the contact form.</p>

          <div className="contact-details">
            <p><strong>Email:</strong> padmavathyprasanna4@gmail.com</p>
          </div>
        </div>

        <div className="contact-right">
          <h2 className="form-title">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="firstName"
              className="form-input"
              placeholder="Full Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              className="form-input"
              placeholder="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              className="form-textarea"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="btn-send">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
