import React from 'react'
import {styled, Grid, useTheme, Theme, useMediaQuery} from '@material-ui/core'
import {theme} from "../theme";

const StyledGrid = styled(Grid)({
  height: '116.775rem',
  maxWidth: '8vw'
});

const CenterLine = styled(Grid)({
  width: 'inherit',
  height: '57.375rem',
});

const RectangleAccentPrimary = styled('div')({
  width: '1.625rem',
  height: '0.125rem',
  marginTop: '1.125rem',
  opacity: '0.6',
  backgroundColor: theme.palette.text.primary
});

const RectangleAccentSecondary = styled('div')({
  width: '2.875rem',
  height: '0.125rem',
  marginTop: '1.125rem',
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
  const largeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <StyledGrid item xs={props.xs} style={{borderLeft: props.border, height: largeScreen ? '116.775rem' : '202.75rem'}}>
      {largeScreen ?
        <Accents xs={props.xs} border={props.border}/> :
        <CenterLine container direction={'column'} justify={'center'} alignItems={'center'} style={{borderBottom: props.border}} />}
    </StyledGrid>
  );
}