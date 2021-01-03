import React from 'react'
import {Box, styled, Typography} from '@material-ui/core'
import { theme } from "../../../theme";

const StyledBox = styled(Box)({
  margin: 'auto',
  width: '100%',
  height: '11.875rem',
  background: 'transparent',
  boxSizing: 'border-box',
  position: 'relative'
});

const StyledText = styled(Typography)({
  maxWidth: '19.5rem',
  padding: '2.1rem 1.4rem',
  fontFamily: theme.typography.fontFamily,
  fontSize: '1.75rem',
  fontWeight: 600,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.5,
  letterSpacing: '-0.84px',
  textAlign: "left",
  color: theme.palette.text.primary
});

const StyledRings = styled('img')({
  width: '12.191rem',
  height: '12.334rem',
  objectFit: 'contain',
  position: 'absolute',
  top: 0,
  right: 0,
  zIndex: 1
});

interface Props {
  text: string;
  classes?: string;
}

export const AboutTitleBoxMobile: React.FC<Props> = (props: Props) => {

  return (
    <StyledBox className={props.classes}>
      <StyledText>{props.text}</StyledText>
      <StyledRings src='imgs/concentric-rings-left.svg' alt={'concentric rings flourish'}/>
    </StyledBox>
  );
}
