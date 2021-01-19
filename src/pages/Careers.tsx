import React from "react";
import {Grid, makeStyles, styled} from "@material-ui/core";
import { Perk, perks } from "../constants/perks";
import { PerkBox } from "../components/careers/desktop/PerkBox";
import {CareersTitleBox} from "../components/careers/desktop/CareersTitleBox";
import {LeftMargin} from "../components/LeftMargin";
import {borderStyle, borderStyles} from "../theme/styles";
import {RightMargin} from "../components/RightMargin";
import {ActivationPromptBox} from "../components/careers/desktop/ActivationPromptBox";
import {externalLinks} from "../constants/routes";
import {Member} from "../Utils/networkUtils";
import {MeetBuildersTitleBox} from "../components/careers/desktop/MeetBuildersTitleBox";
import {ProfileWheel} from "../components/careers/desktop/ProfileWheel";
import {testimonials} from "../constants/testimonials";
import {TestimonialSection} from "../components/careers/desktop/TestimonialSection";
import {CurrentOpeningsSection} from "../components/careers/desktop/CurrentOpeningsSection";
import {openings} from "../constants/openings";

const Root = styled(Grid)({
  margins: 'auto',
  width: '100vw',
  overflow: 'hidden'
});

const ContentContainer = styled(Grid)({
  maxWidth: '85vw'
});

const PerksContainer = styled(Grid)({
  maxWidth: '85vw'
});

const useBorders = makeStyles(borderStyles);

const testMember: Member = {
  name: 'Christopher Walken',
  photo: 'https://www.newdvdreleasedates.com/images/profiles/christopher-walken-13.jpg',
  title: 'Actor',
  bio: 'Christopher Walken is an American actor, singer, comedian, director, producer, screenwriter, and dancer, who has appeared in more than 100 films and television programs.',
  specializations: ['Smart Contracts', 'Backend', 'DevOps', 'Speech Cadence'],
  technologies: ['TypeScript', 'React', 'Solidity'],
  github: 'https://github.com/dOrgTech',
  website: 'https://www.imdb.com/name/nm0000686/'
}

const testMembers: Member[] = [];
for (let i = 0; i < 25; i++) {
  const index = i % 20;
  testMembers.push(Object.assign({}, testMember, {name: `Christopher Walken ${index}`}));
}

export const Careers: React.FC = () => {

  const navigationToActivation = () => window.location.assign(externalLinks.activation.path);

  const borders = useBorders();

  return (
    <Root container spacing={0} direction='row' justify="flex-start" alignItems='flex-start'>
      <LeftMargin xs={1} border={borderStyle} height='116.775vw'/>
      <ContentContainer container item xs={10} spacing={0} direction='row' justify="center" alignItems='flex-start'>
        <Grid item xs={12}>
          <CareersTitleBox textPrimary={'Discover a new way to'} textSecondary={'work'} classes={borders.bottomLeftBorder}/>
        </Grid>
        <PerksContainer container spacing={0} justify="center">
          {Object.values(perks).map((perk: Perk, index: number) => (
            <Grid item xs={3} key={`perk-${index}`}>
              <PerkBox perk={perk} classes={borders.leftBorder} />
            </Grid>
          ))}
        </PerksContainer>
        <Grid item xs={12}>
          <ActivationPromptBox prompt={'Get started by completing an activation challenge.'} buttonText={'APPLY NOW'} onButtonClick={navigationToActivation}/>
        </Grid>
        <Grid item xs={12}>
          <MeetBuildersTitleBox text={'Meet the Builders'} />
        </Grid>
        <Grid item xs={12}>
          <ProfileWheel members={testMembers} />
        </Grid>
        <Grid item xs={12}>
          <TestimonialSection testimonials={testimonials} />
        </Grid>
        <Grid item xs={12}>
          <CurrentOpeningsSection openings={openings} titleText={'Current Openings'} buttonText={'APPLY NOW'} onButtonClick={navigationToActivation} />
        </Grid>
      </ContentContainer>
      <RightMargin xs={1} border={borderStyle} height='116.775vw' longAccentIndex={3}/>
    </Root>
  );
}