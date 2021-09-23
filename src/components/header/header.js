import { useEffect, useState } from 'react';
import { NavLink as _NavLink, Link, useLocation } from 'react-router-dom';
import styled from "styled-components";

import LogoImg from "../../assets/img/logo.png";

const Header = () => {
  const { pathname } = useLocation();

  const [isMobileOpen, setIsMobileOpen] = useState("close");

  const toggleOpen = (e) => {
    setIsMobileOpen(prev => {
      if(prev === "open") return "close";

      return "open";
    })
  }

  useEffect(() => {
    setIsMobileOpen("close");
  }, [pathname]);

  useEffect(() => {
    if(isMobileOpen === "open") {
      document.querySelector("html").classList.add("mobile-open");
    }
    else if(isMobileOpen === "close") {
      document.querySelector("html").classList.remove("mobile-open");
    }
  }, [isMobileOpen]);
  
  return (
    <HeaderContainer mobileopen={isMobileOpen}>
      <nav>
        <Link to="/"><Logo src={LogoImg} alt="" /></Link>
        <ion-icon name={isMobileOpen === "close" ? "menu-outline" : "close-outline"} onClick={toggleOpen}></ion-icon>
        <ul>
          <NavItem><NavLink to="/incubated-properties" activeClassName="selected">Incubated Properties</NavLink></NavItem>
          <NavItem><NavLink to="/investments" activeClassName="selected">Investments</NavLink></NavItem>
          <NavItem><NavLink to="#" activeClassName="selected">About</NavLink></NavItem>
          <NavItem><NavLink to="/contact" activeClassName="selected">Contact</NavLink></NavItem>
        </ul>
      </nav>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  height: 4rem;
  z-index: 100;
  position: relative;
  padding: 0.5rem 0;

  @media ${({ theme }) => theme.mediaQuery.medium} {
    margin: 0;
  }

  ${({ mobileopen, theme }) => mobileopen === "open" && `
    @media ${({ theme }) => theme.mediaQuery.medium} {
      position: fixed;
      width: 100%;
    }
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
      top: 50vh;
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
      font-size: 2.25rem;
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
      height: 100vh;

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
  height: 3.25rem;
  width: auto;
  position: relative;
  top: 0.15rem;

  @media ${({ theme }) => theme.mediaQuery.medium} {
    height: 2.25rem;
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