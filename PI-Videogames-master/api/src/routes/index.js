const express = require('express');
const router = express.Router();

const getVideogamesRoute = require('./GET-videogames');
const getVideogameByIdRoute = require('./GET-videogamesId');
const getVideogamesByNameRoute = require('./GET-videogamesName');
const getGenresRoute = require('./GET-videogamesGenres');
const postVideogameRoute = require('./POST-videogames');

router.use('/', getVideogamesRoute);
router.use('/videogames', getVideogameByIdRoute);
router.use('/videogames/name', getVideogamesByNameRoute);
router.use('/genres', getGenresRoute);
router.use('/videogames', postVideogameRoute);

module.exports = router;