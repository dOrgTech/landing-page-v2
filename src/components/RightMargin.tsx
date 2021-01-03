import React from 'react'
import {styled, Grid, useTheme, Theme, useMediaQuery} from '@material-ui/core'
import {theme} from "../theme";

const StyledGrid = styled(Grid)({
  maxWidth: '8vw'
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
  backgroundColor: theme.palette.text.primary
});

const RectangleAccentSecondary = styled('div')({
  width: '2.875vw',
  height: '0.125vw',
  marginTop: '1.125vw',
  backgroundColor: theme.palette.text.secondary
});

interface Props {
  xs: boolean | "auto" | 10 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 11 | 12 | undefined;
  border?: string;
}

const Accents: React.FC<Props> = (props: Props) => {
  return (
    <CenterLine container direction={'column'} justify={'center'} alignItems={'center'} style={{borderBottom: props.border}}>
      <RectangleAccentPrimary />
      <RectangleAccentSecondary />
      <RectangleAccentPrimary />
      <RectangleAccentPrimary />
      <RectangleAccentPrimary />
    </CenterLine>
  );
}

export const RightMargin: React.FC<Props> = (props: Props) => {

  const theme: Theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <StyledGrid item xs={props.xs} style={{borderLeft: props.border, height: desktop ? '116.775vw' : '144.25rem'}}>
      {desktop ?
        <Accents xs={props.xs} border={props.border}/> :
        <CenterLine item style={{borderBottom: props.border, height: '47.375rem'}} />}
    </StyledGrid>
  );
}
