import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Cast } from './Cast';
import { Reviews } from './Reviews';
import { AdditionalInfoContainer, DetailesListLink } from './Additional.styled';

export const Additional = ({ currentLocation }) => {
  const { movieId } = useParams();
  const [castActive, setCastActive] = useState(false);
  const [reviewsActive, setReviewsActive] = useState(false);

  return (
    <AdditionalInfoContainer>
      <h4>Additional Information</h4>
      <ul>
        <DetailesListLink>
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
        </DetailesListLink>
        <DetailesListLink>
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
        </DetailesListLink>
      </ul>
      {(castActive && <Cast />) || (reviewsActive && <Reviews />)}
    </AdditionalInfoContainer>
  );
};
