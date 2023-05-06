import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #dde0fd;
  box-shadow: 0px 0px 6px #7a80b7;
  padding: 20px;
  color: #fff;
`;

export const StyledNavLink = styled(NavLink)`
  background-color: #929ae0;
  border: 1px solid #7a80b7;
  color: #fff;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  margin-right: 10px;

  &:hover {
    background-color: #723fb5;
  }

  &.active {
    background-color: #723fb5;
  }
`;

export const Name = styled.div`
  color: #929ae0;
  font-family: 'Oleo Script', cursive;
  font-size: 20px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const Logo = styled(Link)`
  color: #929ae0;
  font-family: 'Oleo Script', cursive;
  font-size: 30px;
  text-decoration: none;
`;
