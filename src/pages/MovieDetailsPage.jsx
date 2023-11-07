import { fetchMovieDetails } from 'api';
import { Additional } from 'components/Additional/Additional';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [moviePoster, setMoviePoster] = useState('');
  const [movieTitle, setMovieTitle] = useState('');
  const [userScore, setUserScore] = useState(0);
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getMovieDetails() {
      try {
        setError(false);
        const movieDetails = await fetchMovieDetails(movieId);
        setMoviePoster(movieDetails.poster_path);
        setMovieTitle(movieDetails.title);
        setUserScore(Math.round(movieDetails.vote_average));
        setOverview(movieDetails.overview);
        setGenres(movieDetails.genres);
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
          {moviePoster && (
            <img
              src={`https://image.tmdb.org/t/p/w500/${moviePoster}`}
              alt={movieTitle}
              width="300"
            />
          )}
          <h2>{movieTitle}</h2>
          <p>User Score: {userScore}/10</p>
          <h4>Overview</h4>
          <p>{overview}</p>
          <h4>Genres</h4>
          <p>{genres.map(genre => genre.name).join(', ')}</p>

          <Additional />
        </div>
      )}
    </div>
  );
}
