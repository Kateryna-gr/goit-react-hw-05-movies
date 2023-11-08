import { Link, useLocation } from 'react-router-dom';
import { MovieListLink } from './SearchBar.styled';

export const SearchedList = ({ searchedMovies }) => {
  const location = useLocation();

  if (searchedMovies.length === 0) {
    return;
  }

  return (
    <div>
      <ul>
        {searchedMovies.map(movie => (
          <MovieListLink key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </MovieListLink>
        ))}
      </ul>
    </div>
  );
};
