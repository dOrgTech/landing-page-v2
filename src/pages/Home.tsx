import {
  Box,styled
} from "@material-ui/core";
import ReactGA from "react-ga";
import React from "react";
import {Companycomp} from "../components/Companycomp"
import {Communitycomp} from "../components/CommunityComp"
const Root = styled(Box)({
  margin: 'auto'
});






interface Props {
  onClick?: () => void;
}

export const Home: React.FC<Props> = (props: Props): JSX.Element => {

  ReactGA.pageview('home');


  return (
    <Root>
      <Companycomp/>   
      <Communitycomp/> 
    </Root>
  );
};
