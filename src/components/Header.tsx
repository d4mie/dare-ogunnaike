import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 2rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  mix-blend-mode: exclusion;
  pointer-events: none;
`;

const Logo = styled.a`
  font-size: 1.1rem;
  font-weight: 500;
  color: white;
  margin: 0;
  pointer-events: auto;
  cursor: pointer;
  text-decoration: none;
  display: block;

  &:hover {
    opacity: 0.8;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 3rem;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: white;
  font-size: 1.1rem;
  font-weight: 500;
  pointer-events: auto;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo href="/">Dare.Ogunnaike</Logo>
      <Nav>
        <NavLink href="#work">Work</NavLink>
        <NavLink href="#about">About</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header; 