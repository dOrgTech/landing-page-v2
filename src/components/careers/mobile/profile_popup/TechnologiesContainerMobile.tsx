import React from 'react';
import {styled, Grid, makeStyles} from '@material-ui/core';
import {ChipLargeMobile} from "./ChipLargeMobile";

const StyledGrid = styled(Grid)({
  width: '100%',
  height: '100%',
  background: 'transparent',
  boxSizing: 'border-box'
});

const useChipStyle = makeStyles({
  chip: {
    margin: '0 3vw 2vw 0'
  }
});

interface Props {
  technologies: string[];
  classes?: string;
}

export const TechnologiesContainerMobile: React.FC<Props> = (props: Props) => {

  const chipStyle = useChipStyle();

  return (
    <StyledGrid className={props.classes} container spacing={0} direction='row' justify='flex-start' alignItems='flex-start'>
      {props.technologies.map((technology: string, i: number) => (
        <Grid item key={`technology-${i}`}>
          <ChipLargeMobile classes={chipStyle.chip} text={technology} />
        </Grid>
      ))}
    </StyledGrid>
  );
}