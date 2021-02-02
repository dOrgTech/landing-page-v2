import React from "react";
import {Switch, Route, HashRouter} from "react-router-dom";
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
import {CookieConsentPrompt} from "./components/CookieConsentPrompt";
import {CustomScrollbar} from "./components/CustomScrollbar";

const App: React.FC = () => {

  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor="primary.main" width="100vw" height='100%'>
        <CustomScrollbar style={{width: '100vw', height: '100vh'}} noScrollX>
          <HashRouter>
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
          </HashRouter>
        </CustomScrollbar>
      </Box>
    </ThemeProvider>
  );
};

export default App;
