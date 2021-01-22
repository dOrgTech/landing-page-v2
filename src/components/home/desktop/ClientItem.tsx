import React from 'react'
import { styled, Typography, Grid } from '@material-ui/core'
import { theme } from "../../../theme";
import {Client} from "../../../constants/clients";

const StyledGrid = styled(Grid)({
  width: '30vw',
  height:'100%',
  boxSizing: 'border-box',
  backgroundColor: 'transparent',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.15)'
  },
  position: 'relative'
});

const StyledTitle = styled(Typography)({
  fontFamily: theme.typography.fontFamily,
  fontSize: '2.25vw',
  fontWeight: 500,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: '-1.08px',
  textAlign: "left",
  color: theme.palette.text.primary,
});

const StyledIcon = styled('img')({
  width: "2.25vw",
  height: "2.25vw",
  objectFit: "contain",
  float: 'left',
  marginRight:'2.25vw',
  position: 'relative',
  bottom: '0.25vw'
});


interface Props {
  client: Client
  classes?: string;
}

export const ClientItem: React.FC<Props> = (props: Props) => {
  return (
    <StyledGrid className={props.classes} container direction='row' justify={'flex-start'} alignItems={'flex-start'}>
      <Grid item>
        <StyledIcon src={props.client.icon} alt='icon' />
      </Grid>
      <Grid item>
        <StyledTitle>{props.client.name}</StyledTitle>
      </Grid>
    </StyledGrid>
  );
}