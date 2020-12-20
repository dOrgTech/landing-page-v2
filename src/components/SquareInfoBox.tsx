import React from 'react'
import {Box, styled, Typography, Grid} from '@material-ui/core'

const StyleBox = styled(Box)({
  width: '21.25rem',
  height: '19.125rem',
  padding: '1.75rem 1.75rem 1.75rem 1.75rem',
  opacity: '0.15',
  backgroundColor: 'var(--black)',
  boxSizing: 'border-box'
});

const StyleText = styled(Typography)({
  width: '100%',
  height: '100%',
  margin: '1.938rem 0 0 0',
  fontFamily: 'Spartan',
  fontSize: '0.938rem',
  fontWeight: 'bold',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 1.2,
  letterSpacing: '1.5px',
  textAlign: 'center',
  color: 'var(--dark-seafoam)'
});

const StyleNumber = styled(Typography)({
  width: "100%",
  height: "100%",
  margin: "0 0 1.938rem 0",
  fontFamily: "Spartan",
  fontSize: "3.25rem",
  fontWeight: "bold",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.35,
  letterSpacing: "normal",
  textAlign: "center",
  color: "var(--white)"
});

const StyleIcon = styled('img')({
  width: "1.5rem",
  height: "1.5rem",
  margin: '0 0 3.5rem 1.625rem',
  objectFit: "contain",
  float: 'right'
});

type SquareInfoBoxProps = {
    text: string
    number: string
    iconPath: string
};

export function SquareInfoBox(props: SquareInfoBoxProps): JSX.Element {

  return (
    <StyleBox>
      <StyleIcon src={props.iconPath} alt='icon' />
      <Grid container direction='column' spacing={0} justify='center' alignItems='center'>
        <div>
          <StyleNumber>{props.number}</StyleNumber>
          <StyleText>{props.text}</StyleText>
        </div>
      </Grid>
    </StyleBox>
  );
}
