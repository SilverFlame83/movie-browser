import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Hero from './Hero'

const MoviesView = ()=>{
    const {id} = useParams();
    const [movieDetails, setMovieDetails] = useState({});

    useEffect(()=>{
        console.log('Id is changed', id)
    }, [id])


    return <Hero text='Movie detail view'/>
}

export default MoviesView;