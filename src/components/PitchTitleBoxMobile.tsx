import React from 'react'
import {Grid, styled, Typography,} from '@material-ui/core'
import { theme } from "../theme";


const StyledGrid = styled(Grid)({
  margin: 'auto',
  width: '100%',
  height: '9.375rem',
  background: 'transparent',
  boxSizing: 'border-box',
  position: 'relative'
});

const StyledText = styled(Typography)({
  maxWidth: '19.438rem',
  marginLeft: '1.438rem',
  fontFamily: theme.typography.fontFamily,
  fontSize: '1.75rem',
  fontWeight: 600,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.5,
  letterSpacing: '-0.84px',
  textAlign: "left",
  color: theme.palette.text.primary
});

const StyledRings = styled('img')({
  width: '12.191rem',
  height: '12.334rem',
  objectFit: 'contain',
  position: 'absolute',
  top: 0,
  right: 0,
  zIndex: 1
});

interface Props {
  text: string;
  classes?: string;
}

export const PitchTitleBoxMobile: React.FC<Props> = (props: Props) => {
  return (
    <StyledGrid className={props.classes} container alignItems='center'>
      <Grid item>
        <StyledText>{props.text}</StyledText>
      </Grid>
      <StyledRings src='imgs/concentric-rings-left.svg' alt={'concentric rings flourish'} />
    </StyledGrid>
  );
}