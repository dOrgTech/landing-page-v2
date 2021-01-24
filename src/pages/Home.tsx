import {Grid, makeStyles, styled} from "@material-ui/core";
import React from "react";
import ReactGA from "react-ga";
import {ClientContainer} from "../components/home/desktop/ClientContainer";
import {companies} from "../constants/companies";
import {communities} from "../constants/communities";
import {LeftMargin} from "../components/LeftMargin";
import {borderStyle} from "../theme/styles";
import {RightMargin} from "../components/RightMargin";
import {HomeTitleBox} from "../components/home/desktop/HomeTitleBox";

const Root = styled(Grid)({
  margins: 'auto',
  width: '100vw',
  position: 'relative',
  zIndex: 0
});

const ContentContainer = styled(Grid)({
  maxWidth: '85vw',
  position: 'relative'
});

const PageHalf = styled(Grid)({
  height: '57.375vw',
  width: '42.5vw',
  paddingTop: '3.125vw',
  borderLeft: borderStyle
})

const StyledRings = styled('img')({
  width: '19.125vw',
  height: '19.063vw',
  objectFit: 'contain',
  position: 'absolute',
  transform: 'scaleY(-1)',
  bottom: 0,
  right: 0
});

const useTitlePositionStyle = makeStyles({
  location: {
    position: 'absolute',
    top: '-3vw',
    left: '1.75vw',
    zIndex: 0
  }
})

export const Home: React.FC = () => {

  ReactGA.pageview('home');

  const titlePosition = useTitlePositionStyle();

  return (
    <Root container spacing={0} direction='row' justify="flex-start" alignItems='flex-start'>
      <LeftMargin xs={1} border={borderStyle} height='57.375vw' />
      <ContentContainer container item xs={10} spacing={0} direction='row' justify="center" alignItems='flex-start'>
        <PageHalf item xs={6}>
          <ClientContainer title={'COMPANIES'} clients={companies} isOnLeft />
        </PageHalf>
        <PageHalf item xs={6}>
          <ClientContainer title={'COMMUNITIES'} clients={communities} />
        </PageHalf>
        <HomeTitleBox classes={titlePosition.location}
          titleTextPrimary={'We build custom'}
          titleTextSecondary={'Dapps'}
          subTitleText={'We’ve helped some of Web3’s top projects design, code and ship.'} />
        <StyledRings src='imgs/concentric-rings-left.svg' alt={'concentric rings flourish'} />
      </ContentContainer>
      <RightMargin xs={1} border={borderStyle} height='57.375vw' longAccentIndex={0}/>
    </Root>
  );
};