const express = require('express');
const router = express.Router();
const { Videogame, Genre } = require('../db.js');
const axios = require('axios');


router.get('/videogames/:idVideogame', async (req, res) => {
  const { idVideogame } = req.params;

  try {
    const dbGame = await Videogame.findOne({
      where: { id: idVideogame },
      include: Genre,
    });

    if (dbGame) {
      res.json(dbGame);
    } else {
      const apiResponse = await axios.get(`https://api.rawg.io/api/games/${idVideogame}?key=270a83c9d3744dc0a02c2c679389b07f`);
      const apiGame = apiResponse.data;

      if (apiGame) {
        res.json(apiGame);
      } else {
        res.status(404).json({ message: 'Juego no encontrado' });
      }
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el juego' });
  }
});

module.exports = router;