import React from 'react'
import {Box, styled, Typography} from '@material-ui/core'
import { theme } from "../../../theme";


const StyledBox = styled(Box)({
  margin: 'auto',
  width: '100%',
  height: '68.5vw',
  background: 'transparent',
  boxSizing: 'border-box',
  position: 'relative'
});

const TextContainer = styled(Box)({
  padding: '7.6vw 5.7vw',
  background: 'transparent',
  boxSizing: 'border-box',
  position: 'relative',
  zIndex: 1
});

const StyledTitle = styled(Typography)({
  fontFamily: theme.typography.fontFamily,
  fontSize: '6.67vw',
  fontWeight: 600,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: '-0.84px',
  textAlign: "left",
  color: theme.palette.text.primary
});

const StyledSubTitle = styled(Typography)({
  margin: '7vw 0 0 0',
  fontFamily: theme.typography.fontFamily,
  fontSize: '5.7vw',
  fontWeight: 600,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.75,
  letterSpacing: '-0.72px',
  textAlign: "left",
  color: theme.palette.text.primary
});

const StyledInstructions = styled(Typography)({
  maxWidth: '78.5vw',
  fontFamily: theme.typography.fontFamily,
  fontSize: '3.8vw',
  fontWeight: 'normal',
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 2.25,
  letterSpacing: 'normal',
  textAlign: "left",
  color: theme.palette.text.primary
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
  title: string;
  subtitle: string;
  instructions: string;
  classes?: string;
}

export const ContactTitleBoxMobile: React.FC<Props> = (props: Props) => {
  return (
    <StyledBox className={props.classes}>
      <TextContainer>
        <StyledTitle>{props.title}</StyledTitle>
        <StyledSubTitle>{props.subtitle}</StyledSubTitle>
        <StyledInstructions>{props.instructions}</StyledInstructions>
      </TextContainer>
      <StyledRings src='imgs/concentric-rings-left.svg' alt={'concentric rings flourish'}/>
    </StyledBox>
  );
}