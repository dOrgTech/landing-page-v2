import React from 'react'
import { Box, styled, Typography, Grid } from '@material-ui/core'
import { theme } from "../theme";
import {Pitch} from "../constants/pitches";

const StyleBox = styled(Box)({
  margin: 'auto',
  width: '42.5rem',
  height: '14.313rem',
  padding: '3.813rem 8.75rem 4.125rem 2.875rem',
  backgroundColor: '#000000',
  opacity: 0.15,
  boxSizing: 'border-box',
  '&:hover': {
    backgroundColor: theme.palette.secondary.main
  }
});

const StyleDetail = styled(Typography)({
  width: '100%',
  height: '100%',
  margin: '1.25rem 0 0 2.313rem',
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

const StylePitch = styled(Typography)({
  width: "100%",
  height: "100%",
  margin: '0 3.625rem 0 2.313rem',
  fontFamily: theme.typography.fontFamily,
  fontSize: '2rem',
  fontWeight: 600,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 2.19,
  letterSpacing: '-1.6px',
  textAlign: "left",
  color: theme.palette.text.primary
});

const StyleIcon = styled('img')({
  width: "3.75rem",
  height: "3.75rem",
  margin: '0 0 2.625rem 0',
  objectFit: "contain",
  float: 'left'
});

interface Props {
    pitch: Pitch;
}

export const PitchBox: React.FC<Props> = (props: Props) => {
  return (
    <StyleBox>
      <Grid container direction='row' spacing={0} justify='flex-start' alignItems='flex-start'>
        <Grid item xs={1}>
          <StyleIcon src={props.pitch.icon} alt='icon' />
        </Grid>
        <Grid item xs={11}>
          <StylePitch>{props.pitch.pitch}</StylePitch>
          <StyleDetail>{props.pitch.detail}</StyleDetail>
        </Grid>
      </Grid>
    </StyleBox>
  );
}