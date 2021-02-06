import React from 'react'
import {Grid, styled, Typography,} from '@material-ui/core'
import { theme } from "../../../theme";
import {getSonarAnimation} from "../../../theme/styles";


const StyledGrid = styled(Grid)({
  width: '100%',
  height: '34.5vw',
  padding: '6.5vw 0 9vw 5.3vw',
  background: 'transparent',
  boxSizing: 'border-box',
  position: 'relative'
});

const StyledTextPrimary = styled(Typography)({
  fontFamily: theme.typography.fontFamily,
  fontSize: '6.2vw',
  fontWeight: 600,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.5,
  letterSpacing: '-0.84px',
  textAlign: "left",
  color: theme.palette.text.primary
});

const StyledTextSecondary = styled(Typography)({
  fontFamily: theme.typography.fontFamily,
  fontSize: '6.2vw',
  fontWeight: 600,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.5,
  letterSpacing: '-0.84px',
  textAlign: "left",
  color: theme.palette.text.secondary
});

const StyledRings = styled('img')({
  width: '46.5vw',
  height: '47vw',
  objectFit: 'contain',
  position: 'absolute',
  top: 0,
  right: 0,
  zIndex: 1
});
const useSonarAnimation= getSonarAnimation('75vw', 3);

interface Props {
  textPrimaryL1: string;
  textPrimaryL2: string;
  textSecondary: string;
  classes?: string;
}

export const CareersTitleBoxMobile: React.FC<Props> = (props: Props) => {

  const sonarAnimation = useSonarAnimation();

  return (
    <StyledGrid className={props.classes} container direction={'row'} spacing={0} justify={'flex-start'} alignItems={'flex-start'}>
      <Grid item xs={12}>
        <StyledTextPrimary>{props.textPrimaryL1}</StyledTextPrimary>
      </Grid>
      <Grid item>
        <StyledTextPrimary>{props.textPrimaryL2}</StyledTextPrimary>
      </Grid>
      <Grid item>
        <StyledTextSecondary>&nbsp;{props.textSecondary}</StyledTextSecondary>
      </Grid>
      <StyledRings src='imgs/concentric-rings-left.svg' alt={'concentric rings flourish'} className={sonarAnimation.animate} />
    </StyledGrid>
  );
}