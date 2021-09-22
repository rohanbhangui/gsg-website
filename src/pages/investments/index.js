import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

import { XXL } from "../../utils/variables";
import {Grid as _Grid} from "../../assets/styles/grid";

import Button from "../../components/button";

// property logos
import Koia from "../../assets/img/koia.png";
import Freck from "../../assets/img/freck.png";
import RowingBlazers from "../../assets/img/rowing-blazers.png";
import Wilde from "../../assets/img/wilde.png";

// hero images
import TCL_HERO from "../../assets/img/tcl-masterImage.png";
import NPC_HERO from "../../assets/img/npc-masterImage.png";

const properties = [
  {
    id: "koia",
    title: "Koia x Chris Paul",
    subtitle: "Lorem Ipesum",
    logo: Koia,
    description: `Koia understood the importance of having the right partner to represent their growth and prominence as a plant-based protein drink.

    See how we helped Koia realize their potential when they linked up with NBA superstar Chris Paul. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    link: {
      url: "https://drinkkoia.com/",
      label: "Learn More",
    },
    masterImage: TCL_HERO
  },
  {
    id: "freck",
    title: "Freck",
    subtitle: "Lorem Ipesum",
    logo: Freck,
    description: `Koia understood the importance of having the right partner to represent their growth and prominence as a plant-based protein drink.

    See how we helped Koia realize their potential when they linked up with NBA superstar Chris Paul. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    link: {
      url: "https://national-players-club.myshopify.com/",
      label: "Learn More",
    },
    masterImage: NPC_HERO
  },
  {
    id: "rowing-blazers",
    title: "Rowing Blazers",
    subtitle: "Lorem Ipesum",
    logo: RowingBlazers,
    description: `Koia understood the importance of having the right partner to represent their growth and prominence as a plant-based protein drink.

    See how we helped Koia realize their potential when they linked up with NBA superstar Chris Paul. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    link: {
      url: "https://drinkkoia.com/",
      label: "Learn More",
    },
    masterImage: TCL_HERO
  },
  {
    id: "wilde-chips",
    title: "Wilde Chips",
    subtitle: "Lorem Ipesum",
    logo: Wilde,
    description: `Koia understood the importance of having the right partner to represent their growth and prominence as a plant-based protein drink.

    See how we helped Koia realize their potential when they linked up with NBA superstar Chris Paul. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    link: {
      url: "https://national-players-club.myshopify.com/",
      label: "Learn More",
    },
    masterImage: NPC_HERO
  }
]

