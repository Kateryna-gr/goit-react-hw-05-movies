import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Cast } from './Cast';
import { Reviews } from './Reviews';

export const Additional = ({ currentLocation }) => {
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
            state={{ from: currentLocation }}
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
            state={{ from: currentLocation }}
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
