import React from 'react'
import {styled, Typography, Grid, makeStyles} from '@material-ui/core'
import { theme } from "../../../../theme";
import {Member} from "../../../../constants/members";
import {ChipSmallMobile} from "../ChipSmallMobile";
import {PortfolioLinkBoxMobile} from "./PortfolioLinkBoxMobile";

const StyledGrid = styled(Grid)({
  width: '71.4vw',
  height: '95vw',
  padding: '7.5vw 6.1vw 3.5vw 6.1vw',
  backgroundColor: '#000e3c',
  boxSizing: 'border-box',
  userSelect: 'none',
  '-moz-user-select': '-moz-none',
  '-khtml-user-select': 'none',
  '-webkit-user-select': 'none',
  '-ms-user-select': 'none',
});

const StyledPhoto = styled('img')({
  width: "28.5vw",
  height: "28.5vw",
  objectFit: "contain",
  borderRadius: '75px'
});

const StyledName = styled(Typography)({
  marginTop: '4vw',
  fontFamily: theme.typography.fontFamily,
  fontSize: '3.8vw',
  fontWeight: 'bold',
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: '-0.48px',
  textAlign: "center",
  color: theme.palette.text.primary
});

const ChipContainer = styled(Grid)({
  width: '100%',
  marginTop: '6.5vw',
  background: 'transparent',
  boxSizing: 'border-box'
});

const useChipStyle = makeStyles({
  chip: {
    margin: '0.57vw'
  }
});

interface Props {
  member: Member;
  classes?: string;
}

export const ProfileSummaryMobile: React.FC<Props> = (props: Props) => {

  const photo = props.member.photo ? props.member.photo : 'imgs/logos/dorg-logo-black-background.png';
  const chipStyle = useChipStyle();

  return (
    <StyledGrid className={props.classes} container spacing={0} direction='column' justify='flex-start' alignItems='center'>
      <Grid item>
        <StyledPhoto src={photo} alt={props.member.name + 'photo'} />
      </Grid>
      <Grid item>
        <StyledName>{props.member.name}</StyledName>
      </Grid>
      <Grid item container direction='column' justify='space-between' alignItems='center' style={{height: '44vw'}}>
        <ChipContainer item container spacing={0} direction='row' justify='center' alignItems='flex-start'>
          {props.member.skills.map((specialization: string, i: number) => (
            <Grid item key={`skill-${i}`}>
              <ChipSmallMobile classes={chipStyle.chip} text={specialization} />
            </Grid>
          ))}
        </ChipContainer>
        <PortfolioLinkBoxMobile item
          github={props.member.portfolio.github}
          website={props.member.portfolio.website}
          linkedin={props.member.portfolio.linkedin}/>
      </Grid>
    </StyledGrid>
  );
}