import React from "react";
import ReactGA from "react-ga";
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
import {ProfileWheel} from "../components/careers/desktop/portfolio_section/ProfileWheel";
import {testimonials} from "../constants/testimonials";
import {TestimonialSection} from "../components/careers/desktop/testimonial_section/TestimonialSection";
import {CurrentOpeningSection} from "../components/careers/desktop/openings_section/CurrentOpeningSection";
import {openings} from "../constants/openings";
import {CareersTitleBoxMobile} from "../components/careers/mobile/CareersTitleBoxMobile";
import {PerkBoxMobile} from "../components/careers/mobile/PerkBoxMobile";
import {ActivationPromptBoxMobile} from "../components/careers/mobile/ActivationPromptBoxMobile";
import {MeetBuildersTitleBoxMobile} from "../components/careers/mobile/MeetBuildersTitleBoxMobile";
import {ProfileWheelMobile} from "../components/careers/mobile/portfolio_section/ProfileWheelMobile";
import {TestimonialSectionMobile} from "../components/careers/mobile/testimonial_section/TestimonialSectionMobile";
import {CurrentOpeningSectionMobile} from "../components/careers/mobile/openings_section/CurrentOpeningSectionMobile";

const Root = styled(Grid)({
  margins: 'auto',
  width: '100vw',
  minWidth: '100vw',
  maxWidth: '100vw',
  overflow: 'hidden'
});

const ContentContainer = styled(Grid)({
  width: '85vw'
});

const PerksContainer = styled(Grid)({
  width: '100%'
});

const useBorders = makeStyles(borderStyles);

export const Careers: React.FC = () => {

  ReactGA.pageview('/careers');

  const navigationToActivation = () => window.location.assign(externalLinks.activation.path);

  const borders = useBorders();

  const theme: Theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('lg'));

  if (desktop) {
    return (
      <Root container spacing={0} direction='row' justify="flex-start" alignItems='flex-start'>
        <LeftMargin border={borderStyle} height='100%'/>
        <ContentContainer container item spacing={0} direction='row' justify="center" alignItems='flex-start' className={`${borders.leftBorder} ${borders.rightBorder}`}>
          <Grid item xs={12}>
            <CareersTitleBox textPrimary={'Discover a new way to'} textSecondary={'work'}
              classes={borders.bottomBorder}/>
          </Grid>
          <PerksContainer container spacing={0} justify="center">
            {Object.values(perks).map((perk: Perk, index: number) => (
              <Grid item xs={3} key={`perk-${index}`}>
                <PerkBox perk={perk} classes={index > 0 ? borders.leftBorder : ''}/>
              </Grid>
            ))}
          </PerksContainer>
          <Grid item xs={12}>
            <ActivationPromptBox prompt={'Get started by completing an activation challenge.'}
              buttonText={'APPLY NOW'}
              onButtonClick={navigationToActivation}/>
          </Grid>
          <Grid item xs={12}>
            <MeetBuildersTitleBox text={'Meet the Builders'} />
          </Grid>
          <Grid item xs={12}>
            <ProfileWheel members={testMembers} />
          </Grid>
          <Grid item xs={12}>
            <TestimonialSection testimonials={testimonials} carouselBorder={borderStyle} />
          </Grid>
          <Grid item xs={12}>
            <CurrentOpeningSection openings={openings}
              titleText={'Current Openings'}
              buttonText={'APPLY NOW'}
              onButtonClick={navigationToActivation} />
          </Grid>
        </ContentContainer>
        <RightMargin height='100%' accentContainerHeight={`${window.innerHeight - (0.1 * window.innerWidth)}px`} longAccentIndex={2} />
      </Root>
    );
  } else {
    return (
      <Root container spacing={0} direction='row' justify="flex-start" alignItems='flex-start'>
        <LeftMargin border={borderStyle} height='804.5vw'/>
        <ContentContainer container item spacing={0} direction='row' justify="center" alignItems='flex-start' style={{width: '90vw'}}
          className={borders.rightBorder}>
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
        <RightMargin border={borderStyle} height='804.5vw' longAccentIndex={2}/>
      </Root>
    );
  }
}