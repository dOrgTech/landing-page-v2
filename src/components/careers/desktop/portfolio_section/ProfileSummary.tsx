import React from 'react'
import {styled, Typography, Grid, makeStyles} from '@material-ui/core'
import { theme } from "../../../../theme";
import {Member} from "../../../../constants/members";
import {ChipSmall} from "../ChipSmall";
import {PortfolioLinkBox} from "./PortfolioLinkBox";

const BACKGROUND_PATTERN = process.env.PUBLIC_URL + "/imgs/life-bg-pattern.svg";

const StyledGrid = styled(Grid)({
  width: '18.75vw',
  height: '25vw',
  padding: '2.1vw 1.6vw 1vw 1.6vw',
  backgroundColor: "#191a1a",
  boxSizing: 'border-box',
  userSelect: 'none',
  '-moz-user-select': '-moz-none',
  '-khtml-user-select': 'none',
  '-webkit-user-select': 'none',
  '-ms-user-select': 'none',
  position: 'relative',
  cursor: "url(imgs/cursors/grab-cursor-icon-small.png), default",
  zIndex: 1,
  '&::after': {
    content: `""`,
    position: 'absolute',
    inset: 0,
    backgroundImage: `url(${BACKGROUND_PATTERN})`,
    backgroundPosition: `${Math.random()*100}% ${Math.random()*100}%`,
    backgroundSize: '200%',
    opacity: 0.05,
    transition: 'opacity 0.3s ease-in-out',
    zIndex: -1,
  },
  '&:hover::after': {
    opacity: 0.2,
  }
});

const StyledPhoto = styled('img')({
  backgroundColor: theme.palette.primary.main,
  width: "7.5vw",
  height: "7.5vw",
  objectFit: "contain",
  borderRadius: '75px',
  userDrag: 'none',
});

const StyledName = styled(Typography)({
  marginTop: '0.6vw',
  fontFamily: theme.typography.fontFamily,
  fontSize: '1vw',
  fontWeight: 'bold',
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.75,
  letterSpacing: '-0.48px',
  textAlign: "center",
  color: theme.palette.text.primary
});

const ChipContainer = styled(Grid)({
  width: '100%',
  marginTop: '1vw',
  background: 'transparent',
  boxSizing: 'border-box',
});

const useChipStyle = makeStyles({
  chip: {
    margin: '0.15vw',
    cursor: 'default'
  }
});

const DisplayIndex = styled(Typography)({
  fontFamily: theme.typography.fontFamily,
  fontSize: '0.7rem',
  fontWeight: 'normal',
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: 'normal',
  color: theme.palette.text.primary,
  position: 'absolute',
  right: '0.5vw',
  bottom: '0.5vw',
})

interface Props {
  member: Member;
  classes?: string;
  onClickOpen?: (member: Member) => void;
  indexTag?: string;
}

export const ProfileSummary: React.FC<Props> = (props: Props) => {

  const photo = props.member.photo ? props.member.photo : 'imgs/logos/dorg-logo-stacked.svg';
  const chipStyle = useChipStyle();

  return (
    <StyledGrid className={props.classes} container spacing={0} direction='column' justify='flex-start' alignItems='center'>
      <Grid item>
        <StyledPhoto src={photo} alt={props.member.name + 'photo'} />
      </Grid>
      <Grid item>
        <StyledName>{props.member.name}</StyledName>
      </Grid>
      <Grid item container direction='column' justify='space-between' alignItems='center' style={{height: '10.75vw'}}>
        <ChipContainer item container spacing={0} direction='row' justify='center' alignItems='flex-start'>
          {props.member.skills.map((specialization: string, i: number) => (
            <Grid item key={`skill-${i}`}>
              <ChipSmall classes={chipStyle.chip} text={specialization} />
            </Grid>
          ))}
        </ChipContainer>
        <PortfolioLinkBox item
          github={props.member.portfolio.github}
          website={props.member.portfolio.website}
          linkedin={props.member.portfolio.linkedin}/>
      </Grid>
      <DisplayIndex>{props.indexTag}</DisplayIndex>
    </StyledGrid>
  );
}