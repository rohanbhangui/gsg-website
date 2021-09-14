import styled from "styled-components";
import { XLG } from "../../utils/variables";

import HeroImage from "../../assets/img/hero-image.svg";

import Button from "../../components/header/button";

const Home = () => {
  return (
    <Container>
      <Grid>
        <Row>
          <div className="text-wrapper">
            <h1>
              A culture focused
              venture studio
              for a social world.
            </h1>
            <Content>
              <p>We have the ability to see patterns, develop new solutions and build new paradigms that allow us to turn ideas and partnerships into reality.</p>
              <p>Our goal is to generate long term value for brands and investors by investing in and adding value to early as well as growth stage CPG, Lifestyle &amp; Tech companies.</p>
            </Content>
            <Button linkto="/contact" label="Contact Us" />
          </div>
        </Row>
        <Row>
          <Hero src={HeroImage} alt="" />
        </Row>
      </Grid>
    </Container>
  )
}

const Container = styled.section`
  max-width: ${XLG}px;
  width: 100%;
  margin: 4rem auto;
  padding: 1rem;
`

const Grid = styled.div`
  display: grid;
  grid-gap: 0.1rem;
  grid-template-columns: repeat(2, 1fr);
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
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
`

export default Home;