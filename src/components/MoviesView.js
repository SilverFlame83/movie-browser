import { useParams } from 'react-router-dom';
import Hero from './Hero'

const MoviesView = ()=>{
    const {id} = useParams();

    console.log(`Params id is ${id}`)

    return <Hero text='Movie detail view'/>
}

export default MoviesView;