import React from 'react'
import {styled, Grid, useTheme, Theme, useMediaQuery} from '@material-ui/core'
import {theme} from "../theme";

const StyledGrid = styled(Grid)({
  width: '7.5vw',
  background: 'transparent'
});

const CenterLine = styled(Grid)({
  width: 'inherit',
  height: '57.375vw',
});

const RectangleAccentPrimary = styled('div')({
  width: '1.625vw',
  height: '0.125vw',
  marginTop: '1.125vw',
  opacity: '0.6',
});

const RectangleAccentSecondary = styled('div')({
  width: '2.875vw',
  height: '0.125vw',
  marginTop: '1.125vw',
});

interface AccentProps {
  border?: string;
  longAccentIndex?: number;
  colorPrimary?: string;
  colorSecondary?: string;
}

const Accents: React.FC<AccentProps> = (props: AccentProps) => {
  return (
    <CenterLine container direction={'column'} justify={'center'} alignItems={'center'} style={{borderBottom: props.border}}>
      {props.longAccentIndex === 0 ?
        <RectangleAccentSecondary style={{backgroundColor: props.colorSecondary}} />
        : <RectangleAccentPrimary style={{backgroundColor: props.colorPrimary}}/>}
      {props.longAccentIndex === 1 ?
        <RectangleAccentSecondary style={{backgroundColor: props.colorSecondary}} />
        : <RectangleAccentPrimary style={{backgroundColor: props.colorPrimary}}/>}
      {props.longAccentIndex === 2 ?
        <RectangleAccentSecondary style={{backgroundColor: props.colorSecondary}} />
        : <RectangleAccentPrimary style={{backgroundColor: props.colorPrimary}}/>}
      {props.longAccentIndex === 3 ?
        <RectangleAccentSecondary style={{backgroundColor: props.colorSecondary}} />
        : <RectangleAccentPrimary style={{backgroundColor: props.colorPrimary}}/>}
      {props.longAccentIndex === 4 ?
        <RectangleAccentSecondary style={{backgroundColor: props.colorSecondary}} />
        : <RectangleAccentPrimary style={{backgroundColor: props.colorPrimary}}/>}
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
    <StyledGrid item xs={props.xs} style={{borderLeft: props.border, height: props.height, width: desktop ? '7.5vw' : '5vw'}}>
      {desktop ?
        <Accents border={props.centerLineHeight ? props.border : ''}
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
