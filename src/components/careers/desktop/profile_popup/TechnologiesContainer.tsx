import React from 'react';
import {styled, Grid, makeStyles} from '@material-ui/core';
import {ChipLarge} from "./ChipLarge";

const StyledGrid = styled(Grid)({
  width: '43.6vh',
  height: '100%',
  background: 'transparent',
  boxSizing: 'border-box'
});

const useChipStyle = makeStyles({
  chip: {
    margin: '0 1.4vh 0.95vh 0'
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