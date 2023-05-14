import React from 'react';
import {useSelector } from 'react-redux';
import {Link} from 'react-router-dom';


function Detail(){

    const detail = useSelector(store => store.detail);
    const genres = useSelector(store => store.genres);
    
    return (
        <main>
            <h1>Detail Page</h1>

            <div> 
                <img src={detail.poster} alt={detail.title}></img>
            </div>

            <section>
                {genres.map(genre => {
                    return (
                        <li key={genre.id}> {genre.genre_name}</li>  
                    );
                })}
            </section>

            <h3>{detail.description}</h3>

            <footer>
                <h3><Link to ='/'> Back to List </Link></h3>
            </footer>
        </main>

    );


}



export default Detail;