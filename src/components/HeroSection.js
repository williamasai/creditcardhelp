import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; // Make sure to install react-icons

function HeroSection() {
  return (
    <section className="hero">
      <h2>Welcome to Credit Card Help</h2>
      <p>Find the best solutions for your credit card needs.</p>
      <button className="get-started-btn">
        Get Started <FaArrowRight />
      </button>
    </section>
  );
}

export default HeroSection;
