const express = require('express');
const router = express.Router();
const { Videogame, Genre } = require('../db.js');

router.post('/videogames', async (req, res) => {
  const { name, description, platforms, image, releaseDate, rating, genres } = req.body;

  try {
    const newGame = await Videogame.create({
      name,
      description,
      platforms,
      image,
      releaseDate,
      rating,
    });

    if (genres && genres.length > 0) {
      const genresToAdd = await Genre.findAll({
        where: { name: genres },
      });

      if (genresToAdd && genresToAdd.length > 0) {
        await newGame.addGenres(genresToAdd);
      }
    }

    res.status(201).json(newGame);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el juego' });
  }
});

module.exports = router;