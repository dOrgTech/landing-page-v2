import React from 'react'
import {Grid, Link, styled, Typography} from '@material-ui/core'
import { theme } from "../../../theme";
import {getSonarAnimation} from "../../../theme/styles";
import {IconLink, IconLinks} from "../../../constants/routes";


const StyledGrid = styled(Grid)({
  padding: '7vh 5.5vw 0 5.5vw',
  width: '100%',
  height: '110vw',
  background: 'transparent',
  boxSizing: 'border-box',
  position: 'relative'
});

const StyledTitle = styled(Typography)({
  marginBottom: '2vw',
  fontFamily: theme.typography.fontFamily,
  fontSize: '5.7vw',
  fontWeight: 600,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: '-0.72px',
  textAlign: "left",
  color: theme.palette.text.primary
});

const StyledInstructions = styled(Typography)({
  marginBottom: '-3.15vw',
  maxWidth: '78.5vw',
  fontFamily: theme.typography.fontFamily,
  fontSize: '3.8vw',
  fontWeight: 'normal',
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 2.25,
  letterSpacing: 'normal',
  textAlign: "left",
  color: theme.palette.text.primary
});

const StyledInformation = styled(StyledInstructions)({
  marginBottom: '-1.15vw',
});

const LinksContainer = styled(Grid)({
  paddingTop: '3.15vw',
  width: '27.3vw',
});

const IconContainer = styled(Link)({
  height: '5vw',
  width: '4.75vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

const StyledIcon = styled('img')({
  width: 'inherit',
  height: 'auto',
  objectFit: 'contain',
  color: theme.palette.text.primary,
  '&:hover': {
    filter: 'brightness(0) saturate(100%) invert(51%) sepia(98%) saturate(396%) hue-rotate(103deg) brightness(90%) contrast(83%)'
  },
  cursor: 'pointer'
});

const StyledRings = styled('img')({
  width: '46.4vw',
  height: '47vw',
  objectFit: 'contain',
  position: 'absolute',
  top: -3,
  right: 0,
  zIndex: 0
});
const useSonarAnimation= getSonarAnimation('75vw', 3);

interface Props {
  title: string;
  instructions: string;
  callToAction: string;
  joinInformation: string;
  iconLinks: IconLinks;
  classes?: string;
}

export const ContactTitleBoxMobile: React.FC<Props> = (props: Props) => {

  const sonarAnimation = useSonarAnimation();

  return (
    <StyledGrid container direction='row' justify="space-evenly" alignItems='flex-start' className={props.classes}>
      <Grid item container direction='column' justify="flex-start" alignItems='flex-start'>
        <Grid item>
          <StyledTitle>{props.title}</StyledTitle>
        </Grid>
        <Grid item>
          <StyledInstructions>{props.instructions}</StyledInstructions>
        </Grid>
      </Grid>
      <Grid item container direction='column' justify="flex-start" alignItems='flex-start'>
        <Grid item>
          <StyledTitle>{props.callToAction}</StyledTitle>
          <StyledInformation>{props.joinInformation}</StyledInformation>
        </Grid>
        <LinksContainer container item spacing={0} direction='row' justify="space-between" alignItems='center'>
          {Object.values(props.iconLinks).map((iconLink: IconLink, index: number) => (
            <Grid item key={`iconLink-${index}`}>
              <IconContainer href={iconLink.path} target="_blank" rel="noopener">
                <StyledIcon src={iconLink.icon} />
              </IconContainer>
            </Grid>
          ))}
        </LinksContainer>
      </Grid>
      <StyledRings src='imgs/concentric-rings-left.svg' alt={'concentric rings flourish'} className={sonarAnimation.animate}/>
    </StyledGrid>
  );
}