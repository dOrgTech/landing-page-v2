import React from 'react'
import {styled, Grid, Typography} from '@material-ui/core'
import {Testimonial} from "../../../constants/testimonials";
import {theme} from "../../../theme";

const StyledGrid = styled(Grid)({
  width: '60.625vw',
  height: '21.25vw',
  padding: '3vw 5vw',
  backgroundColor: 'rgba(0, 0, 0, 0.15)',
  boxSizing: 'border-box'
});

const StyledText= styled(Typography)({
  fontFamily: theme.typography.fontFamily,
  fontSize: '1.15vw',
  fontWeight: 'normal',
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.75,
  letterSpacing: '-0.36px',
  textAlign: "center",
  color: theme.palette.text.primary
});

const StyledPhoto = styled('img')({
  width: "4vw",
  height: "4vw",
  objectFit: "contain",
  borderRadius: '50%'
});

const StyledName = styled(Typography)({
  marginBottom: '0.75vw',
  fontFamily: theme.typography.fontFamily,
  fontSize: '1.25vw',
  fontWeight: 600,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: '-0.84px',
  textAlign: "left",
  color: theme.palette.text.primary
});

const StyledTitle = styled(Typography)({
  fontFamily: theme.typography.fontFamily,
  fontSize: '0.875vw',
  fontWeight: 'normal',
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: '-0.42px',
  textAlign: "left",
  color: theme.palette.text.primary
});

interface Props {
  testimonial: Testimonial;
  classes?: string;
}

export const TestomonialItem: React.FC<Props> = (props: Props) => {
  return (
    <StyledGrid className={props.classes} container direction={'row'} justify={'center'} alignItems={'flex-start'}
      style={{backgroundImage: `url(${props.testimonial.background})`}}>
      <Grid item xs={12}>
        <StyledText><strong>“</strong>{props.testimonial.testimonial}<strong>”</strong></StyledText>
      </Grid>
      <Grid item container direction={'row'} justify={'center'} alignItems={'center'}>
        <Grid item>
          <StyledPhoto src={props.testimonial.photo} />
        </Grid>
        <Grid item style={{marginLeft: '2vw'}}>
          <StyledName>{`${props.testimonial.name}-`}</StyledName>
          <StyledTitle>{`${props.testimonial.title}, ${props.testimonial.location}`}</StyledTitle>
        </Grid>
      </Grid>
    </StyledGrid>
  );
}