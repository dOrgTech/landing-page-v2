import React from 'react'
import { styled, Grid } from '@material-ui/core'
import {theme} from "../theme";

const StyledGrid = styled(Grid)({
  height: '116.775rem',
  maxWidth: '7.5vw'
});

const CenterLine = styled('div')({
  width: 'inherit',
  height: '57.25rem',
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
  centerLine?: string;
}

export const RightMargin: React.FC<Props> = (props: Props) => {
  return (
    <StyledGrid item xs={props.xs} className={props.border}>
      <Grid item container xs={12} direction={'column'} justify={'center'} alignItems={'center'} style={{height: '57.25rem'}}>
        <RectangleAccentPrimary />
        <RectangleAccentSecondary />
        <RectangleAccentPrimary />
        <RectangleAccentPrimary />
        <RectangleAccentPrimary />
      </Grid>
      <Grid item xs={12} style={{width: 'inherit'}}>
        <CenterLine style={{borderTop: props.centerLine}} />
      </Grid>
    </StyledGrid>
  );
}