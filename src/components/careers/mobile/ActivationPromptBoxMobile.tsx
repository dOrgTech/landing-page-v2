import React from 'react'
import {styled, Typography, Grid, makeStyles} from '@material-ui/core'
import { theme } from "../../../theme";
import {CloseButtonMobile} from "../../about/mobile/CloseButtonMobile";
import {getSonarAnimation} from "../../../theme/styles";

const StyledGrid = styled(Grid)({
  width: '100%',
  height: '89.5vw',
  boxSizing: 'border-box',
  background: theme.palette.secondary.main,
  position: 'relative'
});

const StyledPrompt = styled(Typography)({
  margin: '5vw 0',
  maxWidth: '68vw',
  fontFamily: theme.typography.fontFamily,
  fontSize: '6.2vw',
  fontWeight: 600,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.62,
  letterSpacing: '-0.78px',
  textAlign: "center",
  color: theme.palette.text.primary
});

const StyledIcon = styled('img')({
  width: '11.4vw',
  height: '11.4vw',
  objectFit: "contain"
});

const StyledRings = styled('img')({
  width: '34.3vw',
  height: '34.67vw',
  objectFit: 'contain',
  transform: 'scale(-1, -1)',
  position: 'absolute',
  bottom: 0,
  right: 0
});
const useSonarAnimation= getSonarAnimation('55vw', 3);

const useStyleClasses = makeStyles({
  buttonStyle: {
    background: 'initial',
    backgroundColor: theme.palette.secondary.main,
    boxShadow: '0 0.715vw 1.43vw 0 rgba(0, 0, 0, 0.16)',
  }
});

interface Props {
  prompt: string;
  buttonText: string;
  onButtonClick: () => void;
  classes?: string;
}

export const ActivationPromptBoxMobile: React.FC<Props> = (props: Props) => {

  // split out first two words for first line of text
  const lineOneArray: string[] = props.prompt.split(' ', 2);
  const lineOne = lineOneArray.join(' ');
  // get remaining words for remaining lines  of text
  const remainingLinesArray: string[] = props.prompt.split(' ');
  remainingLinesArray.shift();
  remainingLinesArray.shift();
  const remainingLines: string = remainingLinesArray.join(' ');

  const styleClasses = useStyleClasses();
  const sonarAnimation = useSonarAnimation();

  return (
    <StyledGrid className={props.classes} container spacing={0} direction='column' justify='center' alignItems='center'>
      <Grid item>
        <StyledIcon src='imgs/mask-icon.svg' alt={'quotation mark icon'} />
      </Grid>
      <Grid item>
        <StyledPrompt>{lineOne}<br/>{remainingLines}</StyledPrompt>
      </Grid>
      <Grid item>
        <CloseButtonMobile text={props.buttonText} handleClick={props.onButtonClick} classes={styleClasses.buttonStyle} />
      </Grid>
      <StyledRings src='imgs/concentric-rings-right.svg' alt={'concentric rings flourish'} className={sonarAnimation.animate}/>
    </StyledGrid>
  );
}