import {Grid, styled} from "@material-ui/core";
import React from "react";
import ReactGA from "react-ga";
import {ClientContainer} from "../components/home/desktop/ClientContainer";
import {companies} from "../constants/companies";
import {communities} from "../constants/communities";
import {LeftMargin} from "../components/LeftMargin";
import {borderStyle} from "../theme/styles";
import {RightMargin} from "../components/RightMargin";

const Root = styled(Grid)({
  margins: 'auto',
  width: '100vw'
});

const ContentContainer = styled(Grid)({
  maxWidth: '85vw'
});

const PageHalf = styled(Grid)({
  height: '57.375vw',
  width: '42.5vw',
  paddingTop: '3.125vw',
  borderLeft: borderStyle
})

export const Home: React.FC = () => {

  ReactGA.pageview('home');

  return (
    <Root container spacing={0} direction='row' justify="flex-start" alignItems='flex-start'>
      <LeftMargin xs={1} border={borderStyle} height='57.375vw' />
      <ContentContainer container item xs={10} spacing={0} direction='row' justify="center" alignItems='flex-start'>
        <PageHalf item xs={6}>
          <ClientContainer title={'COMPANIES'} clients={companies} />
        </PageHalf>
        <PageHalf item xs={6}>
          <ClientContainer title={'COMMUNITIES'} clients={communities} />
        </PageHalf>
      </ContentContainer>
      <RightMargin xs={1} border={borderStyle} height='57.375vw' longAccentIndex={0}/>
    </Root>
  );
};