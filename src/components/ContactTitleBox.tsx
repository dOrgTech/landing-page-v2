import React from 'react'
import {Box, styled, Typography} from '@material-ui/core'
import { theme } from "../theme";


const StyledBox = styled(Box)({
  margin: 'auto',
  width: '100%',
  height: '57.375rem',
  background: 'transparent',
  boxSizing: 'border-box'
});

const TextContainer = styled(Box)({
  padding: '6.75rem 1.75rem',
  background: 'transparent',
  boxSizing: 'border-box'
});

const StyledTitle = styled(Typography)({
  maxWidth: '36rem',
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

const StyledSubTitle = styled(Typography)({
  margin: '4.25rem 0 0 0',
  fontFamily: theme.typography.fontFamily,
  fontSize: '2rem',
  fontWeight: 600,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 2.19,
  letterSpacing: '-1.6px',
  textAlign: "left",
  color: theme.palette.text.primary
});

const StyledInstructions = styled(Typography)({
  maxWidth: '28.875rem',
  fontFamily: theme.typography.fontFamily,
  fontSize: '1rem',
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
  return (
    <StyledBox className={props.classes}>
      <TextContainer>
        <StyledTitle>{props.title}</StyledTitle>
        <StyledSubTitle>{props.subtitle}</StyledSubTitle>
        <StyledInstructions>{props.instructions}</StyledInstructions>
      </TextContainer>
    </StyledBox>
  );
}