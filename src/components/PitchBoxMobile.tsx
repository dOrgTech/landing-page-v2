import React from 'react'
import {styled, Typography, Grid} from '@material-ui/core'
import { theme } from "../theme";
import {Pitch} from "../constants/pitches";
import {hexToRGB} from "../utils";

const StyledGrid = styled(Grid)({
  margin: 'auto',
  width: '100%',
  height: '15.5rem',
  padding: '2.5rem 1.5rem',
  backgroundColor: 'rgba(0, 0, 0, 0.15)',
  boxSizing: 'border-box',
  '&:hover': {
    backgroundColor: hexToRGB(theme.palette.secondary.main, 0.15)
  },
  position: 'relative',
  zIndex: 2
});

const StyledDetail = styled(Typography)({
  fontFamily: theme.typography.fontFamily,
  fontSize: '0.875rem',
  fontWeight: 500,
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 2,
  letterSpacing: '-0.42px',
  textAlign: 'left',
  color: theme.palette.text.secondary
});

const StyledPitch = styled(Typography)({
  width: '100%',
  height: '100%',
  margin: '0.75rem 0',
  fontFamily: theme.typography.fontFamily,
  fontSize: '1.5rem',
  fontWeight: 600,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: '-0.72px',
  textAlign: "left",
  color: theme.palette.text.primary
});

const StyledIcon = styled('img')({
  width: "3rem",
  height: "3rem",
  marginBottom: '1.1rem',
  objectFit: "contain",
  float: 'left'
});

interface Props {
  pitch: Pitch;
  classes?: string;
}

export const PitchBoxMobile: React.FC<Props> = (props: Props) => {

  return (
    <StyledGrid className={props.classes} container direction='row' spacing={0} justify='flex-start' alignItems='center'>
      <Grid item xs={12}>
        <StyledIcon src={props.pitch.icon} alt='icon' />
      </Grid>
      <Grid item xs={12}>
        <StyledPitch>{props.pitch.pitch}</StyledPitch>
      </Grid>
      <Grid item xs={12}>
        <StyledDetail>{props.pitch.detail}</StyledDetail>
      </Grid>
    </StyledGrid>
  );
}