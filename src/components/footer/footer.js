import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { useLocation } from 'react-router-dom';
import { v4 as uuid } from "uuid";

import { XLG } from '../../utils/variables';
import Button from '../button';

export const socials = [
  {
    label: "Twitter",
    url: "https://twitter.com/jordanstern3?lang=en",
    icon: "logo-twitter"
  },
  {
    label: "Facebook",
    url: "https://facebook.com/GreySpaceGroup/",
    icon: "logo-facebook"
  },
  {
    label: "Instagram",
    url: "https://www.instagram.com/greyspacegroup/?hl=en",
    icon: "logo-instagram"
  },
  {
    label: "Youtube",
    url: "https://youtube.com",
    icon: "logo-youtube"
  }
]

const Footer = () => {
  const location = useLocation();
  const [ titleCopy, setTitleCopy ] = useState("Get In Touch");
  const [ isContactPage, setIsContactPage ] = useState(false);

  useEffect(() => {
    if(location.pathname === "/incubated-properties") {
      setTitleCopy("Want to hear more? Reach out!");
    } else if (location.pathname === "/investments") {
      setTitleCopy("Have a business you want us to hear about? Reach out!");
    }

    setIsContactPage(location.pathname === "/contact");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);
  
  return (
    <>
      { !isContactPage && (
        <FooterContainer>
          <h1>{titleCopy}</h1>
          { titleCopy === "Get In Touch" && (
            <Socials>
              {
                socials.map(({label, url}) => (
                  <li key={uuid()}>
                    <Link href={url} className="h2">
                      {label}
                    </Link>
                  </li>
                ))
              }
            </Socials>
          )}
          <Button linkto="/contact" label="Contact us" />
          <Copyright>Grey Space Group &copy; Copyright {new Date().getFullYear()}</Copyright>
        </FooterContainer>
      )}
    </>
  )
}

const FooterContainer = styled.footer`
  width: 100%;
  margin: 8rem auto 0;
  padding: 1rem;
  position: relative;
  text-align: center;
  max-width: ${XLG}px;

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

const Link = styled.a`
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