import { useEffect, useState} from "react";
import styled, { css, keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { useInView } from 'react-intersection-observer';

import { XLG, XXL, LG } from "../../utils/variables";
import usePrevious from "../../utils/hooks/usePrevious"

import Logo from "../../assets/img/gsg-logo.svg";
import LogoMini from "../../assets/img/gsg-logo-logomark.svg";

//project-tiles
import InvestmentTile from "../../assets/img/investments-tile-2.png";
import IncubationTile from "../../assets/img/tcl-masterImage.png";
import ArrowGo from "../../assets/img/arrow-go.svg";

//venn diagram
import DarkCircle from "../../assets/img/dark-circle.svg";
import LightCircle from "../../assets/img/light-circle.svg";

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

const trusted_by_images = [
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

const calcRandom = () => {
  //between 3 -> 7
  return Math.floor(Math.random() * 2) + 4;
}

const floatingAnimation = () => {
  return keyframes`
    0% { transform: translateX(-50%) translateY(-50%) }
    16% { transform: translateX(-${calcRandom()*10}%) translateY(-${calcRandom()*10}%) }
    33% { transform: translateX(-${calcRandom()*10}%) translateY(-${calcRandom()*10}%) }
    49% { transform: translateX(-${calcRandom()*10}%) translateY(-${calcRandom()*10}%) }
    66% { transform: translateX(-${calcRandom()*10}%) translateY(-${calcRandom()*10}%) }
    75% { transform: translateX(-${calcRandom()*10}%) translateY(-${calcRandom()*10}%) }
    87% { transform: translateX(-${calcRandom()*10}%) translateY(-${calcRandom()*10}%) }
    100% { transform: translateX(-50%) translateY(-50%) }
  `
}

const leftContent = [
  {
    id: uuid(),
    label: "Celebrity & Influencer Access",
    animation: floatingAnimation(),
    left: "50%",
    top: "70%",
    desktop: {
      left: "60%",
      top: "80%"
    }
  },
  {
    id: uuid(),
    label: "Strategic Partnerships",
    animation: floatingAnimation(),
    left: "60%",
    top: "30%",
    desktop: {
      left: "70%",
      top: "20%"
    }
  },
  {
    id: uuid(),
    label: "EQ (Network & resources)",
    animation: floatingAnimation(),
    left: "25%",
    top: "49%",
    desktop: {
      left: "25%",
      top: "49%"
    }
  },
  {
    id: uuid(),
    label: "Guidance",
    animation: floatingAnimation(),
    left: "85%",
    top: "49%",
    desktop: {
      left: "85%",
      top: "59%"
    }
  },
  {
    id: uuid(),
    label: "Expertise",
    animation: floatingAnimation(),
    left: "20%",
    top: "30%",
    desktop: {
      left: "20%",
      top: "30%"
    }
  }
]

const rightContent = [
  {
    id: uuid(),
    label: "Distribution Partnerships",
    animation: floatingAnimation(),
    left: "25%",
    top: "30%",
    desktop: {
      left: "25%",
      top: "20%"
    }
  },
  {
    id: uuid(),
    label: "Integrated Campaigns",
    animation: floatingAnimation(),
    left: "60%",
    top: "47%",
    desktop: {
      left: "30%",
      top: "70%",
    }
  },
  {
    id: uuid(),
    label: "Investments",
    animation: floatingAnimation(),
    left: "25%",
    top: "55%",
    desktop: {
      left: "25%",
      top: "40%",
    }
  },
  {
    id: uuid(),
    label: "Culture",
    animation: floatingAnimation(),
    left: "85%",
    top: "32%",
    desktop: {
      left: "85%",
      top: "32%",
    }
  },
  {
    id: uuid(),
    label: "Community",
    animation: floatingAnimation(),
    left: "60%",
    top: "70%",
    desktop: {
      left: "70%",
      top: "55%",
    }
  }
]

const Home = () => {

  const [ trustedBy, setTrustedBy ] = useState([])

  // for the venn diagram
  const { ref: vennDiagramRef, inView: vennDiagramInView, entry: vennDiagramEntry } = useInView({
    /* Optional options */
    threshold: 0.2,
    rootMargin: '-100px 0px',
  });

  // for the project tiles
  const { ref: projectsRef, inView: projectsInView, entry: projectsEntry } = useInView({
    /* Optional options */
    threshold: 0.2,
    rootMargin: '-100px 0px',
  });

  //prevent misfire at beginning, by making sure the previous entry is not undefined
  const prevProjectsEntry = usePrevious(projectsEntry);
  // const prevVennDiagramEntry = usePrevious(vennDiagramEntry);

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
  }, [projectsEntry])

  //venn diagram comes into view
  useEffect(() => {
    if(vennDiagramInView && vennDiagramRef) {
      vennDiagramEntry.target.querySelector(":scope .logo").classList.add("active");

      vennDiagramEntry.target.querySelectorAll('.venn-circle').forEach((val, ind, arr) => {
        val.classList.add("active");
      });

      vennDiagramEntry.target.querySelectorAll('.inner p').forEach((val, ind, arr) => {
        
        setTimeout(() => {
          val.classList.add("active");
        }, ind*100)
      });

      setTimeout(() => {
        vennDiagramEntry.target.querySelectorAll('.inner p.active').forEach((val, ind, arr) => {
          val.classList.add("animate");
        });
      }, 2000);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vennDiagramEntry])


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

    //for the trusted by logos

    for(const i of trusted_by_images) {
      const imgObj = new Image();
    
      const img = {}
    
      imgObj.onload = function() {
        img.width = this.width
        img.height = this.height
        img.img = i

        setTrustedBy(prev => {
          return [
            ...prev,
            img
          ]
        })
      }
    
      imgObj.src = i
    }

    return () => {
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container className="intro">
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
                  We have the ability to see patterns, develop solutions and
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
          <h1>What is the Grey Space?</h1>
          <p className="h3">
            /ɡrā/spās/ noun: Grey Space, like whitespace, sits at the intersection of “what exists” and “what can exist”; while whitespace looks solely at untapped opportunity, Grey Space adds color to that opportunity through a unique cultural perspective that marries tried and true marketing principles, talent, and integrated strategy. 
          </p>
        </Grid>
      </Container>
      <VennDiagram ref={vennDiagramRef}>
        <Grid xs={1} sm={2}>
          <img className="logo" src={LogoMini} alt="" />
          <LightSide>
            <VennContent className="left">
              <div className="inner">
                {leftContent.map(({ label, id, animation, left, top, desktop}, index) => (
                  <VennItem key={id} animation={animation} delay={index*250} className="h3" left={left} top={top} desktop={desktop}>
                    {label}
                  </VennItem>
                ))}
              </div>
            </VennContent>
            <img className="venn-circle" src={LightCircle} alt="" />
          </LightSide>
          <DarkSide>
            <VennContent className="right">
              <div className="inner">
                {rightContent.map(({ label, id, animation, left, top, desktop}, index) => (
                  <VennItem key={id} animation={animation} delay={index*250} className="h3" left={left} top={top} desktop={desktop}>
                    {label}
                  </VennItem>
                ))}
              </div>
            </VennContent>
            <img className="venn-circle" src={DarkCircle} alt="" />
          </DarkSide>
        </Grid>
      </VennDiagram>
      <Container className="trusted-by">
        <h2 className="h3">Trusted By</h2>
        <Logos>
          {[...trustedBy, ...trustedBy, ...trustedBy].map((item) => (
            <LogoLi key={uuid()} height={item.height} width={item.width}>
              <img src={item.img} alt="" />
            </LogoLi>
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

  &.intro {
    margin: 1rem auto 4rem;
    
    @media ${({ theme }) => theme.mediaQuery.medium} {
      margin: 1rem auto 4rem;
    }
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
    margin-top: 2rem;
    max-width: ${XXL}px;

    @media ${({ theme }) => theme.mediaQuery.medium} {
      margin-top: 5rem;
    }

    h1 {
      text-align: center;
      color: white;
    }
  }

  &.trusted-by {
    max-width: none;
    margin-top: 0rem;
    position: relative;
    overflow: hidden;

    &:before {
      top: 0;
      left: 0;
      content: '';
      z-index: 10;
      position: absolute;
      width: 4rem;
      height: 100%;
      background: linear-gradient(90deg, rgba(240,240,240,1) 27%, rgba(240,240,240,0) 100%);
    }
  
    &:after {
      top: 0;
      right: 0;
      content: '';
      z-index: 10;
      position: absolute;
      width: 4rem;
      height: 100%;
      background: linear-gradient(270deg, rgba(240,240,240,1) 27%, rgba(240,240,240,0) 100%);
    }

    @media ${({ theme }) => theme.mediaQuery.medium} {
      max-width: ${LG}px;
      margin-top: 4rem;
    }

    h2.h3 {
      text-align: center;
      margin-bottom: 1rem;
      font-weight: bold;
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
  }

  &.tri-blocks {
    overflow: auto;
    margin-top: 4rem;

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
    margin-bottom: 2rem;

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
  background-position: center center;
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

  &:hover {
    animation-play-state: paused;
  }
`;

const LogoLi = styled.li`
  padding: 0rem;
  position: relative;
  display: flex;
  align-items: center;

  img {
    filter: grayscale(1);
    opacity: 0.75;
    height: 4rem;
    width: auto;
    padding: 0.5rem;
    object-fit: contain;

    ${({ height, width }) => height > width && height/width > 2 && `
      height: 3.75rem;
      width: auto;
    `}

    ${({ height, width }) => height < width && `
      height: auto;
      width: 4rem;
    `}

    ${({ height, width }) => height < width && width/height > 2.5 && `
      height: auto;
      width: 4rem;
    `}

    ${({ height, width }) => height < width && width/height > 4 && `
      height: auto;
      width: 5.5rem;
    `}
    
    ${({ height, width }) => height / width <= 1.1 && height / width >= 0.9 && `
      height: 2.75rem;
      width: auto;
    `}
  }
`

const VennDiagram = styled.section`
  max-width: ${XLG}px;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 0rem;
  position: relative;

  @media ${({ theme }) => theme.mediaQuery.small} {
    padding-bottom: 8rem;
  }

  .logo {
    position: absolute;
    left: 50%;
    top: 45%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 20;
    max-width: 7rem;
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
      max-width: 6rem;
    }
  }
`

const VennContent = styled.div`
  z-index: 15;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  max-width: 30rem;
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

    @media ${({ theme }) => theme.mediaQuery.medium} {
      left: 50%;
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

    @media ${({ theme }) => theme.mediaQuery.medium} {
      left: 50%;
      top: 0;
    }
  }
`

const SidesStyles = css`
  .inner {
    opacity: 1;
    transform: translateY(0rem);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    position: relative;
    height: 100%;
    width: 100%;
  }

  .venn-circle {
    width: 110%;
    height: auto;
    position: relative;
    left: 50%;
    max-width: 40rem;
    opacity: 0;

    @media ${({ theme }) => theme.mediaQuery.small} {
      width: 140%;
    }

    @media ${({ theme }) => theme.mediaQuery.medium} {
      width: 110%;
    }

    @media ${({ theme }) => theme.mediaQuery.xlarge} {
      width: 100%;
    }

    &.active {
      opacity: 1;
    }
  }
`

const VennItem = styled.p`
  &.h3 {
    top: ${({ top }) => top};
    left: ${({ left }) => left};
    position: absolute;
    max-width: 10rem;
    font-size: 1.3rem;
    font-weight: 600;
    transition: opacity 1s 0.8s cubic-bezier(.77, 0, .175, 1),transform 1s 0.8s cubic-bezier(.77, 0, .175, 1);

    opacity: 0;
    transform: translateX(-50%) translateY(-120%);

    &.active {
      opacity: 1;
      transform: translateX(-50%) translateY(-50%);
    }

    /* &.active.animate {
      animation-name: ${({ animation }) => animation};
      animation-duration: 20s;
      animation-iteration-count: infinite;
      animation-timing-function: ease-in-out;
      animation-delay: ${({ delay }) => `${delay}ms`};
    } */

    @media ${({ theme }) => theme.mediaQuery.small} {
      font-size: 1.3rem;
      top: ${({ desktop }) => desktop && desktop.top};
      left: ${({ desktop }) => desktop && desktop.left};
    }
  }
`

const LightSide = styled.div`
  position: relative;
  z-index: 10;
  
  @media ${({ theme }) => theme.mediaQuery.small} {
    top: 10%;
  }
  
  ${SidesStyles}

  .inner {
    transition: opacity 1s 0.8s cubic-bezier(.77, 0, .175, 1),transform 1s 0.8s cubic-bezier(.77, 0, .175, 1);
  }

  .venn-circle {
    mix-blend-mode: screen;
    transition: opacity 1s 0.3s cubic-bezier(.77, 0, .175, 1),transform 1s 0.3s cubic-bezier(.77, 0, .175, 1);
    transform: translateX(-100%);

    &.active {
      transform: translateX(-50%);

      @media ${({ theme }) => theme.mediaQuery.small} {
        transform: translateX(-45%);
      }

      @media ${({ theme }) => theme.mediaQuery.medium} {
        transform: translateX(-40%);
      }
    }
  }
`

const DarkSide = styled.div`
  position: relative;
  top: -20%;
  
  @media ${({ theme }) => theme.mediaQuery.small} {
    top: 0%;
  }

  ${SidesStyles}
  
  .inner {
    color: white;
    transition: opacity 1s 1.1s cubic-bezier(.77, 0, .175, 1),transform 1s 1.1s cubic-bezier(.77, 0, .175, 1);
  }

  .venn-circle {
    mix-blend-mode: multiply;
    transition: opacity 1s 0.6s cubic-bezier(.77, 0, .175, 1),transform 1s 0.6s cubic-bezier(.77, 0, .175, 1);
    transform: translateX(0%);

    &.active {
      transform: translateX(-50%);

      @media ${({ theme }) => theme.mediaQuery.small} {
        transform: translateX(-55%);
      }

      @media ${({ theme }) => theme.mediaQuery.medium} {
        transform: translateX(-60%);
      }
    }
  }
`

export default Home;
