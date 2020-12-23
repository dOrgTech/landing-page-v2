import { Box,Container,Grid,styled, Typography, Theme, AppBar} from "@material-ui/core";
import ReactGA from "react-ga";
import React from "react";
import { CommunityBox } from "../components/CommunityBox";
import { PitchBox } from "../components/PitchBox";
import { Company, companies} from "../constants/company";
import { Community, communities} from "../constants/community";

import { Pitch, pitches } from "../constants/pitches";
import { theme } from "../theme";

  
  
  

  
const StyledContainer = styled(Container)({
  height:'80%',
  float:'left',

});

const StyledTypography = styled(Typography)({
  marginBottom:'4rem'
})
  
  interface Props {
    onClick?: () => void;
  }
  
export const Communitycomp: React.FC<Props> = (props: Props) => {
  
  ReactGA.pageview('home');
  
  const [counter, setCounter] = React.useState(0);
  
  return (
     
  
    <StyledContainer>
      <StyledTypography color={'textSecondary'} variant ='subtitle1' >COMMUNITIES</StyledTypography>
      {Object.values(communities).map((community: Community, index: number) => (
        <Grid item xs={5} key={`community-${index}`} direction="column">
          <CommunityBox community={community} />
        </Grid>
      ))}       
    </StyledContainer>
    
  
  
  
  );
};