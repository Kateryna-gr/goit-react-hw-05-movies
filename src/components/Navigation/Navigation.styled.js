import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Navigation = styled.div`
  display: flex;
  gap: 28px;
  padding: 16px 60px;
  font-size: 18px;
`;

export const NavigationLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    text-decoration: underline;
  }

  &.active {
    color: #9b8099;
    font-weight: 700;
  }
`;
