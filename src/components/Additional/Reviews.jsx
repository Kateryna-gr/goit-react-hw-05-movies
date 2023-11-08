import { fetchMovieDetailsReviews } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const { movieId } = useParams();
  const [error, setError] = useState(false);
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    if (!movieId) return;
    if (movieReviews.length > 0) return;

    async function getMovieDetails() {
      try {
        setError(false);
        const movieDetails = await fetchMovieDetailsReviews(movieId);
        setMovieReviews(movieDetails.results);
      } catch (error) {
        setError(true);
      }
    }

    getMovieDetails();
  }, [movieId, movieReviews.length]);

  return (
    <div>
      {error && <div>Error!</div>}
      {movieReviews.length > 0 ? (
        <ul>
          {movieReviews.map(review => (
            <li key={review.id}>
              <h4>Author: {review.author}</h4>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div>This movie have no reviews</div>
      )}
    </div>
  );
};
