import React from 'react'
import { Box, styled} from '@material-ui/core'
import {Testimonials} from "../../../constants/testimonials";
import {TestomonialItem} from "./TestomonialItem";


const StyleBox = styled(Box)({

});


interface Props {
  testimonials: Testimonials;
  classes?: string;
}

export const TestimonialsCarousel: React.FC<Props> = (props: Props) => {
  return (
    <StyleBox className={props.classes} >
      <TestomonialItem testimonial={props.testimonials.person1} />
    </StyleBox>
  );
}