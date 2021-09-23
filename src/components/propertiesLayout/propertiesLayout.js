import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

import { XXL } from "../../utils/variables";
import {Grid as _Grid} from "../../assets/styles/grid";

import Button from "../../components/button";

const PropertiesLayout = ({
  properties,
  children
}) => {
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

    // to preload images
    properties.map(item => item.masterImage).forEach((picture) => {
      const img = new Image();
      img.src = picture;
    });

    return () => {
      window.removeEventListener('scroll', scroll);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container className="bigTitle">
        <Grid xs={1}>
          <div className="content">
            { children }
          </div>
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
        <Grid xs={1} md={2} className="properties-grid">
          <div>
            <FloatingImageContainer>
              <FloatingImage img={properties[currentItemIndex].masterImage} />
            </FloatingImageContainer>
          </div>
          <div>
            { properties.map(property => (
              <Block key={property.id} className="item-block">
                <Marker id={property.id} />
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
    padding: 0;

    .content {
      padding: 1rem;
      
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
  }

  &.properties {
    padding: 0.5rem;
  }
`

const Grid = styled(_Grid)`
  &.properties-grid {
    display: block;

    @media ${({ theme }) => theme.mediaQuery.medium} {
      display: grid;
    }
  }
`

const FlexContainer = styled.div`
  display: flex;
  margin-top: 1.5rem;
  align-items: center;
  overflow-y: auto;
  width: 100%;

  @media ${({ theme }) => theme.mediaQuery.small} {
    justify-content: center;
  }

  a {
    margin: 0 1rem;
  }
`

const PropertyImage = styled.img`
  max-width: 8rem;
  max-height: 4.5rem;
  height: 100%;
  width: auto;
  padding: 0.5rem;
  cursor: pointer;
  object-fit: contain;
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
  position: relative;

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
      max-height: 5rem;
      height: 100%;
      width: auto;
      max-width: 9rem;
      object-fit: contain;

      @media ${({ theme }) => theme.mediaQuery.medium} {
        height: 3rem;
      }
    }

    h2 {
      margin-top: 1rem;
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

const Marker = styled.div`
  position: absolute;
  top: 0;
  
  @media ${({ theme }) => theme.mediaQuery.medium} {
    top: -15vh;
  }
`

export default PropertiesLayout