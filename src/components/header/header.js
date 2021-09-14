import React from 'react';
import { NavLink as _NavLink, Link } from 'react-router-dom';
import styled from "styled-components";

import LogoImg from "../../assets/img/logo.png";

const Header = () => {
  return (
    <HeaderContainer>
      <nav>
        <ul>
          <NavItem><Link to="/"><Logo src={LogoImg} alt="" /></Link></NavItem>
          <NavItem><NavLink to="/incubated-properties" activeClassName="selected">Incubated Properties</NavLink></NavItem>
          <NavItem><NavLink to="/investments" activeClassName="selected">Investments</NavLink></NavItem>
          <NavItem><NavLink to="/" activeClassName="selected">About</NavLink></NavItem>
          <NavItem><NavLink to="/contact" activeClassName="selected">Contact</NavLink></NavItem>
        </ul>
      </nav>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  height: 3rem;

  nav {
    justify-content: center;
    height: 100%;
    display: flex;
    align-items: center;
  }
`

const Logo = styled.img`
  height: 2rem;
  width: auto;
  position: relative;
  top: 0.15rem;
`

const NavItem = styled.li`
  display: inline-block;
  vertical-align: middle;
  margin: 0 0.8rem;

  a {
    display: block;
  }
`

const NavLink = styled(_NavLink)`
  font-size: 0.8rem;
  color: black;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: -0.03rem;

  &:visited, &:active {
    color: black;
  }

  &.selected {

  }
`

export default Header;