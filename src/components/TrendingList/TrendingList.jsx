import { Link, useLocation } from 'react-router-dom';
import { MovieListLink } from './TrendingList.styled';

export const TrendingList = ({ trendingList }) => {
  const location = useLocation();

  if (trendingList.length === 0) {
    return;
  }

  return (
    <div>
      <ul>
        {trendingList.map(movie => (
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
