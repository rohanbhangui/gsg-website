import { useEffect } from "react";
import styled from "styled-components";

import { XXL } from "../../utils/variables";
import { Grid as _Grid } from "../../assets/styles/grid";

import Button from "../../components/button";

const PropertiesLayout = ({ properties, children }) => {
  useEffect(() => {
    //remove overflow hidden
    document.querySelector("main").classList.add("overflow-open");

    // to preload images
    properties
      .map((item) => item.masterImage)
      .forEach((picture) => {
        const img = new Image();
        img.src = picture;
      });

    document.querySelector("html").classList.add("smooth-scroll");

    return () => {
      document.querySelector("html").classList.remove("smooth-scroll");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container className="bigTitle">
        <Grid xs={1}>
          <div className="content">{children}</div>
          <FlexContainer>
            {properties.map((property) => (
              <a key={property.id} href={`#${property.id}`}>
                <PropertyImage src={property.logo_alt || property.logo} />
              </a>
            ))}
          </FlexContainer>
        </Grid>
      </Container>
      <Container className="properties">
        <Grid xs={1} className="properties-grid">
          {properties.map((property) => (
            <Block key={property.id} className="item-block" background={property.masterImage}>
              <Marker id={property.id} />
              <div className="content">
                <img src={property.logo} alt="" className="logo" />
                <h2>{property.title}</h2>
                <h3>{property.subtitle}</h3>
                <p>{property.description}</p>
                {property.link.url && (
                  <Button
                    linkto={property.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    label={property.link.label}
                    className="outline-invert"
                  />
                )}
              </div>
            </Block>
            ))}
        </Grid>
      </Container>
    </>
  );
};

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
`;

const Grid = styled(_Grid)`
  &.properties-grid {
    display: grid;
  }
`;

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
`;

const PropertyImage = styled.img`
  max-width: 8rem;
  max-height: 4.5rem;
  height: 100%;
  width: auto;
  padding: 0.5rem;
  cursor: pointer;
  object-fit: contain;
`;

const Block = styled.div`
  padding: 0.5rem;
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  position: relative;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.66), rgba(0, 0, 0, 0.66)), url(${({ background }) => background});
  background-size: cover;
  background-position: center center;
  border-radius: 3rem;
  color: white;
  min-height: 38vh;

  @media ${({ theme }) => theme.mediaQuery.medium} { 
    flex-wrap: nowrap;
    padding: 4rem;
    min-height: 45vh;
  }

  @media ${({ theme }) => theme.mediaQuery.large} {
    min-height: 55vh;
  }

  @media ${({ theme }) => theme.mediaQuery.xlarge} {
    min-height: 65vh;
  }

  .content {
    padding: 2rem;
    width: 100%;

    @media ${({ theme }) => theme.mediaQuery.medium} {
      padding: 0;
      max-width: 25rem;
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
      margin-top: 0rem;
      font-weight: 600;
      margin-bottom: 1.5rem;
      mix-blend-mode: screen;
      color: rgba(255, 255, 255, 0.5);
    }

    p {
      white-space: pre-line;
    }
  }
`;

const Marker = styled.div`
  position: absolute;
  top: 0;

  @media ${({ theme }) => theme.mediaQuery.medium} {
    top: -15vh;
  }
`;

export default PropertiesLayout;
