import React from 'react'
import {styled, Typography, Grid, ButtonBase} from '@material-ui/core'
import {theme} from "../../../../theme";


const StyleGrid = styled(Grid)({
  width: '100%',
  height: '3.85vh',
  background: 'transparent',
  boxSizing: 'border-box',
  borderBottom: '0.235vh solid #FFFFFF'
});

const StyleText = styled(Typography)({
  width: '100%',
  fontFamily: theme.typography.fontFamily,
  fontSize: '1.7vh',
  fontWeight: 600,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: '1.5px',
  textAlign: "left",
  color: theme.palette.text.primary
});

const StyleArrow = styled('img')({
  width: '2.8vh',
  height: '2.8vh',
  marginLeft: '3.73vh',
  objectFit: "contain",
  float: 'right'
});

interface Props {
  name: string;
  handleClick: () => void;
  classes?: string;
}

export const HireMeButton: React.FC<Props> = (props: Props) => {

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