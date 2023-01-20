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
        setTimeout(() => {
          setMovieDetails(data);
          setIsLoading(false);
        },0);
      });
  }, [id]);

  function movieDetailsView() {
    if (isLoading) {
      return <Hero text="Loading..." />;
    }
    if (movieDetails) {
      const budget = movieDetails.budget.toLocaleString();
      const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
      const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`
      return (
        <>
          <Hero text={movieDetails.original_title} backdrop={backdropUrl}/>
          <div className="container my-5">
            <div className="row">
              <div className="col-md-3">
                <img
                  src={posterPath}
                  alt={movieDetails.title}
                  className="img-fluid shadow rounded"
                />
              </div>
              <div className="col-md-9">
                <h3>{movieDetails.original_title}</h3>
                <p className="lead">{movieDetails.overview}</p>
                <p>Budget: {budget}</p>
              </div>
            </div>
          </div>
        </>
      );
    }
  }

  return (
    <>
      {movieDetailsView()}
      {/* {isLoading && <Hero text='Loading...'/>}
    {!isLoading && <Hero text={movieDetails.original_title}/>} */}
    </>
  );
};

export default MoviesView;
