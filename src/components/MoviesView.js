import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Hero from "./Hero";

const MoviesView = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //https://api.themoviedb.org/3/movie/11?api_key=ab166ff82684910ae3565621aea04d62&language=en-US
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=ab166ff82684910ae3565621aea04d62&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setTimeout(()=>{
            setMovieDetails(data);
          setIsLoading(false); 
        }, 2000)
      });
  }, [id]);

  function movieDetailsView (){
    if (isLoading){
       return <Hero text='Loading...'/>
    }
    if (!isLoading){
        return <Hero text={movieDetails.original_title}/>
    }
  }

  return <>
    {movieDetailsView()}
  </>
};

export default MoviesView;
