import React from 'react'
import { styled, Typography, Grid } from '@material-ui/core'
import { theme } from "../../../theme";
import { Perk } from "../../../constants/perks";
import {hexToRGBA} from "../../../utils/colorUtils";

const StyledGrid = styled(Grid)({
  margin: 'auto',
  width: '100%',
  height: '58.5vw',
  padding: '7.5vw 0 0 5.5vw',
  backgroundColor: 'rgba(0, 0, 0, 0.15)',
  boxSizing: 'border-box',
  '&:hover': {
    backgroundColor: hexToRGBA(theme.palette.secondary.main, 0.15)
  }
});

const StyleDetail = styled(Typography)({
  maxWidth: '74vw',
  marginTop: '2.85vw',
  fontFamily: theme.typography.fontFamily,
  fontSize: '3.33vw',
  fontWeight: 500,
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 2,
  letterSpacing: '-0.42px',
  textAlign: 'left',
  color: theme.palette.text.secondary
});

const StyledPerk = styled(Typography)({
  marginTop: '7.5vw',
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

const FontIcon = styled(Typography)({
  fontSize: '11vw',
  textAlign: "left",
});

interface Props {
  perk: Perk;
  classes?: string;
}

export const PerkBoxMobile: React.FC<Props> = (props: Props) => {
  return (
    <StyledGrid className={props.classes} container direction='column' spacing={0} justify='flex-start' alignItems='flex-start'>
      <Grid item>
        <FontIcon>{props.perk.icon}</FontIcon>
      </Grid>
      <Grid item>
        <StyledPerk>{props.perk.perk}</StyledPerk>
      </Grid>
      <Grid item>
        <StyleDetail>{props.perk.detail}</StyleDetail>
      </Grid>
    </StyledGrid>
  );
}