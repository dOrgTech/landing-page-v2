import React from "react";
import ReactGA from "react-ga";
import { useHistory } from 'react-router-dom'
import {Grid, makeStyles, styled, Theme, useMediaQuery, useTheme} from "@material-ui/core";
import { StatBox } from "../components/about/desktop/StatBox";
import { PitchBox } from "../components/about/desktop/PitchBox";
import {PressBox} from "../components/about/desktop/PressBox";
import {Stat, stats, statsMobile} from "../constants/stats";
import { Pitch, pitches } from "../constants/pitches";
import {press} from "../constants/press";
import {quotes} from "../constants/quotes";
import {AboutTitleBox} from "../components/about/desktop/AboutTitleBox";
import {CloseBox} from "../components/about/desktop/CloseBox";
import {LeftMargin} from "../components/LeftMargin";
import {RightMargin} from "../components/RightMargin"
import {routes} from "../constants/routes";
import {borderStyle, borderStyles, getSonarAnimation} from "../theme/styles";
import {AboutTitleBoxMobile} from "../components/about/mobile/AboutTitleBoxMobile";
import {PressBoxMobile} from "../components/about/mobile/PressBoxMobile";
import {StatBoxMobile} from "../components/about/mobile/StatBoxMobile";
import {PitchTitleBoxMobile} from "../components/about/mobile/PitchTitleBoxMobile";
import {PitchBoxMobile} from "../components/about/mobile/PitchBoxMobile";
import {CloseBoxMobile} from "../components/about/mobile/CloseBoxMobile";
import {useMembers} from "../utils/hooks";

// strings
const ABOUT_TITLE = 'We are a full-stack Web3 development collective.';
const PITCHES_TITLE = 'What’s it like to work with us?';
const QUOTE_TEXT = 'Really great experiences working with the dOrg team.';
const QUOTE_CITATION = 'Lillian Wang - Centrality';
const CLOSE_BUTTON_TEXT = 'GET IN TOUCH';

const Root = styled(Grid)({
  width: '100vw',
  minWidth: '100vw',
  maxWidth: '100vw'
});

const ContentContainer = styled(Grid)({
  width: '85vw'
});

const StatsContainer = styled(Grid)({
  width: '100%'
});

const PitchesContainer = styled(Grid)({
  width: '100%'
});

const StyledRings = styled('img')({
  width: '19.125vw',
  height: '19.063vw',
  objectFit: 'contain',
  position: 'absolute',
  top: 0,
  right: 0,
  zIndex: 1
});

const useSonarAnimation= getSonarAnimation('30vw', 3);
const useBorders = makeStyles(borderStyles);

export const About: React.FC = () => {

  ReactGA.pageview('/about');

  const history = useHistory();
  const navigateToContactPage = () => history.push(routes.contact.path);

  const borders = useBorders();
  const sonarAnimation = useSonarAnimation();
  const theme: Theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('lg'));

  const {projects, tvl, clients, builders, lifetime, revenue} = desktop ? stats : statsMobile;
  // request members from server and update num builders
  const dynamicBuilders = {...builders, stat: useMembers().length};
  const statsList = [projects, tvl, clients, dynamicBuilders, lifetime, revenue];

  if (desktop) {
    return (
      <Root container spacing={0} direction='row' justify="flex-start" alignItems='flex-start'>
        <LeftMargin border={borderStyle} height='100%' centerLineHeight='57.375vw' />
        <ContentContainer container item spacing={0} direction='row' justify="center" alignItems='flex-start' className={`${borders.leftBorder} ${borders.rightBorder}`}>
          <Grid item xs={6}>
            <AboutTitleBox text={ABOUT_TITLE} classes={borders.bottomBorder} />
            <PressBox press={press} classes={borders.bottomBorder} />
            <AboutTitleBox text={PITCHES_TITLE} classes={borders.bottomBorder} />
          </Grid>
          <StatsContainer container item xs={6} spacing={0} justify="center">
            {statsList.map((stat: Stat, index: number) => (
              <Grid item xs={6} key={`stat-${index}`}>
                <StatBox stat={stat} classes={borders.bottomLeftBorder} />
              </Grid>
            ))}
          </StatsContainer>
          <Grid item xs={12} style={{position: 'relative'}}>
            <StyledRings src='imgs/concentric-rings-left.svg' alt={'concentric rings flourish'} className={sonarAnimation.animate}/>
          </Grid>
          <PitchesContainer container item xs={12} spacing={0} justify="center">
            {Object.values(pitches).map((pitch: Pitch, index: number) => (
              <Grid item xs={6} key={`pitch-${index}`}>
                <PitchBox pitch={pitch} classes={index % 2 === 0 ? borders.bottomBorder : borders.bottomLeftBorder} />
              </Grid>
            ))}
          </PitchesContainer>
          <Grid item xs={12}>
            <CloseBox quotes={quotes} buttonText={CLOSE_BUTTON_TEXT} onButtonClick={navigateToContactPage} />
          </Grid>
        </ContentContainer>
        <RightMargin border={borderStyle}
          height='100%'
          accentContainerHeight={`${window.innerHeight - (0.1 * window.innerWidth)}px`}
          centerLineHeight={`${(0.67375 * window.innerWidth) - window.innerHeight}px`}
          longAccentIndex={1}/>
      </Root>
    );
  } else {
    return (
      <Root container spacing={0} direction='row' justify="flex-start" alignItems='flex-start'>
        <LeftMargin border={borderStyle} height='550vw' centerLineHeight='180.5vw' />
        <ContentContainer container item spacing={0} direction='row' justify="center" alignItems='flex-start' style={{width: '90vw'}}
          className={borders.rightBorder}>
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
        <RightMargin border={borderStyle} height='550vw' centerLineHeight='180.5vw' />
      </Root>
    );
  }
}
