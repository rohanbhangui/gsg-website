import styled from "styled-components";
import { Link } from "react-router-dom";

import { XLG } from "../../utils/variables";

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

import Button from "../../components/button";
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

const Home = () => {
  return (
    <>
      <Container>
        <Grid xs={1} sm={2}>
          <Row>
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
          <Row>
            <Hero src={HeroImage} alt="" />
          </Row>
        </Grid>
        <Grid xs={2} className="section-2">
          <Row></Row>
          <Row>
              <h1>Finding Potential.</h1>
              <h1>Generating Value.</h1>
              <Content>
                <p className="h3">We like to capitalize where potential is untapped. We generate value by focusing on the intersection of brand incubation and early stage value investing.</p>
              </Content>
          </Row>
        </Grid>
      </Container>
      <VennDiagram>
        <img className="logo" src={Logo} alt="" />
        <Grid xs={3} sm={2}>
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
        <h1>
          Creating
          Possibilities
        </h1>
        <p className="h3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

        <Grid xs={1} md={3} className="tri-blocks">
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
      </Container>
      <Container className="projects">
        <h1>Explore Our Projects</h1>
        <Grid xs={2} className="project-tiles">
          <TileBlock to="/investments">
            <Tile background={InvestmentTile}>
              <div className="content">
                <h2>Investments</h2><img src={ArrowGo} alt="" />
              </div>
            </Tile>
          </TileBlock>
          <TileBlock to="/incubated-properties">
            <Tile background={IncubationTile}>
              <div className="content">
                <h2>Incubated Properties</h2><img src={ArrowGo} alt="" />
              </div>
            </Tile>
          </TileBlock>
        </Grid>
      </Container>
    </>
  )
}

const Container = styled.section`
  max-width: ${XLG}px;
  width: 100%;
  margin: 4rem auto 0;
  padding: 1rem;

  &.creating-possibilities {
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

  &.projects {
    h1 {
      text-align: center;
      color: white;
    }
  }
`

const Grid = styled(_Grid)`
  &.section-2 {
    justify-content: flex-end;
    
    h1 {
      color: #3c3c3c;
    }

    p {
      color: white;
    }
  }

  &.tri-blocks, &.project-tiles {
    grid-gap: 0.6rem;
    margin-top: 3rem;
  }
`

const Row = styled.div`
  position: relative;

  .text-wrapper {
    width: 80%;
  }
`

const Content = styled.div`
  margin-top: 2rem;

  h1 {
    white-space: pre-line;
  }
`

const Hero = styled.img`
  width: 200%;
  height: auto;
  display: block;
  position: relative;
  left: 0;
  top: 30%;
  transform: translateY(-50%);
`

const VennDiagram = styled.div`
  max-width: 100rem;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 8rem;
  position: relative;

  .logo {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 20;
    max-width: 15rem;
    width: 100%;
    height: auto;

    @media ${({ theme }) => theme.mediaQuery.xlarge} {
      max-width: 10rem;
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
  
  &.left {
    left: 40%;
    transform: translateX(-50%);
  }

  &.right {
    left: 60%;
    transform: translateX(-50%);
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
  }
`

const DarkSide = styled.div`
  position: relative;
  top: 10%;

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
  }
`

const Block = styled.div`
  padding: 2rem; 
  background: #F2F2F2;
  border-radius: 2rem;
  min-height: 20rem;

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
  padding-top: 150%;
  overflow: hidden;

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

    h2 {
      color: white;
      text-decoration: none;
      
      & + img {
        margin-left: 0.5rem;
      }
    }
  }
`

export default Home;