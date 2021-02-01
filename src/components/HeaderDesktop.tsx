import React from "react";
import {styled, AppBar, Grid, Link, makeStyles, Box} from "@material-ui/core";
import { useHistory, useLocation } from 'react-router-dom';
import {Route, routes} from "../constants/routes";
import {borderStyles} from "../theme/styles";
import {theme} from "../theme";


const LOGO_PATH = process.env.PUBLIC_URL + "/imgs/dOrg-logo-white.svg";

const StyledAppBar = styled(AppBar)({
  height: '5vw',
  width: '100vw',
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
  backgroundColor: theme.palette.secondary.main,
  position: 'absolute',
  bottom: 0
});

const HeaderRightMargin = styled(Grid)({
  width: '7.5vw',
  height: 'inherit'
});

const useBorders = makeStyles(borderStyles);

interface Props {
  pageHalf?: 'left' | 'right';
  textColor?: string;
  iconColorFilter?: string;
  classes?: string;
}

export const HeaderDesktop: React.FC<Props> = (props: Props) => {

  const renderRight = props.pageHalf === 'right' || !props.pageHalf;
  const renderLeft = props.pageHalf === 'left' || !props.pageHalf;

  const history = useHistory();
  const onLogoClick = () => history.push(routes.home.path);
  const onAboutClick = () => history.push(routes.about.path);
  const onCareersClick = () => history.push(routes.careers.path);
  const onContactClick = () => history.push(routes.contact.path);

  const location = useLocation();
  const isLocation = (route: Readonly<Route>) => { return location.pathname === route.path; }

  const borders = useBorders();
  const styles = makeStyles({
    icon: {
      filter: props.iconColorFilter ? props.iconColorFilter : ''
    },
    text: {
      color: props.textColor ? props.textColor : theme.palette.text.primary
    }
  })();

  return (
    <StyledAppBar position="static" className={props.classes} style={{width: props.pageHalf ? '50vw' : '100vw'}}>
      <Grid container spacing={0} direction='row' justify="flex-start" alignItems='flex-start' style={{height: 'inherit'}}>
        {renderLeft &&
        <LogoContainer container item spacing={0} direction='row' justify="center" alignItems='center' className={borders.bottomBorder}>
          <StyledLogo src={LOGO_PATH} alt="dOrg Logo" onClick={onLogoClick} className={styles.icon}/>
        </LogoContainer>}
        {renderLeft && <LeftHead item className={borders.bottomLeftBorder}/>}
        {renderRight &&
        <LinksContainer container item spacing={0} direction='row' justify="flex-end" alignItems='center'
          className={`${borders.bottomLeftBorder} ${borders.rightBorder}`}>
          <LinkBox item container direction='row' justify='center' alignItems='center'>
            <StyledLink onClick={onAboutClick} underline='none' className={styles.text}>{routes.about.name}</StyledLink>
          </LinkBox>
          <LinkBox item container direction='row' justify='center' alignItems='center'>
            <StyledLink onClick={onCareersClick} underline='none' className={styles.text}>{routes.careers.name}</StyledLink>
          </LinkBox>
          <LinkBox item container direction='row' justify='center' alignItems='center'>
            <StyledLink onClick={onContactClick} underline='none' className={styles.text}>{routes.contact.name}</StyledLink>
          </LinkBox>
          {isLocation(routes.about) && <Underline style={{right: '20.25vw'}}/>}
          {isLocation(routes.careers) && <Underline style={{right: '12vw'}}/>}
          {isLocation(routes.contact) && <Underline style={{right: '3.75vw'}}/>}
          {props.pageHalf && <Underline style={{right: '3.75vw', backgroundColor: theme.palette.text.primary}}/>}
        </LinksContainer>}
        {renderRight && <HeaderRightMargin item className={borders.bottomBorder}/>}
      </Grid>
    </StyledAppBar>
  );
};
