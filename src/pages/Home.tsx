import {Grid, makeStyles, styled, Theme, useMediaQuery, useTheme} from "@material-ui/core";
import React from "react";
import ReactGA from "react-ga";
import {ClientContainer} from "../components/home/desktop/ClientContainer";
import {companies} from "../constants/companies";
import {communities} from "../constants/communities";
import {LeftMargin} from "../components/LeftMargin";
import {borderStyle, borderStyles} from "../theme/styles";
import {RightMargin} from "../components/RightMargin";
import {HomeTitleBox} from "../components/home/desktop/HomeTitleBox";
import {HomeTitleBoxMobile} from "../components/home/mobile/HomeTItleBoxMobile";
import {ClientTabsMobile} from "../components/home/mobile/ClientTabsMobile";

const TITLE_TEXT_PRIMARY = 'We build';
const TITLE_TEXT_SECONDARY = 'Dapps';
const SUBTITLE_TEXT = 'We’ve helped some of Web3’s top projects design, code and ship.';
const COMPANIES_TITLE = 'COMPANIES';
const COMMUNITIES_TITLE = 'COMMUNITIES';


const Root = styled(Grid)({
  margins: 'auto',
  width: '100vw',
  position: 'relative',
  zIndex: 0
});

const ContentContainer = styled(Grid)({
  width: '85vw',
  position: 'relative'
});

const PageHalf = styled(Grid)({
  width: '42.5vw',
  paddingTop: '3.125vw',
  borderLeft: borderStyle
})

const useTitlePositionStyle = makeStyles({
  location: {
    position: 'absolute',
    top: '-3vw',
    left: '1.75vw',
    zIndex: 0
  }
})

const StyledRings = styled('img')({
  width: 0,
  height: 0,
  objectFit: 'contain',
  position: 'absolute',
  transform: 'scaleY(-1)',
  bottom: 0,
  right: 0,
  zIndex: 0
});

const useSonarAnimation= makeStyles(theme => ({
  '@keyframes sonar': {
    from: {
      width: 0,
      height: 0,
      opacity: 1
    },
    to: {
      width: '30vw',
      height: '30vw',
      opacity: 0
    }
  },
  animate: {
    animation: `$sonar 3s ease-out infinite`,
  }
}));

const useBorders = makeStyles(borderStyles);

export const Home: React.FC = () => {

  ReactGA.pageview('/');

  const titlePosition = useTitlePositionStyle();
  const borders = useBorders();
  const sonarAnimation = useSonarAnimation();
  const theme: Theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('lg'));

  if (desktop) {
    return (
      <Root container spacing={0} direction='row' justify="flex-start" alignItems='flex-start'>
        <LeftMargin border={borderStyle} height={'5vh'} />
        <ContentContainer container item spacing={0} direction='row' justify="center" alignItems='flex-start' className={borders.rightBorder}>
          <PageHalf item xs={6}>
            <ClientContainer title={COMPANIES_TITLE} clients={companies} isOnLeft />
          </PageHalf>
          <PageHalf item xs={6}>
            <ClientContainer title={COMMUNITIES_TITLE} clients={communities} />
          </PageHalf>
          <HomeTitleBox classes={titlePosition.location}
            titleTextPrimary={TITLE_TEXT_PRIMARY}
            titleTextSecondary={TITLE_TEXT_SECONDARY}
            subTitleText={SUBTITLE_TEXT} />
          <StyledRings src='imgs/concentric-rings-left.svg' alt={'concentric rings flourish'} className={sonarAnimation.animate}/>
        </ContentContainer>
        <RightMargin height={'5vh'} accentContainerHeight={`${window.innerHeight - (0.1 * window.innerWidth)}px`} longAccentIndex={0}/>
      </Root>
    );
  } else {
    return (
      <Root container spacing={0} direction='row' justify="flex-start" alignItems='flex-start'>
        <LeftMargin border={borderStyle} height={'100%'} />
        <ContentContainer container item spacing={0} direction='row' justify="center" alignItems='flex-start' style={{width: '90vw'}}
          className={borders.rightBorder}>
          <HomeTitleBoxMobile
            titleTextPrimary={TITLE_TEXT_PRIMARY}
            titleTextSecondary={TITLE_TEXT_SECONDARY}
            subTitleText={SUBTITLE_TEXT}
            classes={borders.bottomLeftBorder}/>
          <ClientTabsMobile
            companiesTitle={COMPANIES_TITLE}
            communitiesTitle={COMMUNITIES_TITLE}
            companies={companies}
            communities={communities}
            classes={borders.leftBorder}/>
        </ContentContainer>
        <RightMargin border={borderStyle} height={'100%'} />
      </Root>
    );
  }
};
