import { Outlet } from 'react-router-dom';
import { MainNav } from './Navigation/Navigation';
import styled from 'styled-components';

const Container = styled.div`
width: 1100px;
padding: 20px 40px;
margin: 0 auto;
`;

const HeaderContainer = styled.div`
width: 1100px;
margin: 0 auto;
`;

export const Layout = () => {
  return (
    <div>
      <header>
        <HeaderContainer>
          <MainNav />
        </HeaderContainer>
      </header>
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};
