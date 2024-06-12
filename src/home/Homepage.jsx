import React from 'react';
import './homepage.css';
import Slideshow from '../slideshow/slideshow.jsx';



export const Homepage = () => {

  return (
    <div className="home-container">
      <div className="home">
        <div>
          <img src="src/assets/images/logo3.png" alt="alphaLogo" />
        </div>

        <div className="content">
          <h2>TheraGlow</h2>
          <p style={{ textAlign: "justify" }}>
            El "Cubo Emocional" que te ayudara en tus tiempos mas estresantes.
          </p>
        </div>
      </div>
    </div>
    
  );
};

export default Homepage;
