import { Link, Outlet, useParams } from 'react-router-dom';

export const Additional = () => {
  const { movieId } = useParams();

  return (
    <div>
      <p>Additional Information</p>
      <ul>
        <li>
          <Link to={`/movies/${movieId}/cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
