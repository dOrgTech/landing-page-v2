import React, {useEffect, useState} from 'react'
import { styled, Typography, Grid } from '@material-ui/core'

import { Stat } from "../../../constants/stats";
import { theme } from "../../../theme";
import {mobileStatFont} from "../../../theme/styles";

const StyledBox = styled(Grid)({
  margin: 'auto',
  width: '100%',
  height: '31.5vw',
  padding: '7.15vw 4vw 7.15vw 4.75vw',
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.15)'
  },
  position: 'relative',
  zIndex: 2
});

const StyledTitle = styled(Typography)({
  width: '100%',
  height: '100%',
  margin: '3.1vw 0 0 0',
  fontFamily: theme.typography.fontFamily,
  fontSize: '3.1vw',
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
  fontSize: "7.15vw",
  fontWeight: "bold",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: "normal",
  textAlign: "left",
  color: theme.palette.text.primary
});

const StyledIcon = styled('img')({
  width: "4.3vw",
  height: "4.3vw",
  objectFit: "contain",
  float: 'right',
  position: 'relative',
  top: '-1vw'
});

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});


interface Props {
  stat: Stat;
  classes?: string;
}

export const StatBoxMobile: React.FC<Props> = (props: Props) => {

  const postfix = props.stat.postfix ? props.stat.postfix : '';
  const end = props.stat.stat;
  const isCurrency = props.stat.currency

  const formatStat = (num: number) => {
    if (isCurrency) {
      return currencyFormatter.format(num) + postfix;
    } else {
      return num.toString() + postfix;
    }
  }

  const [stat, setStat] = useState(0);
  const increment = Math.ceil(end / 50);
  useEffect(() => {
    if (stat < end) {
      setTimeout(() => {
        const nextStat = Math.min(stat + increment, end);
        setStat(nextStat);
      }, 15)
    }
  }, [stat, end, increment])

  const handleTouch = () => setStat(0);

  return (
    <StyledBox className={props.classes} container direction='row' spacing={0} justify='space-between' alignItems='center'
      onTouchEnd={handleTouch}>
      <Grid item xs={6}>
        <StyledStat>{formatStat(stat)}</StyledStat>
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