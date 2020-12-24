import { Box, styled } from "@material-ui/core";
import React from "react";
import ReactGA from "react-ga";

const Root = styled(Box)({
  margin: 'auto'
});

interface Props {
  onClick?: () => void;
}

export const Home: React.FC<Props> = (props: Props) => {

  ReactGA.pageview('home');

  return (
    <Root>
      
     
    </Root>
  );
};
