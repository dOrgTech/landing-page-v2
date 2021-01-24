import React from 'react'
import {styled, Grid} from '@material-ui/core'

const StyledGrid = styled(Grid)({
  width: '7.5vw',
  minWidth: '7.5vw',
  maxWidth: '7.5vw',
  height: '57.375vw',
  background: 'transparent'
});

interface Props {
  xs?: boolean | "auto" | 10 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 11 | 12 | undefined;
}

const HoverMarginLeft: React.FC<Props> = (props: Props) => {

  return (
    <StyledGrid item xs={props.xs} />
  );
}

HoverMarginLeft.defaultProps = {
  xs: false
}

export {HoverMarginLeft};
