import React from 'react'
import {styled, Grid} from '@material-ui/core'

const StyledGrid = styled(Grid)({
  width: '100%',
  background: 'transparent',
  boxSizing: 'border-box'
});

const StyleIcon = styled('img')({
  width: "5.7vw",
  height: "5.7vw",
  objectFit: "contain",
  filter: 'brightness(0) saturate(100%) invert(100%)',
});

interface Props {
  github?: string;
  website?: string;
  linkedin?: string;
  classes?: string;
  item?: boolean
}

export const PortfolioLinkBoxMobile: React.FC<Props> = (props: Props) => {

  return (
    <StyledGrid className={props.classes} item={props.item} container spacing={0} direction='row' justify='space-evenly' alignItems='center'>
      {props.github &&
      <Grid item>
        <a href={props.github} target='_blank' rel='noopener noreferrer' style={{textDecoration: 'none'}}>
          <StyleIcon src={'imgs/logos/github-logo-icon.svg'} alt='github logo' />
        </a>
      </Grid>}
      {props.linkedin &&
      <Grid item>
        <a href={props.linkedin} target='_blank' rel='noopener noreferrer' style={{textDecoration: 'none'}}>
          <StyleIcon src={'imgs/logos/linkedin-logo.svg'} alt='linkedin logo' />
        </a>
      </Grid>}
      {props.website &&
      <Grid item>
        <a href={props.website} target='_blank' rel='noopener noreferrer' style={{textDecoration: 'none'}}>
          <StyleIcon src={'imgs/globe-icon.svg'} alt='world wide web icon' />
        </a>
      </Grid>}
    </StyledGrid>
  );
}