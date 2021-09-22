import { useEffect, useState } from "react";
import styled from "styled-components";

import { XXL } from "../../utils/variables";
import {Grid as _Grid} from "../../assets/styles/grid";

// property logos
import TCL from "../../assets/img/tcl.png";
import NPC from "../../assets/img/npc.png";

// hero images
import TCL_HERO from "../../assets/img/tcl-masterImage.png";
import NPC_HERO from "../../assets/img/npc-masterImage.png";

const properties = [
  {
    id: "the-crew-league",
    title: "The Crew League",
    subtitle: "Lorem Ipesum",
    logo: TCL,
    description: `Koia understood the importance of having the right partner to represent their growth and prominence as a plant-based protein drink.

    See how we helped Koia realize their potential when they linked up with NBA superstar Chris Paul. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    link: {
      url: "#",
      label: "Learn More",
    },
    masterImage: TCL_HERO
  },
  {
    id: "national-players-club",
    title: "National Players Club",
    subtitle: "Lorem Ipesum",
    logo: NPC,
    description: `Koia understood the importance of having the right partner to represent their growth and prominence as a plant-based protein drink.

    See how we helped Koia realize their potential when they linked up with NBA superstar Chris Paul. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    link: {
      url: "#",
      label: "Learn More",
    },
    masterImage: NPC_HERO
  }
]

const Incubation = () => {
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

    // .map(item => {
    //   console.log("DEBUG", item.getBoundingClientRect());

    //   return item;
    // })
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
  }, []);

  const clickTest = (e) => {
    setCurrentItemIndex(1);
  }

  return (
    <>
      <Container className="bigTitle">
        <Grid xs={1}>
          <h1 className="big">Incubated Properties</h1>
          <p className="h3">Grey Space Group takes an individualized approach and curates organic GTM strategies, marketing campaigns, product distribution, and talent / brand partnerships to further each brand's growth.</p>
          <FlexContainer>
            { properties.map(property => (
              <a href={`#${property.id}`}>
                <PropertyImage key={property.id} src={property.logo} />
              </a>
            ))}
          </FlexContainer>
        </Grid>
      </Container>
      <Container>
        <Grid xs={1} md={2}>
          <div>
            <FloatingImageContainer>
              <FloatingImage img={properties[currentItemIndex].masterImage} onClick={clickTest} />
            </FloatingImageContainer>
          </div>
          <div>
            { properties.map(property => (
              <Block key={property.id} className="item-block" id={property.id}>
                <div className="content">
                  <img src={property.logo} alt="" className="logo" />
                  <h2>{property.title}</h2>
                  <h3>{property.subtitle}</h3>
                  <p>{property.description}</p>
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
      width: 70%;
      margin: 0 auto;
      color: white;
    }
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

const FloatingImage = styled.div`
  width: 100%;
  height: 30vh;
  border-radius: 3rem;
  margin: 3rem 0 0;
  position: relative;
  background: url(${({ img }) => img});
  background-size: cover;
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

const Block = styled.div`
  padding: 3rem;
  display: flex;
  align-items: center;

  @media ${({ theme }) => theme.mediaQuery.medium} {
    min-height: 45vh;
    border-radius: 3rem;
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
    .logo {
      height: 3rem;
      width: auto;
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

export default Incubation