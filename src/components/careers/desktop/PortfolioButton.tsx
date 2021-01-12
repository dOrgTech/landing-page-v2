import React from 'react'
import {styled, Typography, Grid, ButtonBase} from '@material-ui/core'
import { theme } from "../../../theme";


const StyleGrid = styled(Grid)({
  width: '8.75vw',
  height: '2.25vw',
  backgroundColor: theme.palette.secondary.main,
  boxSizing: 'border-box',
  boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
  borderRadius: '5px',
});

const StyleText = styled(Typography)({
  fontFamily: theme.typography.fontFamily,
  fontSize: '0.75vw',
  fontWeight: 500,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: 'normal',
  textAlign: "center",
  color: theme.palette.text.primary
});

// link to FontAwesome license for legal compliance: https://fontawesome.com/license
const PopUpIndicator = styled('img')({
  width: '0.85vw',
  height: '0.85vw',
  objectFit: 'contain',
  filter: 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(170deg) brightness(119%) contrast(117%)'
});

interface Props {
  text: string;
  handleClick: () => void
}

export const PortfolioButton: React.FC<Props> = (props: Props) => {

  return (
    <ButtonBase onClick={() => props.handleClick()}>
      <StyleGrid container spacing={0} justify={'space-evenly'} alignItems={'center'}>
        <Grid item>
          <StyleText>{props.text}</StyleText>
        </Grid>
        <Grid item>
          <PopUpIndicator src='imgs/fa-external-link-alt-solid.svg' alt={'button to open full profile popup window'} />
        </Grid>
      </StyleGrid>
    </ButtonBase>
  );
}