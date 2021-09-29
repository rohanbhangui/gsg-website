import React, { useEffect, useState } from 'react';
import styled, { css } from "styled-components";
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

const slim_contact = [
  {
    label: "business@greyspacegroup.com",
    url: "mailto:business@greyspacegroup.com",
    icon: "logo-instagram"
  },
  {
    label: " | ",
    url: "",
    icon: ""
  },
  {
    label: "Instagram",
    url: "https://www.instagram.com/greyspacegroup/?hl=en",
    icon: "logo-instagram"
  }
]

const Footer = () => {
  const location = useLocation();
  const [ titleCopy, setTitleCopy ] = useState("Get In Touch");
  const [ isHomePage, setIsHomePage ] = useState(false);

  useEffect(() => {
    if(location.pathname === "/incubated-properties") {
      setTitleCopy("Want to hear more? Reach out!");
    } else if (location.pathname === "/investments") {
      setTitleCopy("Have a business you want us to hear about? Reach out!");
    }

    setIsHomePage(location.pathname === "/");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);
  
  return (
    <>
      { isHomePage && (
        <FooterContainer>
          { titleCopy === "Get In Touch" && (
            <Socials>
              {
                slim_contact.map(({label, url}) => (
                  <li key={uuid()}>
                    {url && (
                      <Link href={url} className="h2">
                        {label}
                      </Link>
                    )}
                    {!url && (
                      <Text className="h2">
                        {label}
                      </Text>
                    )}
                  </li>
                ))
              }
            </Socials>
          )}
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
  align-items: center;
`

const LinkStyles = css`
  margin: 0 0.1rem;
  padding: 0.1rem;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.33);
  transition: 0.3s color ease;
  text-transform: normal;
  font-weight: 600;
  text-transform: initial !important;
`

const Link = styled.a`
  ${LinkStyles}

  &:hover {
    color: white;
  }
`

const Text = styled.div`
  ${LinkStyles}
  font-size: 3rem !important;
  font-weight: 200;
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