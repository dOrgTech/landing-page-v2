import React from 'react'
import {Box, styled, Typography, Grid, Button} from '@material-ui/core'
import { theme } from "../theme";
import {CloseButton} from "./CloseButton";


const StyleBox = styled(Box)({
  margin: 'auto',
  width: '85.688rem',
  height: '14.563rem',
  padding: '0 0 0 5rem',
  background: theme.palette.secondary.main,
  boxSizing: 'border-box',
  position: 'relative'
});

const StyleQuote = styled(Typography)({
  width: '33.25rem',
  height: '6.375rem',
  margin: '2.3rem 15.312rem 1.938rem 0',
  padding: 0,
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

const StyleCitation = styled(Typography)({
  width: '100%',
  height: '1.25rem',
  margin: '1.25rem 0 2.563rem 0',
  padding: 0,
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

const StyleIcon = styled('img')({
  width: '5.626rem',
  height: '3.917rem',
  margin: '4.25rem 4.937rem 3.02rem 0',
  objectFit: "contain",
  float: 'left'
});

const StyleRings = styled('img')({
  width: '13.524rem',
  height: '13.683rem',
  margin: '0',
  padding: '0',
  objectFit: 'contain',
  transform: 'scaleX(-1)',
  position: 'absolute',
  top: 0,
  right: 0
});

interface Props {
  quote: string;
  citation: string;
}

export const CloseBox: React.FC<Props> = (props: Props) => {
  return (
    <StyleBox>
      <Grid container direction='row' justify='flex-start' alignItems='flex-start' style={{height: 'inherit'}}>
        <Grid item>
          <StyleIcon src='imgs/Component 33 – 1.svg' alt={'quotation marks icon'} />
        </Grid>
        <Grid item>
          <StyleQuote><strong>“</strong>{props.quote}<strong>”</strong></StyleQuote>
          <StyleCitation>{props.citation}</StyleCitation>
        </Grid>
        <Grid item style={{height: 'inherit'}}>
          <Grid container direction='row' justify='flex-start' alignItems='center' style={{height: 'inherit'}}>
            <CloseButton text='GET IN TOUCH' border />
          </Grid>
        </Grid>
      </Grid>
      <StyleRings src='imgs/concentric-rings-right.svg' alt={'concentric rings flourish'} />
    </StyleBox>
  );
}