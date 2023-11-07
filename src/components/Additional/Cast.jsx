import { fetchMovieDetailsCredits } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const { movieId } = useParams();
  const [error, setError] = useState(false);
  const [movieCast, setCMovieCast] = useState([]);

  useEffect(() => {
    if (!movieId) setError(true);
    if (movieCast.length > 0) return;

    async function getMovieCastDetails() {
      try {
        setError(false);
        const movieDetails = await fetchMovieDetailsCredits(movieId);
        setCMovieCast(movieDetails.cast);
      } catch (error) {
        setError(true);
      }
    }

    getMovieCastDetails();
  }, [movieId, movieCast.length]);

  return (
    <div>
      {error && <div>Error!</div>}
      {movieCast.length > 0 && (
        <ul>
          {movieCast.map(cast => (
            <li key={cast.id}>
              <div>Cast div</div>
              <img src={cast.profile_path} alt={cast.name} />
              <p>{cast.name}</p>
              <p>Character: {cast.character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
