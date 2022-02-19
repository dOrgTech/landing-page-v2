import React from 'react';
import {Grid, makeStyles, styled, Typography} from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';
import {Quote, Quotes} from "../../../constants/quotes";
import {theme} from "../../../theme";

const StyledGrid = styled(Grid)({
  width: 'inherit',
  height: '14.6vw',
  boxSizing: 'border-box',
  position: 'relative',
});

const StyledQuote = styled(Typography)({
  width: '45vw',
  height: '6.375vw',
  fontFamily: theme.typography.fontFamily,
  fontSize: '2.25vw',
  fontWeight: 300,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.72,
  letterSpacing: '-1.08px',
  textAlign: "left",
  color: theme.palette.text.primary
});

const StyledCitation = styled(Typography)({
  width: '100%',
  height: '1.25vw',
  margin: '2vw 0 0 0',
  fontFamily: theme.typography.fontFamily,
  fontSize: '1.125vw',
  fontWeight: 500,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.72,
  letterSpacing: 'normal',
  textAlign: "left",
  color: theme.palette.text.primary
});

const useCarouselStyles = makeStyles({
  root: {
    width: 'inherit'
  },
  indicatorContainer: {
    position: 'relative',
    marginTop: "0.625vw",
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

export const ClientQuoteCarousel: React.FC<Props> = (props: Props) => {

  const carouselStyles = useCarouselStyles();

  return (
    <StyledGrid item={props.item} container justify={'flex-start'} alignItems={'center'}
      className={props.classes} style={{border: props.border}}>
      <Carousel
        fullHeightHover
        interval={4000}
        animation={'fade'}
        timeout={{appear: 250, enter: 250, exit: 250}}
        navButtonsAlwaysInvisible
        className={carouselStyles.root}
        indicatorProps={{className: carouselStyles.indicator, style: {}}}
        activeIndicatorProps={{className: carouselStyles.activeIndicator, style: {}}}
        indicatorContainerProps={{className: carouselStyles.indicatorContainer, style: {}}}>
        {Object.values(props.quotes).map((quote: Quote, i: number) => (
          <div key={`quote-${i}`}>
            <StyledQuote><strong>“</strong>{quote.text}<strong>”</strong></StyledQuote>
            <StyledCitation>{quote.citation}</StyledCitation>
          </div>
        ))}
      </Carousel>
    </StyledGrid>
  );
}