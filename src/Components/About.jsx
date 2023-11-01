import React from "react";

function About() {
  return (
    <div className="crypto-product-container">
      <div className="crypto-product-header">
        <h1>CryptoCurrency Product</h1>
        <p>Your Gateway to the World of Digital Currencies</p>
      </div>
      <div className="crypto-product-image">
        <img src="/crypto-image.png" alt="Crypto Product" />
      </div>
      <div className="crypto-product-description">
        <h2>What We Offer</h2>
        <p>
          Explore our cutting-edge cryptocurrency product designed to provide
          you with the latest insights, secure transactions, and convenient
          management of your digital assets.
        </p>
      </div>
      <div className="crypto-features">
        <h2>Key Features</h2>
        <ul>
          <li>Real-time cryptocurrency tracking</li>
          <li>Secure wallet for storing assets</li>
          <li>Intuitive trading platform</li>
          <li>In-depth market analysis</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
