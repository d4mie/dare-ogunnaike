import React from 'react';
import styled from 'styled-components';
import '../styles/typography.css';

const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
  mix-blend-mode: difference;
  z-index: 1;
  pointer-events: none;
  font-family: var(--font-primary);
`;

const Logo = styled.a`
  font-size: var(--font-size-nav);
  font-weight: var(--font-weight-medium);
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
  gap: 3rem;
`;

const NavLink = styled(Link)` // Change styled.a to styled(Link)
  text-decoration: none;
  color: white;
  font-size: var(--font-size-nav);
  font-weight: var(--font-weight-medium);
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
      <Logo href="/">Dare.Ogunnaike</Logo>
      <Nav>
        <NavLink to="/">Work</NavLink> {/* Assuming "Work" should also navigate to home or a specific work section */}
        <NavLink to="/about">About</NavLink> {/* Change href to to="/about" */}
      </Nav>
    </HeaderContainer>
  );
};

export default Header; 