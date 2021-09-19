import { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { XLG, XXL, LG } from "../../utils/variables";

import Logo from "../../assets/img/logo.png";
import HeroImage from "../../assets/img/hero-image.svg";

//Venn Diagram
import DarkCircle from "../../assets/img/dark-circle.svg";
import LightCircle from "../../assets/img/light-circle.svg";
import IncubationIcon from "../../assets/img/incubation-icon.svg";
import InvestingIcon from "../../assets/img/investing-icon.svg";

//createing possibilities tri panel
import CreatingValue from "../../assets/img/creating-value.svg";
import FosteringGrowth from "../../assets/img/fostering-growth.svg";
import UntapPotential from "../../assets/img/untap-potential.svg";

//project-tiles
import InvestmentTile from "../../assets/img/investment-tile.png";
import IncubationTile from "../../assets/img/incubation-tile.png";
import ArrowGo from "../../assets/img/arrow-go.svg";

//trusted by
import BeatsLogo from "../../assets/img/beats-logo.png";
import NikeLogo from "../../assets/img/nike-logo.png";
import PostmatesLogo from "../../assets/img/postmates-logo.png";
import NBALogo from "../../assets/img/nba-logo.png";
import FootLockerLogo from "../../assets/img/footlocker-logo.png";
import ShowtimeLogo from "../../assets/img/showtime-logo.png";
import JordanLogo from "../../assets/img/jordan-logo.png";
import WWELogo from "../../assets/img/wwe-logo.png";
import CirocLogo from "../../assets/img/ciroc-logo.png";
import FashionnovaLogo from "../../assets/img/fashionnova-logo.png";

import Button from "../../components/button";
import Footer from "../../components/footer";
import Circle from "../../components/circles";
import {Grid as _Grid} from "../../assets/styles/grid";

const possibilities_blocks = [
  {
    img: UntapPotential,
    title: "Untapping Potential",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    img: CreatingValue,
    title: "Creating Value",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    img: FosteringGrowth,
    title: "Fostering Growth",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
]

const trusted_by = [
  BeatsLogo,
  NikeLogo,
  PostmatesLogo,
  NBALogo,
  FootLockerLogo,
  ShowtimeLogo,
  JordanLogo,
  WWELogo,
  CirocLogo,
  FashionnovaLogo
]

const Home = () => {

  const scrollBackground = (e) => {
    const html = document.querySelector("html");
    html.style.setProperty('--background-position', `${100*window.scrollY/html.offsetHeight}%`);
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollBackground);

    return () => {
      window.removeEventListener('scroll', scrollBackground);
    }
  }, []);

  return (
    <>
      <Container>
        <FirstCircle
          color="#3c3c3c"
          opacity={1}
          blend="multiply"
          y={{  
            direction: "top",
            dimension: "-10%"
          }}
        />
        <Grid xs={1} sm={2}>
          <Row className="hero-section-text">
            <div className="text-wrapper">
              <h1>
                A culture focused
                venture studio
                for a social world.
              </h1>
              <Content>
                <p className="h3">We have the ability to see patterns, develop new solutions and build new paradigms that allow us to turn ideas and partnerships into reality.</p>
                <p className="h3">Our goal is to generate long term value for brands and investors by investing in and adding value to early as well as growth stage CPG, Lifestyle &amp; Tech companies.</p>
              </Content>
              <Button linkto="/contact" label="Contact Us" />
            </div>
          </Row>
          <Row className="hero-section-img">
            <Hero src={HeroImage} alt="" />
          </Row>
        </Grid>
      </Container>
      <Container className="pre-venn">
        <Grid xs={1} lg={2} className="section-2">
          <Row className="desktop-push"></Row>
          <Row>
            <div className="text-wrapper">
              <h1>Finding Potential.</h1>
              <h1>Generating Value.</h1>
              <Content>
                <p className="h3">We like to capitalize where potential is untapped. We generate value by focusing on the intersection of brand incubation and early stage value investing.</p>
              </Content>
            </div>
          </Row>
        </Grid>
      </Container>
      <VennDiagram>
        <Grid xs={1} sm={2}>
          <img className="logo" src={Logo} alt="" />
          <LightSide>
            <VennContent className="left">
              <div className="inner">
                <img className="icon" src={InvestingIcon} alt="" />
                <h2>Early Stage Value Investing</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Button linkto="/investments" className="outline" label="Learn More" />
              </div>
            </VennContent>
            <img className="venn-circle" src={LightCircle} alt="" />
          </LightSide>
          <DarkSide>
            <VennContent className="right">
              <div className="inner">
                <img className="icon" src={IncubationIcon} alt="" />
                <h2>Incubated Properties</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Button linkto="/incubated-properties" className="outline-invert" label="Learn More" />
              </div>
            </VennContent>
            <img className="venn-circle" src={DarkCircle} alt="" />
          </DarkSide>
        </Grid>
      </VennDiagram>
      <Container className="creating-possibilities">
        <Grid xs={1} className="intro-content">
          <h1>
            Creating
            Possibilities
          </h1>
          <p className="h3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </Grid>
        <Grid xs={3} className="tri-blocks">
          { possibilities_blocks.map(item => (
            <Block>
              <div className="flex-container">
                <div className="flex-item">
                  <img src={item.img} alt="" />
                </div>
                <div className="flex-item">
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </div>
              </div>
            </Block>
          ))}
        </Grid>
        <Circle
          color="#eaeaea"
          blend="lighten"
          opacity={0.65}
          y={{  
            direction: "top",
            dimension: "90%"
          }}
        />
        <Circle
          color="#555"
          opacity={1}
          size={30}
          blend="multiply"
          x={{  
            direction: "left",
            dimension: "100%"
          }}
          y={{  
            direction: "top",
            dimension: "50%"
          }}
        />
      </Container>
      <Container className="projects">
        <Circle
          color="#000"
          opacity={0.50}
          size={10}
          y={{  
            direction: "top",
            dimension: "30%"
          }}
        />
        <Circle
          color="#bababa"
          blend="lighten"
          opacity={0.66}
          size={30}
          x={{  
            direction: "left",
            dimension: "90%"
          }}
          y={{  
            direction: "top",
            dimension: "85%"
          }}
        />
        <Grid xs={1}>
          <h1>Explore Our Projects</h1>
        </Grid>
        <Grid xs={1} sm={2} className="project-tiles">
          <TileBlock to="/investments">
            <Tile background={InvestmentTile}>
              <div className="content">
                <div className="inner">
                  <h2>Investments</h2><img src={ArrowGo} alt="" />
                </div>
              </div>
            </Tile>
          </TileBlock>
          <TileBlock to="/incubated-properties">
            <Tile background={IncubationTile}>
              <div className="content">
                <div className="inner">
                  <h2>Incubated Properties</h2><img src={ArrowGo} alt="" />
                </div>
              </div>
            </Tile>
          </TileBlock>
        </Grid>
      </Container>
      <Container className="trusted-by">
        <h2>Trusted By</h2>
        <Logos>
          {
            [...trusted_by].map(item => (
              <li><img src={item} alt="" /></li>
            ))
          }
          {
            [...trusted_by,...trusted_by,...trusted_by].map(item => (
              <li className="mobile-only"><img src={item} alt="" /></li>
            ))
          }
        </Logos>
      </Container>
      <Footer />
    </>
  )
}

