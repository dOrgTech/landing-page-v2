import React from 'react'
import {Box, styled, Typography, Grid, useMediaQuery, useTheme, Theme} from '@material-ui/core'
import { theme } from "../theme";
import { CloseButton } from "./CloseButton";


const StyledBox = styled(Box)({
  margin: 'auto',
  width: '100%',
  height: '14.6rem',
  background: theme.palette.secondary.main,
  boxSizing: 'border-box',
  position: 'relative'
});

const StyledQuote = styled(Typography)({
  maxWidth: '31rem',
  height: '6.375rem',
  fontFamily: theme.typography.fontFamily,
  fontSize: '2.25rem',
  fontWeight: 300,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.72,
  letterSpacing: '-1.08px',
  textAlign: "left",
  color: theme.palette.text.primary
});

const StyledCitation = styled(Typography)({
  width: '100%',
  height: '1.25rem',
  margin: '2rem 0 0 0',
  fontFamily: theme.typography.fontFamily,
  fontSize: '1.125rem',
  fontWeight: 500,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.72,
  letterSpacing: 'normal',
  textAlign: "left",
  color: theme.palette.text.primary
});

const StyledIcon = styled('img')({
  width: '5.6rem',
  height: '3.9rem',
  margin: '1rem',
  objectFit: "contain",
  position: 'relative',
  bottom: '1.6rem'
});

const StyledRings = styled('img')({
  width: '13.5rem',
  height: '13.7rem',
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

export const CloseBox: React.FC<Props> = (props: Props) => {

  const theme: Theme = useTheme();
  const extraLargeScreen = useMediaQuery(theme.breakpoints.up('xl'));

  return (
    <StyledBox className={props.classes}>
      <Grid container spacing={0} direction='row' justify='flex-start' alignItems='flex-start' style={{height: 'inherit'}}>
        {extraLargeScreen &&
        (<Grid container item xs={8} lg={7} xl={6} spacing={0} direction='row' justify='space-evenly' alignItems='center' style={{height: 'inherit'}}>
          <Grid item>
            <StyledIcon src='imgs/quotation-mark-icon.svg' alt={'quotation mark icon'} />
          </Grid>
          <Grid item>
            <StyledQuote><strong>“</strong>{props.quote}<strong>”</strong></StyledQuote>
            <StyledCitation>{props.citation}</StyledCitation>
          </Grid>
        </Grid>)}
        {!extraLargeScreen &&
        (<Grid container item xs={8} lg={7} xl={6} spacing={0} direction='row' justify='space-evenly' alignItems='center' style={{height: 'inherit'}}>
          <Grid item>
            <StyledQuote><strong>“</strong>{props.quote}<strong>”</strong></StyledQuote>
            <StyledCitation>{props.citation}</StyledCitation>
          </Grid>
        </Grid>)}
        <Grid item xs={4} lg={5} xl={6} container direction='row' justify='center' alignItems='center' style={{height: 'inherit'}}>
          <Grid item>
            <CloseButton text={props.buttonText} handleClick={props.onButtonClick} />
          </Grid>
        </Grid>
      </Grid>
      <StyledRings src='imgs/concentric-rings-right.svg' alt={'concentric rings flourish'} />
    </StyledBox>
  );
}