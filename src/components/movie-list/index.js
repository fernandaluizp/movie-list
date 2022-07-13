import React, { useRef, useState }  from "react"
import getMovieList from '../../services/getMovies';
import "./index.css";

function MovieList() {
  const inputRef = useRef(null);
  const [movies, setMovies] = useState(null);

  async function handleMovieList() {
    let data = await getMovieList({ year: inputRef.current.value});

    let list = await data.json();
    setMovies(list.data);
  }

  const noResult = () => (
    <div className="mt-50 slide-up-fade-in" data-testid="no-result">
      No Results Found
    </div>
  );

  const movieComponent = ({ movie }) => ( <li className="slide-up-fade-in py-10" key={movie.imdbID}>{movie.Title}</li> );


  const movieListComponent = () => {
    return (
      <ul className="mt-50 styled" data-testid="movieList">
        {movies?.map((movie) => movieComponent({ movie }))}
      </ul>
    );
  }

  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
        <input type="number" className="large" placeholder="Enter Year eg 2015" data-testid="app-input" ref={inputRef} />
        <button data-testid="submit-button" onClick={ handleMovieList}>Search</button>
      </section>

      {movieListComponent()}

      {movies?.length === 0 && noResult()}
    </div>
  );
}

export default MovieList