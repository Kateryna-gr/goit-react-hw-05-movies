import Home from 'pages/HomePage';
import Movies from 'pages/MoviesPage';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import NotFoundPage from 'pages/NotFoundPage';
import MovieDetails from 'pages/MovieDetailsPage';
import { Cast } from './Additional/Cast';
import { Reviews } from './Additional/Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
