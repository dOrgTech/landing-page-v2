import React from 'react'
import { styled, Grid } from '@material-ui/core'

const StyledGrid = styled(Grid)({
  height: '116.775rem',
  width: '100%',
  maxWidth: '7.5vw'
});

const CenterLine = styled('div')({
  width: 'inherit',
  height: '57.25rem'
});

interface Props {
  xs: boolean | "auto" | 10 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 11 | 12 | undefined;
  border?: string;
  centerLine?: string;
}

export const LeftMargin: React.FC<Props> = (props: Props) => {

  return (
    <StyledGrid item xs={props.xs} className={props.border}>
      <CenterLine style={{borderBottom: props.centerLine}}/>
    </StyledGrid>
  );
}
