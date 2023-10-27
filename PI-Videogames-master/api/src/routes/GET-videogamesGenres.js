const express = require('express');
const router = express.Router();
const { Genre } = require('../db.js');
const axios = require('axios');

router.get('/genres', async (req, res) => {
  try {
    const dbGenres = await Genre.findAll();

    if (dbGenres.length === 0) {
      const apiResponse = await axios.get(`https://api.rawg.io/api/genres?key=270a83c9d3744dc0a02c2c679389b07f`);
      const apiGenres = apiResponse.data.results;

      await Genre.bulkCreate(apiGenres);

      res.json(apiGenres);
    } else {
      res.json(dbGenres);
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los géneros' });
  }
});

module.exports = router;