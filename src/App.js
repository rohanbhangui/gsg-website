import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import styled from "styled-components";

import GlobalStyle from "./assets/styles/globalStyles";

import Home from "./pages/home";
import Contact from "./pages/contact";
import Incubation from "./pages/incubation";
import Investments from "./pages/investments";

import Header from "./components/header";
import Footer from "./components/footer";
import ScrollToTop from "./components/scrollToTop";

import Speckles from "./assets/img/speckles.png";

const App = () => {
  
  return (
    <>
      <Background className="background" src={Speckles} />
      <Main>
        <GlobalStyle />
        <Router>
          <ScrollToTop />
          <Header />
          <Switch>
            <Route path="/incubated-properties">
              <Incubation />
            </Route>
            <Route path="/investments">
              <Investments />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </Main>
    </>
  );
}

const Main = styled.main`
  overflow-x: hidden;
  // transform: translateZ(100px);

  &.overflow-open {
    overflow-x: visible;
  }
`

const Background = styled.img`
  position: fixed;
  top: var(--background-position);
  left: 0;
  right: 0;
  height: 150vh;
  width: 100%;
  object-fit: cover;
  z-index: unset;
  transform: translateZ(-200px);
`

export default App;
