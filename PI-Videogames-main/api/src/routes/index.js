const express = require('express');
const router = express.Router();
const { Videogame, Genre } = require('../db.js');
const axios = require('axios');
require('dotenv').config();

router.get('/videogames', async (req, res) => {
  try {
    const apiResponse = await axios.get(`https://api.rawg.io/api/games?key=${process.env.api_key}`);
    const apiGames = apiResponse.data.results;

    const dbGames = await Videogame.findAll({
      include: Genre,
    });

    const allGames = apiGames.concat(dbGames);

    res.json(allGames);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los juegos' });
  }
});


router.get('/videogames/:idVideogame', async (req, res) => {
  const { idVideogame } = req.params;

  try {
    const apiResponse = await axios.get(`https://api.rawg.io/api/games/${idVideogame}?key=${process.env.api_key}`);
    const apiGame = apiResponse.data;

    const dbGame = await Videogame.findOne({
      where: { id: idVideogame },
      include: Genre,
    });

    if (apiGame) {
      res.json(apiGame);
    } else if (dbGame) {
      res.json(dbGame);
    } else {
      res.status(404).json({ message: 'juego no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el juego' });
  }
});

router.get('/videogames/name', async (req, res) => {
  const { search } = req.query;

  try {
    const apiResponse = await axios.get(`https://api.rawg.io/api/games?key=${process.env.api_key}&search=${search}`);
    const apiGames = apiResponse.data.results;

    const dbGames = await Videogame.findAll({
      where: { name: { [Op.iLike]: `%${search}%` } },
      include: Genre,
      limit: 15,
    });

    const allGames = apiGames.concat(dbGames);

    if (allGames.length > 0) {
      res.json(allGames);
    } else {
      res.status(404).json({ message: 'No se encontraron juegos' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al buscar juegos' });
  }
});

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
      await newGame.addGenres(genres);
    }

    res.status(201).json(newGame);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el juego' });
  }
});

router.get('/genres', async (req, res) => {
  try {
    const apiResponse = await axios.get(`https://api.rawg.io/api/genres?key=${process.env.api_key}`);
    const apiGenres = apiResponse.data.results;

    const dbGenres = await Genre.findAll();

    if (dbGenres.length === 0) {
      await Genre.bulkCreate(apiGenres);
    }

    const allGenres = apiGenres.concat(dbGenres);

    res.json(allGenres);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los géneros' });
  }
});

module.exports = router;