import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faX } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

// Utility function to scroll to the top
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="overlay"></div>
      <div className="footer-content">
        <div className='container'>
          <div className="row">
            <div className="col-md-4 mb-4">
              <h5>Akarswift Global</h5>
              <p>Leading the future of global trade with innovative solutions and sustainable practices.</p>
            </div>
            <div className="col-md-4 mb-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <NavLink 
                    className="nav-link footer-links" 
                    to="/about"
                    onClick={scrollToTop}
                    style={({ isActive }) => ({
                      fontWeight: isActive ? 'bold' : 'normal',
                      color: isActive ? '#D48A00' : 'inherit',
                    })}
                  >
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    className="nav-link footer-links" 
                    to="/services"
                    onClick={scrollToTop}
                    style={({ isActive }) => ({
                      fontWeight: isActive ? 'bold' : 'normal',
                      color: isActive ? '#D48A00' : 'inherit',
                    })}
                  >
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    className="nav-link footer-links" 
                    to="/products"
                    onClick={scrollToTop}
                    style={({ isActive }) => ({
                      fontWeight: isActive ? 'bold' : 'normal',
                      color: isActive ? '#D48A00' : 'inherit',
                    })}
                  >
                    Products
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    className="nav-link footer-links" 
                    to="/careers"
                    onClick={scrollToTop}
                    style={({ isActive }) => ({
                      fontWeight: isActive ? 'bold' : 'normal',
                      color: isActive ? '#D48A00' : 'inherit',
                    })}
                  >
                    Careers
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    className="nav-link footer-links" 
                    to="/contact"
                    onClick={scrollToTop}
                    style={({ isActive }) => ({
                      fontWeight: isActive ? 'bold' : 'normal',
                      color: isActive ? '#D48A00' : 'inherit',
                    })}
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-md-4 mb-4">
              <h5>Contact Us</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="https://maps.app.goo.gl/UYnzDVZ6C9zKTbPW6" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLocationDot} className="me-2" />
                    Akarswift Global Pvt Ltd
                  </a>
                </li>
                <li><i className="bi bi-telephone"></i> Phone: 08026618661</li>
                <li><i className="bi bi-envelope"></i> Email: info@akarmaxs.in</li>
              </ul>
              <div className="d-flex social-icons">
                <a href="#" className="me-3 facebook"><FaFacebookF /></a>
                <a href="#" className="me-3"><FontAwesomeIcon icon={faX} /></a>
                <a href="#" className="me-3 linkedin"><FaLinkedinIn /></a>
                <a href="#" className="instagram"><FaInstagram /></a>
              </div>
            </div>
          </div>
          <div className="row-divider"></div>
          <div className="text-center mt-4">
            <p>&copy; {new Date().getFullYear()} Akarswift Global. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
