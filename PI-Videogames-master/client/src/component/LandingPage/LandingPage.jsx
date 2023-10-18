import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../LandingPage/LandingPage.module.css'; 

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.background}
        src="https://www.gaceta.unam.mx/wp-content/uploads/2023/08/230831-Aca9-des-f1-videojuegos.jpg"
        alt="Videojuegos"
      />
      <div className={styles.content}>
        <div className={styles.welcome}>¡Sean Bienvenidos!</div>
        <Link to="/home" className={styles.button}>
          Ingresar a la Home Page
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;