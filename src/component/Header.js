import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import './Header.css';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleLinkClick = () => {
    if (isNavOpen) {
      setIsNavOpen(false); // Close the navbar when a link is clicked
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: 'black' }}>
      <div className="container-fluid">
      <NavLink to="/" className="navbar-brand">
          <img src={logo} alt="Company Logo" className="logo" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleNavToggle}
          aria-controls="navbarText"
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarText">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-1">
              <NavLink
                className="nav-link navbar-brand"
                to="/"
                activeClassName="active"
                style={({ isActive }) => ({
                  fontWeight: isActive ? "bold" : "normal",
                  color: isActive ? "#D48A00" : "white",
                })}
                onClick={handleLinkClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item mx-1">
              <NavLink
                className="nav-link navbar-brand"
                to="/about"
                activeClassName="active"
                style={({ isActive }) => ({
                  fontWeight: isActive ? "bold" : "normal",
                  color: isActive ? "#D48A00" : "white",
                })}
                onClick={handleLinkClick}
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item mx-1">
              <NavLink
                className="nav-link navbar-brand"
                to="/services"
                activeClassName="active"
                style={({ isActive }) => ({
                  fontWeight: isActive ? "bold" : "normal",
                  color: isActive ? "#D48A00" : "white",
                })}
                onClick={handleLinkClick}
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item mx-1">
              <NavLink
                className="nav-link navbar-brand"
                to="/products"
                activeClassName="active"
                style={({ isActive }) => ({
                  fontWeight: isActive ? "bold" : "normal",
                  color: isActive ? "#D48A00" : "white",
                })}
                onClick={handleLinkClick}
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item mx-1">
              <NavLink
                className="nav-link navbar-brand"
                to="/global-network"
                activeClassName="active"
                style={({ isActive }) => ({
                  fontWeight: isActive ? "bold" : "normal",
                  color: isActive ? "#D48A00" : "white",
                })}
                onClick={handleLinkClick}
              >
                Global Network
              </NavLink>
            </li>
            <li className="nav-item mx-1">
              <NavLink
                className="nav-link navbar-brand"
                to="/sustainability"
                activeClassName="active"
                style={({ isActive }) => ({
                  fontWeight: isActive ? "bold" : "normal",
                  color: isActive ? "#D48A00" : "white",
                })}
                onClick={handleLinkClick}
              >
                Sustainability
              </NavLink>
            </li>
            <li className="nav-item mx-1">
              <NavLink
                className="nav-link navbar-brand"
                to="/careers"
                activeClassName="active"
                style={({ isActive }) => ({
                  fontWeight: isActive ? "bold" : "normal",
                  color: isActive ? "#D48A00" : "white",
                })}
                onClick={handleLinkClick}
              >
                Careers
              </NavLink>
            </li>
            <li className="nav-item mx-1">
              <NavLink
                className="nav-link navbar-brand"
                to="/contact"
                activeClassName="active"
                style={({ isActive }) => ({
                  fontWeight: isActive ? "bold" : "normal",
                  color: isActive ? "#D48A00" : "white",
                })}
                onClick={handleLinkClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
