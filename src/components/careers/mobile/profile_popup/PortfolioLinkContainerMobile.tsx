import React from 'react'
import {styled, Typography, Grid} from '@material-ui/core'
import {theme} from "../../../../theme";

const StyledGrid = styled(Grid)({
  width: '100%',
  minHeight: '6.75vw',
  background: 'transparent',
  boxSizing: 'border-box'
});

const LinkItem = styled(Grid)({
  width: '100%',
  marginBottom: '5.9vw'
});

const StyleIcon = styled('img')({
  width: "3.8vw",
  height: "3.8vw",
  marginRight: '3vw',
  objectFit: "contain"
});

const StyledUrl= styled(Typography)({
  fontFamily: theme.typography.fontFamily,
  fontSize: '3.33vw',
  fontWeight: 'normal',
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: '-0.42px',
  textAlign: "left",
  color: theme.palette.text.primary
});

interface Props {
  github?: string;
  website?: string;
  linkedin?: string;
  classes?: string;
}

export const PortfolioLinkContainerMobile: React.FC<Props> = (props: Props) => {

  const website = props.website ? props.website : props.linkedin;

  return (
    <StyledGrid className={props.classes} container spacing={0} direction='row' justify='flex-start' alignItems='flex-start'>
      {props.github && <LinkItem item xs={12} container spacing={0} direction='row' justify='flex-start' alignItems='center'>
        <StyleIcon src={'imgs/logos/github-logo-icon.svg'} alt='github logo' />
        <a href={props.github} target='_blank' rel='noopener noreferrer' style={{textDecoration: 'none'}}>
          <StyledUrl>{props.github}</StyledUrl>
        </a>
      </LinkItem>}
      {website && <LinkItem item xs={12} container spacing={0} direction='row' justify='flex-start' alignItems='center'>
        <StyleIcon src={'imgs/globe-icon.svg'} alt='world wide web icon' />
        <a href={website} target='_blank' rel='noopener noreferrer' style={{textDecoration: 'none'}}>
          <StyledUrl>{website}</StyledUrl>
        </a>
      </LinkItem>}
    </StyledGrid>
  );
}