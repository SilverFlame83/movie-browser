import photo from '../assets/photo.jpg';
import Hero from './Hero';

const Home = () => {
return <>
<Hero text='Hello from home page'/>
<img src={photo} alt='movie'/>
</>
};

export default Home;
