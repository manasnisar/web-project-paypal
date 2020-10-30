import React from 'react';
import { CSSTransition } from 'react-transition-group';

import * as s from './styles';

const NavBar = ({ isOpen, children }) => {
  return (
    <s.Container>
      <CSSTransition in={isOpen} timeout={300} classNames="navbar-wrapper">
        <s.NavBar>{children}</s.NavBar>
      </CSSTransition>
    </s.Container>
  );
};

export default NavBar;
