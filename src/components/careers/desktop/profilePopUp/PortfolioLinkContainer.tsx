import React from 'react'
import {styled, Typography, Grid} from '@material-ui/core'
import {theme} from "../../../../theme";

const StyledGrid = styled(Grid)({
  width: '23.375vw',
  height: '100%',
  background: 'transparent',
  boxSizing: 'border-box'
});

const LinkItem = styled(Grid)({
  width: '20vw',
  marginBottom: '1.5vw'
});

const StyleIcon = styled('img')({
  width: "1vw",
  height: "1vw",
  marginRight: '0.875vw',
  objectFit: "contain"
});

const StyledUrl= styled(Typography)({
  fontFamily: theme.typography.fontFamily,
  fontSize: '0.875vw',
  fontWeight: 'normal',
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: '-0.42px',
  textAlign: "left",
  color: theme.palette.text.primary
});

interface Props {
  github: string;
  website: string;
  classes?: string;
}

export const PortfolioLinkContainer: React.FC<Props> = (props: Props) => {

  return (
    <StyledGrid className={props.classes} container spacing={0} direction='row' justify='flex-start' alignItems='flex-start'>
      {props.github && <LinkItem item xs={12} container spacing={0} direction='row' justify='flex-start' alignItems='flex-start'>
        <StyleIcon src={'imgs/logos/github-logo-icon.svg'} alt='github logo' />
        <a href={props.github} target='_blank' rel='noopener noreferrer' style={{textDecoration: 'none'}}>
          <StyledUrl>{props.github}</StyledUrl>
        </a>
      </LinkItem>}
      {props.website && <LinkItem item xs={12} container spacing={0} direction='row' justify='flex-start' alignItems='flex-start'>
        <StyleIcon src={'imgs/globe-icon.svg'} alt='world wide web icon' />
        <a href={props.github} target='_blank' rel='noopener noreferrer' style={{textDecoration: 'none'}}>
          <StyledUrl>{props.website}</StyledUrl>
        </a>
      </LinkItem>}
    </StyledGrid>
  );
}