const Container = styled.section`
  max-width: ${XLG}px;
  width: 100%;
  margin: 4rem auto 4rem;
  padding: 1rem;
  position: relative;

  @media ${({ theme }) => theme.mediaQuery.medium} {
    margin-bottom: 0;
  }

  &.pre-venn {
    margin-top: 0;
    margin-bottom: 2rem;
  }

  &.creating-possibilities {
    padding: 0;

    @media ${({ theme }) => theme.mediaQuery.medium} {
      padding: 0 1rem;
    }

    .intro-content {
      padding: 0 1rem;

      @media ${({ theme }) => theme.mediaQuery.medium} {
        padding: 0;
      }

      > h1 {
        color: white;
      }
  
      > p {
        color: #3c3c3c;
      }
  
      > h1, > p {
        max-width: 30rem;
        margin-left: 2rem;
      }
    }
  }

  &.projects {
    margin-top: 12rem;
    max-width: ${XXL}px;

    h1 {
      text-align: center;
      color: white;
    }
  }

  &.trusted-by {
    max-width: none;
    margin-top: 12rem;

    @media ${({ theme }) => theme.mediaQuery.medium} {
      max-width: ${LG}px;
    }

    h2 {
      text-align: center;
      margin-bottom: 1.5rem;
      color: white;
    }
  }
`

const Grid = styled(_Grid)`
  position: relative;
  z-index: 5;

  &.section-2 {
    justify-content: flex-end;

    .desktop-push {
      display: none;

      @media ${({ theme }) => theme.mediaQuery.large} {
        display: block;
      }
    }
    
    h1 {
      color: #3c3c3c;
    }

    p {
      color: white;
    }
  }

  &.tri-blocks, &.project-tiles {
    grid-gap: 0.6rem;
    margin-top: 4rem;
  }

  &.tri-blocks {
    overflow: auto;

    padding: 0 1rem;

    @media ${({ theme }) => theme.mediaQuery.medium} {
      padding: 0;
    }
  }
`

const Row = styled.div`
  position: relative;

  .text-wrapper {
    width: 100%;

    @media ${({ theme }) => theme.mediaQuery.medium} {
      width: 80%;
    }
  }

  &.hero-section-text {
    order: 2;

    @media ${({ theme }) => theme.mediaQuery.small} {
      order: 1;
    }
  }

  &.hero-section-img {
    order: 1;

    @media ${({ theme }) => theme.mediaQuery.small} {
      order: 2;
      margin-bottom: -10rem;
    }

    @media ${({ theme }) => theme.mediaQuery.large} {
      order: 2;
      margin-bottom: -10rem;
    }
  }
`

const Content = styled.div`
  margin-top: 1rem;

  h1 {
    white-space: pre-line;
  }
`

