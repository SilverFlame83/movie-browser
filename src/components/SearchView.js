import { Link } from "react-router-dom";

import Hero from "./Hero";

//https://api.themoviedb.org/3/search/movie?api_key=ab166ff82684910ae3565621aea04d62&language=en-US&query=star%wars&page=1&include_adult=false
const SearchView = ({ keyword, searchResult }) => {
  const MovieCard = ({ movie }) => {
    const dataUrl= movie.id
    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    return (
      <>
        <div className="col-lg-3 col-md-3 col-2 my-4">
          <div className="card">
            <img
              src={posterUrl}
              className="card-img-top"
              alt={movie.original_title}
            />
            <div className="card-body">
              <h5 className="card-title">{movie.original_title}</h5>
              <Link to={`/movies/${dataUrl}`} className="btn btn-primary">
                Show details
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  };

  const resultsHtml = searchResult.map((obj, i) => {
    return <MovieCard movie={obj} key={i} />;
  });

  const title = `This is my search ${keyword}`;

  return (
    <>
      <Hero text={title} />
      {resultsHtml && (
        <div className="container">
          <div className="row">{resultsHtml}</div>
        </div>
      )}
    </>
  );
};

export default SearchView;
