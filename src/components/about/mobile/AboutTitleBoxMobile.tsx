import React from 'react'
import {Box, styled, Typography} from '@material-ui/core'
import { theme } from "../../../theme";

const StyledBox = styled(Box)({
  margin: 'auto',
  width: '100%',
  height: '45vw',
  background: 'transparent',
  boxSizing: 'border-box',
  position: 'relative'
});

const StyledText = styled(Typography)({
  maxWidth: '74vw',
  padding: '6.5vw 5.5vw',
  fontFamily: theme.typography.fontFamily,
  fontSize: '6.67vw',
  fontWeight: 600,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.5,
  letterSpacing: '-0.84px',
  textAlign: "left",
  color: theme.palette.text.primary,
  position: 'relative',
  zIndex: 1
});

const StyledRings = styled('img')({
  width: '46.4vw',
  height: '47vw',
  objectFit: 'contain',
  position: 'absolute',
  top: -3,
  right: 0,
  zIndex: 0
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
