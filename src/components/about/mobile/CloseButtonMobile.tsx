import React from 'react'
import {styled, Typography, Grid, ButtonBase} from '@material-ui/core'
import { theme } from "../../../theme";


const StyleGrid = styled(Grid)({
  margin: 'auto',
  width: '100%',
  height: '17.15vw',
  padding: '5.7vw 5.7vw 5.7vw 9.5vw',
  background: 'transparent',
  boxSizing: 'border-box',
  boxShadow: '0 0.715vw 1.43vw 0 rgba(0, 0, 0, 0.16), inset 0 0.715vw 1.43vw 0 rgba(0, 0, 0, 0.16)',
  borderRadius: 0,
  border: 'solid 2px ' + theme.palette.text.primary,
  '&:hover': {
    border: 'solid 1px ' + theme.palette.text.primary,
  },
  zIndex: 1
});

const StyleText = styled(Typography)({
  width: '100%',
  height: '3.81vw',
  margin: 'auto',
  padding: 0,
  fontFamily: theme.typography.fontFamily,
  fontSize: '3.57vw',
  fontWeight: 'bold',
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: '1.5px',
  textAlign: "center",
  color: theme.palette.secondary.contrastText,
});

const StyleArrow = styled('img')({
  width: '5.7vw',
  height: '5.7vw',
  margin: '0 0 0 6.67vw',
  padding: 0,
  objectFit: "contain"
});

interface Props {
  text: string;
  handleClick: () => void;
  classes?: string;
}

export const CloseButtonMobile: React.FC<Props> = (props: Props) => {

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