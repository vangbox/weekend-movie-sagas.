const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/detail', (req, res) => {

    const query = `SELECT movies.title, movies.poster, movies.description, genres.name
	FROM genres
		JOIN movies_genres
			ON movies_genres.genre_id = genres.id
		JOIN movies
			ON movies_genres.movie_id = movies.id;`;
    pool.query(query)
      .then( result => {
        res.send(result.rows);
      })
      .catch(err => {
        console.log('ERROR: Get all DETAIL', err);
        res.sendStatus(500)
      })
  
  });


module.exports = router;