import movie from '../assets/movie.jpg';
import Hero from './Hero';

const Home = () => {
return <>
<Hero text='Hello from home page'/>
<img src={movie} alt='movie'/>
</>
};

export default Home;
