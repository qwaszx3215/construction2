import React from "react";
import "./App.css";

const UnderConstruction = () => {
  return (
    <div className="construction-container">
      <div className="construction-content">
        <h1>🚧 Page Under Construction 🚧</h1>
        <p>We’re working hard to bring you a great experience. Stay tuned!</p>
        <img
          src="https://via.placeholder.com/300"
          alt="Under Construction"
          className="construction-image"
        />
        <button className="construction-button">Notify Me</button>
      </div>
    </div>
  );
};

export default UnderConstruction;
