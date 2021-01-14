import React from 'react';
import {styled, Typography, Grid, makeStyles} from '@material-ui/core';
import {ChipLarge} from "./ChipLarge";

const StyledGrid = styled(Grid)({
  width: '23.375vw',
  height: '100%',
  background: 'transparent',
  boxSizing: 'border-box'
});

const useChipStyle = makeStyles({
  chip: {
    margin: '0 0.75vw 0.5vw 0'
  }
});

interface Props {
  technologies: string[];
  classes?: string;
}

export const TechnologiesContainer: React.FC<Props> = (props: Props) => {

  const chipStyle = useChipStyle();

  return (
    <StyledGrid className={props.classes} container spacing={0} direction='row' justify='flex-start' alignItems='flex-start'>
      {props.technologies.map((technology: string, i: number) => (
        <Grid item key={`technology-${i}`}>
          <ChipLarge classes={chipStyle.chip} text={technology} />
        </Grid>
      ))}
    </StyledGrid>
  );
}