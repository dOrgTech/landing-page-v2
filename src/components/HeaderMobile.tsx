import React from "react";
import {styled, AppBar, Grid, makeStyles} from "@material-ui/core";
import { useHistory } from 'react-router-dom';
import { routes } from "../constants/routes";
import {borderStyles} from "../theme/styles";
import {MobileMenu} from "./MobileMenu";


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

const useBorders = makeStyles(borderStyles);

export const HeaderMobile: React.FC = () => {

  const history = useHistory();
  const onLogoClick = () => history.push(routes.home.path);

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
            <MobileMenu />
          </Grid>
        </LogoContainer>
        <HeaderMargin item xs={1} className={borders.bottomLeftBorder} />
      </Grid>
    </StyledAppBar>
  );
};
