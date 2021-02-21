import React from 'react'
import {styled, Typography, Grid} from '@material-ui/core'
import { theme } from "../../../theme";
import {Pitch} from "../../../constants/pitches";
import {hexToRGBA} from "../../../utils/colorUtils";

const StyledGrid = styled(Grid)({
  margin: 'auto',
  width: '100%',
  height: '59vw',
  padding: '9.3vw 5.5vw',
  backgroundColor: 'rgba(0, 0, 0, 0.15)',
  boxSizing: 'border-box',
  '&:hover': {
    backgroundColor: hexToRGBA(theme.palette.secondary.main, 0.15)
  },
  position: 'relative',
  zIndex: 2
});

const StyledDetail = styled(Typography)({
  maxWidth: '71vw',
  fontFamily: theme.typography.fontFamily,
  fontSize: '3.33vw',
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
  margin: '2.85vw 0',
  fontFamily: theme.typography.fontFamily,
  fontSize: '5.72vw',
  fontWeight: 600,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: '-0.72px',
  textAlign: "left",
  color: theme.palette.text.primary
});

const StyledIcon = styled('img')({
  width: "11.43vw",
  height: "11.43vw",
  marginBottom: '4.2vw',
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