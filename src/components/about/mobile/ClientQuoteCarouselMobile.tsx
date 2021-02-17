import React from 'react';
import {Grid, makeStyles, styled, Typography} from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';
import {Quote, Quotes} from "../../../constants/quotes";
import {theme} from "../../../theme";

const StyledGrid = styled(Grid)({
  width: 'inherit',
  height: '66.85vw',
  background: theme.palette.secondary.main,
  boxSizing: 'border-box',
  position: 'relative'
});

const StyledQuote = styled(Typography)({
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
  marginTop: '4.3vw',
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

const useCarouselStyles = makeStyles({
  root: {
    width: 'inherit',
    height: 'inherit'
  },
  indicatorContainer: {
    position: 'relative',
    marginTop: '2.5vw',
  },
  indicator: {
    fontSize: "0.9375vw",
    padding: '0 0.2vw',
    color: '#FFFFFF',
    opacity: 0.32
  },
  activeIndicator: {
    fontSize: "0.9375vw",
    padding: '0 0.2vw',
    color: '#FFFFFF'
  }
});


interface Props {
  quotes: Quotes;
  item?: boolean;
  border?: string;
  classes?: string;
}

export const ClientQuoteCarouselMobile: React.FC<Props> = (props: Props) => {

  const carouselStyles = useCarouselStyles();

  return (
    <StyledGrid item={props.item} container justify={'flex-start'} alignItems={'center'}
      className={props.classes} style={{border: props.border}}>
      <Carousel
        interval={4000}
        animation={'fade'}
        timeout={{appear: 250, enter: 250, exit: 250}}
        navButtonsAlwaysInvisible
        swipe
        className={carouselStyles.root}
        indicatorProps={{className: carouselStyles.indicator, style: {}}}
        activeIndicatorProps={{className: carouselStyles.activeIndicator, style: {}}}
        indicatorContainerProps={{className: carouselStyles.indicatorContainer, style: {}}}>
        {Object.values(props.quotes).map((quote: Quote, i: number) => (
          <Grid key={`quote-${i}`} container justify='center' alignItems='center' style={{height: '57vw'}}>
            <Grid item>
              <StyledQuote><strong>“</strong>{quote.text}<strong>”</strong></StyledQuote>
              <StyledCitation>{quote.citation}</StyledCitation>
            </Grid>
          </Grid>
        ))}
      </Carousel>
    </StyledGrid>
  );
}