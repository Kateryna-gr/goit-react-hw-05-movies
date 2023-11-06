import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '2ab3d87f5faf58d627a0cf5bf4cc39c6';

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return response.data;
};

export const fetchMoviesByQuery = async query => {
  const response = await axios.get(
    `/search/movie/?${query}&api_key=${API_KEY}`
  );
  return response.data;
};

export const fetchMovieDetails = async movieId => {
  const response = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
  return response.data;
};

export const fetchMovieDetailsCredits = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return response.data;
};

export const fetchMovieDetailsReviews = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}?api_key=${API_KEY}/reviews`
  );
  return response.data;
};
