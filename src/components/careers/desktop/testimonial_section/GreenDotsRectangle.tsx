import React from 'react'
import {styled, Grid} from '@material-ui/core'
import {theme} from "../../../../theme";

const StyledGrid = styled(Grid)({
  height: 'max-content',
  background: 'transparent'
});

const StyledDot = styled('div')({
  width: "0.177vw",
  height: "0.177vw",
  margin: '0.41vw 0.44vw',
  opacity: 0.4,
  borderRadius: '50%',
  backgroundColor: theme.palette.secondary.main
});

interface Props {
  length: number,
  classes?: string;
}

export const GreenDotsRectangle: React.FC<Props> = (props: Props) => {

  const dots: JSX.Element[] = [];
  for (let i = 0; i < props.length; i++) {
    for (let j = 0; j < props.length; j++) {
      dots.push(<StyledDot/>);
    }
  }

  return (
    <StyledGrid container direction={'row'} justify={'center'} alignItems={'center'}
      className={props.classes} style={{width: `${props.length*1.057}vw`}}>
      {dots.map((dot: JSX.Element, i: number) => (
        <Grid item key={`dot-${i}`}>{dot}</Grid>
      ))}
    </StyledGrid>
  );
}