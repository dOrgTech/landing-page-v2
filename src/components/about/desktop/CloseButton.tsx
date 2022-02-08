import React from 'react'
import {styled, Typography, Grid, ButtonBase} from '@material-ui/core'
import { theme } from "../../../theme";


const StyleGrid = styled(Grid)({
  margin: 'auto',
  width: '100%',
  height: '4.5vw',
  padding: '1.5vw 1.5vw 1.5vw 2.5vw',
  background: 'transparent',
  boxSizing: 'border-box',
  borderRadius: 0,
  border: 'solid 2px ' + theme.palette.text.primary,
  color: theme.palette.text.primary,
  '&:hover': {
    border: 'solid 1px ' + theme.palette.text.primary,
  },
  '&:focus': {
    border: 'solid 1px ' + theme.palette.text.primary,
  },
  zIndex: 1
});

const StyleText = styled(Typography)({
  width: '100%',
  height: '1vw',
  margin: 'auto',
  padding: 0,
  fontFamily: theme.typography.fontFamily,
  fontSize: '0.938vw',
  fontWeight: 'bold',
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: '1.5px',
  textAlign: "center",
});

const StyleArrow = styled('img')({
  width: '1.5vw',
  height: '1.5vw',
  margin: '0 0 0 1.75vw',
  padding: 0,
  objectFit: "contain"
});

interface Props {
  text: string;
  handleClick: () => void
  classes?: string;
}

export const CloseButton: React.FC<Props> = (props: Props) => {

  return (
    <ButtonBase onClick={() => props.handleClick()}>
      <StyleGrid className={props.classes} container spacing={0} justify={'space-between'} alignItems={'center'}>
        <Grid item>
          <StyleText>{props.text}</StyleText>
        </Grid>
        <Grid item>
          <StyleArrow src='imgs/right-arrow.svg' alt={'right-pointing arrow'} />
        </Grid>
      </StyleGrid>
    </ButtonBase>
  );
}