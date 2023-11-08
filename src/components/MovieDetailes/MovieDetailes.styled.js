import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GoBackLink = styled(Link)`
  margin: 16px;
  color: #212121;

  &:hover {
    font-weight: 700;
    color: #7c5979;
  }
`;

export const MovieDetailesContainer = styled.div`
  width: 1020px;
  margin-top: 16px;
  display: flex;
  flex-direction: row;
  box-shadow: 0px 0px 5px #75659a;
`;

export const DetailesContainer = styled.div`
  width: 720px;
  padding: 16px 40px;
`;
