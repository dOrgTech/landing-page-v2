import React from "react";
import { styled, AppBar, Grid, Link, Typography } from "@material-ui/core";
import { useHistory } from 'react-router-dom';
import { routes } from "../constants/routes";

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

const Logo = styled("img")({
  width: 'auto',
  height: '20vw',
  maxHeight: '32px',
  marginLeft: '2vw',
  cursor: 'pointer'
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

const LinkDivider = styled(Grid)({
  borderLeft: 'solid 1px white',
  width: '1px',
  marginRight: '10px',
  marginLeft: '10px'
});


export const Header: React.FC = () => {
  const history = useHistory();
  const onLogoClick = () => history.push(routes.home.path);
  const onAboutClick = () => history.push(routes.about.path);
  const onCareersClick = () => history.push(routes.careers.path);
  const onContactClick = () => history.push(routes.contact.path);

  return (
    <StyledAppBar position="static">
      <AppBarBody container wrap='nowrap'>
        <LeftHead container wrap='wrap'>
          <Logo src={process.env.PUBLIC_URL + "/imgs/dOrg_logo_white.svg"} alt="dOrg Logo" onClick={onLogoClick} />
          <HeadText variant='h4'>We build custom</HeadText>
        
          <Typography variant ='h4' color={'textPrimary'}>Dapps</Typography>
          <Subtitle>
            <Typography variant ='subtitle1'>We&apos;ve helped some of Web3&apos;s top projects design, code and ship</Typography>
          </Subtitle>

        </LeftHead>

        <Grid item>
          <LinksContainer container wrap='nowrap'>
            <Grid item>
              <LinkButton onClick={onAboutClick} color={'textPrimary'} variant='body1'>
                About
              </LinkButton>
            </Grid>
            <LinkDivider item />
            <Grid item>
              <LinkButton onClick={onCareersClick} color={'textPrimary'} variant='body1'>
                Careers
              </LinkButton>
            </Grid>
            <LinkDivider item />
            <Grid item>
              <LinkButton onClick={onContactClick} color={'textPrimary'} variant='body1'>
                Contact
              </LinkButton>
            </Grid>
          </LinksContainer>
        </Grid>
      </AppBarBody>
    </StyledAppBar>
  );
};
