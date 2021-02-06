import React from 'react'
import {Grid, styled, Typography,} from '@material-ui/core'
import { theme } from "../../../theme";
import {getSonarAnimation} from "../../../theme/styles";


const StyledGrid = styled(Grid)({
  margin: 'auto',
  width: '100%',
  height: '35.5vw',
  background: 'transparent',
  boxSizing: 'border-box',
  position: 'relative'
});

const StyledText = styled(Typography)({
  maxWidth: '74vw',
  marginLeft: '5.15vw',
  fontFamily: theme.typography.fontFamily,
  fontSize: '6.67vw',
  fontWeight: 600,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.5,
  letterSpacing: '-0.84px',
  textAlign: "left",
  color: theme.palette.text.primary
});

const StyledRings = styled('img')({
  width: '46.45vw',
  height: '47vw',
  objectFit: 'contain',
  position: 'absolute',
  top: -3,
  right: 0,
  zIndex: 1
});
const useSonarAnimation= getSonarAnimation('75vw', 3);

interface Props {
  text: string;
  classes?: string;
}

export const PitchTitleBoxMobile: React.FC<Props> = (props: Props) => {

  const sonarAnimation = useSonarAnimation();

  return (
    <StyledGrid className={props.classes} container alignItems='center'>
      <Grid item>
        <StyledText>{props.text}</StyledText>
      </Grid>
      <StyledRings src='imgs/concentric-rings-left.svg' alt={'concentric rings flourish'} className={sonarAnimation.animate}/>
    </StyledGrid>
  );
}