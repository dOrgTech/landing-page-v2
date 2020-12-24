import React from "react";
import { Box, Grid, styled } from "@material-ui/core";
import { StatBox } from "../components/StatBox";
import { PitchBox } from "../components/PitchBox";
import {PressBox} from "../components/PressBox";
import { Stat, stats } from "../constants/stats";
import { Pitch, pitches } from "../constants/pitches";
import {press} from "../constants/press";
import {AboutTitleBox} from "../components/AboutTitleBox";
import {PitchTitleBox} from "../components/PitchTitleBox";
import {CloseBox} from "../components/CloseBox";
import {routes} from "../constants/routes";


const ABOUT_TITLE = 'We are a full-stack Web3 development collective.';
const PITCHES_TITLE = 'What’s it like to work with us?';
const QUOTE_TEXT = 'dOrg helped me save 15% on car insurance.';
const QUOTE_CITATION = 'Satoshi - Bitcoin, Inc.';
const CLOSE_BUTTON_TEXT = 'GET IN TOUCH';

const Root = styled(Box)({
  margins: 'auto'
});

const Container = styled(Grid)({
  width: '85rem'
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
      <Container container spacing={0} justify="center" alignItems='flex-start'>
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
        <Grid item xs={12}>
          <PitchTitleBox text={PITCHES_TITLE} />
        </Grid>
        <PitchesContainer container item spacing={0} justify="center">
          {Object.values(pitches).map((pitch: Pitch, index: number) => (
            <Grid item xs={6} key={`pitch-${index}`}>
              <PitchBox pitch={pitch} />
            </Grid>
          ))}
        </PitchesContainer>
        <CloseBox quote={QUOTE_TEXT} citation={QUOTE_CITATION} buttonText={CLOSE_BUTTON_TEXT} buttonNavTarget={routes.contact.path} />
      </Container>
    </Root>
  );
}