const Investments = () => {
  const [ currentItemIndex, setCurrentItemIndex ] = useState(0);

  const scrollBackground = (e) => {
    const html = document.querySelector(".background");
    let offset = 20*window.scrollY/html.offsetHeight*0.66;
    if(offset < 0) offset = 0;
    html.style.setProperty('--background-position', `-${offset}vh`);
  }

  const scrollToPropertyBackground = (e) => {
    const elements = [...document.querySelectorAll(".item-block")];

    for(let i = 0; i < elements.length; i ++) {
      const element = elements[i];
      const elementBounds = element.getBoundingClientRect();
      const elementUpperBound = elementBounds.top + window.scrollY;
      const elementLowerBound = elementBounds.bottom + window.scrollY;

      const windowCenterScrollMarker = window.scrollY + window.innerHeight / 2;

      if(windowCenterScrollMarker >= elementUpperBound && windowCenterScrollMarker <= elementLowerBound) {
        setCurrentItemIndex(i);
        break;
      }
    }
  }

  const scroll = (e) => {
    scrollBackground(e);
    scrollToPropertyBackground(e);
  }

  useEffect(() => {
    window.addEventListener('scroll', scroll);

    const html = document.querySelector(".background");
    html.style.setProperty('--background-position', `0vh`);
    
    //remove overflow hidden
    document.querySelector("main").classList.add("overflow-open");

    return () => {
      window.removeEventListener('scroll', scroll);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container className="bigTitle">
        <Grid xs={1}>
          <h1 className="big">Incubated Properties</h1>
          <p className="h3">Grey Space Group takes an individualized approach and curates organic GTM strategies, marketing campaigns, product distribution, and talent / brand partnerships to further each brand's growth.</p>
          <FlexContainer>
            { properties.map(property => (
              <a key={property.id} href={`#${property.id}`}>
                <PropertyImage src={property.logo} />
              </a>
            ))}
          </FlexContainer>
        </Grid>
      </Container>
      <Container className="properties">
        <Grid xs={1} md={2}>
          <div>
            <FloatingImageContainer>
              <FloatingImage img={properties[currentItemIndex].masterImage} />
            </FloatingImageContainer>
          </div>
          <div>
            { properties.map(property => (
              <Block key={property.id} className="item-block" id={property.id}>
                <BlockImage className="mobile" img={property.masterImage} />
                <div className="content">
                  <img src={property.logo} alt="" className="logo" />
                  <h2>{property.title}</h2>
                  <h3>{property.subtitle}</h3>
                  <p>{property.description}</p>
                  { property.link.url && (
                    <Button linkto={property.link.url} label={property.link.label} />
                  )}
                </div>
              </Block>
            ))}
          </div>
        </Grid>
      </Container>
    </>
  )
}

const Container = styled.section`
  max-width: ${XXL}px;
  width: 100%;
  margin: 4rem auto 4rem;
  padding: 1rem;
  position: relative;

  &.bigTitle {
    text-align: center;

    h1 {
      margin-bottom: 1.5rem;
    }

    p {
      width: 100%;
      margin: 0 auto;
      color: rgba(0, 0, 0, 0.5);

      @media ${({ theme }) => theme.mediaQuery.medium} {
        width: 70%;
      }
    }
  }

  &.properties {
    padding: 0.5rem;
  }
`

const Grid = styled(_Grid)`
`

const FlexContainer = styled.div`
  display: flex;
  margin-top: 1.5rem;
  justify-content: center;
  align-items: center;
`

const PropertyImage = styled.img`
  height: 4rem;
  width: auto;
  padding: 0.5rem;
  cursor: pointer;
`

const FloatingImageContainer = styled.div`
  position: sticky;
  top: 25vh;

  @media ${({ theme }) => theme.mediaQuery.xlarge} {
    top: 15vh;
  }
`

const PropertyImageStyles = css`
  width: 100%;
  height: 30vh;
  border-radius: 3rem;
  margin: 3rem 0 0;
  position: relative;
  background: url(${({ img }) => img});
  background-size: cover;
  background-position: center center;
  transition: 0.3s all ease;

  @media ${({ theme }) => theme.mediaQuery.medium} {
    height: 40vh;
    border-radius: 3rem;
    margin: 2rem 0 0;
  }

  @media ${({ theme }) => theme.mediaQuery.large} {
    height: 50vh;
    border-radius: 3rem;
  }

  @media ${({ theme }) => theme.mediaQuery.xlarge} {
    height: 65vh;
    border-radius: 3rem;
    margin: 2rem 0 0;
  }
`

const FloatingImage = styled.div`
  ${PropertyImageStyles}
  
  display: none;

  @media ${({ theme }) => theme.mediaQuery.medium} {
    display: block;
  }
`

const BlockImage = styled.div`
  ${PropertyImageStyles}

  @media ${({ theme }) => theme.mediaQuery.medium} {
    display: none;
  }
`

const Block = styled.div`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media ${({ theme }) => theme.mediaQuery.medium} {
    min-height: 45vh;
    border-radius: 3rem;
    flex-wrap: nowrap;
    padding: 3rem;
  }

  @media ${({ theme }) => theme.mediaQuery.large} {
    min-height: 55vh;
    border-radius: 3rem;
  }

  @media ${({ theme }) => theme.mediaQuery.xlarge} {
    min-height: 65vh;
    border-radius: 3rem;
  }

  .content {
    padding: 2rem;

    @media ${({ theme }) => theme.mediaQuery.medium} {
      padding: 0;
    }

    .logo {
      height: 5rem;
      width: auto;

      @media ${({ theme }) => theme.mediaQuery.medium} {
        height: 3rem;
      }
    }
  
    h3 {
      opacity: 0.5;
      margin-top: 0rem;
      font-weight: 600;
      margin-bottom: 1.5rem;
    }

    p {
      white-space: pre-line;
    }
  }
`

export default Investments