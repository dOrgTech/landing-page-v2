import React from 'react'
import {styled, Grid, makeStyles} from '@material-ui/core'
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
import {borderStyle, borderStyles} from "../../../../theme/styles";
import {ClosePopUpButton} from "./ClosePopUpButton";

const StyledGrid = styled(Grid)({
  width: '42.5vw',
  height: '53.625vw',
  padding: '2.7vw 4.1vw 3.75vw 2.4vw',
  boxSizing: 'border-box',
  backgroundColor: '#000e3c',
  webkitBackdropFilter: 'blur(13px)',
  backdropFilter: 'blur(13px)',
  boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
  border: borderStyle,
  position: 'relative'
});

const StyledGridItem = styled(Grid)({
  marginBottom: '2.25vw'
});

const useCancelButtonPosition = makeStyles({
  positionStyle: {
    position: 'absolute',
    top: '2vw',
    right: '2vw'
  }
});

const useBorders = makeStyles(borderStyles);

interface Props {
  member: Member;
  onClose: () => void;
  classes?: string;
}

export const ProfileFull: React.FC<Props> = (props: Props) => {

  const history = useHistory();
  const navigateToContactPage = () => history.push(routes.contact.path);

  const cancelButtonPosition = useCancelButtonPosition();
  const borders = useBorders();

  return (
    <StyledGrid className={props.classes} container spacing={0} direction='row' justify='space-between' alignItems='flex-start'>
      <StyledGridItem item>
        <ProfilePhoto photo={props.member.photo} />
      </StyledGridItem>
      <StyledGridItem item>
        <NameBioContainer name={props.member.name} title={props.member.title} bio={props.member.bio} />
      </StyledGridItem>
      <StyledGridItem item>
        <ProfileSectionTitle text='Specializations' />
      </StyledGridItem>
      <StyledGridItem item style={{marginBottom: '0.75vw'}}>
        <SpecializationsContainer specializations={props.member.specializations} />
      </StyledGridItem>
      <StyledGridItem item xs={12} className={borders.topBorder} />
      <StyledGridItem item>
        <ProfileSectionTitle text='Technologies' />
      </StyledGridItem>
      <StyledGridItem item style={{marginBottom: '1.75vw'}}>
        <TechnologiesContainer technologies={props.member.technologies} />
      </StyledGridItem>
      <StyledGridItem item xs={12} className={borders.topBorder} />
      <StyledGridItem item>
        <ProfileSectionTitle text='Portfolio' />
      </StyledGridItem>
      <StyledGridItem item style={{marginBottom: '0.75vw'}}>
        <PortfolioLinkContainer github={props.member.github} website={props.member.website} />
      </StyledGridItem>
      <StyledGridItem item xs={12} className={borders.topBorder} />
      <StyledGridItem item xs={12} container justify='flex-end'>
        <HireMeButton name={props.member.name} handleClick={navigateToContactPage} />
      </StyledGridItem>
      <ClosePopUpButton classes={cancelButtonPosition.positionStyle} handleClick={props.onClose} />
    </StyledGrid>
  );
}