import React from 'react';
import styled from 'styled-components';
import '../styles/typography.css';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  mix-blend-mode: difference;
  z-index: 10;
  pointer-events: none;
  font-family: var(--font-primary);
  background: transparent;

  @media (max-width: 700px) {
    position: static;
    margin-bottom: 0;
  }
`;

const HeaderContent = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2vw;

  @media (max-width: 1100px) {
    padding: 0 1vw;
  }
  @media (max-width: 700px) {
    padding: 0 1vw;
  }
`;

const Logo = styled.a`
  font-size: var(--f-s);
  font-weight: 400;
  color: white;
  margin: 0;
  pointer-events: auto;
  cursor: pointer;
  text-decoration: none;
  display: block;
  letter-spacing: -0.01em;

  &:hover {
    opacity: 0.8;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(Link)` // Change styled.a to styled(Link)
  text-decoration: none;
  color: white;
  font-size: var(--f-s);
  font-weight: 400;
  pointer-events: auto;
  cursor: pointer;
  letter-spacing: -0.01em;

  &:hover {
    opacity: 0.8;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo href="/">Dare.Ogunnaike</Logo>
        <Nav>
          <NavLink to="/portfolio">Index</NavLink>
          <NavLink to="/about">About</NavLink>
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header; 