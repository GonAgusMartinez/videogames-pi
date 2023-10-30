const express = require('express');
const { Op } = require('sequelize');
const router = express.Router();
const { Videogame, Genre } = require('../db.js');
const axios = require('axios');
require('dotenv').config();

router.get('/videogames/name', async (req, res) => {
  const { search } = req.query;

  try {
    const apiKey = process.env.API_KEY;

    const dbGames = await Videogame.findAll({
      where: {
        name: {
          [Op.iLike]: `%${search}%`,
        },
      },
      include: Genre,
      limit: 15,
    });

    const apiResponse = await axios.get(`https://api.rawg.io/api/games?search=${search}&key=${apiKey}`);
    const apiGames = apiResponse.data.results;

    const allGames = dbGames.concat(apiGames);
    if (allGames.length > 0) {
      res.json(allGames);
    } else {
      res.status(404).json({ message: 'No se encontraron juegos' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al buscar juegos' });
  }
});

module.exports = router;