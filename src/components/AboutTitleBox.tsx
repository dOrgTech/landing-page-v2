import React from 'react'
import { Box, styled, Typography, Grid } from '@material-ui/core'
import { theme } from "../theme";


const StyleBox = styled(Box)({
  margin: 'auto',
  width: '43.063rem',
  height: '38.25rem',
  padding: '4.313rem 11.875rem 4.125rem 1.75rem',
  background: 'transparent',
  boxSizing: 'border-box',
});

const StyleText = styled(Typography)({
  width: '36.875rem',
  height: '17.938rem',
  margin: 0,
  padding: 0,
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
    <StyleBox>
      <StyleText>{props.text}</StyleText>
    </StyleBox>
  );
}