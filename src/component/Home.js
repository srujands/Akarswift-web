import React from 'react';
import videoSrc from '../assets/landing2.mp4'; // Replace with your video file path
import 'bootstrap/dist/css/bootstrap.min.css';
import '../component/Home.css'; // Make sure to apply the CSS here


import About from './About';
import Service from './Service';
import Products from './Product';
import GlobalNetwork from './Global';
import Sustainability from './Sustainability';
import Careers from './Careers';
import Contact from './ContactUs';

const Home = () => {
  return (
    <>
      <div className="relative-container">
        <video autoPlay muted loop className="video-background">
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="text-overlay d-flex align-items-center justify-content-center">
          <section className="mission text-center">
            <h3 className="text-uppercase text-light mb-4">Akarswift Global Pvt Ltd</h3>
            <p className="lead text-light">
              <strong>
                At Akarswift Global Pvt Ltd, we bridge continents and cultures by importing and exporting a diverse range of goods across the globe.
                Our unwavering commitment to excellence, innovation, and sustainability ensures that we deliver unparalleled value to our partners and clients.
                Discover a world without borders with Akarswift Global.
              </strong>
            </p>
          </section>
        </div>
      </div>


<About/>
<Service/>
<Products/>
<GlobalNetwork/>
<Sustainability/>
<Careers/>
<Contact/>
    </>
  );
};

export default Home;