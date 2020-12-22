import React from "react";
import { Box, Grid, styled } from "@material-ui/core";
import { StatBox } from "../components/StatBox";
import { PitchBox } from "../components/PitchBox";
import { Stat, stats } from "../constants/stats";
import { Pitch, pitches } from "../constants/pitches";

const Root = styled(Box)({
  margins: 'auto'
});

const StatsContainer = styled(Grid)({
  width: '42.5rem'
});

const PitchesContainer = styled(Grid)({
  width: '85rem'
});

export const About: React.FC = () => {
  return (
    <Root>
      <StatsContainer container spacing={0} justify="center">
        {Object.values(stats).map((stat: Stat, index: number) => (
          <Grid item xs={6} key={`stat-${index}`}>
            <StatBox stat={stat} />
          </Grid>
        ))}
      </StatsContainer>
      <PitchesContainer container spacing={0} justify="center">
        {Object.values(pitches).map((pitch: Pitch, index: number) => (
          <Grid item xs={6} key={`pitch-${index}`}>
            <PitchBox pitch={pitch} />
          </Grid>
        ))}
      </PitchesContainer>
    </Root>
  );
}
