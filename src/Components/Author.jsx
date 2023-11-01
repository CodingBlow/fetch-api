import React from "react";

const Author = () => {
  return (
    <div className="author">
      <img
        src="src/assets/d.jpg" // Replace with the path to your author's image
        alt="Author's Image"
        className="author-image"
      />
      <div className="author-details">
        <h2>Farhan Raza</h2>
        <p>Currently pursuing B.Tech in Gurugram University, 2nd year</p>
      </div>
    </div>
  );
};

export default Author;
