
import { Box, styled } from "@material-ui/core";
import React from "react";
import ReactGA from "react-ga";
import {HomeComp} from "../components/HomeComp"
const Root = styled(Box)({
  margin: 'auto'
});


interface Props {
  onClick?: () => void;
}

export const Home: React.FC<Props> = (): JSX.Element => {

  ReactGA.pageview('home');


  return (
    <Root>
      <HomeComp/> 
    </Root>
  );
};