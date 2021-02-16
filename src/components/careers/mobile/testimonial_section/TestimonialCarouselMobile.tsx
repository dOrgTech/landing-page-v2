import React from 'react';
import {Box, makeStyles} from '@material-ui/core';
import {Testimonial, Testimonials} from "../../../../constants/testimonials";
import Carousel from 'react-material-ui-carousel';
import {TestomonialItemMobile} from "./TestimonialItemMobile";


const useCarouselStyles = makeStyles({
  root: {
    width: 'inherit',
    height: 'inherit'
  },
  indicatorContainer: {
    position: 'relative',
    top: '-15vw',
    marginTop: "2.4vw",
  },
  indicator: {
    fontSize: "3vw",
    padding: '0 1.2vw',
    color: '#FFFFFF',
    opacity: 0.32
  },
  activeIndicator: {
    fontSize: "3vw",
    padding: '0 1.2vw',
    color: '#FFFFFF'
  }
});


interface Props {
  testimonials: Testimonials;
  border?: string;
  classes?: string;
}

export const TestimonialCarouselMobile: React.FC<Props> = (props: Props) => {

  const carouselStyles = useCarouselStyles();

  return (
    <Box className={props.classes} style={{width: '100%', height: '96.5vw', borderTop: props.border, borderBottom: props.border}}>
      <Carousel
        fullHeightHover
        interval={6000}
        timeout={{appear: 0, enter: 0, exit: 0}}
        navButtonsAlwaysVisible
        className={carouselStyles.root}
        indicatorProps={{className: carouselStyles.indicator, style: {}}}
        activeIndicatorProps={{className: carouselStyles.activeIndicator, style: {}}}
        indicatorContainerProps={{className: carouselStyles.indicatorContainer, style: {}}}>
        {Object.values(props.testimonials).map((testimonial: Testimonial, i: number) => (
          <TestomonialItemMobile testimonial={testimonial} key={`testimonial-${i}`} />
        ))}
      </Carousel>
    </Box>
  );
}