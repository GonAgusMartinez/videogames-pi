import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../LandingPage/LandingPage.module.css';
import Intro from '../LandingPage/Intro.mp4';

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <video src={Intro} autoPlay loop muted className={styles.backgroundVideo} />
      <div className={styles.content}>
        <div className={styles.welcome}>¡Sean Bienvenidos a GameOn!</div>
        <Link to="/home" className={styles.button}>
          Ingresar
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;