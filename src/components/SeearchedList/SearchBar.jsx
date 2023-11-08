import { Field, Form, Formik } from 'formik';
import { useSearchParams } from 'react-router-dom';
import { SearchButton, SearchInput } from './SearchBar.styled';

export const SearchBar = ({ changeQuery }) => {
  const [params, setParams] = useSearchParams();
  const searchQuery = params.get('search') ?? '';

  const handleSumbit = value => {
    setParams({ search: value });
  };

  return (
    <Formik
      initialValues={{ input: '' }}
      onSubmit={values => {
        handleSumbit(values.input);
      }}
    >
      <Form>
        <Field as="label">
          Search film:
          <SearchInput
            type="input"
            name="input"
            value={searchQuery}
            onInput={changeQuery}
          />
        </Field>
        <SearchButton type="submit">Search</SearchButton>
      </Form>
    </Formik>
  );
};
