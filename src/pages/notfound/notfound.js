import styled from "styled-components";

import { Grid as _Grid } from "../../assets/styles/grid";
import { MD, XLG } from "../../utils/variables";

import { HeaderHeight } from "../../components/header";
import Circle from "../../components/circles";
import _Button from "../../components/button";

const NotFound = () => {

  return (
    <Wrapper>
      <Container>
        <Grid xs={1}>
          <Grid xs={1}>
            <h1>Whoops!</h1>
            <h3>Looks like what you were looking for isn't here!</h3>
          </Grid>
          <Grid xs={1} md={1}>
            <Row>
              <Button linkto="/" label="Back to Home" />
            </Row>
          </Grid>
        </Grid>
        <Circle
          color="#fafafa"
          opacity={0.8}
          size={10}
          blend="multiply"
          y={{
            direction: "top",
            dimension: "45%",
          }}
          x={{
            direction: "left",
            dimension: "10%",
          }}
        />
        <Circle
          color="#bababa"
          blend="lighten"
          opacity={0.66}
          size={40}
          x={{
            direction: "left",
            dimension: "110%",
          }}
          y={{
            direction: "top",
            dimension: "90%",
          }}
        />
        <SecondCircle
          color="#000000"
          opacity={0.66}
          size={30}
          blend="lighten"
          y={{
            direction: "top",
            dimension: "25%",
          }}
          x={{
            direction: "left",
            dimension: "85%",
          }}
        />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow: hidden;
  margin-top: calc(-${HeaderHeight} - 1rem);

  @media ${({ theme }) => theme.mediaQuery.medium} {
    margin-top: -${HeaderHeight};
  }
`;

const Container = styled.div`
  max-width: ${XLG}px;
  width: 100%;
  margin: ${HeaderHeight} auto 0;
  min-height: calc(100vh - ${HeaderHeight});
  position: relative;
  font-size: 1.4rem;

  @media ${({ theme }) => theme.mediaQuery.medium} {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh);
    margin-top: 0;
  }
`;

const Grid = styled(_Grid)`
  align-items: center;
  z-index: 10;

  h1 {
    max-width: ${MD}px;
    width: 100%;
    margin: 2rem auto 0rem;
    text-align: center;
    padding: 0 0.5rem;

    @media ${({ theme }) => theme.mediaQuery.medium} {
      margin-top: 0;
    }
  }

  h3 {
    text-align: center;
  }
`;

const Row = styled.div`
  padding-top: 1rem;
  text-align: center;

  @media ${({ theme }) => theme.mediaQuery.medium} {
    padding-top: 0rem;
  }

  h2 {
    text-align: center;
    font-size: 2rem;

    @media ${({ theme }) => theme.mediaQuery.medium} {
      font-size: 1.5rem;
    }
  }
`;

const SecondCircle = styled(Circle)`
  opacity: 0.5;
  height: 20rem;
  width: 20rem;
  top: 0;

  @media ${({ theme }) => theme.mediaQuery.medium} {
    opacity: 0.66;
    width: 40rem;
    height: 40rem;
    top: 5%;
  }
`;

const Button = styled(_Button)`
  margin-top: 2rem;
`

export default NotFound;
