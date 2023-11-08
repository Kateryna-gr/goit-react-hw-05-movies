import { Field, Form, Formik } from 'formik';
import { useSearchParams } from 'react-router-dom';
import { SearchButton, SearchInput } from './SearchBar.styled';

export const SearchBar = ({ changeQuery, getSearchingMovies }) => {
  const [params, setParams] = useSearchParams();
  const searchQuery = params.get('search') ?? '';

  const handleSumbit = value => {
    setParams({ search: value });
  };

  return (
    <Formik onSubmit={values => handleSumbit(values.input)}>
      <Form>
        <Field as="label">
          Search film:
          <SearchInput
            type="input"
            name="input"
            value={searchQuery}
            onChange={changeQuery}
          />
        </Field>
        <SearchButton type="button" onClick={getSearchingMovies}>
          Search
        </SearchButton>
      </Form>
    </Formik>
  );
};
