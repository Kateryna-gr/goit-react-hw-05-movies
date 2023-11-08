import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByQuery } from 'api';
import { SearchedList } from 'components/SeearchedList/SearchedList';
import { SearchBar } from 'components/SeearchedList/SearchBar';

export default function Movies() {
  const [params, setParams] = useSearchParams();
  const searchQuery = params.get('search') ?? '';
  const [error, setError] = useState(false);
  const [searchedMovies, setSearchedMovies] = useState([]);

  const changeQuery = evt => {
    params.set('search', evt.target.value);
    setParams(params);
  };

  async function getSearchingMovies() {
    setSearchedMovies([]);
    if (!searchQuery) return;
    try {
      setError(false);
      const searchingMovies = await fetchMoviesByQuery(searchQuery);
      if (searchingMovies.results.length === 0) {
        setError(true);
        return;
      }
      setSearchedMovies(searchingMovies.results);
    } catch (error) {
      setError(true);
    }
  }

  useEffect(() => {
    getSearchingMovies();
  }, []);

  return (
    <div>
      <SearchBar
        changeQuery={changeQuery}
        getSearchingMovies={getSearchingMovies}
      />
      {error && <div>Films not found!</div>}
      {searchedMovies.length > 0 && (
        <SearchedList searchedMovies={searchedMovies} />
      )}
    </div>
  );
}
