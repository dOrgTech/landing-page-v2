import React from "react";
import {styled, AppBar, Grid, Link, makeStyles, Box} from "@material-ui/core";
import { useHistory } from 'react-router-dom';
import {routes} from "../../../../constants/routes";
import {theme} from "../../../../theme";
import {borderStyles} from "../../../../theme/styles";


const LOGO_PATH = process.env.PUBLIC_URL + "/imgs/dOrg-logo-white.svg";

const StyledAppBar = styled(AppBar)({
  height: '5vw',
  width: '50vw',
  background: 'transparent'
});

const LogoContainer = styled(Grid)({
  width: '7.5vw',
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

const LinkBox = styled(Grid)({
  marginRight: '3.75vw',
  width: '4.5vw',
  height: 'inherit',
  boxSizing: 'border-box',
  position: 'relative'
});

const StyledLink = styled(Link)({
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
  width: '4.5vw',
  height: '0.438vw',
  backgroundColor: theme.palette.text.primary,
  position: 'absolute',
  bottom: 0
});

const HeaderRightMargin = styled(Grid)({
  width: '7.5vw',
  height: 'inherit'
});

const useBorders = makeStyles(borderStyles);

interface Props {
  isOnRight?: boolean;
  classes?: string;
}

export const HoverHeader: React.FC<Props> = (props: Props) => {

  const history = useHistory();
  const onLogoClick = () => history.push(routes.home.path);
  const onAboutClick = () => history.push(routes.about.path);
  const onCareersClick = () => history.push(routes.careers.path);
  const onContactClick = () => history.push(routes.contact.path);

  const borders = useBorders();

  return (
    <StyledAppBar position="static" className={props.classes}>
      <Grid container spacing={0} direction='row' justify="flex-start" alignItems='flex-start' style={{height: 'inherit'}}>
        {!props.isOnRight &&
        <LogoContainer container item spacing={0} direction='row' justify="center" alignItems='center' className={borders.bottomBorder}>
          <StyledLogo src={LOGO_PATH} alt="dOrg Logo" onClick={onLogoClick} />
        </LogoContainer>}
        {!props.isOnRight && <LeftHead item className={borders.bottomLeftBorder + ' ' + borders.rightBorder} />}
        {props.isOnRight &&
        <LinksContainer container item spacing={0} direction='row' justify="flex-end" alignItems='center' className={borders.bottomLeftBorder}>
          <LinkBox item container direction='row' justify='center' alignItems='center'>
            <StyledLink onClick={onAboutClick} underline='none'>{routes.about.name}</StyledLink>
          </LinkBox>
          <LinkBox item container direction='row' justify='center' alignItems='center'>
            <StyledLink onClick={onCareersClick} underline='none'>{routes.careers.name}</StyledLink>
          </LinkBox>
          <LinkBox item container direction='row' justify='center' alignItems='center'>
            <StyledLink onClick={onContactClick} underline='none'>{routes.contact.name}</StyledLink>
          </LinkBox>
          <Underline style={{right: '3.75vw'}} />
        </LinksContainer>}
        {props.isOnRight && <HeaderRightMargin item className={borders.bottomLeftBorder} />}
      </Grid>
    </StyledAppBar>
  );
};
