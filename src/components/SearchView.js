import Hero from "./Hero";

//https://api.themoviedb.org/3/search/movie?api_key=ab166ff82684910ae3565621aea04d62&language=en-US&query=star%wars&page=1&include_adult=false
const SearchView = ({ keyword, searchResult }) => {
  const title = `This is my search ${keyword}`;
  

  return (
    <>
      <Hero text={title} />
      {searchResult}
    </>
  );
};

export default SearchView;
