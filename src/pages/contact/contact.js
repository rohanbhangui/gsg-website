import styled from "styled-components";

import { Grid as _Grid } from "../../assets/styles/grid";
import { MD, XLG } from "../../utils/variables";
import { HeaderHeight } from "../../components/header";
import { useState } from "react";

const socials = [
  {
    url: "#",
    label: "Twitter",
    icon: "logo-twitter"
  },
  {
    url: "#",
    label: "Instagram",
    icon: "logo-instagram"
  },
  {
    url: "#",
    label: "Facebook",
    icon: "logo-facebook"
  },
  {
    url: "#",
    label: "Youtube",
    icon: "logo-youtube"
  }
]
const Contact = () => {
  const [ hoveredLabel, setHoveredLabel ] = useState(" ");

  const handleMouseEnter = (label) => {
    return () => {
      setHoveredLabel(label);
    }
  }

  const handleMouseLeave = () => {
    setHoveredLabel(" ");
  }

  return (
    <Container>
      <Grid xs={1}>
        <Grid xs={1}>
          <h1>We'd love to hear from you. Reach out!</h1>
        </Grid>
        <Grid xs={1} md={2}>
          <Row>
            <h2>Inquiries</h2>
            <ContactBlock>
              <h4>Email Us</h4>
              <a href="mailto:business@greyspacegroup.com" className="h3">business@greyspacegroup.com</a>
            </ContactBlock>
            <ContactBlock>
              <h4>Phone Us</h4>
              <a href="tel:310-916-8502" className="h3">310-916-8502</a>
            </ContactBlock>
          </Row>
          <Row>
            <h2>Connect with us</h2>
            <LinkGroup>
              { socials.map(social => (
                <Link href={social.url} onMouseEnter={handleMouseEnter(social.label)} onMouseLeave={handleMouseLeave}>
                  <ion-icon name={social.icon}></ion-icon>
                </Link>
              ))}
            </LinkGroup>
            <SocialHandlePreview>{hoveredLabel}</SocialHandlePreview>
          </Row>
        </Grid>
      </Grid>
    </Container>
  )
}

const Container = styled.div`
  max-width: ${XLG}px;
  width: 100%;
  margin: 0 auto;
  min-height: calc(100vh - ${HeaderHeight});
  position: relative;
  font-size: 1.4rem;
  
  @media ${({ theme }) => theme.mediaQuery.medium} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const Grid = styled(_Grid)`
  align-items: center;

  h1 {
    max-width: ${MD}px;
    width: 100%;
    margin: 2rem auto 0rem;
    text-align: center;
    padding: 0 0.5rem;

    @media ${({ theme }) => theme.mediaQuery.medium} {
      margin-top: 0;
      margin-bottom: 3rem;
    }
  }
`

const Row = styled.div`
  padding-top: 4rem;

  @media ${({ theme }) => theme.mediaQuery.medium} {
    padding-top: 0rem;
  }

  h2 {
    text-align: center;
    font-size: 2rem;

    @media ${({ theme }) => theme.mediaQuery.medium} {
      font-size: 1.5rem;
    }
  }
`

const ContactBlock = styled.div`
  margin-top: 1.5rem;

  @media ${({ theme }) => theme.mediaQuery.medium} {
    margin-top: 0rem;
  }

  h4 {
    text-align: center;
    font-size: 1rem;

    @media ${({ theme }) => theme.mediaQuery.medium} {
      font-size: 0.6rem;
    }
  }

  a.h3 {
    display: block;
    text-align: center;
    color: rgba(0, 0, 0, 0.5);
    transition: color 0.3s cubic-bezier(0.77, 0, 0.175, 1);
    margin-top: 0.5rem;
    font-size: 1.5rem;

    @media ${({ theme }) => theme.mediaQuery.medium} {
      font-size: 1rem;
      margin-top: 0;
    }

    &:hover {
      color: rgba(0, 0, 0, 1);
    }
  }
`

const LinkGroup = styled.div`
  margin-top: 1rem;
  flex: 1 1 100%;
  text-align: center;
  margin-bottom: 0rem;

  @media ${({ theme }) => theme.mediaQuery.medium} {
    flex: 0 1 auto;
    margin-top: 0rem;
  }
`

const Link = styled.a`
  color: black;
  font-size: 3rem;
  margin: 0 0.5rem;
  opacity: 0.5;
  display: inline-block;
  transition: opacity 0.3s cubic-bezier(0.77, 0, 0.175, 1), transform 0.3s cubic-bezier(0.77, 0, 0.175, 1);
  transform: translateY(0);

  &:hover {
    opacity: 1;
    transform: translateY(-0.3rem);
  }

  ion-icon {
    font-size: 3rem;

    @media ${({ theme }) => theme.mediaQuery.medium} {
      font-size: 1.5rem;
    }
  }
`

const SocialHandlePreview = styled.h4`
  text-align: center;
  white-space: pre;
  margin-top: 0;
  margin-bottom: 1.4rem;
  font-size: 1rem;

  @media ${({ theme }) => theme.mediaQuery.medium} {
    font-size: 0.6rem;
  }
`

export default Contact;