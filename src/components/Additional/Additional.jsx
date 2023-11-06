import { Link, Outlet } from 'react-router-dom';

export const Additional = () => {
  return (
    <div>
      <p>Additional Information</p>
      <ul>
        <li>
          <Link to="">Cast</Link>
        </li>
        <li>
          <Link to="">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
