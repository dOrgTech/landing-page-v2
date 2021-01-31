import React from 'react'
import { useHistory } from 'react-router-dom'
import {styled, Grid, useTheme, Theme, useMediaQuery} from '@material-ui/core'
import {theme} from "../theme";
import {Route, routes} from "../constants/routes";

const StyledGrid = styled(Grid)({
  width: '7.5vw',
  background: 'transparent'
});

const CenterLine = styled(Grid)({
  width: 'inherit',
  height: '100vh',
});

const RectangleAccentPrimary = styled('div')({
  width: '1.625vw',
  height: '2.1px',
  marginTop: '1.125vw',
  opacity: 0.6,
  '&:hover': {
    width: '2.875vw',
    opacity: 1,
    backgroundColor: theme.palette.secondary.main + ' !important'
  },
  cursor: 'pointer'
});

const RectangleAccentSecondary = styled('div')({
  width: '2.875vw',
  height: '2.1px',
  marginTop: '1.125vw',
  cursor: 'pointer'
});

interface AccentProps {
  border?: string;
  longAccentIndex?: number;
  colorPrimary?: string;
  colorSecondary?: string;
  height?: string;
}

const Accents: React.FC<AccentProps> = (props: AccentProps) => {

  const history = useHistory();
  const navigateToPage = (route: Route) => history.push(route.path);

  return (
    <CenterLine container direction={'column'} justify={'center'} alignItems={'center'} style={{borderBottom: props.border, height: props.height}}>
      {props.longAccentIndex === 0 ?
        <RectangleAccentSecondary style={{backgroundColor: props.colorSecondary}} onClick={() => navigateToPage(routes.home)}/>
        : <RectangleAccentPrimary style={{backgroundColor: props.colorPrimary}} onClick={() => navigateToPage(routes.home)}/>}
      {props.longAccentIndex === 1 ?
        <RectangleAccentSecondary style={{backgroundColor: props.colorSecondary}} onClick={() => navigateToPage(routes.about)}/>
        : <RectangleAccentPrimary style={{backgroundColor: props.colorPrimary}} onClick={() => navigateToPage(routes.about)}/>}
      {props.longAccentIndex === 2 ?
        <RectangleAccentSecondary style={{backgroundColor: props.colorSecondary}} onClick={() => navigateToPage(routes.careers)}/>
        : <RectangleAccentPrimary style={{backgroundColor: props.colorPrimary}} onClick={() => navigateToPage(routes.careers)}/>}
      {props.longAccentIndex === 3 ?
        <RectangleAccentSecondary style={{backgroundColor: props.colorSecondary}} onClick={() => navigateToPage(routes.contact)}/>
        : <RectangleAccentPrimary style={{backgroundColor: props.colorPrimary}} onClick={() => navigateToPage(routes.contact)}/>}
    </CenterLine>
  );
}

Accents.defaultProps = {
  colorPrimary: theme.palette.text.primary,
  colorSecondary: theme.palette.text.secondary,
}

interface Props {
  height: string;
  xs?: boolean | "auto" | 10 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 11 | 12 | undefined;
  centerLineHeight?: string;
  border?: string;
  longAccentIndex?: number;
  accentColorPrimary?: string;
  accentColorSecondary?: string;
}

const RightMargin: React.FC<Props> = (props: Props) => {

  const theme: Theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <StyledGrid item xs={props.xs} style={{height: props.height, width: desktop ? '7.5vw' : '5vw'}}>
      {desktop ?
        <Accents border={props.centerLineHeight ? props.border : ''}
          height={props.centerLineHeight}
          longAccentIndex={props.longAccentIndex}
          colorPrimary={props.accentColorPrimary}
          colorSecondary={props.accentColorSecondary}/>
        : (props.centerLineHeight && props.border && <CenterLine item style={{borderBottom: props.border, height: props.centerLineHeight}} />)}
    </StyledGrid>
  );
}

RightMargin.defaultProps = {
  xs: false
}

export {RightMargin};
