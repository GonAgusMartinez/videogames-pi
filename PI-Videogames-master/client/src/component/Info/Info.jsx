import React from 'react';
import styles from '../Info/Info.module.css';
import Foto from '../Info/Foto.png'

const Info = () => {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.pageDescription}>
        <h1>Descripción de la Página</h1>
        <p>
Bienvenido a nuestro espacio dedicado a los videojuegos,  Esta página está diseñada para todos los amantes de los videojuegos, desde jugadores casuales hasta fanáticos ávidos.

Características Principales:

Búsqueda de Juegos: Utiliza nuestra barra de búsqueda para encontrar tus juegos favoritos. Filtra por nombre, género, plataforma y más.

Exploración de Juegos: Descubre una amplia variedad de juegos, desde emocionantes aventuras hasta desafiantes juegos de estrategia.

Información Detallada: Accede a información detallada sobre cada juego, incluyendo su descripción, fecha de lanzamiento, calificación y género.

Creación de Juegos: ¿Eres un desarrollador de juegos? ¡Puedes agregar tus propios juegos a nuestra base de datos!

Nuestra Misión:

Nuestra misión es brindar un lugar donde la comunidad de jugadores pueda conectarse, explorar nuevos títulos y compartir sus pensamientos y pasión por los videojuegos.

Así que, ¿qué estás esperando? ¡Comienza tu viaje para explorar el mundo de los videojuegos ahora! Siéntete libre de unirte a nuestra comunidad, buscar tus juegos favoritos y disfrutar de una experiencia llena de diversión y emoción.

Nota: Esta página está en constante desarrollo, y estamos emocionados de recibir tus comentarios y sugerencias para mejorar tu experiencia.
        </p>
      </div>
      <div className={styles.personalInfo}>
        <h1>Mi Experiencia Personal</h1>
        <img
          className={styles['img-container']}
          src={Foto} 
          alt="Descripción de la imagen" 
        />
        <p>
Hola yo soy Gonzalo Agustin Martinez y quiero contarte mi historia con Henry.

Teniendo tan solo 20 años estaba decidido a estudiar programacion en distintos ambitos de la misma, pero no sabia donde especificamente
ya hace bastante tiempo estando en un colectivo de vuelta a casa se dio una charla con un egresado de Henry en donde me explico como se
estudiaba y trabaja dentro de la institucion, a su vez recomendando que comenzara a estudiar alli a pesar de que no tubiera mucho 
conocimiento en el area, asi fue como descubri Henry y comenzando con el prepcourse, finalmente consegui aprobarlo y empezar mi carrera
hoy en dia luego de aprobar los diversos checkpoint (Pruebas intermediarias) hoy me encuentro en el desarrollo de esta pagina y a la 
espera de graduarme y comenzar a trabajar de este mundo tan espectacular en donde me desempeño, la programacion.
        </p>
        <img
          src={process.env.PUBLIC_URL + '/Info/Foto.png'}
          alt="Gracias por leer"
          className={styles.personalImage}
        />
      </div>
      <a href="/home" className={styles.homeButton}>Volver a la Página de Inicio</a>
    </div>
  );
};

export default Info;