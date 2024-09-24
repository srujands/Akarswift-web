// ScrollToTopButton.js
import React from 'react';

const ScrollTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '10px 20px',
        fontSize: '20px',
        borderRadius: '50%',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
      }}
    >
      ↑
    </button>
  );
};

export default ScrollTopButton;
