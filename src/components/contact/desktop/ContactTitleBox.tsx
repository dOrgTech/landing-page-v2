import React from 'react'
import {Grid, Link, styled, Typography} from '@material-ui/core'
import { theme } from "../../../theme";
import {useDebounce, useWindowSize} from "../../../utils/hooks";
import {IconLink, IconLinks} from "../../../constants/routes";

const StyledGrid = styled(Grid)({
  width: '100%',
  padding: '5vw 1.75vw',
  background: 'transparent',
  boxSizing: 'border-box'
});

const StyledTitle = styled(Typography)({
  marginBottom: '1.2vw',
  fontFamily: theme.typography.fontFamily,
  fontSize: '2vw',
  fontWeight: 600,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: '-1.6px',
  textAlign: "left",
  color: theme.palette.text.primary
});

const StyledInstructions = styled(Typography)({
  marginTop: '-0.625vw',
  marginBottom: '3.625vw',
  maxWidth: '23.5vw',
  fontFamily: theme.typography.fontFamily,
  fontSize: '1vw',
  fontWeight: 'normal',
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 2.25,
  letterSpacing: 'normal',
  textAlign: "left",
  color: theme.palette.text.primary
});

const StyledInformation = styled(StyledInstructions)({
  marginBottom: '1.625vw',
});

const LinksContainer = styled(Grid)({
  width: '7.8vw',
});

const IconContainer = styled(Link)({
  height: '1.5vw',
  width: '1.25vw',
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

interface Props {
  title: string;
  instructions: string;
  callToAction: string;
  joinInformation: string;
  iconLinks: IconLinks;
  classes?: string;
}

export const ContactTitleBox: React.FC<Props> = (props: Props) => {

  const windowSize = useWindowSize()
  const debouncedWindowSize = useDebounce(windowSize, 100);
  const containerHeight = Math.max(0.3 * debouncedWindowSize.width, debouncedWindowSize.height - (0.1 * debouncedWindowSize.width));

  return (
    <StyledGrid container direction='column' justify="flex-start" alignItems='flex-start'
      className={props.classes} style={{height: `${containerHeight}px`}}>
      <Grid item>
        <StyledTitle>{props.title}</StyledTitle>
      </Grid>
      <Grid item>
        <StyledInstructions>{props.instructions}</StyledInstructions>
      </Grid>
      <Grid item>
        <StyledTitle>{props.callToAction}</StyledTitle>
      </Grid>
      <Grid item>
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
    </StyledGrid>
  );
}