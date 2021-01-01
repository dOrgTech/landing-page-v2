import React from 'react'
import {styled, Grid, useTheme, Theme, useMediaQuery} from '@material-ui/core'

const StyledGrid = styled(Grid)({
  maxWidth: '8vw'
});

// It's a little weird using a grid here, but doing so correctly lines up box borders
const CenterLine = styled(Grid)({
  width: 'inherit',
  height: '57.375rem',
});

interface Props {
  xs: boolean | "auto" | 10 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 11 | 12 | undefined;
  border?: string;
}

export const LongLeftMargin: React.FC<Props> = (props: Props) => {

  const theme: Theme = useTheme();
  const largeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <StyledGrid item xs={props.xs} style={{height: largeScreen ? '116.775rem' : '202.75rem'}}>
      <CenterLine item style={{borderBottom: props.border}} />
    </StyledGrid>
  );
}
