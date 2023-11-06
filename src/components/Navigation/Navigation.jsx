import { NavigationLink, Navigation } from './Navigation.styled';

export const MainNav = () => {
  return (
    <Navigation>
      <NavigationLink to="/">Home</NavigationLink>
      <NavigationLink to="/movies">Movies</NavigationLink>
    </Navigation>
  );
};
