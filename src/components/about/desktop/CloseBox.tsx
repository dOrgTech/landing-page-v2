import React from 'react'
import {Box, styled, Grid} from '@material-ui/core'
import { CloseButton } from "./CloseButton";
import {getSonarAnimation} from "../../../theme/styles";
import {quotes, Quotes} from "../../../constants/quotes";
import {ClientQuoteCarousel} from "./ClientQuoteCarousel";
import PatternBackground from "./PressBox";

const StyledBox = styled(Box)({
  margin: 'auto',
  width: '100%',
  height: '14.6vw',
  boxSizing: 'border-box',
  position: 'relative',
  overflow: 'hidden'
});

const StyledIcon = styled('img')({
  width: '5.6vw',
  height: '3.9vw',
  margin: '1vw 2vw',
  objectFit: "contain",
  position: 'relative',
  bottom: '1.6vw'
});

const StyledRings = styled('img')({
  width: '13.5vw',
  height: '13.7vw',
  objectFit: 'contain',
  transform: 'scaleX(-1)',
  position: 'absolute',
  top: 0,
  right: 0
});

const useSonarAnimation= getSonarAnimation('22.5vw', 3);

interface Props {
  quotes: Quotes;
  buttonText: string;
  onButtonClick: () => void;
  classes?: string;
}

export const CloseBox: React.FC<Props> = (props: Props) => {

  const sonarAnimation = useSonarAnimation();

  return (
    <StyledBox className={props.classes}>
      <PatternBackground src='imgs/patternbackground2.svg' />
      <Grid container spacing={0} direction='row' justify='flex-start' alignItems='flex-start' style={{height: 'inherit'}}>
        <Grid container item xs={8} spacing={0} direction='row' justify='space-evenly' alignItems='center' style={{height: 'inherit'}}>
          <Grid item>
            <StyledIcon src='imgs/quotation-mark-icon.svg' alt={'quotation mark icon'} />
          </Grid>
          <Grid item>
            <ClientQuoteCarousel quotes={quotes}/>
          </Grid>
        </Grid>
        <Grid item xs={4} container direction='row' justify='center' alignItems='center' style={{height: 'inherit'}}>
          <Grid item>
            <CloseButton text={props.buttonText} handleClick={props.onButtonClick} />
          </Grid>
        </Grid>
      </Grid>
      <StyledRings src='imgs/concentric-rings-right.svg' alt={'concentric rings flourish'} className={sonarAnimation.animate} />
    </StyledBox>
  );
}
