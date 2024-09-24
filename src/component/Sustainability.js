import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../component/Sustainability.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import '@fortawesome/fontawesome-free/css/all.min.css';


import  { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Sustainability = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Animation easing
      once: false, // Whether animation should happen only once - while scrolling down
      mirror: true, // Whether elements should animate out while scrolling past them
    });
  }, []);



  return (
    <div className="container my-5" style={{color:'white'}}>
  <h2 className="text-center mb-4">Sustainability</h2>
  <p className="text-center mb-4"><b>Commitment to a Greener Future</b></p>
  <div id="sustainabilityCarousel" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div className="row g-4">
          <div className="col-md-6 d-flex align-items-stretch">
            <div className="sustainability-item card w-100 d-flex flex-column">
              <div className="sustainability-icon card-header">
                <i className="bi bi-recycle"></i>
              </div>
              <div className="sustainability-content card-body flex-grow-1" data-aos="fade-up">
                <h5 className="card-title">Eco-friendly Packaging</h5>
                <p className="card-text">
                  Utilizing biodegradable and recyclable materials to reduce waste and environmental impact.
                  Our commitment extends beyond just materials; we implement innovative packaging designs that minimize resource usage,
                  enhance product protection, and optimize logistics. We actively seek partnerships with suppliers who share our vision for sustainability,
                  ensuring that our entire supply chain adheres to the highest environmental standards.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-stretch">
            <div className="sustainability-item card w-100 d-flex flex-column">
              <div className="sustainability-icon card-header">
                <i className="bi bi-truck"></i>
              </div>
              <div className="sustainability-content card-body flex-grow-1" data-aos="fade-up">
                <h5 className="card-title">Green Logistics</h5>
                <p className="card-text">
                  Implementing energy-efficient transportation methods to cut down carbon emissions.
                  Our approach to green logistics encompasses a comprehensive strategy designed to reduce our environmental footprint while maintaining the highest standards of efficiency and reliability.
                  By prioritizing green logistics, we not only contribute to the reduction of carbon emissions but also enhance the overall efficiency and sustainability of our transportation operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="row g-4">
          <div className="col-md-6 d-flex align-items-stretch">
            <div className="sustainability-item card w-100 d-flex flex-column">
            <div className="sustainability-icon card-header">
              <i className="fas fa-leaf"></i>
            </div>
              <div className="sustainability-content card-body flex-grow-1" data-aos="fade-up">
                <h5 className="card-title">Sustainable Sourcing</h5>
                <p className="card-text">
                  Ensuring that our products are sourced from environmentally responsible suppliers. 
                  Prioritizing suppliers who use sustainable materials and processes that minimize the consumption of natural resources and reduce environmental impact. By focusing on sustainable sourcing, we aim to foster a more responsible and eco-conscious supply chain, enhancing our environmental stewardship while delivering high-quality products to our customers.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-stretch">
            <div className="sustainability-item card w-100 d-flex flex-column">
              <div className="sustainability-icon card-header">
                <i className="bi bi-cloud-sun"></i>
              </div>
              <div className="sustainability-content card-body flex-grow-1" data-aos="fade-up">
                <h5 className="card-title">Carbon Footprint Reduction</h5>
                <p className="card-text">
                  Investing in technologies and practices that minimize our carbon emissions. Our commitment to reducing our carbon footprint is central to our sustainability strategy.
                  We focus on implementing innovative solutions and adopting best practices across all areas of our operations.
                  By focusing on carbon footprint reduction, we aim to significantly lower our greenhouse gas emissions, contribute to global climate goals, and promote a more sustainable future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#sustainabilityCarousel" data-bs-slide="prev" >
  <span className="carousel-control-prev-icon" aria-hidden="true" style={{ filter: 'invert(1)' }}></span>
  <span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#sustainabilityCarousel" data-bs-slide="next" >
  <span className="carousel-control-next-icon" aria-hidden="true" style={{ filter: 'invert(1)' }}></span>
  <span className="visually-hidden">Next</span>
</button>


  </div>
</div>

  );
};

export default Sustainability;
