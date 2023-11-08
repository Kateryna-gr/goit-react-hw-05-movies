import styled from 'styled-components';
import { Field } from 'formik';

export const SearchInput = styled(Field)`
  width: 300px;
  margin: 10px 16px;
  //   margin-left: 16px;
  border: 2px solid #c3acc1;
  border-radius: 5px;

  &:focus {
    border: 2px solid #7c5979;
  }

  :focus-visible {
    border: 2px solid #7c5979;
  }
`;

export const SearchButton = styled.button`
  width: 80px;
  margin-top: 10px;
  cursor: pointer;
  background-color: #f5edf5;
  border: 1px solid #7c5979;
  border-radius: 5px;
`;

export const MovieListLink = styled.li`
  list-style: square;
  margin-bottom: 12px;
  color: #7c5979;

  :link {
    color: #212121;
  }

  :visited {
    color: #9b8099;
  }

  :hover {
    font-weight: 700;
    color: #7c5979;
  }
`;
