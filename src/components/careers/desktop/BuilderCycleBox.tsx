import React from 'react'
import {styled, Grid} from '@material-ui/core'
import {hexToRGBA} from "../../../utils/colorUtils";
import {theme} from "../../../theme";

const BUILDER_CYCLE_SVG = 'imgs/builder-cycle.svg'

const StyledGrid = styled(Grid)({
  width: '42.5vw',
  height: '30vw',
  paddingBottom: '3%',
  boxSizing: 'border-box',
  backgroundColor: 'rgba(0, 0, 0, 0.15)',
  '&:hover': {
    backgroundColor: hexToRGBA(theme.palette.secondary.main, 0.15)
  }
});

const Cycle = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
});


interface Props {
  classes?: string;
}

export const BuilderCycleBox: React.FC<Props> = (props: Props) => {

  return (
    <StyledGrid className={props.classes} container justify={'center'} alignItems={'center'}>
      <Grid item style={{width: '100%', height: '100%'}}>
        <Cycle src={BUILDER_CYCLE_SVG} />
      </Grid>
    </StyledGrid>
  );
}