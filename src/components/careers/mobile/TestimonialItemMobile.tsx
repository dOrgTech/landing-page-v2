import React from 'react'
import {styled, Grid, Typography} from '@material-ui/core'
import {Testimonial} from "../../../constants/testimonials";
import {theme} from "../../../theme";

const StyledGrid = styled(Grid)({
  width: '90.5vw',
  height: '96.5vw',
  padding: '10vw 7vw',
  backgroundColor: 'transparent',
  boxSizing: 'border-box'
});

const StyledText= styled(Typography)({
  fontFamily: theme.typography.fontFamily,
  fontSize: '3.5vw',
  fontWeight: 'normal',
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.87,
  letterSpacing: 'normal',
  textAlign: "center",
  color: theme.palette.text.primary
});

const StyledPhoto = styled('img')({
  width: "14.3vw",
  height: "14.3vw",
  objectFit: "contain",
  borderRadius: '50%'
});

const StyledName = styled(Typography)({
  marginBottom: '2.85vw',
  fontFamily: theme.typography.fontFamily,
  fontSize: '2.85vw',
  fontWeight: 'bold',
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: 'normal',
  textAlign: "left",
  color: theme.palette.text.primary
});

const StyledTitle = styled(Typography)({
  fontFamily: theme.typography.fontFamily,
  fontSize: '2.85vw',
  fontWeight: 500,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: 'normal',
  textAlign: "left",
  color: theme.palette.text.primary
});

interface Props {
  testimonial: Testimonial;
  classes?: string;
}

export const TestomonialItemMobile: React.FC<Props> = (props: Props) => {
  return (
    <StyledGrid className={props.classes} container direction={'row'} justify={'center'} alignItems={'flex-start'}>
      <Grid item xs={12}>
        <StyledText><strong>“</strong>{props.testimonial.testimonial}<strong>”</strong></StyledText>
      </Grid>
      <Grid item container direction={'row'} justify={'center'} alignItems={'center'}>
        <Grid item>
          <StyledPhoto src={props.testimonial.photo} />
        </Grid>
        <Grid item style={{marginLeft: '5.7vw'}}>
          <StyledName>{`${props.testimonial.name}-`}</StyledName>
          <StyledTitle>{`${props.testimonial.title}, ${props.testimonial.location}`}</StyledTitle>
        </Grid>
      </Grid>
    </StyledGrid>
  );
}