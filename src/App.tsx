import React from "react";
import { Switch, Route } from "react-router-dom";
import {Box, ThemeProvider} from "@material-ui/core";
import { theme } from "./theme";
import { routes, Route as RouteItem } from "./constants/routes";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Careers } from "./pages/Careers";
import {Contact} from "./pages/Contact";
import {Header} from "./components/Header";
import { Footer } from "./components/Footer";
import "./App.css";
import {CookieConsentPrompt} from "./components/CookieConsentPrompt";
import Scrollbar from "react-scrollbars-custom";
import { useLocation } from 'react-router-dom';

const App: React.FC = () => {

  const location = useLocation();
  const isLocation = (route: Readonly<RouteItem>) => { return location.pathname === route.path; }

  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor="primary.main" width="100vw" height='100vh'>
        <Scrollbar style={{width: '100vw', height: '100vh'}} noScrollX noScrollY={isLocation(routes.home)}>
          <Header/>
          <Switch >
            <Route path={routes.home.path} exact>
              <Home />
            </Route>
            <Route path={routes.about.path} exact>
              <About />
            </Route>
            <Route path={routes.careers.path} exact>
              <Careers />
            </Route>
            <Route path={routes.contact.path} exact>
              <Contact />
            </Route>
          </Switch>
          <CookieConsentPrompt debug prompt={'This website uses cookies to enhance the user experience.'} />
          <Footer />
        </Scrollbar>
      </Box>
    </ThemeProvider>
  );
};

export default App;
