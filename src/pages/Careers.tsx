import React from "react";
import {Grid, makeStyles, styled, Theme, useMediaQuery, useTheme} from "@material-ui/core";
import { Perk, perks } from "../constants/perks";
import { PerkBox } from "../components/careers/desktop/PerkBox";
import {CareersTitleBox} from "../components/careers/desktop/CareersTitleBox";
import {LeftMargin} from "../components/LeftMargin";
import {borderStyle, borderStyles} from "../theme/styles";
import {RightMargin} from "../components/RightMargin";
import {ActivationPromptBox} from "../components/careers/desktop/ActivationPromptBox";
import {externalLinks} from "../constants/routes";
import {testMembers} from "../constants/members";
import {MeetBuildersTitleBox} from "../components/careers/desktop/MeetBuildersTitleBox";
import {ProfileWheel} from "../components/careers/desktop/ProfileWheel";
import {testimonials} from "../constants/testimonials";
import {TestimonialSection} from "../components/careers/desktop/TestimonialSection";
import {CurrentOpeningSection} from "../components/careers/desktop/CurrentOpeningSection";
import {openings} from "../constants/openings";
import {CareersTitleBoxMobile} from "../components/careers/mobile/CareersTitleBoxMobile";
import {PerkBoxMobile} from "../components/careers/mobile/PerkBoxMobile";
import {ActivationPromptBoxMobile} from "../components/careers/mobile/ActivationPromptBoxMobile";
import {MeetBuildersTitleBoxMobile} from "../components/careers/mobile/MeetBuildersTitleBoxMobile";
import {ProfileWheelMobile} from "../components/careers/mobile/ProfileWheelMobile";
import {TestimonialSectionMobile} from "../components/careers/mobile/TestimonialSectionMobile";
import {CurrentOpeningSectionMobile} from "../components/careers/mobile/CurrentOpeningSectionMobile";


const Root = styled(Grid)({
  margins: 'auto',
  width: '100vw',
  overflow: 'hidden'
});

const ContentContainer = styled(Grid)({
  maxWidth: '85vw'
});

const PerksContainer = styled(Grid)({
  width: '100%'
});

const useBorders = makeStyles(borderStyles);

export const Careers: React.FC = () => {

  const navigationToActivation = () => window.location.assign(externalLinks.activation.path);

  const borders = useBorders();

  const theme: Theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('lg'));

  if (desktop) {
    return (
      <Root container spacing={0} direction='row' justify="flex-start" alignItems='flex-start'>
        <LeftMargin xs={1} border={borderStyle} height='189.625vw'/>
        <ContentContainer container item xs={10} spacing={0} direction='row' justify="center" alignItems='flex-start'>
          <Grid item xs={12}>
            <CareersTitleBox textPrimary={'Discover a new way to'} textSecondary={'work'}
              classes={borders.bottomLeftBorder}/>
          </Grid>
          <PerksContainer container spacing={0} justify="center">
            {Object.values(perks).map((perk: Perk, index: number) => (
              <Grid item xs={3} key={`perk-${index}`}>
                <PerkBox perk={perk} classes={borders.leftBorder}/>
              </Grid>
            ))}
          </PerksContainer>
          <Grid item xs={12}>
            <ActivationPromptBox prompt={'Get started by completing an activation challenge.'}
              buttonText={'APPLY NOW'}
              onButtonClick={navigationToActivation}
              classes={borders.leftBorder}/>
          </Grid>
          <Grid item xs={12}>
            <MeetBuildersTitleBox text={'Meet the Builders'} classes={borders.leftBorder}/>
          </Grid>
          <Grid item xs={12}>
            <ProfileWheel members={testMembers} classes={borders.leftBorder}/>
          </Grid>
          <Grid item xs={12}>
            <TestimonialSection testimonials={testimonials} carouselBorder={borderStyle} classes={borders.leftBorder}/>
          </Grid>
          <Grid item xs={12}>
            <CurrentOpeningSection openings={openings}
              titleText={'Current Openings'}
              buttonText={'APPLY NOW'}
              onButtonClick={navigationToActivation}
              classes={borders.leftBorder}/>
          </Grid>
        </ContentContainer>
        <RightMargin xs={1} border={borderStyle} height='189.625vw' longAccentIndex={3}/>
      </Root>
    );
  } else {
    return (
      <Root container spacing={0} direction='row' justify="flex-start" alignItems='flex-start'>
        <LeftMargin xs={1} border={borderStyle} height='884.5vw'/>
        <ContentContainer container item xs={10} spacing={0} direction='row' justify="center" alignItems='flex-start' style={{maxWidth: '87.5vw'}}>
          <Grid item xs={12}>
            <CareersTitleBoxMobile textPrimaryL1={'Discover a new'} textPrimaryL2={'way to'} textSecondary={'work'}
              classes={borders.bottomLeftBorder}/>
          </Grid>
          <PerksContainer container spacing={0} justify="center">
            {Object.values(perks).map((perk: Perk, index: number) => (
              <Grid item xs={12} key={`perk-${index}`}>
                <PerkBoxMobile perk={perk} classes={borders.bottomLeftBorder}/>
              </Grid>
            ))}
          </PerksContainer>
          <Grid item xs={12}>
            <ActivationPromptBoxMobile prompt={'Get started by completing an activation challenge.'}
              buttonText={'APPLY NOW'}
              onButtonClick={navigationToActivation}
              classes={borders.leftBorder}/>
          </Grid>
          <Grid item xs={12}>
            <MeetBuildersTitleBoxMobile text={'Meet the Builders'} classes={borders.leftBorder}/>
          </Grid>
          <Grid item xs={12}>
            <ProfileWheelMobile members={testMembers} classes={borders.leftBorder}/>
          </Grid>
          <Grid item xs={12}>
            <TestimonialSectionMobile testimonials={testimonials} carouselBorder={borderStyle} classes={borders.leftBorder} />
          </Grid>
          <Grid item xs={12}>
            <CurrentOpeningSectionMobile openings={openings}
              titleText={'Current Openings'}
              buttonText={'APPLY NOW'}
              onButtonClick={navigationToActivation}
              classes={borders.leftBorder}/>
          </Grid>
        </ContentContainer>
        <RightMargin xs={1} border={borderStyle} height='884.5vw' longAccentIndex={3}/>
      </Root>
    );
  }
}