const express = require('express');
const router = express.Router();
const { Genre } = require('../db.js');
const axios = require('axios');
require('dotenv').config();

router.get('/genres', async (req, res) => {
  try {

    const apiKey = process.env.API_KEY;

    const dbGenres = await Genre.findAll();

    if (dbGenres.length === 0) {
      const apiResponse = await axios.get(`https://api.rawg.io/api/genres?key=${apiKey}`);
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