import { fetchMovieDetails } from 'api';
import { Additional } from 'components/Additional/Additional';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function MovieDetails() {
  const [moviePoster, setMoviePoster] = useState('');
  const [movieTitle, setMovieTitle] = useState('');
  const [userScore, setUserScore] = useState(0);
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) setError(true);
    async function getMovieDetails() {
      try {
        setError(false);
        const movieDetails = await fetchMovieDetails(movieId);
        setMoviePoster(movieDetails.poster_path);
        setMovieTitle(movieDetails.title);
        setUserScore(movieDetails.userScore);
        setOverview(movieDetails.overview);
        setGenres(movieDetails.genre_ids);
      } catch (error) {
        setError(true);
      }
    }

    getMovieDetails();
  }, [movieId]);

  return (
    <div>
      {error || (
        <div>
          <img src={moviePoster} alt={movieTitle} />
          <h2>{movieTitle}</h2>
          <p>User Score: {userScore}%</p>
          <h4>Overview</h4>
          <p>{overview}</p>
          <h4>Genres</h4>
          <p>{genres}</p>

          <Additional />
        </div>
      )}
    </div>
  );
}
