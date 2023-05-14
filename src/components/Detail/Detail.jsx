import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import MovieList from '../MovieList/MovieList';

function Detail(){

    const dispatch = useDispatch();
    const detail = useSelector(store => store.detail);
    const genres = useSelector(store => store.genres);
    

    // useEffect(() => {
    //     dispatch({ type: 'FETCH_DETAIL', payload: saveMovieIdRedux });
        
    //     // console.log('fetch detail useEffect working!'); -is fetching!
    // }, []);

    
    return (
        <main>
            <h1>Detail Page</h1>
            <div> <img src={detail.poster} alt={detail.title}></img></div>
            <section>
                {genres.map(genres => {
                    return (<div>
                        <li key={genres.id}> {genres.genre_name}</li>
                            
                        </div>
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