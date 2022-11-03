import React from 'react';
import { useLocation } from 'react-router-dom';
import * as Styled from './header.styled';

interface ILocation {
  state: { pathname: string; search: string; hash: string; state: undefined };
}

const Header = () => {
  const location: ILocation = useLocation();

  return (
    <Styled.MenuUl>
      <Styled.StyleNavLink exact to="/">
        Todolist
      </Styled.StyleNavLink>
      <Styled.StyleNavLink exact to={{ pathname: '/profile', state: { from: location } }}>
        My Profile
      </Styled.StyleNavLink>
    </Styled.MenuUl>
  );
};

export default Header;
