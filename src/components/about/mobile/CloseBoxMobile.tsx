import React from 'react'
import {Box, styled, Typography, Grid} from '@material-ui/core'
import { theme } from "../../../theme";
import {CloseButtonMobile} from "./CloseButtonMobile";


const StyledBox = styled(Box)({
  margin: 'auto',
  width: '100%',
  height: '25.5rem',
  background: theme.palette.secondary.main,
  boxSizing: 'border-box',
  position: 'relative'
});

const StyledQuote = styled(Typography)({
  maxWidth: '19.438rem',
  margin: '0 0 -1.125rem 0',
  fontFamily: theme.typography.fontFamily,
  fontSize: '2.25rem',
  fontWeight: 300,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.72,
  letterSpacing: '-1.08px',
  textAlign: "center",
  color: theme.palette.text.primary
});

const StyledCitation = styled(Typography)({
  width: '100%',
  fontFamily: theme.typography.fontFamily,
  fontSize: '1.125rem',
  fontWeight: 600,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: '-0.54px',
  textAlign: "center",
  color: theme.palette.text.primary
});

const StyledRings = styled('img')({
  width: '9.064rem',
  height: '9.171rem',
  objectFit: 'contain',
  transform: 'scaleX(-1)',
  position: 'absolute',
  top: 0,
  right: 0
});

interface Props {
  quote: string;
  citation: string;
  buttonText: string;
  onButtonClick: () => void;
  classes?: string;
}

export const CloseBoxMobile: React.FC<Props> = (props: Props) => {

  return (
    <StyledBox className={props.classes}>
      <Grid container spacing={0} direction='column' justify='space-evenly' alignItems='center' style={{height: 'inherit', width: 'inherit'}}>
        <Grid item>
          <StyledQuote><strong>“</strong>{props.quote}<strong>”</strong></StyledQuote>
        </Grid>
        <Grid item>
          <StyledCitation>{props.citation}</StyledCitation>
        </Grid>
        <Grid item>
          <CloseButtonMobile text={props.buttonText} handleClick={props.onButtonClick} />
        </Grid>
      </Grid>
      <StyledRings src='imgs/concentric-rings-right.svg' alt={'concentric rings flourish'} />
    </StyledBox>
  );
}