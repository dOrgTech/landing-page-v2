import React from 'react'
import { styled, Typography, Grid } from '@material-ui/core'

import { Stat } from "../../../constants/stats";
import { theme } from "../../../theme";
import {mobileStatFont} from "../../../theme/styles";

const StyledBox = styled(Grid)({
  margin: 'auto',
  width: '100%',
  height: '8.25rem',
  padding: '1.875rem 1.25rem',
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.15)'
  }
});

const StyledTitle = styled(Typography)({
  width: '100%',
  height: '100%',
  margin: '0.813rem 0 0 0',
  fontFamily: theme.typography.fontFamily,
  fontSize: '0.813rem',
  fontWeight: 500,
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 1,
  letterSpacing: '-0.39px',
  textAlign: 'left',
  color: theme.palette.text.secondary
});

const StyledStat = styled(Typography)({
  width: "100%",
  height: "100%",
  // the design spec calls for OpenSans font here, but I am using Spartan for now
  fontFamily: mobileStatFont,
  fontSize: "2rem",
  fontWeight: "bold",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: "normal",
  textAlign: "left",
  color: theme.palette.text.primary
});

const StyledIcon = styled('img')({
  width: "1.5rem",
  height: "1.5rem",
  objectFit: "contain",
  float: 'right'
});

interface Props {
  stat: Stat;
  classes?: string;
}

export const StatBoxMobile: React.FC<Props> = (props: Props) => {
  return (
    <StyledBox className={props.classes} container direction='row' spacing={0} justify='space-between' alignItems='center'>
      <Grid item xs={6}>
        <StyledStat>{props.stat.stat}</StyledStat>
      </Grid>
      <Grid item xs={6}>
        <StyledIcon src={props.stat.icon} alt='icon' />
      </Grid>
      <Grid item xs={12}>
        <StyledTitle>{props.stat.title}</StyledTitle>
      </Grid>
    </StyledBox>
  );
}