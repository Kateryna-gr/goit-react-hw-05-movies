import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Navigation = styled.div`
  display: flex;
  gap: 28px;
  padding: 16px 24px;
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
    color: #af69b4;
    font-weight: 500;
  }
`;
