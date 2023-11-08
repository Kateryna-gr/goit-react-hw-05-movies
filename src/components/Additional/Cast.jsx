import { fetchMovieDetailsCredits } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastList } from './Additional.styled';

export const Cast = () => {
  const { movieId } = useParams();
  const [error, setError] = useState(false);
  const [movieCast, setCMovieCast] = useState([]);

  useEffect(() => {
    if (!movieId) {
      setError(true);
      return;
    }
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
        <CastList>
          {movieCast.map(cast => (
            <li key={cast.id}>
              <img
                src={
                  cast.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                    : 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'
                }
                alt={cast.name}
                width="180"
              />

              <h4>{cast.name}</h4>
              <p>Character: <span>{cast.character}</span></p>
              
            </li>
          ))}
        </CastList>
      )}
    </div>
  );
};
