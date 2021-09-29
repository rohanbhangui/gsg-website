import { useEffect, useRef } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

import { XLG, XXL, LG } from "../../utils/variables";

import Logo from "../../assets/img/gsg-logo.svg";

//createing possibilities tri panel
import CreatingValue from "../../assets/img/creating-value.svg";
import FosteringGrowth from "../../assets/img/fostering-growth.svg";
import UntapPotential from "../../assets/img/untap-potential.svg";

//project-tiles
import InvestmentTile from "../../assets/img/investment-tile.png";
import IncubationTile from "../../assets/img/incubation-tile.png";
import ArrowGo from "../../assets/img/arrow-go.svg";

//trusted by
import BeatsLogo from "../../assets/img/beats-logo.png"
import NikeLogo from "../../assets/img/nike-logo.png"
import PostmatesLogo from "../../assets/img/postmates-logo.png"
import NBALogo from "../../assets/img/nba-logo.png"
import FootLockerLogo from "../../assets/img/footlocker-logo.png"
import WWELogo from "../../assets/img/wwe-logo.png"
import CirocLogo from "../../assets/img/ciroc-logo.png"
import FashionnovaLogo from "../../assets/img/fashionnova-logo.png"
import BoxyCharmLogo from "../../assets/img/boxy-charm-logo.png"
import MisguidedLogo from "../../assets/img/misguided-logo.svg"

import Button from "../../components/button";
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
  NikeLogo,
  BoxyCharmLogo,
  NBALogo,
  PostmatesLogo,
  FootLockerLogo,
  WWELogo,
  MisguidedLogo,
  CirocLogo,
  BeatsLogo,
  FashionnovaLogo
]

