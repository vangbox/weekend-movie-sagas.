import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import './MovieList.css'

function MovieList() {

    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);
    
  
    const detailPage = (movie, movieId) =>{ 

        dispatch({ type: 'SET_DETAIL', payload: movie})
        dispatch ({type: 'FETCH_GENRES', payload: movieId })

        let page = '/detail'; 
        history.push(page);
        // console.log('this is the movie id', movieId); -got id for movie
    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies" >
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            {/* movie poster click --> /details */}
                            <img 
                            src={movie.poster} 
                            alt={movie.title} 
                            onClick= {() => {detailPage(movie, movie.id)}}/>
                            
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;