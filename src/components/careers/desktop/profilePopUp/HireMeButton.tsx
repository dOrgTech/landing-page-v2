import React from 'react'
import {styled, Typography, Grid, ButtonBase} from '@material-ui/core'
import {theme} from "../../../../theme";


const StyleGrid = styled(Grid)({
  width: '100%',
  height: '2.063vw',
  background: 'transparent',
  boxSizing: 'border-box',
  borderBottom: '0.126vw solid #FFFFFF'
});

const StyleText = styled(Typography)({
  width: '100%',
  fontFamily: theme.typography.fontFamily,
  fontSize: '0.9vw',
  fontWeight: 600,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: '1.5px',
  textAlign: "left",
  color: theme.palette.text.primary
});

const StyleArrow = styled('img')({
  width: '1.5vw',
  height: '1.5vw',
  marginLeft: '2vw',
  objectFit: "contain",
  float: 'right'
});

interface Props {
  name: string;
  handleClick: () => void
}

export const HireMeButton: React.FC<Props> = (props: Props) => {

  return (
    <ButtonBase onClick={() => props.handleClick()}>
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