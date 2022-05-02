import React from 'react'
import {Box, styled, Grid} from '@material-ui/core'
import {CloseButtonMobile} from "./CloseButtonMobile";
import {getSonarAnimation} from "../../../theme/styles";
import {ClientQuoteCarouselMobile} from "./ClientQuoteCarouselMobile";
import {Quotes} from "../../../constants/quotes";
import PatternBackground from "../desktop/PressBox";

const StyledBox = styled(Box)({
  margin: 'auto',
  width: '100%',
  height: '98vw',
  boxSizing: 'border-box',
  position: 'relative'
});

const GridContainer = styled(Grid)({
  height: 'inherit',
  width: 'inherit',
  padding: '6vw 8vw 8vw 8vw',
})

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
  quotes: Quotes;
  buttonText: string;
  onButtonClick: () => void;
  classes?: string;
}

export const CloseBoxMobile: React.FC<Props> = (props: Props) => {

  const sonarAnimation = useSonarAnimation();

  return (
    <StyledBox className={props.classes}>
      <PatternBackground src='imgs/patternbackground3.svg' />
      <GridContainer container spacing={0} direction='column' justify='space-between' alignItems='center'>
        <Grid item>
          <ClientQuoteCarouselMobile quotes={props.quotes} />
        </Grid>
        <Grid item>
          <CloseButtonMobile text={props.buttonText} handleClick={props.onButtonClick} />
        </Grid>
      </GridContainer>
      <StyledRings src='imgs/concentric-rings-right.svg' alt={'concentric rings flourish'} className={sonarAnimation.animate}/>
    </StyledBox>
  );
}