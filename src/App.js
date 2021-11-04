import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import GlobalStyle from "./assets/styles/globalStyles";

import Home from "./pages/home";
import Incubation from "./pages/incubation";
import Investments from "./pages/investments";

import Header from "./components/header";
import Footer from "./components/footer";
import ScrollToTop from "./components/scrollToTop";

const App = () => {
  return (
    <>
      <Main>
        <GlobalStyle />
        <Router>
          <ScrollToTop />
          <Header />
          <Switch>
            <Route path="/properties">
              <Incubation />
            </Route>
            <Route path="/investments">
              <Investments />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
          <Footer id="contact" />
        </Router>
      </Main>
    </>
  );
};

const Main = styled.main`
  overflow-x: hidden;
  // transform: translateZ(100px);

  &.overflow-open {
    overflow-x: visible;
  }
`;

export default App;
