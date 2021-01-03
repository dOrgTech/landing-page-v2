import React from "react";
import {styled, AppBar, Grid, Link, makeStyles, Box} from "@material-ui/core";
import { useHistory, useLocation } from 'react-router-dom';
import { routes } from "../constants/routes";
import {borderStyles} from "../theme/styles";
import {theme} from "../theme";


const LOGO_PATH = process.env.PUBLIC_URL + "/imgs/dOrg-logo-white.svg";

const StyledAppBar = styled(AppBar)({
  height: '5vw',
  width: '100vw'
});

const LogoContainer = styled(Grid)({
  maxWidth: '8vw',
  height: 'inherit'
});

const StyledLogo = styled("img")({
  width: '4.563vw',
  height: 'auto',
  objectFit: 'contain',
  cursor: 'pointer'
});

const LeftHead = styled(Grid)({
  width: '42.5vw',
  height: 'inherit'
});

const LinksContainer = styled(Grid)({
  width: '42.5vw',
  height: 'inherit',
  boxSizing: 'border-box',
  position: 'relative'
});

const StyledLink = styled(Link)({
  marginRight: '3.75vw',
  fontFamily: theme.typography.fontFamily,
  fontSize: '0.813vw',
  fontWeight: 500,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.15,
  letterSpacing: '1.3px',
  textAlign: "left",
  color: theme.palette.text.primary,
  '&:hover': {
    color: theme.palette.secondary.main
  },
  cursor: 'pointer'
});

const Underline = styled(Box)({
  width: '5vw',
  height: '0.438vw',
  backgroundColor: theme.palette.secondary.main,
  position: 'absolute',
  bottom: 0
});

const HeaderRightMargin = styled(Grid)({
  maxWidth: '8vw',
  height: 'inherit'
});

const useBorders = makeStyles(borderStyles);

export const Header: React.FC = () => {

  const history = useHistory();
  const onLogoClick = () => history.push(routes.home.path);
  const onAboutClick = () => history.push(routes.about.path);
  const onCareersClick = () => history.push(routes.careers.path);
  const onContactClick = () => history.push(routes.contact.path);

  const location = useLocation();
  const underlineTranslation = location.pathname === routes.about.path ? '20vw'
    : location.pathname === routes.careers.path ? '12.375vw'
      : location.pathname === routes.contact.path ? '3.75vw'
        : '0';

  const borders = useBorders();

  return (
    <StyledAppBar position="static">
      <Grid container spacing={0} direction='row' justify="flex-start" alignItems='flex-start' style={{height: 'inherit'}}>
        <LogoContainer container item xs={1} spacing={0} direction='row' justify="center" alignItems='center' className={borders.bottomBorder}>
          <StyledLogo src={LOGO_PATH} alt="dOrg Logo" onClick={onLogoClick} />
        </LogoContainer>
        <LeftHead item xs={5} className={borders.bottomLeftBorder} />
        <LinksContainer container item xs={5} spacing={0} direction='row' justify="flex-end" alignItems='center' className={borders.bottomLeftBorder}>
          <Grid item>
            <StyledLink onClick={onAboutClick} underline='none'>{routes.about.name}</StyledLink>
          </Grid>
          <Grid item>
            <StyledLink onClick={onCareersClick} underline='none'>{routes.careers.name}</StyledLink>
          </Grid>
          <Grid item>
            <StyledLink onClick={onContactClick} underline='none'>{routes.contact.name}</StyledLink>
          </Grid>
          <Underline style={{right: underlineTranslation}} />
        </LinksContainer>
        <HeaderRightMargin item xs={1} className={borders.bottomLeftBorder} />
      </Grid>
    </StyledAppBar>
  );
};
