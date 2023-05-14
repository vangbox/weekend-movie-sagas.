import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';


function Detail(){

    const dispatch = useDispatch();
    const detail = useSelector(store => store.detail);

    useEffect(() => {
        dispatch({ type: 'FETCH_DETAIL' });
        console.log('fetch detail useEffect working!');
    }, []);

    return (
        <main>
            <h1>Detail Page</h1>
            <section className="detail">
                {detail.map(detail => {
                    return (
                        <div key={detail.id} >
                            <h3>{detail.title}</h3>
                            <h3>{detail.description}</h3>
                            <img src={detail.poster} alt={detail.title}/>
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