import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import {Box, ThemeProvider} from "@material-ui/core";
import { theme } from "./theme";
import { routes } from "./constants/routes";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Careers } from "./pages/Careers";
import {Contact} from "./pages/Contact";
import {Header} from "./components/Header";
import { Footer } from "./components/Footer";
import "./App.css";

const App: React.FC = () => {

  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor="primary.main" width="100%" minHeight='100vh'>
        <HashRouter>
          <Header/>
          <Switch >
            <Route path={routes.home.path} exact>
              <Home onClick={() => console.log("hey")} />
            </Route>
            <Route path={routes.about.path}>
              <About />
            </Route>
            <Route path={routes.careers.path}>
              <Careers />
            </Route>
            <Route path={routes.contact.path}>
              <Contact />
            </Route>
          </Switch>
          <Footer />
        </HashRouter>
      </Box>
    </ThemeProvider>
  );
};

export default App;
