import React from "react";
import {styled, AppBar, Grid, makeStyles} from "@material-ui/core";
import { useHistory, useLocation } from 'react-router-dom';
import { routes } from "../constants/routes";
import {borderStyles} from "../theme/styles";
import {theme} from "../theme";


const LOGO_PATH = process.env.PUBLIC_URL + "/imgs/dOrg-logo-white.svg";

const StyledAppBar = styled(AppBar)({
  height: '14.3vw',
  width: '100vw'
});

const LogoContainer = styled(Grid)({
  maxWidth: '91vw',
  height: 'inherit'
});

const StyledLogo = styled("img")({
  marginLeft: '3.57vw',
  width: '17.38vw',
  height: 'auto',
  objectFit: 'contain',
  cursor: 'pointer'
});

const HeaderMargin = styled(Grid)({
  maxWidth: '5.5vw',
  height: 'inherit'
});

const MobileMenu = styled(Grid)({
  width: '8.57vw',
  height: '7vw',
  marginRight: '4.76vw'
});

const RectangleAccent = styled('div')({
  width: '8.57vw',
  height: '0.476vw',
  backgroundColor: theme.palette.text.secondary
});

const Accents: React.FC = () => {
  return (
    <MobileMenu container direction={'column'} justify={'space-between'} alignItems={'center'}>
      <RectangleAccent />
      <RectangleAccent style={{width: '5.95vw'}} />
      <RectangleAccent />
    </MobileMenu>
  );
}

const useBorders = makeStyles(borderStyles);

export const HeaderMobile: React.FC = () => {

  const history = useHistory();
  const onLogoClick = () => history.push(routes.home.path);
  const onAboutClick = () => history.push(routes.about.path);
  const onCareersClick = () => history.push(routes.careers.path);
  const onContactClick = () => history.push(routes.contact.path);

  const borders = useBorders();

  return (
    <StyledAppBar position="static">
      <Grid container spacing={0} direction='row' justify="flex-start" alignItems='flex-start' style={{height: 'inherit'}}>
        <HeaderMargin item xs={1} className={borders.bottomBorder} />
        <LogoContainer container item xs={10} spacing={0} direction='row' justify="space-between" alignItems='center' className={borders.bottomLeftBorder}>
          <Grid item>
            <StyledLogo src={LOGO_PATH} alt="dOrg Logo" onClick={onLogoClick} />
          </Grid>
          <Grid item>
            <Accents />
          </Grid>
        </LogoContainer>
        <HeaderMargin item xs={1} className={borders.bottomLeftBorder} />
      </Grid>
    </StyledAppBar>
  );
};
