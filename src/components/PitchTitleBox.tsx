import React from 'react'
import { Box, styled, Typography, Grid } from '@material-ui/core'
import { theme } from "../theme";


const StyleBox = styled(Box)({
  margin: 'auto',
  width: '85.563',
  height: '16.2rem',
  padding: '6.188rem 0 6.313rem 1.8rem',
  background: 'transparent',
  boxSizing: 'border-box',
  position: 'relative'
});

const StyleText = styled(Typography)({
  width: '59.438rem',
  height: '3.688rem',
  margin: 0,
  padding: 0,
  fontFamily: theme.typography.fontFamily,
  fontSize: '3.25rem',
  fontWeight: 600,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: '-1.6px',
  textAlign: "left",
  color: theme.palette.text.primary
});

const StyleRings = styled('img')({
  width: '19.125rem',
  height: '19.063rem',
  margin: '0',
  padding: '0',
  objectFit: 'contain',
  position: 'absolute',
  top: 0,
  right: 0,
  zIndex: 1
})

interface Props {
  text: string;
}

export const PitchTitleBox: React.FC<Props> = (props: Props) => {
  return (
    <StyleBox>
      <StyleText>{props.text}</StyleText>
      <StyleRings src='imgs/concentric-rings-left.svg' alt={'concentric rings flourish'} />
    </StyleBox>
  );
}