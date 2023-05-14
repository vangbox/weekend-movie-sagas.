import React from 'react';
import {useSelector } from 'react-redux';
import {Link} from 'react-router-dom';


function Detail(){

    const detail = useSelector(store => store.detail);
    const genres = useSelector(store => store.genres);
    
    return (
        <main>
            

            <div className='title'> 
                <h1>{detail.title}</h1>
                <img src={detail.poster} alt={detail.title}></img>
            </div>

            <section className='title'>
                {genres.map(genre => {
                    return (
                        <li key={genre.id}> {genre.genre_name}</li>  
                    );
                })}
            </section>

            <h3 className='genre'>{detail.description}</h3>

            <footer>
                <h3><Link to ='/'> Back to List </Link></h3>
            </footer>
        </main>

    );


}



export default Detail;