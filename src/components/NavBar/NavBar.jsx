import React from 'react';
import { Link } from 'react-router-dom';

import { NavBarContainer, NavBarTitle, LogoSvg } from './NavBar.styles';

const NavBar = () => {
  return (
    <NavBarContainer>
      <Link to="/">
        <LogoSvg />
      </Link>
      <NavBarTitle> Brastlewark Census </NavBarTitle>
    </NavBarContainer>
  );
};

export default NavBar;
