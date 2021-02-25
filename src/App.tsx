import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {makeStyles, ThemeProvider} from "@material-ui/core";
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
import {NavHoverContext} from "./components/NavHoverContext";
import {ScrollContainer} from "./components/ScrollContainer";


const useAppContainerStyle = makeStyles({
  container: {
    height: '100vh',
    width: '100vw',
    backgroundColor: theme.palette.primary.main,
  }
});

const App: React.FC = () => {

  const appContainerStyle = useAppContainerStyle();

  return (
    <ThemeProvider theme={theme}>
      <ScrollContainer className={appContainerStyle.container}>
        <NavHoverContext>
          <BrowserRouter>
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
            <CookieConsentPrompt prompt={'This website uses cookies to enhance the user experience.'} />
            <Footer />
          </BrowserRouter>
        </NavHoverContext>
      </ScrollContainer>
    </ThemeProvider>
  );
};

export default App;
