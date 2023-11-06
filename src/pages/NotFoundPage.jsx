import { NavigationLink } from 'components/Navigation/Navigation.styled';

export default function NotFoundPage() {
  return (
    <div>
      This page doesn't exist! Return to{' '}
      <NavigationLink to='/'>Home page</NavigationLink>
    </div>
  );
}
