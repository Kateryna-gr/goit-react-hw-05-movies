import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Cast } from './Cast';
import { Reviews } from './Reviews';

export const Additional = () => {
  const { movieId } = useParams();
  const [castActive, setCastActive] = useState(false);
  const [reviewsActive, setReviewsActive] = useState(false);

  return (
    <div>
      <p>Additional Information</p>
      <ul>
        <li>
          <Link
            to={`/movies/${movieId}/cast`}
            onClick={() => {
              setCastActive(!castActive);
              setReviewsActive(false);
            }}
          >
            Cast
          </Link>
        </li>
        <li>
          <Link
            to={`/movies/${movieId}/reviews`}
            onClick={() => {
              setReviewsActive(!reviewsActive);
              setCastActive(false);
            }}
          >
            Reviews
          </Link>
        </li>
      </ul>
      {(castActive && <Cast />) || (reviewsActive && <Reviews />)}
    </div>
  );
};
