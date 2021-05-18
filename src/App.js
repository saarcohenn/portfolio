import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import styled from "styled-components";

// Components
import About from "./components/About";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import GlobalStyle from "./components/GlobalStyle";

function App() {
  const location = useLocation();
  return (
    <Main>
      <GlobalStyle />
      <Nav />

      <Switch location={location} key={location.pathname}>
        <Route exact path="/portfolio/">
          <About />
          <Skills />
          <Projects />
          <Footer />
        </Route>
      </Switch>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

export default App;
