import { fetchMoviesByQuery } from 'api';
import { SearchedList } from 'components/SeearchedList/SearchedList';
import { Field, Form, Formik } from 'formik';
import { useEffect, useState } from 'react';

export default function Movies() {
  const [error, setError] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchedMovies, setSearchedMovies] = useState([]);

  const handleSearchQuery = query => {
    setSearchQuery(query);
  };

  useEffect(() => {
    if (!searchQuery) return;

    // setSearchedMovies([]);
    async function getSearchingMovies() {
      try {
        setError(false);
        const searchingMovies = await fetchMoviesByQuery(searchQuery);
        setSearchedMovies(searchingMovies.results);
      } catch (error) {
        setError(true);
      }
    }

    getSearchingMovies();
  }, [searchQuery]);

  useEffect(() => {
    console.log(searchedMovies);
  }, [searchedMovies]);

  return (
    <div>
      <Formik
        initialValues={{ search: '' }}
        onSubmit={values => {
          handleSearchQuery(values.search);
        }}
      >
        <Form>
          <Field type="input" name="search" />
          <button type="submit">Search</button>
        </Form>
      </Formik>
      {error && <div>Error!</div>}
      {searchedMovies.length > 0 && (
        <SearchedList searchedMovies={searchedMovies} />
      )}
    </div>
  );
}
