import React from 'react'
import {Box, styled, Typography} from '@material-ui/core'
import { theme } from "../../../theme";


const StyledBox = styled(Box)({
  margin: 'auto',
  width: '100%',
  height: '38.25vw',
  background: 'transparent',
  boxSizing: 'border-box',
  position: 'relative'
});

const StyledText = styled(Typography)({
  maxWidth: '36vw',
  padding: '4.3vw 1.75vw',
  fontFamily: theme.typography.fontFamily,
  fontSize: '3.25vw',
  fontWeight: 600,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.5,
  letterSpacing: '-1.6px',
  textAlign: "left",
  color: theme.palette.text.primary
});

interface Props {
  text: string;
  classes?: string;
}

export const AboutTitleBox: React.FC<Props> = (props: Props) => {

  return (
    <StyledBox className={props.classes}>
      <StyledText>{props.text}</StyledText>
    </StyledBox>
  );
}

