import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styled from "styled-components";

import GlobalStyle from "./assets/styles/globalStyles";

import Home from "./pages/home";
import Contact from "./pages/contact";
import Incubation from "./pages/incubation";
import Investments from "./pages/investments";

import Header from "./components/header";

const App = () => {
  return (
    <Main>
      <GlobalStyle />
      <Router>
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
      </Router>
    </Main>
  );
}

const Main = styled.main`
  overflow-x: hidden;
`

export default App;
