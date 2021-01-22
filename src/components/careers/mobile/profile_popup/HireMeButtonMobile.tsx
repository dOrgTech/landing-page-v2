import React from 'react'
import {styled, Typography, Grid, ButtonBase} from '@material-ui/core'
import {theme} from "../../../../theme";


const StyleGrid = styled(Grid)({
  width: '100%',
  height: '7.5vw',
  background: 'transparent',
  boxSizing: 'border-box',
  borderBottom: '0.48vw solid #FFFFFF'
});

const StyleText = styled(Typography)({
  width: '100%',
  fontFamily: theme.typography.fontFamily,
  fontSize: '2.86vw',
  fontWeight: 'bold',
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: '1.2px',
  textAlign: "left",
  color: theme.palette.text.primary
});

const StyleArrow = styled('img')({
  width: '5.7vw',
  height: '5.7vw',
  marginLeft: '6.2vw',
  objectFit: "contain",
  float: 'right'
});

interface Props {
  name: string;
  handleClick: () => void;
  classes?: string;
}

export const HireMeButtonMobile: React.FC<Props> = (props: Props) => {

  return (
    <ButtonBase className={props.classes} onClick={() => props.handleClick()}>
      <StyleGrid container spacing={0} justify={'flex-end'} alignItems={'center'}>
        <Grid item>
          <StyleText>{`HIRE ${props.name.toUpperCase()}`}</StyleText>
        </Grid>
        <Grid item>
          <StyleArrow src='imgs/right-arrow.svg' alt={'right-pointing arrow'} />
        </Grid>
      </StyleGrid>
    </ButtonBase>
  );
}