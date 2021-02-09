import React from 'react'
import {Box, styled, Typography, Grid} from '@material-ui/core'
import { theme } from "../../../theme";
import {CloseButtonMobile} from "./CloseButtonMobile";
import {getSonarAnimation} from "../../../theme/styles";


const StyledBox = styled(Box)({
  margin: 'auto',
  width: '100%',
  height: '98vw',
  background: theme.palette.secondary.main,
  boxSizing: 'border-box',
  position: 'relative'
});

const StyledQuote = styled(Typography)({
  maxWidth: '74vw',
  margin: '0 0 -4.3vw 0',
  fontFamily: theme.typography.fontFamily,
  fontSize: '8.5vw',
  fontWeight: 300,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.5,
  letterSpacing: '-1.08px',
  textAlign: "center",
  color: theme.palette.text.primary
});

const StyledCitation = styled(Typography)({
  width: '100%',
  fontFamily: theme.typography.fontFamily,
  fontSize: '4.3vw',
  fontWeight: 600,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: '-0.54px',
  textAlign: "center",
  color: theme.palette.text.primary
});

const StyledRings = styled('img')({
  width: '34.53vw',
  height: '34.94vw',
  objectFit: 'contain',
  transform: 'scaleX(-1)',
  position: 'absolute',
  top: 0,
  right: 0
});
const useSonarAnimation= getSonarAnimation('55vw', 3);

interface Props {
  quote: string;
  citation: string;
  buttonText: string;
  onButtonClick: () => void;
  classes?: string;
}

export const CloseBoxMobile: React.FC<Props> = (props: Props) => {

  const sonarAnimation = useSonarAnimation();

  return (
    <StyledBox className={props.classes}>
      <Grid container spacing={0} direction='column' justify='space-evenly' alignItems='center' style={{height: 'inherit', width: 'inherit'}}>
        <Grid item>
          <StyledQuote><strong>“</strong>{props.quote}<strong>”</strong></StyledQuote>
        </Grid>
        <Grid item>
          <StyledCitation>{props.citation}</StyledCitation>
        </Grid>
        <Grid item>
          <CloseButtonMobile text={props.buttonText} handleClick={props.onButtonClick} />
        </Grid>
      </Grid>
      <StyledRings src='imgs/concentric-rings-right.svg' alt={'concentric rings flourish'} className={sonarAnimation.animate}/>
    </StyledBox>
  );
}