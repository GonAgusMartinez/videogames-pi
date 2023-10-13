import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <img
        className="landing-background"
        src="https://www.gaceta.unam.mx/wp-content/uploads/2023/08/230831-Aca9-des-f1-videojuegos.jpg"
        alt="Videojuegos"
      />
      <div className="centered-content">
        <Link to="/home" className="enter-button">
          Ingresar a la Home Page
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;