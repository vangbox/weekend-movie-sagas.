import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import MovieList from '../MovieList/MovieList';

function Detail(){

    const detail = useSelector(store => store.detail);
    const genres = useSelector(store => store.genres);
    


    
    return (
        <main>
            <h1>Detail Page</h1>
            <div> <img src={detail.poster} alt={detail.title}></img>
            <h3>{detail.description}</h3>
            </div>
            <section>

                {genres.map(genre => {
                    return (
                        <li key={genre.id}> {genre.genre_name}</li>  
                    );
                
                })}
            </section>
            <footer>
                <h3><Link to ='/'> Back to List </Link></h3>
            </footer>
        </main>

    );


}



export default Detail;