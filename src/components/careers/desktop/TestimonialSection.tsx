import React from 'react'
import {Grid, makeStyles, styled} from '@material-ui/core'
import {TestimonialsCarousel} from "./TestimonialsCarousel";
import {Testimonials} from "../../../constants/testimonials";
import {GreenDotsRectangle} from "./GreenDotsRectangle";


const StyledGrid = styled(Grid)({
  width: '100%',
  height: '28vw',
  background: 'transparent',
  boxSizing: 'border-box',
  position: 'relative',
  zIndex: 0
});

const ColorShift = styled('div')({
  width: 'inherit',
  height: '10.625vw',
  backgroundColor: 'rgba(0, 0, 0, 0.15)',
  zIndex: 0
})

const usePositionStyles = makeStyles({
  carouselPosition: {
    position: 'absolute',
    bottom: 0,
    left: '11.45vw',
    zIndex: 2
  },
  dotsPosition: {
    position: 'absolute',
    top: '1.7vw',
    right: '5.6vw',
    zIndex: 1
  }
});

interface Props {
  testimonials: Testimonials;
  classes?: string;
}

export const TestimonialSection: React.FC<Props> = (props: Props) => {

  const positionStyles = usePositionStyles();

  return (
    <StyledGrid className={props.classes} container direction='row' justify={'flex-start'} alignItems={'flex-end'}>
      <TestimonialsCarousel testimonials={props.testimonials} classes={positionStyles.carouselPosition} />
      <GreenDotsRectangle length={19} classes={positionStyles.dotsPosition} />
      <ColorShift />
    </StyledGrid>
  );
}