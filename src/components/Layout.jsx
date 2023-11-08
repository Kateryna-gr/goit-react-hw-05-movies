import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { MainNav } from './Navigation/Navigation';

const Container = styled.div`
  padding: 20px 40px;
`;

export const Layout = () => {
  return (
    <div>
      <header>
        <MainNav />
      </header>
      <Container>
        <Suspense fallback={'Loading...'}>
          <Outlet />
        </Suspense>
      </Container>
    </div>
  );
};
