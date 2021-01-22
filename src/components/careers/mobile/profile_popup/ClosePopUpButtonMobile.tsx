import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
import React from 'react'
import {styled, Grid, ButtonBase} from '@material-ui/core'
import {theme} from "../../../../theme";


const StyleGrid = styled(Grid)({
  width: '7vw',
  height: '7vw',
  boxSizing: 'border-box',
  backgroundColor: theme.palette.secondary.main,
  borderRadius: '50%',
  fontSize: '4.5vw',
  color: theme.palette.text.primary
});

interface Props {
  handleClick: () => void
  classes?: string;
}

export const ClosePopUpButtonMobile: React.FC<Props> = (props: Props) => {

  return (
    <ButtonBase className={props.classes} onClick={() => props.handleClick()}>
      <StyleGrid container spacing={0} justify={'center'} alignItems={'center'}>
        <HighlightOffOutlinedIcon fontSize='inherit'/>
      </StyleGrid>
    </ButtonBase>
  );
}