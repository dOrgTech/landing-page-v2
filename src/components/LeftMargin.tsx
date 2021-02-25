import React from 'react'
import {styled, Grid} from '@material-ui/core'
import {useIsDesktop} from "../utils/hooks";

const StyledGrid = styled(Grid)({
  width: '7.5vw',
  background: 'transparent'
});

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

  const desktop = useIsDesktop();

  return (
    <StyledGrid item xs={props.xs} style={{height: props.height, width: desktop ? '7.5vw' : '5vw'}}>
      {props.border && props.centerLineHeight && <CenterLine item style={{borderBottom: props.border, height: props.centerLineHeight}} />}
    </StyledGrid>
  );
}

LeftMargin.defaultProps = {
  xs: false
}

export {LeftMargin};

