import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'api';
import { MovieDetailes } from 'components/MovieDetailes/MovieDetailes';

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
        <MovieDetailes
          moviePoster={moviePoster}
          movieTitle={movieTitle}
          userScore={userScore}
          overview={overview}
          genres={genres}
        />
      )}
    </div>
  );
}
