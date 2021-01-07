import React from 'react'
import {styled, Grid, useTheme, Theme, useMediaQuery} from '@material-ui/core'

const StyledGrid = styled(Grid)({
  maxWidth: '8vw',
  minWidth: '4.5vw'
});

// It's a little weird using a grid here, but doing so correctly lines up box borders
const CenterLine = styled(Grid)({
  width: 'inherit',
});

interface Props {
  height: string;
  xs?: boolean | "auto" | 10 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 11 | 12 | undefined;
  centerLineHeight?: string;
  border?: string;
}

const LeftMargin: React.FC<Props> = (props: Props) => {

  const theme: Theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <StyledGrid item xs={props.xs} style={{height: props.height, maxWidth: desktop ? '8vw' : '6vw'}}>
      {props.border && props.centerLineHeight && <CenterLine item style={{borderBottom: props.border, height: props.centerLineHeight}} />}
    </StyledGrid>
  );
}

LeftMargin.defaultProps = {
  xs: false
}

export {LeftMargin};

