import React from 'react'
import { styled, Typography, Grid } from '@material-ui/core'
import { theme } from "../../../theme";
import { Perk } from "../../../constants/perks";

const StyledGrid = styled(Grid)({
  width: '20vw',
  height: '11.5vw',
  boxSizing: 'border-box',
});

const FontIcon = styled(Typography)({
  marginBottom: '1.5vw',
  fontSize: '3.75vw',
  lineHeight: 1,
  textAlign: 'center',
});

const StyledPerk = styled(Typography)({
  marginBottom: '1vw',
  fontFamily: theme.typography.fontFamily,
  fontSize: '1.5vw',
  fontWeight: 600,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: '-1.6px',
  textAlign: "center",
  color: theme.palette.text.primary
});

const StyledDetail = styled(Typography)({
  marginTop: '-0.435vw',
  fontFamily: theme.typography.fontFamily,
  fontSize: '1vw',
  fontWeight: 500,
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 1.87,
  letterSpacing: 'normal',
  textAlign: 'center',
  color: theme.palette.text.secondary
});

interface Props {
  perk: Perk;
  classes?: string;
}

export const PerkItem: React.FC<Props> = (props: Props) => {

  return (
    <StyledGrid className={props.classes} container direction='column' justify='center' alignItems='center'>
      <Grid item>
        <FontIcon>{props.perk.icon}</FontIcon>
      </Grid>
      <Grid item>
        <StyledPerk>{props.perk.perk}</StyledPerk>
      </Grid>
      <Grid item>
        <StyledDetail>{props.perk.detail}</StyledDetail>
      </Grid>
    </StyledGrid>
  );
}