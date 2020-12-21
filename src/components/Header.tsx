import React from "react";
import { styled, AppBar, Grid, Box, Link, Typography, ThemeProvider } from "@material-ui/core";
import { theme } from "../theme";
import { useHistory } from 'react-router-dom';
import {DOrgLogo} from './icons/dOrgLogo'
const StyledAppBar = styled(AppBar)({
  justify:'flex-start',
});

const AppBarBody = styled(Grid)({
  maxHeight: 70,
  maxWidth: '1400px',
  marginRight: 'auto',
  marginLeft:'5%',
  paddingTop: '20px',
  paddingBottom: '20px'
});

const HeadText = styled(Typography)({
 paddingRight:'10px',
 
});

const Logo = styled(Grid)({
  padding:'15px'
});


const LinksContainer = styled(Grid)({
  marginRight: '2vw',
  marginTop:'20px'
});
const LeftHead = styled(Grid)({
  marginRight: 'auto'
  
});
const Subtitle = styled(Grid)({
  display:'flex',
  marginLeft:'100px'
});
const LinkButton = styled(Link)({
  fontSize: '14px'
});
const Head = styled(Grid)({
  borderLeft: 'solid 1px white',
  width: '1px',
  marginRight: '10px',
  marginLeft: '10px'
});
const LinkDivider = styled(Grid)({
  borderLeft: 'solid 1px white',
  width: '1px',
  marginRight: '10px',
  marginLeft: '10px'
});


export const Header: React.FC = () => {
  const history = useHistory();
  const onLogoClick = () => history.push('/');

  return (
    <StyledAppBar position="static">
      <AppBarBody container wrap='nowrap'>
        <LeftHead container wrap='wrap'>
            <Logo><DOrgLogo/></Logo>
        <HeadText variant='h4'>We build custom</HeadText>
        
        <Typography variant ='h4' color={'textSecondary'}>Dapps</Typography>
      <Subtitle>
<Typography variant ='subtitle1'>We&apos;ve helped some of Web3&apos;s top projects design, code and ship</Typography>
</Subtitle>

        </LeftHead>

        <Grid item>
          <LinksContainer container wrap='nowrap'>
            <Grid item>
              <LinkButton href="https://web3api.substack.com/" target="_blank" color={'textSecondary'} variant='body1'>
                About
              </LinkButton>
            </Grid>
            <LinkDivider item />
            <Grid item>
              <LinkButton href="https://github.com/web3-api/prototype" target="_blank" color={'textSecondary'} variant='body1'>
                Careers
              </LinkButton>
            </Grid>
            <LinkDivider item />
            <Grid item>
              <LinkButton href="https://airtable.com/shri2hEgu1BlMLXZ9" target="_blank" color={'textSecondary'} variant='body1'>
                Contact
              </LinkButton>
            </Grid>
          </LinksContainer>
        </Grid>
      </AppBarBody>
</StyledAppBar>
  );
};
