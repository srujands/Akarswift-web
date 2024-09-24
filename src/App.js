import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import About from './component/About';
import Service from './component/Service';
import Products from './component/Product';
import GlobalNetwork from './component/Global';
import Sustainability from './component/Sustainability';
import Careers from './component/Careers';
import Contact from './component/ContactUs';
import Footer from './component/Footer';
import ScrollTopButton from './component/ScrollTopButton';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/products" element={<Products />} />
        <Route path="/global-network" element={<GlobalNetwork />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/scroll" element={<ScrollTopButton />} />
      </Routes>
      <Footer />
      <ScrollTopButton />
    </>
  );
}

export default App;
