import { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { useInView } from 'react-intersection-observer';

import { XLG, XXL, LG } from "../../utils/variables";
import usePrevious from "../../utils/hooks/usePrevious"

import Logo from "../../assets/img/gsg-logo.svg";

//createing possibilities tri panel
import CreatingValue from "../../assets/img/creating-value.svg";
import FosteringGrowth from "../../assets/img/fostering-growth.svg";
import UntapPotential from "../../assets/img/untap-potential.svg";

//project-tiles
import InvestmentTile from "../../assets/img/koia-masterImage.png";
import IncubationTile from "../../assets/img/tcl-masterImage.png";
import ArrowGo from "../../assets/img/arrow-go.svg";

//trusted by
import BeatsLogo from "../../assets/img/beats-logo.png";
import NikeLogo from "../../assets/img/nike-logo.png";
import PostmatesLogo from "../../assets/img/postmates-logo.png";
import NBALogo from "../../assets/img/nba-logo.png";
import FootLockerLogo from "../../assets/img/footlocker-logo.png";
import WWELogo from "../../assets/img/wwe-logo.png";
import CirocLogo from "../../assets/img/ciroc-logo.png";
import FashionnovaLogo from "../../assets/img/fashionnova-logo.png";
import BoxyCharmLogo from "../../assets/img/boxy-charm-logo.png";
import MisguidedLogo from "../../assets/img/misguided-logo.svg";

import { Grid as _Grid } from "../../assets/styles/grid";

const possibilities_blocks = [
  {
    img: UntapPotential,
    title: "Untapping Potential",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    img: CreatingValue,
    title: "Creating Value",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    img: FosteringGrowth,
    title: "Fostering Growth",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

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
  FashionnovaLogo,
];

const Home = () => {

  // for the project tiles
  const { ref: projectsRef, inView: projectsInView, entry: projectsEntry } = useInView({
    /* Optional options */
    threshold: 0.2,
  });

  //prevent misfire at beginning, by making sure the previous entry is not undefined
  const prevProjectsEntry = usePrevious(projectsEntry);

  //projects come into view
  useEffect(() => {
    if(projectsInView && prevProjectsEntry && projectsRef) {
      projectsEntry.target.querySelectorAll(':scope > a').forEach((val, ind, arr) => {
        setTimeout(() => {
          val.classList.add("active");
        }, ind*100)
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectsInView])


  useEffect(() => {

    //remove overflow hidden
    document.querySelector("main").classList.remove("overflow-open");

    document.querySelector(".hero-logo").classList.add("active");
    
    setTimeout(() => {
      document.querySelector(".hero-section-text h1").classList.add("active");
      
      setTimeout(() => {
        document.querySelector(".hero-section-text .hero-section-text-content").classList.add("active");
      }, 250);
    }, 500);

    return () => {
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container>
        <Grid>
          <Row className="hero-section-img">
            <Hero className="hero-logo" src={Logo} alt="" />
          </Row>
        </Grid>
        <Grid xs={1} sm={1}>
          <Row className="hero-section-text">
            <Grid xs={1} md={2}>
              <h1>A culture focused venture studio for a social world.</h1>
              <Content className="hero-section-text-content">
                <p className="h3">
                  We have the ability to see patterns, develop new solutions and
                  build new paradigms that allow us to turn ideas and
                  partnerships into reality.
                </p>
                <p className="h3">
                  Our goal is to generate long term value for brands and
                  investors by investing in and adding value to early as well as
                  growth stage CPG, Lifestyle &amp; Tech companies.
                </p>
              </Content>
            </Grid>
          </Row>
        </Grid>
      </Container>
      <Container className="projects">
        <Grid xs={1} sm={2} className="project-tiles" ref={projectsRef}>
          <TileBlock to="/properties">
            <Tile background={IncubationTile}>
              <div className="content">
                <div className="inner">
                  <h2>Properties</h2>
                  <img src={ArrowGo} alt="" />
                </div>
              </div>
            </Tile>
          </TileBlock>
          <TileBlock to="/investments">
            <Tile background={InvestmentTile}>
              <div className="content">
                <div className="inner">
                  <h2>Investments</h2>
                  <img src={ArrowGo} alt="" />
                </div>
              </div>
            </Tile>
          </TileBlock>
        </Grid>
      </Container>
      <Container className="creating-possibilities">
        <Grid xs={1} className="intro-content">
          <h1>Creating Possibilities</h1>
          <p className="h3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Grid>
        <Grid xs={3} className="tri-blocks">
          {possibilities_blocks.map((item) => (
            <Block key={uuid()}>
              <div className="flex-container">
                <div className="flex-item">
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </div>
              </div>
            </Block>
          ))}
        </Grid>
      </Container>
      <Container className="trusted-by">
        <h2>Trusted By</h2>
        <Logos>
          {[...trusted_by].map((item) => (
            <li key={uuid()}>
              <img src={item} alt="" />
            </li>
          ))}
          {[...trusted_by, ...trusted_by, ...trusted_by].map((item) => (
            <li className="mobile-only" key={uuid()}>
              <img src={item} alt="" />
            </li>
          ))}
        </Logos>
      </Container>
    </>
  );
};

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

      > p {
        color: #3c3c3c;
      }

      > h1,
      > p {
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
    }
  }
`;

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

  &.tri-blocks,
  &.project-tiles {
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

      @media ${({ theme }) => theme.mediaQuery.medium} {
        justify-content: center;
      }

      .inner {
        margin-top: 2rem;
        padding-left: 2rem;

        @media ${({ theme }) => theme.mediaQuery.medium} {
          // max-width: 25rem;
          padding: 0 4rem;
        }
      }
    }
  }
`;

const Row = styled.div`
  position: relative;

  .text-wrapper {
    width: 100%;

    @media ${({ theme }) => theme.mediaQuery.small} {
      width: 80%;
    }
  }

  &.hero-section-text {
    order: 2;

    @media ${({ theme }) => theme.mediaQuery.small} {
      order: 1;
    }

    h1 {
      opacity: 0;
      transform: translateY(5rem);
      transition: opacity 1s cubic-bezier(0.77, 0, 0.175, 1),
        transform 1s 0.1s cubic-bezier(0.77, 0, 0.175, 1);

      &.active {
        opacity: 1;
        transform: translateY(0);
      }

      @media ${({ theme }) => theme.mediaQuery.medium} {
        text-align: right;
      }
      
    }

    .hero-section-text-content {
      opacity: 0;
      transform: translateY(5rem);
      transition: opacity 1s cubic-bezier(0.77, 0, 0.175, 1),
        transform 1s 0.1s cubic-bezier(0.77, 0, 0.175, 1);

      &.active {
        opacity: 1;
        transform: translateY(0);
      }

      p.h3 {
        &:first-child {
          @media ${({ theme }) => theme.mediaQuery.small} {
            margin-top: 0;
          }
        }
      }
    }
  }

  &.hero-section-img {
    order: 1;

    @media ${({ theme }) => theme.mediaQuery.small} {
      order: 2;
      margin-bottom: 4rem;
    }

    @media ${({ theme }) => theme.mediaQuery.large} {
      order: 2;
    }
  }
`;

const Content = styled.div`

  h1 {
    white-space: pre-line;
  }
`;

const Hero = styled.img`
  width: 100%;
  max-width: 40rem;
  height: auto;
  display: block;
  position: relative;
  z-index: 0;
  opacity: 0;
  transform: translateY(5rem);
  transition: opacity 1s cubic-bezier(0.77, 0, 0.175, 1),
    transform 1s 0.1s cubic-bezier(0.77, 0, 0.175, 1);

  &.active {
    opacity: 1;
    transform: translateY(0);
  }

  @media ${({ theme }) => theme.mediaQuery.small} {
    left: auto;
    z-index: 0;
    margin: 0 auto;
  }
`;

const Block = styled.div`
  padding: 2rem;
  background: #fff;
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
      img {
        height: 4rem;
        width: auto;
      }

      p {
        opacity: 0.5;
      }
    }
  }
`;

const TileBlock = styled(Link)`
  text-decoration: none;

  opacity: 0;
  transform: translateY(5rem);
  transition: opacity 1s cubic-bezier(0.77, 0, 0.175, 1),
    transform 1s 0.1s cubic-bezier(0.77, 0, 0.175, 1);

  &.active {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Tile = styled.div`
  ${({ background }) => background && `background: linear-gradient(to bottom, rgba(0, 0, 0, 0.33), rgba(0, 0, 0, 0.33)), url(${background});`}
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
    padding-top: min(90vh, 120%);
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
`;

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
      filter: grayscale(1);
      opacity: 0.75;
    }
  }
`;

export default Home;
