import React from "react";
import { useHistory } from 'react-router-dom'
import {Grid, makeStyles, styled, Theme, useMediaQuery, useTheme} from "@material-ui/core";
import { StatBox } from "../components/StatBox";
import { PitchBox } from "../components/PitchBox";
import {PressBox} from "../components/PressBox";
import {Stat, stats, statsMobile} from "../constants/stats";
import { Pitch, pitches } from "../constants/pitches";
import {press} from "../constants/press";
import {AboutTitleBox} from "../components/AboutTitleBox";
import {PitchTitleBox} from "../components/PitchTitleBox";
import {CloseBox} from "../components/CloseBox";
import {LongLeftMargin} from "../components/LongLeftMargin";
import {LongRightMargin} from "../components/LongRightMargin"
import {routes} from "../constants/routes";
import {borderStyle, borderStyles} from "../theme/styles";
import {AboutTitleBoxMobile} from "../components/AboutTitleBoxMobile";
import {PressBoxMobile} from "../components/PressBoxMobile";
import {StatBoxMobile} from "../components/StatBoxMobile";
import {PitchTitleBoxMobile} from "../components/PitchTitleBoxMobile";


const ABOUT_TITLE = 'We are a full-stack Web3 development collective.';
const PITCHES_TITLE = 'What’s it like to work with us?';
const QUOTE_TEXT = 'dOrg helped me save 15% on car insurance.';
const QUOTE_CITATION = 'Satoshi - Bitcoin, Inc.';
const CLOSE_BUTTON_TEXT = 'GET IN TOUCH';

const Root = styled(Grid)({
  margins: 'auto',
  width: '100vw'
});

const ContentContainer = styled(Grid)({
  maxWidth: '85vw'
});

const StatsContainer = styled(Grid)({
  width: '100%'
});

const PitchesContainer = styled(Grid)({
  width: '100%'
});

const useBorders = makeStyles(borderStyles);

export const About: React.FC = () => {

  const history = useHistory();
  const navigateToContactPage = () => history.push(routes.contact.path);

  const borders = useBorders();

  const theme: Theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('md'));

  if (desktop) {
    return (
      <Root container spacing={0} direction='row' justify="flex-start" alignItems='flex-start'>
        <LongLeftMargin xs={1} border={borderStyle} />
        <ContentContainer container item xs={10} spacing={0} direction='row' justify="center" alignItems='flex-start'>
          <Grid item xs={12} lg={6}>
            <AboutTitleBox text={ABOUT_TITLE} classes={borders.bottomLeftBorder} />
            <PressBox press={press} classes={borders.bottomLeftBorder} />
          </Grid>
          <StatsContainer container item xs={12} lg={6} spacing={0} justify="center">
            {Object.values(stats).map((stat: Stat, index: number) => (
              <Grid item xs={6} key={`stat-${index}`}>
                <StatBox stat={stat} classes={borders.bottomLeftBorder} />
              </Grid>
            ))}
          </StatsContainer>
          <Grid item xs={12}>
            <PitchTitleBox text={PITCHES_TITLE} classes={borders.bottomLeftBorder} accentStyle={borderStyle} />
          </Grid>
          <PitchesContainer container item xs={12} spacing={0} justify="center">
            {Object.values(pitches).map((pitch: Pitch, index: number) => (
              <Grid item xs={12} lg={6} key={`pitch-${index}`}>
                <PitchBox pitch={pitch} classes={borders.bottomLeftBorder} />
              </Grid>
            ))}
          </PitchesContainer>
          <Grid item xs={12}>
            <CloseBox quote={QUOTE_TEXT} citation={QUOTE_CITATION} buttonText={CLOSE_BUTTON_TEXT} onButtonClick={navigateToContactPage} classes={borders.leftBorder} />
          </Grid>
        </ContentContainer>
        <LongRightMargin xs={1} border={borderStyle} />
      </Root>
    );
  } else {
    return (
      <Root container spacing={0} direction='row' justify="flex-start" alignItems='flex-start'>
        <LongLeftMargin xs={1} border={borderStyle} />
        <ContentContainer container item xs={10} spacing={0} direction='row' justify="center" alignItems='flex-start'>
          <Grid item xs={12} lg={6}>
            <AboutTitleBoxMobile text={ABOUT_TITLE} classes={borders.bottomLeftBorder} />
            <PressBoxMobile press={press} classes={borders.bottomLeftBorder} />
          </Grid>
          <StatsContainer container item xs={12} lg={6} spacing={0} justify="center">
            {Object.values(statsMobile).map((stat: Stat, index: number) => (
              <Grid item xs={6} key={`statMobile-${index}`}>
                <StatBoxMobile stat={stat} classes={borders.bottomLeftBorder} />
              </Grid>
            ))}
          </StatsContainer>
          <Grid item xs={12}>
            <PitchTitleBoxMobile text={PITCHES_TITLE} classes={borders.bottomLeftBorder} />
          </Grid>
          <PitchesContainer container item xs={12} spacing={0} justify="center">
            {Object.values(pitches).map((pitch: Pitch, index: number) => (
              <Grid item xs={12} lg={6} key={`pitch-${index}`}>
                <PitchBox pitch={pitch} classes={borders.bottomLeftBorder} />
              </Grid>
            ))}
          </PitchesContainer>
          <Grid item xs={12}>
            <CloseBox quote={QUOTE_TEXT} citation={QUOTE_CITATION} buttonText={CLOSE_BUTTON_TEXT} onButtonClick={navigateToContactPage} classes={borders.leftBorder} />
          </Grid>
        </ContentContainer>
        <LongRightMargin xs={1} border={borderStyle} />
      </Root>
    );
  }
}
