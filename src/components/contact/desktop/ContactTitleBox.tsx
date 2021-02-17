import React from 'react'
import {Box, styled, Typography} from '@material-ui/core'
import { theme } from "../../../theme";
import {useDebounce, useWindowSize} from "../../../utils/hooks";


const StyledBox = styled(Box)({
  margin: 'auto',
  width: '100%',
  height: `${window.innerHeight - (0.1 * window.innerWidth)}px`,
  background: 'transparent',
  boxSizing: 'border-box'
});

const TextContainer = styled(Box)({
  padding: '5vw 1.75vw',
  background: 'transparent',
  boxSizing: 'border-box'
});

const StyledTitle = styled(Typography)({
  maxWidth: '36vw',
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

const StyledSubTitle = styled(Typography)({
  margin: '4.25vw 0 0 0',
  fontFamily: theme.typography.fontFamily,
  fontSize: '2vw',
  fontWeight: 600,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 2.19,
  letterSpacing: '-1.6px',
  textAlign: "left",
  color: theme.palette.text.primary
});

const StyledInstructions = styled(Typography)({
  maxWidth: '28.875vw',
  fontFamily: theme.typography.fontFamily,
  fontSize: '1vw',
  fontWeight: 'normal',
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 2.25,
  letterSpacing: 'normal',
  textAlign: "left",
  color: theme.palette.text.primary
});

interface Props {
  title: string;
  subtitle: string;
  instructions: string;
  classes?: string;
}

export const ContactTitleBox: React.FC<Props> = (props: Props) => {

  const windowSize = useWindowSize()
  const debouncedWindowSize = useDebounce(windowSize, 100);
  const containerHeight = Math.max(0.3 * debouncedWindowSize.width, debouncedWindowSize.height - (0.1 * debouncedWindowSize.width));

  return (
    <StyledBox className={props.classes} style={{height: `${containerHeight}px`}}>
      <TextContainer>
        <StyledTitle>{props.title}</StyledTitle>
        <StyledSubTitle>{props.subtitle}</StyledSubTitle>
        <StyledInstructions>{props.instructions}</StyledInstructions>
      </TextContainer>
    </StyledBox>
  );
}