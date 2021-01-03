import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import {Box, Theme, ThemeProvider, useMediaQuery, useTheme} from "@material-ui/core";
import { theme } from "./theme";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Careers } from "./pages/Careers";
import { routes } from "./constants/routes";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import "./App.css";
import {Contact} from "./pages/Contact";
import {HeaderMobile} from "./components/HeaderMobile";

const App: React.FC = () => {

  const theme: Theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('lg'));

  if (desktop) {
    return (
      <ThemeProvider theme={theme}>
        <Box bgcolor="primary.main" width="100%" minHeight='100vh'>
          <HashRouter>
            <Header/>
            <Switch>
              <Route path={routes.home.path} exact>
                <Home onClick={() => console.log("hey")}/>
              </Route>
              <Route path={routes.about.path}>
                <About/>
              </Route>
              <Route path={routes.careers.path}>
                <Careers/>
              </Route>
              <Route path={routes.contact.path}>
                <Contact/>
              </Route>
            </Switch>
            <Footer/>
          </HashRouter>
        </Box>
      </ThemeProvider>
    );
  } else {
    return (
      <ThemeProvider theme={theme}>
        <Box bgcolor="primary.main" width="100%" minHeight='100vh'>
          <HashRouter>
            <HeaderMobile/>
            <Switch>
              <Route path={routes.home.path} exact>
                <Home onClick={() => console.log("hey")}/>
              </Route>
              <Route path={routes.about.path}>
                <About/>
              </Route>
              <Route path={routes.careers.path}>
                <Careers/>
              </Route>
              <Route path={routes.contact.path}>
                <Contact/>
              </Route>
            </Switch>
            <Footer/>
          </HashRouter>
        </Box>
      </ThemeProvider>
    );
  }
};

export default App;
