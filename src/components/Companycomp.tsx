import { Box,Container,Grid,styled, Typography, Theme, AppBar} from "@material-ui/core";
import ReactGA from "react-ga";
import React from "react";
import { CompanyBox } from "../components/CompanyBox";
import { PitchBox } from "../components/PitchBox";
import { Company, companies} from "../constants/company";
import { Pitch, pitches } from "../constants/pitches";
import { theme } from "../theme";

  
  
  

  
const StyledContainer = styled(Container)({
  height:'80%',
  margin:'4rem 0 10rem 12rem',
  float:'left',

});

const StyledTypography = styled(Typography)({
  marginBottom:'4rem'
})
  
  interface Props {
    onClick?: () => void;
  }
  
export const Companycomp: React.FC<Props> = (props: Props) => {
  
  ReactGA.pageview('home');
  
  const [counter, setCounter] = React.useState(0);
  
  return (
     
  
    <StyledContainer>
      <StyledTypography color={'textSecondary'} variant ='subtitle1' >COMPANIES</StyledTypography>
      {Object.values(companies).map((company: Company, index: number) => (
        <Grid item xs={5} key={`company-${index}`} direction="column">
          <CompanyBox company={company} />
        </Grid>
      ))}       
    </StyledContainer>
    
  
  
  
  );
};
  