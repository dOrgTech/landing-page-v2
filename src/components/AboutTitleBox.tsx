import React from 'react'
import {Box, styled, Typography} from '@material-ui/core'
import { theme } from "../theme";


const StyledBox = styled(Box)({
  margin: 'auto',
  width: '100%',
  height: '38.25rem',
  background: 'transparent',
  boxSizing: 'border-box'
});

const StyledText = styled(Typography)({
  maxWidth: '36rem',
  padding: '4.3rem 1.75rem',
  fontFamily: theme.typography.fontFamily,
  fontSize: '3.25rem',
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
}

export const AboutTitleBox: React.FC<Props> = (props: Props) => {
  return (
    <StyledBox>
      <StyledText>{props.text}</StyledText>
    </StyledBox>
  );
}