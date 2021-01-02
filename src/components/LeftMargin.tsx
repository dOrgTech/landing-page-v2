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
  const largeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const desktop = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <StyledGrid item xs={props.xs} style={{height: largeScreen ? '116.775rem' : (desktop ? '202.75rem' : '144.25rem')}}>
      <CenterLine item style={{borderBottom: props.border, height: desktop ? '57.375rem' : '47.375rem'}} />
    </StyledGrid>
  );
}

