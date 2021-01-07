import { Container,Grid,styled, Typography} from "@material-ui/core";
import ReactGA from "react-ga";
import React from "react";
import { CommunityBox } from "../components/CommunityBox";
import {CompanyBox} from "../components/CompanyBox"
import { Company, companies} from "../constants/company";
import { Community, communities} from "../constants/community";


  
  
  

  
const StyledContainer = styled(Grid)({
  float:'none',
  width:'80%',
  margin:'5% auto 0 auto',
  position:'relative',
  overflow:'no-wrap'

});

const CompaniesContainer = styled(Container)({
  height:'80%',
  width:'80%',
  float:'left'
});

const CommunitiesContainer = styled(Container)({
  height:'80%',
  float:'left',
  width:'40%',
  marginLeft:'auto',
  marginBottom:'auto',
  marginTop:'15%'
});

const StyledTypography = styled(Typography)({
  margin:'0rem 3rem 4rem 0rem'
})
  
  interface Props {
    onClick?: () => void;
  }
  
export const HomeCompMobile: React.FC<Props> = (props: Props) => {
  
  ReactGA.pageview('home');
  
  
  return (
     
  
    <StyledContainer direction='row' alignItems='center'>
      <CompaniesContainer>
        <StyledTypography color={'textSecondary'} variant ='subtitle1' >COMPANIES</StyledTypography>
        {Object.values(companies).map((company: Company, index: number) => (
          <Grid item xs={5} key={`company-${index}`} direction="column">
            <CompanyBox company={company} />
          </Grid>
        ))}       
      </CompaniesContainer>
      <CommunitiesContainer>
        <StyledTypography color={'textSecondary'} variant ='subtitle1' >COMMUNITIES</StyledTypography>
        {Object.values(communities).map((community: Community, index: number) => (
          <Grid item xs={5} key={`community-${index}`} direction="column">
            <CommunityBox community={community} />
          </Grid>
        ))}       
      </CommunitiesContainer>
    
    </StyledContainer>
    
  
  
  
  );
};