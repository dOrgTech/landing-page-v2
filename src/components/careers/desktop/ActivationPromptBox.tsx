import React from 'react'
import {Box, styled, Typography, Grid} from '@material-ui/core'
import { theme } from "../../../theme";
import {CloseButton} from "../../about/desktop/CloseButton";
import {getSonarAnimation} from "../../../theme/styles";

const StyledBox = styled(Box)({
  margin: 'auto',
  width: '100%',
  height: '14.5vw',
  background: theme.palette.secondary.main,
  boxSizing: 'border-box',
  position: 'relative'
});

const StyledPrompt = styled(Typography)({
  maxWidth: '30vw',
  height: '5.75vw',
  marginRight: '3.125vw',
  fontFamily: theme.typography.fontFamily,
  fontSize: '2.25vw',
  fontWeight: 'normal',
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.44,
  letterSpacing: '-1.08px',
  textAlign: "left",
  color: theme.palette.text.primary
});

const StyledIcon = styled('img')({
  width: '6.5vw',
  height: '6.5vw',
  margin: '0 4.125vw 0 12.9vw',
  objectFit: "contain"
});

const StyledRings = styled('img')({
  width: '13.5vw',
  height: '13.7vw',
  objectFit: 'contain',
  transform: 'scale(-1, -1)',
  position: 'absolute',
  bottom: 0,
  right: 0
});

const useSonarAnimation= getSonarAnimation('22.5vw', 3);

interface Props {
  prompt: string;
  buttonText: string;
  onButtonClick: () => void;
  classes?: string;
}

export const ActivationPromptBox: React.FC<Props> = (props: Props) => {

  const sonarAnimation = useSonarAnimation();

  return (
    <StyledBox className={props.classes}>
      <Grid container spacing={0} direction='row' justify='flex-start' alignItems='center' style={{height: 'inherit'}}>
        <Grid item>
          <StyledIcon src='imgs/mask-icon.svg' alt={'quotation mark icon'} />
        </Grid>
        <Grid item>
          <StyledPrompt>{props.prompt}</StyledPrompt>
        </Grid>
        <Grid item>
          <CloseButton text={props.buttonText} handleClick={props.onButtonClick} />
        </Grid>
      </Grid>
      <StyledRings src='imgs/concentric-rings-right.svg' alt={'concentric rings flourish'} className={sonarAnimation.animate}/>
    </StyledBox>
  );
}