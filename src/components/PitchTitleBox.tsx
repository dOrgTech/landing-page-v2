import React from 'react'
import {Grid, styled, Typography,} from '@material-ui/core'
import { theme } from "../theme";


const StyledGrid = styled(Grid)({
  margin: 'auto',
  width: '100%',
  height: '16.2vw',
  background: 'transparent',
  boxSizing: 'border-box',
  position: 'relative'
});

const StyledText = styled(Typography)({
  marginLeft: '1.8vw',
  fontFamily: theme.typography.fontFamily,
  fontSize: '3.25vw',
  fontWeight: 600,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: '-1.6px',
  textAlign: "left",
  color: theme.palette.text.primary
});

const StyledRings = styled('img')({
  width: '19.125vw',
  height: '19.063vw',
  objectFit: 'contain',
  position: 'absolute',
  top: 0,
  right: 0,
  zIndex: 1
});

const Accent = styled('div')({
  height: '5vw',
  position: 'absolute',
  top: 0,
  left: '50%',
  right: '50%',
  zIndex: 2
});


interface Props {
  text: string;
  classes?: string;
  accentStyle?: string;
}

export const PitchTitleBox: React.FC<Props> = (props: Props) => {
  return (
    <StyledGrid className={props.classes} container alignItems='center'>
      <Grid item>
        <StyledText>{props.text}</StyledText>
      </Grid>
      <StyledRings src='imgs/concentric-rings-left.svg' alt={'concentric rings flourish'} />
      <Accent style={{borderRight: props.accentStyle}} />
    </StyledGrid>
  );
}