import React from 'react'
import {styled, Typography, Grid} from '@material-ui/core'
import {theme} from "../../../../theme";

const TextContainer = styled(Grid)({
  width: '19.8vh',
  height: '100%',
  background: 'transparent',
  boxSizing: 'border-box'
});


const StyledTitle = styled(Typography)({
  fontFamily: theme.typography.fontFamily,
  fontSize: '2.1vh',
  fontWeight: 600,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: '-0.54px',
  textAlign: "right",
  color: theme.palette.text.primary
});



interface Props {
  text: string;
  classes?: string;
}

export const ProfileSectionTitle: React.FC<Props> = (props: Props) => {

  return (
    <TextContainer className={props.classes} container direction='row' justify='flex-end' alignItems='flex-start'>
      <StyledTitle>{props.text}</StyledTitle>
    </TextContainer>
  );
}