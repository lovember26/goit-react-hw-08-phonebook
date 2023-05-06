import { Suspense } from 'react';
import { Container, Header, Logo, Name, StyledNavLink } from './Layout.styled';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { logOut } from 'redux/auth/authSlice';
import { delToken } from 'services/auth';

const Layout = () => {
  const user = useSelector(state => state.auth.user);

  const dispatch = useDispatch();
  //   const { token } = useSelector(state => state.token);
  //   useEffect(() => dispatch(userThunk()), [token]);
  const handleLogOut = () => {
    dispatch(logOut());
    delToken();
  };
  return (
    <>
      <Header>
        <Logo to="/">Home</Logo>

        <Container>
          {user && <Name>Hello, {user.email}!</Name>}
          <StyledNavLink to="/signUp">Sign up</StyledNavLink>

          <StyledNavLink
            to={user ? '/' : '/login'}
            onClick={user && handleLogOut}
          >
            {user ? 'LogOut' : 'Login'}{' '}
          </StyledNavLink>
        </Container>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Layout;
