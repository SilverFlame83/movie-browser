import capture from '../assets/capture.jpg';
import Hero from './Hero';

const Home = () => {
return <>
<Hero text='Hello from home page'/>
<img src={capture} alt='movie'/>
</>
};

export default Home;
