import React from 'react'
import {styled, Grid, useTheme, Theme, useMediaQuery} from '@material-ui/core'

const StyledGrid = styled(Grid)({
  maxWidth: '8vw',
});

// It's a little weird using a grid here, but doing so correctly lines up box borders
const CenterLine = styled(Grid)({
  width: 'inherit',
});

interface Props {
  xs: boolean | "auto" | 10 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 11 | 12 | undefined;
  border?: string;
}

export const LeftMargin: React.FC<Props> = (props: Props) => {

  const theme: Theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <StyledGrid item xs={props.xs} style={{height: desktop ? '116.775vw' : '144.25rem', maxWidth: desktop ? '8vw' : '5.5vw'}}>
      <CenterLine item style={{borderBottom: props.border, height: desktop ? '57.375vw' : '47.375rem'}} />
    </StyledGrid>
  );
}

