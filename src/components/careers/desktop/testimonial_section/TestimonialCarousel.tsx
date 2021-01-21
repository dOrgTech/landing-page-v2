import React from 'react';
import {Box, makeStyles} from '@material-ui/core';
import {Testimonial, Testimonials} from "../../../../constants/testimonials";
import {TestomonialItem} from "./TestomonialItem";
import Carousel from 'react-material-ui-carousel';


const useCarouselStyles = makeStyles({
  root: {
    width: 'inherit',
    height: 'inherit'
  },
  indicatorContainer: {
    position: 'relative',
    top: '-3vw',
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
  testimonials: Testimonials;
  border: string;
  classes?: string;
}

export const TestimonialCarousel: React.FC<Props> = (props: Props) => {

  const carouselStyles = useCarouselStyles();

  return (
    <Box className={props.classes} style={{width: '60.625vw', height: '21.25vw', border: props.border}}>
      <Carousel fullHeightHover interval={4000} timeout={{appear: 0, enter: 0, exit: 0}}
        className={carouselStyles.root}
        indicatorProps={{className: carouselStyles.indicator, style: {}}}
        activeIndicatorProps={{className: carouselStyles.activeIndicator, style: {}}}
        indicatorContainerProps={{className: carouselStyles.indicatorContainer, style: {}}}>
        {Object.values(props.testimonials).map((testimonial: Testimonial, i: number) => (
          <TestomonialItem testimonial={testimonial} key={`testimonial-${i}`} />
        ))}
      </Carousel>
    </Box>
  );
}