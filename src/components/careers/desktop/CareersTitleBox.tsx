import React from 'react'
import {Grid, makeStyles, styled, Typography,} from '@material-ui/core'
import { theme } from "../../../theme";
import {getSonarAnimation} from "../../../theme/styles";
import {FadeInOutAnimation} from "../../FadeInOutAnimation";

const StyledGrid = styled(Grid)({
  width: '100%',
  height: '13.75vw',
  padding: '3.625vw 0 0 1.75vw',
  background: 'transparent',
  boxSizing: 'border-box',
  position: 'relative'
});

const StyledTextPrimary = styled(Typography)({
  fontFamily: theme.typography.fontFamily,
  fontSize: '3.25vw',
  fontWeight: 600,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: '-1.6px',
  textAlign: "left",
  color: theme.palette.text.primary
});

const useStyledTextSecondary = makeStyles({
  style: {
    fontFamily: theme.typography.fontFamily,
    fontSize: '3.25vw',
    fontWeight: 600,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: 1,
    letterSpacing: '-1.6px',
    textAlign: "left",
    color: theme.palette.text.secondary
  }
});

const StyledRings = styled('img')({
  width: '19.125vw',
  height: '19.063vw',
  objectFit: 'contain',
  position: 'absolute',
  top: 0,
  right: 0,
  zIndex: 1
});
const useSonarAnimation= getSonarAnimation('30vw', 3);

interface Props {
  textPrimary: string;
  textSecondary: string[];
  classes?: string;
}

export const CareersTitleBox: React.FC<Props> = (props: Props) => {

  const sonarAnimation = useSonarAnimation();
  const styledTextSecondary = useStyledTextSecondary();

  return (
    <StyledGrid className={props.classes} container direction={'row'} spacing={0} justify={'flex-start'} alignItems={'flex-start'}>
      <Grid item>
        <StyledTextPrimary>{props.textPrimary}</StyledTextPrimary>
      </Grid>
      <Grid item>
        <FadeInOutAnimation textSecondary={props.textSecondary} textClasses={styledTextSecondary.style}/>
      </Grid>
      <StyledRings src='imgs/concentric-rings-left.svg' alt={'concentric rings flourish'} className={sonarAnimation.animate} />
    </StyledGrid>
  );
}