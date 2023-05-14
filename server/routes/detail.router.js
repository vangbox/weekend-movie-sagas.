const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
    const detailId = req.params.id;
    console.log('get detail router req.id', req.params.id);
    const sqlText = 
    `
    SELECT movies.id, movies.title, movies.poster, movies.description
	FROM genres
		JOIN movies_genres
			ON movies_genres.genre_id = genres.id
		JOIN movies
			ON movies_genres.movie_id = movies.id
		WHERE movies_genres.movie_id= $1; `;

        const sqlVaule = [detailId]

    pool.query(sqlText, sqlVaule)
      .then( result => {
        
        res.send('sending test detailId', result.row);
        console.log('getDetail router, what is result row', result.row);
      })
      .catch(err => {
        console.log('ERROR: Get all DETAIL', err);
        res.sendStatus(500)
      })
  
  });


module.exports = router;