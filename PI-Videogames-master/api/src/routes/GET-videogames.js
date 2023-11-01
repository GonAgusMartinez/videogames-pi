const express = require('express');
const router = express.Router();
const { Videogame, Genre } = require('../db.js');
const axios = require('axios');
require('dotenv').config();

router.get('/', async (req, res) => {
  try {
    const apiKey = process.env.API_KEY;

    const apiResponse = await axios.get(`https://api.rawg.io/api/games?key=${apiKey}`);
    const apiGames = apiResponse.data.results;

    const dbGames = await Videogame.findAll({
      include: Genre,
    });

    const allGames = apiGames.concat(dbGames);

    res.json(allGames);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los videojuegos' });
  }
});

module.exports = router;