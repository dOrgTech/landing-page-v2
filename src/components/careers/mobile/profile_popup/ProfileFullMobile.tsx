import React from 'react'
import ReactGA from 'react-ga';
import {styled, Grid, makeStyles, Box} from '@material-ui/core'
import {Member} from "../../../../constants/members";
import {ProfilePhoto} from "../../desktop/profile_popup/ProfilePhoto";
import {routes} from "../../../../constants/routes";
import { useHistory } from 'react-router-dom'
import {borderStyle} from "../../../../theme/styles";
import {NameBioContainerMobile} from "./NameBioContainerMobile";
import {ProfileSectionTitleMobile} from "./ProfileSectionTitleMobile";
import {SpecializationsContainerMobile} from "./SpecializationsContainerMobile";
import {TechnologiesContainerMobile} from "./TechnologiesContainerMobile";
import {PortfolioLinkContainerMobile} from "./PortfolioLinkContainerMobile";
import {HireMeButtonMobile} from "./HireMeButtonMobile";
import {theme} from "../../../../theme";
import {ClosePopUpButtonMobile} from "./ClosePopUpButtonMobile";


const BackgroundContainer = styled(Box)({
  width: '100vw',
  height: '100%',
  padding: '4.75vw',
  backgroundColor: theme.palette.primary.main
});

const ContentContainer = styled(Grid)({
  width: '90.5vw',
  height: '100%',
  padding: '7.5vw 4.5vw 7.5vw 4.5vw',
  boxSizing: 'border-box',
  backgroundColor: '#000e3c',
  webkitBackdropFilter: 'blur(3.1vw)',
  backdropFilter: 'blur(3.1vw)',
  boxShadow: '0 0.71vw 1.43vw 0 rgba(0, 0, 0, 0.16)',
  border: borderStyle,
  position: 'relative'
});

const StyledGridItem = styled(Grid)({
});

const useCancelButtonPosition = makeStyles({
  positionStyle: {
    position: 'absolute',
    top: '3.8vw',
    right: '4.75vw'
  }
});

const useMobileStyles = makeStyles({
  profilePhoto: {
    width: "auto",
    height: "43.5vw"
  }
});

interface Props {
  member: Member;
  onClose: () => void;
  classes?: string;
}

export const ProfileFullMobile: React.FC<Props> = (props: Props) => {

  ReactGA.modalview('/careers/profileMobile');

  const {name, photo, skills, portfolio} = props.member
  const avatar = photo ? photo : 'https://www.newdvdreleasedates.com/images/profiles/christopher-walken-13.jpg';
  const bio = '';
  const title = 'dOrg Builder';

  const history = useHistory();
  // const navigateToContactPage = () => history.push(routes.contact.path);

  const cancelButtonPosition = useCancelButtonPosition();
  const mobileStyles = useMobileStyles();

  return (
    <BackgroundContainer>
      <ContentContainer className={props.classes} container spacing={0} direction='column' justify={'flex-start'} alignItems='flex-start'>
        <StyledGridItem item style={{marginBottom: '8vw'}}>
          <ProfilePhoto photo={avatar} classes={mobileStyles.profilePhoto} />
        </StyledGridItem>
        <StyledGridItem item style={{marginBottom: '8vw'}}>
          <NameBioContainerMobile name={name} title={title} bio={bio} />
        </StyledGridItem>
        <StyledGridItem item style={{marginBottom: '3.8vw'}}>
          <ProfileSectionTitleMobile text='Specializations' />
        </StyledGridItem>
        <StyledGridItem item style={{marginBottom: '4.175vw'}}>
          <SpecializationsContainerMobile specializations={skills} />
        </StyledGridItem>
        <StyledGridItem item style={{marginBottom: '3.8vw'}}>
          <ProfileSectionTitleMobile text='Technologies' />
        </StyledGridItem>
        <StyledGridItem item style={{marginBottom: '6vw'}}>
          <TechnologiesContainerMobile technologies={skills} />
        </StyledGridItem>
        <StyledGridItem item style={{marginBottom: '3.8vw'}}>
          <ProfileSectionTitleMobile text='Portfolio' />
        </StyledGridItem>
        <StyledGridItem item style={{marginBottom: '4.1vw'}}>
          <PortfolioLinkContainerMobile github={portfolio.github} website={portfolio.website} linkedin={portfolio.linkedin} />
        </StyledGridItem>
        <StyledGridItem item></StyledGridItem>
        <ClosePopUpButtonMobile classes={cancelButtonPosition.positionStyle} handleClick={props.onClose} />
      </ContentContainer>
    </BackgroundContainer>
  );
}