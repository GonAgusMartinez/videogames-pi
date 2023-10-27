import React from 'react';
import styles from '../Info/Info.module.css';
import Foto from '../Info/Foto.png';
import Fondo from '../Info/Fondo .mp4'; 

const Info = () => {
  return (
    <div className={styles.infoContainer}>
      <video autoPlay loop muted className={styles.backgroundVideo}>
        <source src={Fondo} type="video/mp4" />
      </video>
      <div className={styles.content}>
        <div className={styles.pageDescription}>
          <h1 style={{ color: 'rgb(21, 23, 165)' }}>Descripción de la Página</h1>
          <div className={styles.textContainer}>
            <p>
              Bienvenido a nuestro espacio dedicado a los videojuegos. Esta página está diseñada para todos los amantes de los videojuegos, desde jugadores casuales hasta fanáticos ávidos, aqui tienes:
            </p>
            <p>
              Búsqueda de Juegos: Utiliza nuestra barra de búsqueda para encontrar tus juegos favoritos. Filtra por nombre, género, plataforma y más.
            </p>
            <p>
              Información Detallada: Accede a información detallada sobre cada juego, incluyendo su descripción, fecha de lanzamiento, calificación y género.
            </p>
            <p>
              Creación de Juegos: ¿Eres un desarrollador de juegos? ¡Puedes agregar tus propios juegos a nuestra base de datos!
            </p>
            <p>
              Nuestra Misión:
            </p>
            <p>
              Nuestra misión es brindar un lugar donde la comunidad de jugadores pueda conectarse, explorar nuevos títulos y compartir sus pensamientos y pasión por los videojuegos.
            </p>
          </div>
        </div>
        <div className={styles.personalInfo}>
          <h1 style={{ color: 'rgb(21, 23, 165)' }}>Mi Experiencia Personal</h1>
          <div className={styles.textContainer}>
            <p>
              Hola, yo soy Gonzalo Agustín Martínez y quiero contarte mi historia con Henry.
            </p>
            <p>
              Teniendo tan solo 20 años, estaba decidido a estudiar programación en distintos ámbitos de la misma, pero no sabía dónde específicamente. Hace bastante tiempo, estando en un colectivo de vuelta a casa, se dio una charla con un egresado de Henry en donde me explicó cómo se estudiaba y trabajaba dentro de la institución, a su vez recomendando que comenzara a estudiar allí a pesar de que no tuviera mucho conocimiento en el área. Así fue como descubrí Henry y comencé con el prepcourse. Finalmente, logré aprobarlo y comenzar mi carrera. Hoy en día, después de aprobar los diversos checkpoint (pruebas intermedias), me encuentro en el desarrollo de esta página y a la espera de graduarme y comenzar a trabajar en este mundo tan espectacular en el que me desempeño, la programación.
            </p>
          </div>
          <img
            src={Foto}
            alt="Foto de Gonzalo Agustín Martínez"
            className={styles.personalImage}
          />
        </div>
        <a href="/home" className={styles.homeButton}>Volver a la Página de Inicio</a>
      </div>
    </div>
  );
};

export default Info;