const Home = () => {
  const location = useLocation();

  const vennDiagramRef = useRef(null);
  const vennDigramAnimationMarker = useRef(null);

  const scrollBackground = (e) => {
    const html = document.querySelector(".background");
    let offset = 20*window.scrollY/html.offsetHeight*0.66;
    if(offset < 0) offset = 0;

    html.style.setProperty('--background-position', `-${offset}vh`);
  }

  // for allowing the venn diagram entrance
  const vennDiagramEntrance = (e) => {
    
    const transitionMarker = vennDigramAnimationMarker && vennDigramAnimationMarker.current;
    const transitionMarkerBounds = transitionMarker?.getBoundingClientRect();

    const element = vennDiagramRef && vennDiagramRef.current;

    if(transitionMarkerBounds && window.innerHeight*2/3 >= transitionMarkerBounds.y) {
      if(!element.querySelector(".logo").classList.contains("active")) {
        element.querySelector(".logo").classList.add("active");
      }
      
      [...element.querySelectorAll(".venn-circle")].map(item => {
        if(!item.classList.contains("active")) {
          item.classList.add("active");
        }

        return item;
      });

      [...element.querySelectorAll(".inner")].map(item => {
        if(!item.classList.contains("active")) {
          item.classList.add("active");
        }

        return item;
      });
    }
  }

  const scroll = (e) => {
    scrollBackground(e);
    vennDiagramEntrance(e);
  }

  useEffect(() => {
    window.addEventListener('scroll', scroll);

    const html = document.querySelector(".background");
    html.style.setProperty('--background-position', `0vh`);

    //remove overflow hidden
    document.querySelector("main").classList.remove("overflow-open");

    console.log(location)

    return () => {
      window.removeEventListener('scroll', scroll);
    }
    

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            </div>
          </Row>
          <Row className="hero-section-img">
            <Hero src={Logo} alt="" />
          </Row>
        </Grid>
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
        <Grid xs={1} sm={2} className="project-tiles">
          <TileBlock to="/incubated-properties">
            <Tile background={IncubationTile}>
              <div className="content">
                <div className="inner">
                  <h2>Incubated Properties</h2><img src={ArrowGo} alt="" />
                </div>
              </div>
            </Tile>
          </TileBlock>
          <Row className="content-column">
            <div className="inner">
              <h2 className="h1">Incubated Properties</h2>
              <p className="h3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </Row>
        </Grid>
        <Grid xs={1} sm={2} className="project-tiles second-group">
          <TileBlock to="/investments" className="image-column">
            <Tile background={InvestmentTile}>
              <div className="content">
                <div className="inner">
                  <h2>Investments</h2><img src={ArrowGo} alt="" />
                </div>
              </div>
            </Tile>
          </TileBlock>
          <Row className="content-column">
            <div className="inner">
              <h2 className="h1">Early Stage Value Investing</h2>
              <p className="h3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </Row>
        </Grid>
      </Container>
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
    margin-top: 5rem;
    max-width: ${XXL}px;

    h1 {
      text-align: center;
      color: white;
    }
  }

  &.trusted-by {
    max-width: none;
    margin-top: 0rem;

    @media ${({ theme }) => theme.mediaQuery.medium} {
      max-width: ${LG}px;
      margin-top: 4rem;
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

    > div {
      width: 100%;
      text-align: center;
      margin-left: auto;

      @media ${({ theme }) => theme.mediaQuery.medium} {
        width: 80%;
        text-align: left;
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

  &.project-tiles.second-group {
    .image-column {
      order: 1;

      @media ${({ theme }) => theme.mediaQuery.medium} {
        order: 2;
      }
    }

    .content-column {
      order: 2;

      @media ${({ theme }) => theme.mediaQuery.medium} {
        order: 1;
      }
    }
  }

  &.project-tiles {
    .content-column {
      display: flex;
      align-items: center;
      justify-content: center;

      .inner {
        max-width: 23rem;
      }
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
  width: 100%;
  height: auto;
  display: block;
  position: relative;
  z-index: 0;

  @media ${({ theme }) => theme.mediaQuery.small} {
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
    transition: opacity 1s cubic-bezier(.77, 0, .175, 1),transform 1s cubic-bezier(.77, 0, .175, 1);

    opacity: 0;
    top: 0;

    &.active {
      top: 45%;
      opacity: 1;

      @media ${({ theme }) => theme.mediaQuery.small} {
        top: 54%;
      }
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

  @media ${({ theme }) => theme.mediaQuery.large} {
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
    max-height: 5rem;

    @media ${({ theme }) => theme.mediaQuery.large} {
      max-height: none;
    }
  }

  .inner {
    transition: opacity 1s 0.8s cubic-bezier(.77, 0, .175, 1),transform 1s 0.8s cubic-bezier(.77, 0, .175, 1);
    opacity: 0;
    transform: translateY(3rem);

    &.active {
      opacity: 1;
      transform: translateY(0rem);
    }

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
    transform: translateX(-100%);
    max-width: 40rem;
    opacity: 0;
    transition: opacity 1s 0.3s cubic-bezier(.77, 0, .175, 1),transform 1s 0.3s cubic-bezier(.77, 0, .175, 1);

    @media ${({ theme }) => theme.mediaQuery.medium} {
      max-width: none;
    }

    &.active {
      transform: translateX(-50%);
      opacity: 1;
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
    max-height: 5rem;

    @media ${({ theme }) => theme.mediaQuery.large} {
      max-height: none;
    }
  }

  .inner {
    color: white;
    transition: opacity 1s 1.1s cubic-bezier(.77, 0, .175, 1),transform 1s 1.1s cubic-bezier(.77, 0, .175, 1);
    opacity: 0;
    transform: translateY(3rem);

    &.active {
      opacity: 1;
      transform: translateY(0rem);
    }

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
    transform: translateX(0%);
    max-width: 40rem;
    opacity: 0;
    transition: opacity 1s 0.6s cubic-bezier(.77, 0, .175, 1),transform 1s 0.6s cubic-bezier(.77, 0, .175, 1);

    @media ${({ theme }) => theme.mediaQuery.medium} {
      max-width: none;
    }

    &.active {
      transform: translateX(-50%);
      opacity: 1;
    }
  }
`

const Block = styled.div`
  padding: 2rem; 
  background: #F2F2F2;
  border-radius: 2rem;
  // min-height: 20rem;
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

      // &:first-child {
      //   flex: 1 0 auto;
      //   height: 100%;
      //   max-height: 4rem;
      // }

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
    padding-top: min(60vh, 135%);
  }

  @media ${({ theme }) => theme.mediaQuery.large} {
    padding-top: min(90vh, 100%);
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