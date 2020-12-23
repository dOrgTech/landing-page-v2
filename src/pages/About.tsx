import React from "react";
import { Box, Grid, styled } from "@material-ui/core";
import { StatBox } from "../components/StatBox";
import { PitchBox } from "../components/PitchBox";
import {PressBox} from "../components/PressBox";
import { Stat, stats } from "../constants/stats";
import { Pitch, pitches } from "../constants/pitches";
import {press} from "../constants/press";
import {AboutTitleBox} from "../components/AboutTitleBox";


const ABOUT_TITLE = 'We are a full-stack Web3 development collective.';

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
      <Grid container spacing={0} justify="center" alignItems='flex-start' style={{width: '85rem'}}>
        <Grid item xs={6}>
          <AboutTitleBox text={ABOUT_TITLE} />
          <PressBox press={press} />
        </Grid>
        <StatsContainer container item xs={6} spacing={0} justify="center">
          {Object.values(stats).map((stat: Stat, index: number) => (
            <Grid item xs={6} key={`stat-${index}`}>
              <StatBox stat={stat} />
            </Grid>
          ))}
        </StatsContainer>
        <PitchesContainer container item spacing={0} justify="center">
          {Object.values(pitches).map((pitch: Pitch, index: number) => (
            <Grid item xs={6} key={`pitch-${index}`}>
              <PitchBox pitch={pitch} />
            </Grid>
          ))}
        </PitchesContainer>
      </Grid>
    </Root>
  );
}
