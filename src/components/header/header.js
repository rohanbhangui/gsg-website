import { useState } from 'react';
import { NavLink as _NavLink, Link } from 'react-router-dom';
import styled from "styled-components";

import LogoImg from "../../assets/img/logo.png";

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState("close");

  const toggleOpen = (e) => {
    setIsMobileOpen(prev => {
      if(prev === "open") return "close";

      return "open";
    })
  }
  
  return (
    <HeaderContainer mobileopen={isMobileOpen}>
      <nav>
        <Link to="/" onClick={toggleOpen}><Logo src={LogoImg} alt="" /></Link>
        <ion-icon name={isMobileOpen === "close" ? "menu-outline" : "close-outline"} onClick={toggleOpen}></ion-icon>
        <ul>
          <NavItem><NavLink onClick={toggleOpen} to="/incubated-properties" activeClassName="selected">Incubated Properties</NavLink></NavItem>
          <NavItem><NavLink onClick={toggleOpen} to="/investments" activeClassName="selected">Investments</NavLink></NavItem>
          <NavItem><NavLink onClick={toggleOpen} to="/" activeClassName="selected">About</NavLink></NavItem>
          <NavItem><NavLink onClick={toggleOpen} to="/contact" activeClassName="selected">Contact</NavLink></NavItem>
        </ul>
      </nav>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  height: 3rem;
  z-index: 100;
  position: relative;
  margin: 0.5rem 0;

  @media ${({ theme }) => theme.mediaQuery.medium} {
    margin: 0;
  }

  ${({ mobileopen }) => mobileopen === "open" && `
    position: fixed;
    width: 100%;
  `}

  nav {
    justify-content: space-between;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 0.5rem;

    @media ${({ theme }) => theme.mediaQuery.medium} {
      justify-content: center;
    }

    ul {
      opacity: 0;
      pointer-events: none;
      position: fixed;
      top: 50%;
      transform: translateY(-50%);
      transition: 0.3s all ease;

      @media ${({ theme }) => theme.mediaQuery.medium} {
        transition: none;
        opacity: 1;
        pointer-events: auto;
        position: relative;
        top: auto;
        transform: none;
      }

      ${({ mobileopen }) => mobileopen === "open" && `
        opacity: 1;
        pointer-events: auto;
      `}
    }

    ion-icon {
      position: relative;
      z-index: 30;
      font-size: 2rem;
      transition: 0.3s all ease;

      @media ${({ theme }) => theme.mediaQuery.medium} {
        display: none;
        transition: none;
      }

      ${({ mobileopen }) => mobileopen === "open" && `
        color: white;
      `}
    }

    &:before {
      content: '';
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      background: rgba(0, 0, 0, 0.7);
      opacity: 0;
      pointer-events: none;
      transition: 0.3s all ease;
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);

      ${({ mobileopen }) => mobileopen === "open" && `
        opacity: 1;
        pointer-events: auto;
      `}

      @media ${({ theme }) => theme.mediaQuery.medium} {
        content: none;
        display: none;
      }
    }
  }
`

const Logo = styled.img`
  height: 2.75rem;
  width: auto;
  position: relative;
  top: 0.15rem;

  @media ${({ theme }) => theme.mediaQuery.medium} {
    height: 2rem;
  }
`

const NavItem = styled.li`
  display: block;
  vertical-align: middle;
  margin: 0 0.8rem;

  @media ${({ theme }) => theme.mediaQuery.medium} {
    display: inline-block;
  }

  a {
    display: block;
  }
`

const NavLink = styled(_NavLink)`
  font-size: 2.2rem;
  color: white;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: -0.03rem;

  @media ${({ theme }) => theme.mediaQuery.medium} {
    color: black;
    font-size: 0.8rem;
  }

  &:visited, &:active {
    color: white;

    @media ${({ theme }) => theme.mediaQuery.medium} {
      color: black;
    }
  }
`

export default Header;