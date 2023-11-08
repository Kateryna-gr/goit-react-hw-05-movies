import { Link } from 'react-router-dom';

export const SearchedList = ({ searchedMovies }) => {
  if (searchedMovies.length === 0) {
    return;
  }

  return (
    <div>
      <ul>
        {searchedMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
