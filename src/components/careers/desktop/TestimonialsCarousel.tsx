import React from 'react';
import {makeStyles} from '@material-ui/core';
import {Testimonial, Testimonials} from "../../../constants/testimonials";
import {TestomonialItem} from "./TestomonialItem";
import Carousel from 'react-material-ui-carousel';


const useCarouselStyles = makeStyles({
  root: {
    width: '60.625vw',
    height: '21.25vw'
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
  classes?: string;
}

export const TestimonialsCarousel: React.FC<Props> = (props: Props) => {

  const carouselStyles = useCarouselStyles();

  return (
    <Carousel fullHeightHover
      className={carouselStyles.root}
      indicatorProps={{className: carouselStyles.indicator, style: {}}}
      activeIndicatorProps={{className: carouselStyles.activeIndicator, style: {}}}
      indicatorContainerProps={{className: carouselStyles.indicatorContainer, style: {}}}>
      {Object.values(props.testimonials).map((testimonial: Testimonial, i: number) => (
        <TestomonialItem testimonial={testimonial} key={`testimonial-${i}`} />
      ))}
    </Carousel>
  );
}