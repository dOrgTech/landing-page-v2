import React, {useEffect, useState} from 'react'
import { Box, styled, Typography, Grid } from '@material-ui/core'

import { Stat } from "../../../constants/stats";
import { theme } from "../../../theme";

const StyledBox = styled(Box)({
  margin: 'auto',
  width: '100%',
  height: '19.125vw',
  padding: '1.75vw',
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.15)'
  }
});

const StyledTitle = styled(Typography)({
  width: '100%',
  height: '100%',
  fontFamily: theme.typography.fontFamily,
  fontSize: '0.938vw',
  fontWeight: 'bold',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 1.2,
  letterSpacing: '1.5px',
  textAlign: 'center',
  color: theme.palette.text.secondary
});

const StyledStat = styled(Typography)({
  width: "100%",
  height: "100%",
  margin: '0 0 1.938vw 0',
  fontFamily: theme.typography.fontFamily,
  fontSize: "3.25vw",
  fontWeight: "bold",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.35,
  letterSpacing: "normal",
  textAlign: "center",
  color: theme.palette.text.primary
});

const StyledIcon = styled('img')({
  width: "1.5vw",
  height: "1.5vw",
  margin: '0 0 3.5vw 0',
  objectFit: "contain",
  float: 'right'
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

export const StatBox: React.FC<Props> = (props: Props) => {

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

  const [wild, setWild] = useState<NodeJS.Timeout | null>(null);
  const handleMouseEnter = () => {
    setWild(setInterval(() => {
      setStat(Math.floor(Math.random() * end));
    }, 15));
  };
  const handleMouseLeave = () => {
    if (wild) {
      clearInterval(wild);
      setWild(null);
    }
    setStat(0);
  }

  const [stat, setStat] = useState(0);
  const increment = Math.ceil(end / 50);
  useEffect(() => {
    if (stat < end && !wild) {
      setTimeout(() => {
        const nextStat = Math.min(stat + increment, end);
        setStat(nextStat);
      }, 15)
    }
  }, [stat, end, increment, wild])

  return (
    <StyledBox className={props.classes} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <StyledIcon src={props.stat.icon} alt='icon' />
      <Grid container direction='column' spacing={0} justify='center' alignItems='center'>
        <StyledStat>{formatStat(stat)}</StyledStat>
        <StyledTitle>{props.stat.title}</StyledTitle>
      </Grid>
    </StyledBox>
  );
}
