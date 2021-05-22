import React, {useEffect, useState} from 'react'
import { Box, styled, Typography, Grid } from '@material-ui/core'
import { theme } from "../../../theme";
import {Stat} from "../../../constants/stats";
import {formatStat, getIncrement} from "../../../utils/statUtils";

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

interface Props {
  stat: Stat;
  classes?: string;
}

export const StatBox: React.FC<Props> = (props: Props) => {

  const { title, stat, icon, formatter, postfix } = props.stat

  const [value, setValue] = useState(0);
  const increment = getIncrement(stat);

  useEffect(() => {
    if (value < stat) {
      setTimeout(() => {
        const nextValue = Math.min(value + increment, stat);
        setValue(nextValue);
      }, 15)
    }
  }, [value, stat, increment])

  return (
    // <StyledBox className={props.classes} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    <StyledBox className={props.classes}>
      <StyledIcon src={icon} alt='icon' />
      <Grid container direction='column' spacing={0} justify='center' alignItems='center'>
        <StyledStat>{formatStat(value, postfix, formatter)}</StyledStat>
        <StyledTitle>{title}</StyledTitle>
      </Grid>
    </StyledBox>
  );
}
