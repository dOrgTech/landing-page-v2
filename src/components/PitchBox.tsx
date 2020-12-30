import React from 'react'
import {styled, Typography, Grid, useMediaQuery, useTheme, Theme} from '@material-ui/core'
import { theme } from "../theme";
import {Pitch} from "../constants/pitches";
import {hexToRGB} from "../utils";

const StyledGrid = styled(Grid)({
  margin: 'auto',
  width: '100%',
  height: '14.3rem',
  padding: '9% 6.75%',
  backgroundColor: 'rgba(0, 0, 0, 0.15)',
  boxSizing: 'border-box',
  '&:hover': {
    backgroundColor: hexToRGB(theme.palette.secondary.main, 0.15)
  }
});

const StyledDetail = styled(Typography)({
  width: '24rem',
  height: '2.8rem',
  margin: '1.25rem 0 0 0',
  fontFamily: theme.typography.fontFamily,
  fontSize: '0.938rem',
  fontWeight: 500,
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 1.87,
  letterSpacing: 'normal',
  textAlign: 'left',
  color: theme.palette.text.secondary
});

const StyledPitch = styled(Typography)({
  width: '100%',
  height: '100%',
  fontFamily: theme.typography.fontFamily,
  fontSize: '2rem',
  fontWeight: 600,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: '-1.6px',
  textAlign: "left",
  color: theme.palette.text.primary
});

const StyledIcon = styled('img')({
  width: "3.75rem",
  height: "3.75rem",
  marginRight: '2.3rem',
  marginBottom: '3rem',
  objectFit: "contain",
  float: 'left'
});

interface Props {
    pitch: Pitch;
    classes?: string;
}

export const PitchBox: React.FC<Props> = (props: Props) => {

  const theme: Theme = useTheme();
  const extraLargeScreen = useMediaQuery(theme.breakpoints.up('xl'));

  if (extraLargeScreen) {
    return (
      <StyledGrid className={props.classes} container direction='row' spacing={0} justify='flex-start' alignItems='center'>
        <Grid item xs={12} sm={2}>
          <StyledIcon src={props.pitch.icon} alt='icon' />
        </Grid>
        <Grid item xs={12} sm={10}>
          <StyledPitch>{props.pitch.pitch}</StyledPitch>
          <StyledDetail>{props.pitch.detail}</StyledDetail>
        </Grid>
      </StyledGrid>
    );
  } else {
    return (
      <StyledGrid className={props.classes} container direction='row' spacing={0} justify='flex-start' alignItems='center' style={{padding: '4% 3.375%'}}>
        <Grid item xs={12} sm={2}>
          <StyledIcon src={props.pitch.icon} alt='icon' style={{margin: 0, marginBottom: '1rem'}} />
        </Grid>
        <Grid item xs={12} sm={10}>
          <StyledPitch>{props.pitch.pitch}</StyledPitch>
          <StyledDetail>{props.pitch.detail}</StyledDetail>
        </Grid>
      </StyledGrid>
    );
  }
}