import {
  Box,styled,Grid
} from "@material-ui/core";
import ReactGA from "react-ga";
import React from "react";
import {Communitycomp} from "../components/CommunityComp"
const Root = styled(Box)({
  margin: 'auto'
});
const HomeGrid = styled(Grid)({
  
})





interface Props {
  onClick?: () => void;
}

export const Home: React.FC<Props> = (props: Props): JSX.Element => {

  ReactGA.pageview('home');


  return (
    <Root>
      <Communitycomp/> 
    </Root>
  );
};
