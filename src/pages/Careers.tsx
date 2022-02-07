import React from "react";
import ReactGA from "react-ga";
import {Grid, makeStyles, styled} from "@material-ui/core";
import { Perk, perks } from "../constants/perks";
import {CareersTitleBox} from "../components/careers/desktop/CareersTitleBox";
import {LeftMargin} from "../components/LeftMargin";
import {borderStyle, borderStyles} from "../theme/styles";
import {RightMargin} from "../components/RightMargin";
import {ActivationPromptBox} from "../components/careers/desktop/ActivationPromptBox";
import {externalLinks} from "../constants/routes";
import {Member, placeholderMembers} from "../constants/members";
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
import {useDebounce, useIsDesktop, useMembers, useWindowSize} from "../utils/hooks";
import {StoryBox} from "../components/careers/desktop/StoryBox";
import {BuilderCycleBox} from "../components/careers/desktop/BuilderCycleBox";
import {PerkSection} from "../components/careers/desktop/PerkSection";

const CAREERS_TITLE_PRIMARY = 'Discover a new way to';
const CAREERS_TITLE_SECONDARY = ['work', 'learn', 'grow', 'build'];
const ACTIVATION_PROMPT = 'Join our database of highly skilled builders.';
const APPLY_BUTTON_TEXT = 'ACTIVATE';
const CURRENT_OPENINGS_TITLE = 'Current Openings';
const MEET_BUILDERS_TITLE = 'Meet the Builders';

const CAREERS_TITLE_MOBILE_PRIMARY_1 = 'Discover a new';
const CAREERS_TITLE_MOBILE_PRIMARY_2 = 'way to';

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

const PerksContainerMobile = styled(Grid)({
  width: '100%'
});

const useBorders = makeStyles(borderStyles);

export const Careers: React.FC = () => {

  ReactGA.pageview('/careers');

  // request members from server
  const members: Member[] = useMembers(); // eslint-disable-line

  const navigateToBuilderInterestForm = () => window.location.assign(externalLinks.buildWithUs.path);
  const borders = useBorders();

  const desktop = useIsDesktop();

  const windowSize = useWindowSize()
  const debouncedWindowSize = useDebounce(windowSize, 100);

  if (desktop) {
    return (
      <Root container spacing={0} direction='row' justify="flex-start" alignItems='flex-start'>
        <LeftMargin border={borderStyle} height='100%'/>
        <ContentContainer container item spacing={0} direction='row' justify="center" alignItems='flex-start' className={`${borders.leftBorder} ${borders.rightBorder}`}>
          <Grid item xs={12}>
            <CareersTitleBox textPrimary={CAREERS_TITLE_PRIMARY} textSecondary={CAREERS_TITLE_SECONDARY}
              classes={borders.bottomBorder}/>
          </Grid>
          <Grid container item xs={12} justify="center">
            <Grid item xs={6}>
              <StoryBox />
            </Grid>
            <Grid item xs={6}>
              <BuilderCycleBox classes={borders.leftBorder} />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <ActivationPromptBox prompt={ACTIVATION_PROMPT}
              buttonText={APPLY_BUTTON_TEXT}
              onButtonClick={navigateToBuilderInterestForm}/>
          </Grid>
          <PerkSection perks={perks} item xs={12} />
          <Grid item xs={12}>
            <MeetBuildersTitleBox text={MEET_BUILDERS_TITLE} />
          </Grid>
          <Grid item xs={12}>
            <ProfileWheel members={members.length > 0 ? members.concat(members.slice(0,5)) : placeholderMembers} />
          </Grid>
          <Grid item xs={12}>
            <TestimonialSection testimonials={testimonials} carouselBorder={borderStyle} />
          </Grid>
          <Grid item xs={12}>
            <CurrentOpeningSection openings={openings}
              titleText={CURRENT_OPENINGS_TITLE}
              buttonText={APPLY_BUTTON_TEXT}
              onButtonClick={navigateToBuilderInterestForm} />
          </Grid>
        </ContentContainer>
        <RightMargin height='100%' accentContainerHeight={`${debouncedWindowSize.height - (0.1 * debouncedWindowSize.width)}px`} longAccentIndex={2} />
      </Root>
    );
  } else {
    return (
      <Root container spacing={0} direction='row' justify="flex-start" alignItems='flex-start'>
        <LeftMargin border={borderStyle} height='804.5vw'/>
        <ContentContainer container item spacing={0} direction='row' justify="center" alignItems='flex-start' style={{width: '90vw'}}
          className={borders.rightBorder}>
          <Grid item xs={12}>
            <CareersTitleBoxMobile textPrimaryL1={CAREERS_TITLE_MOBILE_PRIMARY_1} textPrimaryL2={CAREERS_TITLE_MOBILE_PRIMARY_2} textSecondary={CAREERS_TITLE_SECONDARY}
              classes={borders.bottomLeftBorder}/>
          </Grid>
          <PerksContainerMobile container spacing={0} justify="center">
            {Object.values(perks).map((perk: Perk, index: number) => (
              <Grid item xs={12} key={`perk-${index}`}>
                <PerkBoxMobile perk={perk} classes={borders.bottomLeftBorder}/>
              </Grid>
            ))}
          </PerksContainerMobile>
          <Grid item xs={12}>
            <ActivationPromptBoxMobile prompt={ACTIVATION_PROMPT}
              buttonText={APPLY_BUTTON_TEXT}
              onButtonClick={navigateToBuilderInterestForm}
              classes={borders.leftBorder}/>
          </Grid>
          <Grid item xs={12}>
            <MeetBuildersTitleBoxMobile text={MEET_BUILDERS_TITLE} classes={borders.leftBorder}/>
          </Grid>
          <Grid item xs={12}>
            <ProfileWheelMobile members={members.length > 0 ? members.concat(members.slice(0, 2)) : placeholderMembers} classes={borders.leftBorder}/>
          </Grid>
          <Grid item xs={12}>
            <TestimonialSectionMobile testimonials={testimonials} carouselBorder={borderStyle} classes={borders.leftBorder} />
          </Grid>
          <Grid item xs={12}>
            <CurrentOpeningSectionMobile openings={openings}
              titleText={CURRENT_OPENINGS_TITLE}
              buttonText={APPLY_BUTTON_TEXT}
              onButtonClick={navigateToBuilderInterestForm}
              classes={borders.leftBorder}/>
          </Grid>
        </ContentContainer>
        <RightMargin border={borderStyle} height='804.5vw' longAccentIndex={2}/>
      </Root>
    );
  }
}