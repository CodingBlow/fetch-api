import React from "react";

function Product() {
  return (
    <div className="product-container">
      <div className="product-header">
        <h1>Product Name</h1>
        <p>Discover our amazing product and its benefits.</p>
      </div>
      <div className="product-image">
        <img src="/product-image.png" alt="Product" />
      </div>
      <div className="product-description">
        <h2>Product Details</h2>
        <p>
          Learn more about our high-quality product, its features, and how it
          can make your life better.
        </p>
      </div>
      <div className="product-features">
        <h2>Key Features</h2>
        <ul>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
          <li>Feature 4</li>
        </ul>
      </div>
    </div>
  );
}

export default Product;
