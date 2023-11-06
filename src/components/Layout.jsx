import { Outlet } from 'react-router-dom';
import { MainNav } from './Navigation/Navigation';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px 24px;
`;

export const Layout = () => {
  return (
    <div>
      <header>
        <MainNav />
      </header>
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};
