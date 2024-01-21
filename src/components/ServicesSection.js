import React from 'react';

function ServicesSection() {
  // Function to handle click for each service
  const handleServiceClick = (url) => {
    // Redirect to the given URL
    window.location.href = url;
  }

  return (
    <section id="services" className="container">
      <h2>Our Services</h2>
      <div>
        <div className="main-click-area" onClick={() => handleServiceClick('URL_FOR_IMPROVING_CREDIT_SCORE')}>
          <h3>Improving Credit Score</h3>
          <p>Detailed information on how to improve your credit score.</p>
        </div>
        <div className="main-click-area" onClick={() => handleServiceClick('URL_FOR_CHOOSING_RIGHT_CARD')}>
          <h3>Choosing the Right Card</h3>
          <p>Guidance on selecting the credit card that best fits your needs.</p>
        </div>
        <div className="main-click-area" onClick={() => handleServiceClick('URL_FOR_DEBT_CONSOLIDATION')}>
          <h3>Debt Consolidation</h3>
          <p>Strategies and services for consolidating your debt.</p>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
