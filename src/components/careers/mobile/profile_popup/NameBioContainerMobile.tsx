import React from 'react'
import {styled, Typography, Grid} from '@material-ui/core'
import { theme } from "../../../../theme";

const StyledGrid = styled(Grid)({
  width: '100%',
  maxHeight: '45vw',
  background: 'transparent',
  boxSizing: 'border-box'
});

const StyledName = styled(Typography)({
  fontFamily: theme.typography.fontFamily,
  fontSize: '6.67vw',
  fontWeight: 600,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: '-0.84px',
  textAlign: "left",
  color: theme.palette.text.primary
});

const StyledTitle = styled(Typography)({
  marginTop: '3.8vw',
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

const StyledBio = styled(Typography)({
  marginTop: '4.67vw',
  fontFamily: theme.typography.fontFamily,
  fontSize: '2.85vw',
  fontWeight: 'normal',
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 2,
  letterSpacing: '-0.36px',
  textAlign: "left",
  color: theme.palette.text.primary
});

interface Props {
  name: string;
  title: string;
  bio: string;
  classes?: string;
}

export const NameBioContainerMobile: React.FC<Props> = (props: Props) => {

  return (
    <StyledGrid className={props.classes} container spacing={0} direction='column' justify='flex-start' alignItems='flex-start'>
      <Grid item>
        <StyledName>{props.name}</StyledName>
      </Grid>
      <Grid item>
        <StyledTitle>{props.title}</StyledTitle>
      </Grid>
      <Grid item>
        <StyledBio>{props.bio}</StyledBio>
      </Grid>
    </StyledGrid>
  );
}