const Hero = styled.img`
  width: 150%;
  height: auto;
  display: block;
  position: relative;
  left: 50%;
  margin-bottom: 2rem;
  z-index: 0;
  margin-top: -80%;
  transform: translateX(-50%);

  @media ${({ theme }) => theme.mediaQuery.small} {
    transform: translateY(-50%);
    width: 200%;
    top: 30%;
    left: auto;
    z-index: 0;
    max-width: none;
    margin-top: 0;
    
  }
`

const VennDiagram = styled.div`
  max-width: 100rem;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 0rem;
  position: relative;

  @media ${({ theme }) => theme.mediaQuery.medium} {
    padding-bottom: 8rem;
  }

  .logo {
    position: absolute;
    left: 50%;
    top: 45%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 20;
    max-width: 10rem;
    width: 100%;
    height: auto;

    @media ${({ theme }) => theme.mediaQuery.small} {
      top: 54%;
    }

    @media ${({ theme }) => theme.mediaQuery.medium} {
      top: 54%;
    }

    @media ${({ theme }) => theme.mediaQuery.xlarge} {
      max-width: 15rem;
    }
  }
`

const VennContent = styled.div`
  z-index: 15;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  max-width: 20rem;
  width: 100%;
  top: 0;
  bottom: 0;

  @media ${({ theme }) => theme.mediaQuery.small} {
    max-width: 15rem;
  }

  @media ${({ theme }) => theme.mediaQuery.medium} {
    max-width: 20rem;
  }
  
  &.left {
    left: 50%;
    transform: translateX(-50%);
    top: -3rem;

    @media ${({ theme }) => theme.mediaQuery.small} {
      left: 40%;
      top: 0;
    }
  }

  &.right {
    left: 50%;
    transform: translateX(-50%);
    top: 3rem;

    @media ${({ theme }) => theme.mediaQuery.small} {
      left: 60%;
      top: 0;
    }
  }
`

const LightSide = styled.div`
  position: relative;
  z-index: 10;

  img.icon {
    height: 100%;
    width: auto;
    margin-bottom: 1rem;
  }

  .inner {
    p {
      opacity: 0.5;
    }
  }

  .venn-circle {
    width: 140%;
    height: auto;
    mix-blend-mode: screen;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    max-width: 40rem;

    @media ${({ theme }) => theme.mediaQuery.medium} {
      max-width: none;
    }
  }
`

const DarkSide = styled.div`
  position: relative;
  top: -20%;

  @media ${({ theme }) => theme.mediaQuery.small} {
    top: 10%;
  }

  img.icon {
    height: 100%;
    width: auto;
    margin-bottom: 1rem;
  }

  .inner {
    color: white;

    p {
      opacity: 0.5;
    }
  }

  .venn-circle {
    width: 140%;
    height: auto;
    mix-blend-mode: multiply;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    max-width: 40rem;

    @media ${({ theme }) => theme.mediaQuery.medium} {
      max-width: none;
    }
  }
`

const Block = styled.div`
  padding: 2rem; 
  background: #F2F2F2;
  border-radius: 2rem;
  min-height: 20rem;
  min-width: 20rem;

  @media ${({ theme }) => theme.mediaQuery.medium} {
    min-width: auto;
  }

  .flex-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .flex-item {
      img {
        height: 4rem;
        width: auto;
      }

      p {
        opacity: 0.5;
      }

    }
  }
`

const TileBlock = styled(Link)`
  text-decoration: none;
`

const Tile = styled.div`

  ${({ background }) => background && `background: url(${background});` }
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  position: relative;
  border-radius: 2rem;
  padding-top: 80%;
  overflow: hidden;

  @media ${({ theme }) => theme.mediaQuery.small} {
    padding-top: 135%;
  }

  &:hover {
    .content {
      background: rgba(0, 0, 0, 0.3);
    }
  }

  .content {
    background: rgba(0, 0, 0, 0);
    transition: all 0.2s ease;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: flex-end;
    padding: 2rem;

    .inner {
      display: flex;
      align-items: center;
    }

    h2 {
      color: white;
      text-decoration: none;
      
      & + img {
        margin-left: 0.5rem;
        width: 2rem;
      }
    }
  }
`

const Logos = styled.ul`
  list-style: none;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: nowrap;
  animation: marquee 40s linear infinite;

  @media ${({ theme }) => theme.mediaQuery.medium} {
    animation none;
    justify-content: center;
    flex-wrap: wrap;
  }

  &:hover {
    animation-play-state: paused;
  }
  
  li {
    display: inline-block;
    width: 7rem;
    height: 5rem;
    padding: 0.5rem;
    
    &.filler {
      height: 0;
      display: none;

      @media ${({ theme }) => theme.mediaQuery.medium} {
        display: inline-block;
      }
    }

    &.mobile-only {
      @media ${({ theme }) => theme.mediaQuery.medium} {
        display: none;
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`

const FirstCircle = styled(Circle)`
  display: none;

  @media ${({ theme }) => theme.mediaQuery.medium} {
    display: block;
  }
`

export default Home;