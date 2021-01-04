import React from 'react'
import {styled, Typography, Grid, ButtonBase} from '@material-ui/core'
import { theme } from "../../../theme";


const StyleGrid = styled(Grid)({
  margin: 'auto',
  width: '100%',
  height: '4.5rem',
  padding: '1.5rem 1.5rem 1.5rem 2.5rem',
  background: 'transparent',
  boxSizing: 'border-box',
  boxShadow: '0 0.1875rem 0.375rem 0 rgba(0, 0, 0, 0.16), inset 0 0.1875rem 0.375rem 0 rgba(0, 0, 0, 0.16)',
  borderRadius: 0,
  border: 'solid 2px ' + theme.palette.text.primary,
  '&:hover': {
    border: 'solid 1px ' + theme.palette.text.primary,
  },
  zIndex: 1
});

const StyleText = styled(Typography)({
  width: '100%',
  height: '1rem',
  margin: 'auto',
  padding: 0,
  fontFamily: theme.typography.fontFamily,
  fontSize: '0.938rem',
  fontWeight: 'bold',
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: '1.5px',
  textAlign: "center",
  color: theme.palette.text.primary
});

const StyleArrow = styled('img')({
  width: '1.5rem',
  height: '1.5rem',
  margin: '0 0 0 1.75rem',
  padding: 0,
  objectFit: "contain"
});

interface Props {
  text: string;
  handleClick: () => void
}

export const CloseButtonMobile: React.FC<Props> = (props: Props) => {

  return (
    <ButtonBase onClick={() => props.handleClick()}>
      <StyleGrid container spacing={0} justify={'space-between'} alignItems={'center'}>
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