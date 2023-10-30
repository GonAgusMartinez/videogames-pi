import React from 'react';
import styles from '../Loading/Loading.module.css';

const Loading = () => {

  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingAnimation}></div>
      <p>Cargando</p>
    </div>
  );
};

export default Loading;