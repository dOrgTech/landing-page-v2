import React from 'react'
import {Grid, styled} from '@material-ui/core'
import {Testimonials} from "../../../constants/testimonials";
import {TestimonialCarouselMobile} from "./TestimonialCarouselMobile";


const StyledGrid = styled(Grid)({
  width: '100%',
  height: '112vw',
  background: 'transparent',
  boxSizing: 'border-box',
  position: 'relative',
  zIndex: 0
});

interface Props {
  carouselBorder?: string;
  testimonials: Testimonials;
  classes?: string;
}

export const TestimonialSectionMobile: React.FC<Props> = (props: Props) => {

  return (
    <StyledGrid className={props.classes} container direction='row' justify={'flex-start'} alignItems={'flex-end'}>
      <TestimonialCarouselMobile testimonials={props.testimonials} border={props.carouselBorder} />
    </StyledGrid>
  );
}