import { Link } from 'react-router-dom';

export const TrendingList = ({ trendingList }) => {
  if (trendingList.length === 0) {
    return;
  }

  return (
    <div>
      <ul>
        {trendingList.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              {movie.title} - {movie.id}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
