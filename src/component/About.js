import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';  // Ensure this path is correct

import vision from '../assets/vision.png';
import mission from '../assets/mission.png';
import corevalues from '../assets/corevalues.jpg';


import  { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Animation easing
      once: false, // Whether animation should happen only once - while scrolling down
      mirror: true, // Whether elements should animate out while scrolling past them
    });
  }, []);

  return (
    <div className="container my-5">
    <div className="row">
      <div className="col-lg-4 col-md-6">
        <div className="card hover-card" data-aos="fade-down">
          <img src={vision} className="card-img" alt="Our Vision" />
          <div className="card-img-overlay d-flex flex-column justify-content-center text-center">
            <h2 className="card-title">Vision</h2>
            <p className="card-text">
              To digitalize every industry left and enhance them to compete with the elite. To leave an imprint in this digital world with quality services, client testimonials, and customer satisfaction. Finally to envision ourselves as a key partner in the upcoming digital revolution for all industries and businesses.
            </p>
          </div>
        </div>
      </div>
  
      <div className="col-lg-4 col-md-6">
        <div className="card hover-card" data-aos="fade-down">
          <img src={mission} className="card-img" alt="Our Mission" />
          <div className="card-img-overlay d-flex flex-column justify-content-center text-center">
            <h2 className="card-title">Mission</h2>
            <p className="card-text">
              Our Mission is to provide next-gen solutions across all sectors and industries, creating sustainable business cultures and platforms. Fulfilling our customer ambitions is our primary motto.
            </p>
          </div>
        </div>
      </div>
  
      <div className="col-lg-4 col-md-12">
        <div className="card hover-card" data-aos="fade-down">
          <img src={corevalues} className="card-img" alt="Core Values" />
          <div className="card-img-overlay d-flex flex-column justify-content-center text-center">
            <h2 className="card-title">Core Values</h2>
            <p className="card-text">
              Client First - We work and innovate till the client is satisfied. To evolve - Never be satisfied, always get better with time. Collaborations - Value-driven and putting an end to needless processes. Frugality - A perfect blend of cost-effective creativeness.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default About;
