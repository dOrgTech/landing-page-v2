import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
import React from 'react'
import {styled, Grid, ButtonBase} from '@material-ui/core'
import {theme} from "../../../../theme";


const StyleGrid = styled(Grid)({
  width: '3.5vh',
  height: '3.5vh',
  boxSizing: 'border-box',
  backgroundColor: theme.palette.secondary.main,
  borderRadius: '50%',
  fontSize: '2.25vh',
  color: theme.palette.text.primary
});

interface Props {
  handleClick: () => void
  classes?: string;
}

export const ClosePopUpButton: React.FC<Props> = (props: Props) => {

  return (
    <ButtonBase className={props.classes} onClick={() => props.handleClick()}>
      <StyleGrid container spacing={0} justify={'center'} alignItems={'center'}>
        <HighlightOffOutlinedIcon fontSize='inherit'/>
      </StyleGrid>
    </ButtonBase>
  );
}