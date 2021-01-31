import React from 'react'
import {styled, Typography, Grid} from '@material-ui/core'
import { theme } from "../../../../theme";

const StyledGrid = styled(Grid)({
  width: '43.6vh',
  height: '100%',
  background: 'transparent',
  boxSizing: 'border-box'
});

const TextItemContainer = styled(Grid)({
  height: '10.65vh'
});

const StyledName = styled(Typography)({
  fontFamily: theme.typography.fontFamily,
  fontSize: '3.25vh',
  fontWeight: 600,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: '-0.84px',
  textAlign: "left",
  color: theme.palette.text.primary
});

const StyledTitle = styled(Typography)({
  fontFamily: theme.typography.fontFamily,
  fontSize: '1.65vh',
  fontWeight: 'normal',
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 2,
  letterSpacing: '-0.42px',
  textAlign: "left",
  color: theme.palette.text.primary
});

const StyledBio = styled(Typography)({
  fontFamily: theme.typography.fontFamily,
  fontSize: '1.4vh',
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

export const NameBioContainer: React.FC<Props> = (props: Props) => {

  return (
    <StyledGrid className={props.classes} container spacing={0} direction='row' justify='flex-start' alignItems='flex-start'>
      <TextItemContainer item xs={8} container spacing={0} direction='row' justify='flex-start' alignItems='center'>
        <Grid item>
          <StyledName>{props.name}</StyledName>
        </Grid>
      </TextItemContainer>
      <TextItemContainer item xs={4} container spacing={0} direction='row' justify='flex-start' alignItems='center'>
        <Grid item>
          <StyledTitle>{props.title}</StyledTitle>
        </Grid>
      </TextItemContainer>
      <TextItemContainer item xs={12}>
        <StyledBio>{props.bio}</StyledBio>
      </TextItemContainer>
    </StyledGrid>
  );
}