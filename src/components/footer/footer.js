import React from 'react';
import { Link as _Link } from 'react-router-dom';
import styled from "styled-components";
import { v4 as uuid } from "uuid";

import Button from '../button';

const socials = [
  {
    name: "Twitter",
    url: "twitter.com"
  },
  {
    name: "Facebook",
    url: "facebook.com"
  },
  {
    name: "Instagram",
    url: "instagram.com"
  },
  {
    name: "Youtube",
    url: "youtube.com"
  }
]

const Footer = () => {
  return (
    <FooterContainer>
      <h1>Get In Touch</h1>
      <Socials>
        {
          socials.map(({name, url}) => (
            <li key={uuid()}>
              <Link to={url} className="h2">
                {name}
              </Link>
            </li>
          ))
        }
      </Socials>
      <Button linkto="/contact" label="Contact us" />
      <Copyright>Grey Space Group &copy; Copyright 2021</Copyright>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  width: 100%;
  margin: 8rem auto 0;
  padding: 1rem;
  position: relative;
  text-align: center;

  h1 {
    color: white;
    text-align: center;
    margin-bottom: 1.5rem;
  }
`

const Socials = styled.ul`
  display: flex;
  list-style: none;
  text-align: center;
  justify-content: center;
  flex-wrap: wrap;
`

const Link = styled(_Link)`
  margin: 0 0.1rem;
  padding: 0.1rem;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.33);
  transition: 0.3s color ease;
  text-transform: normal;
  font-weight: 600;

  &:hover {
    color: white;
  }
`

const Copyright = styled.div`
  margin-top: 8rem;
  font-size: 12px;
  text-align: center;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: calc(.5rem + env(safe-area-inset-bottom));
`

export default Footer;