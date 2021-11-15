import React from "react";
import {styled, AppBar, Grid, Link, makeStyles, Box} from "@material-ui/core";
import { useHistory, useLocation } from 'react-router-dom';
import {Route, routes} from "../constants/routes";
import {getBorderStyle} from "../theme/styles";
import {theme} from "../theme";
import {useNavHoverContext} from "./NavHoverContext";


const LOGO_PATH = process.env.PUBLIC_URL + "/imgs/logos/dOrg-logo-white.svg";

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


interface Props {
  pageHalf?: 'left' | 'right';
  textColor?: string;
  underlineColor?: string;
  logoColorFilter?: string;
  classes?: string;
}

export const HeaderDesktop: React.FC<Props> = (props: Props) => {

  // render only one side for project hover?
  const renderRight = props.pageHalf === 'right' || !props.pageHalf;
  const renderLeft = props.pageHalf === 'left' || !props.pageHalf;

  // navigation
  const history = useHistory();
  const navigateToPage = (route: Route) => history.push(route.path);
  const routesList = [routes.home, routes.about, routes.careers, routes.contact]

  const location = useLocation();
  const isLocation = (route: Readonly<Route>) => { return location.pathname === route.path; }

  // hover effects
  const {state: navHoverIndex, dispatch: setNavHoverIndex} = useNavHoverContext();
  const handleMouseEnter = (val: number) => setNavHoverIndex?.(val);
  const handleMouseLeave = () => setNavHoverIndex?.(-1);

  // conditional styling and underline
  const borderColor = props.textColor ? props.textColor : theme.palette.text.primary;
  const borders = makeStyles(getBorderStyle(borderColor))();

  const navTextColor = (navHoverIndex: number, index: number) => {
    if (navHoverIndex === index) return theme.palette.secondary.main;
    else if (props.textColor) return props.textColor;
    else return theme.palette.text.primary;
  }
  const logoColorFilter = (navHoverIndex: number, index: number) => {
    if (navHoverIndex === index) return 'brightness(0) saturate(100%) invert(74%) sepia(71%) saturate(6519%) hue-rotate(125deg) brightness(99%) contrast(80%)';
    else if (props.logoColorFilter) return props.logoColorFilter;
    else return '';
  }

  return (
    <StyledAppBar position="static" className={props.classes} style={{width: props.pageHalf ? '50vw' : '100vw'}}>
      <Grid container spacing={0} direction='row' justify="flex-start" alignItems='flex-start' style={{height: 'inherit'}}>
        {renderLeft &&
        <LogoContainer container item spacing={0} direction='row' justify="center" alignItems='center' className={borders.bottomBorder}>
          <StyledLogo
            src={LOGO_PATH}
            alt="dOrg Logo"
            onClick={() => navigateToPage(routes.home)}
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave = {() => handleMouseLeave()}
            style={{filter: logoColorFilter(navHoverIndex, 0)}}/>
        </LogoContainer>}
        {renderLeft && <LeftHead item className={`${borders.bottomBorder} ${borders.leftBorder}`}/>}
        {renderRight &&
        <LinksContainer container item spacing={0} direction='row' justify="flex-end" alignItems='center'
          className={`${borders.bottomBorder} ${borders.leftBorder}  ${borders.rightBorder}`}>
          {routesList.map((route: Route, index: number) => (
            index === 0 ? undefined :
              <LinkBox item container direction='row' justify='center' alignItems='center' key={`route-${index}`}>
                <StyledLink
                  onClick={() => navigateToPage(route)}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave = {() => handleMouseLeave()}
                  underline='none'
                  style={{color: navTextColor(navHoverIndex, index)}}>
                  {route.name}
                </StyledLink>
              </LinkBox>
          ))}
          {isLocation(routes.about) && <Underline style={{right: '20.25vw'}}/>}
          {isLocation(routes.careers) && <Underline style={{right: '12vw'}}/>}
          {isLocation(routes.contact) && <Underline style={{right: '3.75vw'}}/>}
        </LinksContainer>}
        {renderRight && <HeaderRightMargin item className={borders.bottomBorder}/>}
      </Grid>
    </StyledAppBar>
  );
};


