import React from 'react'
import {styled, Typography, Grid, ButtonBase} from '@material-ui/core'
import { theme } from "../../../theme";


const StyleGrid = styled(Grid)({
  margin: 'auto',
  width: '100%',
  height: '15vw',
  padding: '5vw 5vw 5vw 8.6vw',
  background: 'transparent',
  boxSizing: 'border-box',
  boxShadow: '0px 0px 0px 1.5px' + theme.palette.text.primary,
  color: theme.palette.text.primary,
  transform: 'perspective(1px) translateZ(0)',
  transitionDuration: '0.3s',
  transitionProperty: 'transform',

  '&:hover': {
    transform: 'scale(1.02)'
  },
  zIndex: 1,
  position: 'relative'

});

const StyleText = styled(Typography)({
  width: '100%',
  height: '3.1vw',
  margin: 'auto',
  padding: 0,
  fontFamily: theme.typography.fontFamily,
  fontSize: '3vw',
  fontWeight: 'bold',
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: '1.5px',
  textAlign: "center",
  color: theme.palette.text.primary,
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