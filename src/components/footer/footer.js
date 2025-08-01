import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { useLocation } from "react-router-dom";
import { v4 as uuid } from "uuid";

import { XLG } from "../../utils/variables";

export const socials = [
  {
    label: "Instagram",
    url: "https://www.instagram.com/greyspacegroup/?hl=en",
    icon: "logo-instagram",
  },
  {
    label: "Linkedin",
    url: "https://www.linkedin.com/company/grey-space-group/",
    icon: "logo-linkedin",
  },
];

const Footer = ({ id }) => {
  const location = useLocation();
  // eslint-disable-next-line no-unused-vars
  const [titleCopy, setTitleCopy] = useState("Get In Touch");
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    setIsHomePage(location.pathname === "/");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <>
      {isHomePage && (
        <FooterContainer id={id}>
          {titleCopy === "Get In Touch" && (
            <Socials>
              {socials.map(({ label, url, icon }) => (
                <li key={uuid()}>
                  {url && (
                    <Link href={url} className="h2" target="_blank" rel="noopener noreferrer">
                      <ion-icon name={icon}></ion-icon>
                    </Link>
                  )}
                  {!url && <Text className="h2">{label}</Text>}
                </li>
              ))}
            </Socials>
          )}
          <Copyright>
            Grey Space Group &copy; Copyright {new Date().getFullYear()}
          </Copyright>
        </FooterContainer>
      )}
    </>
  );
};

const FooterContainer = styled.footer`
  width: 100%;
  margin: 1rem auto 0;
  padding: 1rem;
  position: relative;
  text-align: center;
  max-width: ${XLG}px;

  h1 {
    color: white;
    text-align: center;
    margin-bottom: 1.5rem;
  }
`;

const Socials = styled.ul`
  display: flex;
  list-style: none;
  text-align: center;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
`;

const LinkStyles = css`
  margin: 0 0.1rem;
  padding: 0.1rem;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.33);
  transition: 0.3s color ease;
  text-transform: normal;
  font-weight: 600;
  text-transform: initial !important;

  ion-icon {
    font-size: 2.4rem;
    margin: 0 0.3rem;
  }
`;

const Link = styled.a`
  ${LinkStyles}

  &:hover {
    color: black;
  }
`;

const Text = styled.div`
  ${LinkStyles}
  font-size: 3rem !important;
  font-weight: 200;
`;

const Copyright = styled.div`
  margin-top: 8rem;
  font-size: 12px;
  text-align: center;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: calc(0.5rem + env(safe-area-inset-bottom));
`;

export default Footer;
