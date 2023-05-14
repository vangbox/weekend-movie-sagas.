const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/detail/:Id', (req, res) => {
    const detailId = req.params.id;
    const detail = `
    SELECT movies.id, movies.title, movies.poster, movies.description, genres.name
        FROM genres
            JOIN movies_genres
                ON movies_genres.genre_id = genres.id
            JOIN movies
                ON movies_genres.movie_id = movies.id;`;
    pool.query(detail)
      .then( result => {
        res.send('test detailId', result.rows, detailId);
        console.log('getDetail router, what is result row', result.row);
      })
      .catch(err => {
        console.log('ERROR: Get all DETAIL', err);
        res.sendStatus(500)
      })
  
  });


module.exports = router;