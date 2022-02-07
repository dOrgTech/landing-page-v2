import React from 'react'
import ReactGA from 'react-ga';
import {styled, Grid, makeStyles} from '@material-ui/core'
import {Member} from "../../../../constants/members";
import {NameBioContainer} from "./NameBioContainer";
import {SpecializationsContainer} from "./SpecializationsContainer";
import {ProfilePhoto} from "./ProfilePhoto";
import {ProfileSectionTitle} from "./ProfileSectionTitle";
import {TechnologiesContainer} from "./TechnologiesContainer";
import {PortfolioLinkContainer} from "./PortfolioLinkContainer";
import {HireMeButton} from "./HireMeButton";
import {routes} from "../../../../constants/routes";
import { useHistory } from 'react-router-dom'
import {borderStyle, borderStyles} from "../../../../theme/styles";
import {ClosePopUpButton} from "./ClosePopUpButton";
import { externalLinks } from '../../../../constants/routes';
const StyledGrid = styled(Grid)({
  width: '79.25vh',
  height: '100vh',
  padding: '5vh 7.5vh 7vh 4.5vh',
  boxSizing: 'border-box',
  backgroundColor: '#000e3c',
  webkitBackdropFilter: 'blur(1.5vh)',
  backdropFilter: 'blur(1.5vh)',
  boxShadow: '0 0.35vh 0.7vh 0 rgba(0, 0, 0, 0.16)',
  border: borderStyle,
  position: 'relative'
});


const StyledGridItem = styled(Grid)({
  marginBottom: '4.2vh'
});

const useCancelButtonPosition = makeStyles({
  positionStyle: {
    position: 'absolute',
    top: '3.75vh',
    right: '3.75vh'
  }
});

const useBorders = makeStyles(borderStyles);

interface Props {
  member: Member;
  onClose: () => void;
  classes?: string;
}

export const ProfileFull: React.FC<Props> = (props: Props) => {

  ReactGA.modalview('/careers/profile');

  const {name, photo, skills, portfolio} = props.member
  const avatar = photo ? photo : 'https://www.newdvdreleasedates.com/images/profiles/christopher-walken-13.jpg';
  const bio = '';
  const title = 'dOrg Builder';

  const history = useHistory();
  const navigateToContactPage = () =>   window.location.assign(externalLinks.contact.path);

  const cancelButtonPosition = useCancelButtonPosition();
  const borders = useBorders();

  return (
    <StyledGrid className={props.classes} container spacing={0} direction='row' justify='space-between' alignItems='flex-start'>
      <StyledGridItem item>
        <ProfilePhoto photo={avatar} />
      </StyledGridItem>
      <StyledGridItem item>
        <NameBioContainer name={name} title={title} bio={bio} />
      </StyledGridItem>
      <StyledGridItem item>
        <ProfileSectionTitle text='Specializations' />
      </StyledGridItem>
      <StyledGridItem item style={{marginBottom: '1.4vh'}}>
        <SpecializationsContainer specializations={skills} />
      </StyledGridItem>
      <StyledGridItem item xs={12} className={borders.topBorder} />
      <StyledGridItem item>
        <ProfileSectionTitle text='Technologies' />
      </StyledGridItem>
      <StyledGridItem item style={{marginBottom: '3.25vh'}}>
        <TechnologiesContainer technologies={skills} />
      </StyledGridItem>
      <StyledGridItem item xs={12} className={borders.topBorder} />
      <StyledGridItem item>
        <ProfileSectionTitle text='Portfolio' />
      </StyledGridItem>
      <StyledGridItem item style={{marginBottom: '1.4vh'}}>
        <PortfolioLinkContainer github={portfolio.github} website={portfolio.website} linkedin={portfolio.linkedin} />
      </StyledGridItem>
      <StyledGridItem item xs={12} className={borders.topBorder} />
      <StyledGridItem item xs={12} container justify='flex-end'>
        <HireMeButton name={name} handleClick={navigateToContactPage} />
      </StyledGridItem>
      <ClosePopUpButton classes={cancelButtonPosition.positionStyle} handleClick={props.onClose} />
    </StyledGrid>
  );
}