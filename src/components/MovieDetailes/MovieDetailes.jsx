import { useLocation } from 'react-router-dom';
import { Additional } from 'components/Additional/Additional';
import {
  DetailesContainer,
  GoBackLink,
  MovieDetailesContainer,
} from './MovieDetailes.styled';

export const MovieDetailes = ({
  moviePoster,
  movieTitle,
  userScore,
  overview,
  genres,
}) => {
  const location = useLocation();
  const currentLocation = location.state?.from ?? '/';

  return (
    <div>
      <GoBackLink to={currentLocation}>Go back</GoBackLink>
      <MovieDetailesContainer>
        {moviePoster && (
          <img
            src={`https://image.tmdb.org/t/p/w500/${moviePoster}`}
            alt={movieTitle}
            width="300"
          />)}
        <DetailesContainer>
          <h2>{movieTitle}</h2>
          <p>User Score: {userScore}/10</p>
          <h4>Overview</h4>
          <p>{overview}</p>
          <h4>Genres</h4>
          <p>{genres.map(genre => genre.name).join(', ')}</p>
        </DetailesContainer>
      </MovieDetailesContainer>

      <Additional currentLocation={currentLocation} />
    </div>
  );
};
