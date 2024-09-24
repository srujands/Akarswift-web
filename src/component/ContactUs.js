import React, { useRef, useState, useEffect } from 'react';
import '../component/ContactUs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';

const ContactUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Animation easing
      once: false, // Whether animation should happen only once
      mirror: true, // Whether elements should animate out while scrolling past them
    });
  }, []);

  const regx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [buttonText, setButtonText] = useState('Send Message');
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });

  const checkEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (regx.test(value) === false) {
      setError('Please enter a valid email');
    } else {
      setError('');
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (error) return; // Stop if there's an error in the email

    try {
      const response = await axios.post('http://localhost:3001/send-email', {
        name: formData.name,
        email: email,
        message: formData.message,
      });

      if (response.status === 200) {
        setButtonText(<b style={{ color: 'red' }}>Message Sent</b>);
        e.target.reset();
        setTimeout(() => {
          setButtonText('Send Message');
        }, 3000);
      }
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };

  return (
    <div className="container my-5" style={{ color: 'white' }}>
      <div data-aos="fade-up">
        <h2 className="text-center mb-4">Contact Us</h2>
        <div className="row">
          <div className="col-md-6">
            <h3 className="text-center mb-4">Contact Form</h3>
            <form onSubmit={sendEmail}>
              <div className="row">
                <div className="col-md-12 mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="email-field"
                    placeholder="Your Email"
                    required
                    onChange={checkEmail}
                  />
                  <span className="text-danger">{error}</span>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  className="form-control"
                  name="message"
                  id="message"
                  rows="4"
                  placeholder="Your Message"
                  required
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <div className="d-flex justify-content-center">
                <button className="btn btn-primary" type="submit">
                  {buttonText}
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-5">
            <div className="map-container" style={{ height: '50%' }} >
              <center><h4>Our Location</h4></center>
              <div className='container'>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1839164101916!2d77.5244200095273!3d12.960080315080257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f79820d4949%3A0x84d8a7328c902cec!2sRVG%20Technologies%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1722589991531!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0, maxWidth: '400px' }}
                  allowFullScreen
                  loading="lazy"
                  title="Google Maps Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
