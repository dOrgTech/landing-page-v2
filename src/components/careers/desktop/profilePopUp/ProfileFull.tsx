import React from 'react'
import {styled, Grid} from '@material-ui/core'
import {Member} from "../../../../Utils/networkUtils";
import {NameBioContainer} from "./NameBioContainer";
import {SpecializationsContainer} from "./SpecializationsContainer";
import {ProfilePhoto} from "./ProfilePhoto";
import {ProfileSectionTitle} from "./ProfileSectionTitle";
import {TechnologiesContainer} from "./TechnologiesContainer";
import {PortfolioLinkContainer} from "./PortfolioLinkContainer";
import {HireMeButton} from "./HireMeButton";
import {routes} from "../../../../constants/routes";
import { useHistory } from 'react-router-dom'

const StyledGrid = styled(Grid)({
  width: '42.5vw',
  height: '53.625vw',
  padding: '2.7vw 4.1vw 3.75vw 2.4vw',
  boxSizing: 'border-box',
  backgroundColor: '#000e3c',
  webkitBackdropFilter: 'blur(13px)',
  backdropFilter: 'blur(13px)',
  boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)'
});

interface Props {
  member: Member;
  classes?: string;
}

export const ProfileFull: React.FC<Props> = (props: Props) => {

  const history = useHistory();
  const navigateToContactPage = () => history.push(routes.contact.path);

  return (
    <StyledGrid className={props.classes} container spacing={0} direction='row' justify='flex-start' alignItems='flex-start'>
      <Grid item>
        <ProfilePhoto photo={props.member.photo} />
      </Grid>
      <Grid item>
        <NameBioContainer name={props.member.name} title={props.member.title} bio={props.member.bio} />
      </Grid>
      <Grid item>
        <ProfileSectionTitle text='Specializations' />
      </Grid>
      <Grid item>
        <SpecializationsContainer specializations={props.member.specializations} />
      </Grid>
      <Grid item>
        <ProfileSectionTitle text='Technologies' />
      </Grid>
      <Grid item>
        <TechnologiesContainer technologies={props.member.technologies} />
      </Grid>
      <Grid item>
        <ProfileSectionTitle text='Portfolio' />
      </Grid>
      <Grid item>
        <PortfolioLinkContainer github={props.member.github} website={props.member.website} />
      </Grid>
      <Grid item>
        <HireMeButton name={props.member.name} handleClick={navigateToContactPage} />
      </Grid>
    </StyledGrid>
  );
}