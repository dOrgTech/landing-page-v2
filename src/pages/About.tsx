import React from "react";
import { useHistory } from 'react-router-dom'
import {Grid, makeStyles, styled, Theme, useMediaQuery, useTheme} from "@material-ui/core";
import { StatBox } from "../components/about/desktop/StatBox";
import { PitchBox } from "../components/about/desktop/PitchBox";
import {PressBox} from "../components/about/desktop/PressBox";
import {Stat, stats, statsMobile} from "../constants/stats";
import { Pitch, pitches } from "../constants/pitches";
import {press} from "../constants/press";
import {AboutTitleBox} from "../components/about/desktop/AboutTitleBox";
import {PitchTitleBox} from "../components/about/desktop/PitchTitleBox";
import {CloseBox} from "../components/about/desktop/CloseBox";
import {LeftMargin} from "../components/LeftMargin";
import {RightMargin} from "../components/RightMargin"
import {routes} from "../constants/routes";
import {borderStyle, borderStyles} from "../theme/styles";
import {AboutTitleBoxMobile} from "../components/about/mobile/AboutTitleBoxMobile";
import {PressBoxMobile} from "../components/about/mobile/PressBoxMobile";
import {StatBoxMobile} from "../components/about/mobile/StatBoxMobile";
import {PitchTitleBoxMobile} from "../components/about/mobile/PitchTitleBoxMobile";
import {PitchBoxMobile} from "../components/about/mobile/PitchBoxMobile";
import {CloseBoxMobile} from "../components/about/mobile/CloseBoxMobile";

// strings
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
  const desktop = useMediaQuery(theme.breakpoints.up('lg'));

  if (desktop) {
    return (
      <Root container spacing={0} direction='row' justify="flex-start" alignItems='flex-start'>
        <LeftMargin xs={1} border={borderStyle} height='116.775vw' centerLineHeight='57.375vw' />
        <ContentContainer container item xs={10} spacing={0} direction='row' justify="center" alignItems='flex-start'>
          <Grid item xs={6}>
            <AboutTitleBox text={ABOUT_TITLE} classes={borders.bottomLeftBorder} />
            <PressBox press={press} classes={borders.bottomLeftBorder} />
          </Grid>
          <StatsContainer container item xs={6} spacing={0} justify="center">
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
              <Grid item xs={6} key={`pitch-${index}`}>
                <PitchBox pitch={pitch} classes={borders.bottomLeftBorder} />
              </Grid>
            ))}
          </PitchesContainer>
          <Grid item xs={12}>
            <CloseBox quote={QUOTE_TEXT} citation={QUOTE_CITATION} buttonText={CLOSE_BUTTON_TEXT} onButtonClick={navigateToContactPage} classes={borders.leftBorder} />
          </Grid>
        </ContentContainer>
        <RightMargin xs={1} border={borderStyle} height='116.775vw' centerLineHeight='57.375vw' longAccentIndex={1}/>
      </Root>
    );
  } else {
    return (
      <Root container spacing={0} direction='row' justify="flex-start" alignItems='flex-start' style={{width: '105vw'}}>
        <LeftMargin xs={1} border={borderStyle} height='550vw' centerLineHeight='180.5vw' />
        <ContentContainer container item xs={10} spacing={0} direction='row' justify="center" alignItems='flex-start' style={{maxWidth: '91vw'}}>
          <Grid item xs={12}>
            <AboutTitleBoxMobile text={ABOUT_TITLE} classes={borders.bottomLeftBorder} />
            <PressBoxMobile press={press} classes={borders.bottomLeftBorder} />
          </Grid>
          <StatsContainer container item xs={12} spacing={0} justify="center">
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
              <Grid item xs={12} key={`pitch-${index}`}>
                <PitchBoxMobile pitch={pitch} classes={borders.bottomLeftBorder} />
              </Grid>
            ))}
          </PitchesContainer>
          <Grid item xs={12}>
            <CloseBoxMobile quote={QUOTE_TEXT} citation={QUOTE_CITATION} buttonText={CLOSE_BUTTON_TEXT} onButtonClick={navigateToContactPage} classes={borders.leftBorder} />
          </Grid>
        </ContentContainer>
        <RightMargin xs={1} border={borderStyle} height='550vw' centerLineHeight='180.5vw' />
      </Root>
    );
  }
}
