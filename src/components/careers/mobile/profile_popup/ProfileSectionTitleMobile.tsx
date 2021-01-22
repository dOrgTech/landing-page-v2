import React from 'react'
import {styled, Typography, Grid} from '@material-ui/core'
import {theme} from "../../../../theme";

const TextContainer = styled(Grid)({
  width: '100%',
  height: '6.5vw',
  background: 'transparent',
  boxSizing: 'border-box'
});


const StyledTitle = styled(Typography)({
  fontFamily: theme.typography.fontFamily,
  fontSize: '4.3vw',
  fontWeight: 600,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: '-0.54px',
  textAlign: "left",
  color: theme.palette.text.primary
});


interface Props {
  text: string;
  classes?: string;
}

export const ProfileSectionTitleMobile: React.FC<Props> = (props: Props) => {

  return (
    <TextContainer className={props.classes} container direction='row' justify='flex-start' alignItems='flex-start'>
      <StyledTitle>{props.text}</StyledTitle>
    </TextContainer>
  );
}