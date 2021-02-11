import React from 'react'
import { Box, styled, Typography, Grid } from '@material-ui/core'
import { theme } from "../../../theme";
import { Perk } from "../../../constants/perks";
import {hexToRGB} from "../../../utils/colorUtils";

const StyleBox = styled(Box)({
  margin: 'auto',
  width: '100%',
  height: '29.125vw',
  padding: '3.8vw 3.3vw 8.8vw 2.875vw',
  backgroundColor: 'rgba(0, 0, 0, 0.15)',
  boxSizing: 'border-box',
  '&:hover': {
    backgroundColor: hexToRGB(theme.palette.secondary.main, 0.15)
  }
});

const StyleDetail = styled(Typography)({
  width: '100%',
  height: '100%',
  margin: '1.4vw 0 0 0.2vw',
  fontFamily: theme.typography.fontFamily,
  fontSize: '0.92vw',
  fontWeight: 500,
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 1.87,
  letterSpacing: 'normal',
  textAlign: 'left',
  color: theme.palette.text.secondary
});

const StylePerk = styled(Typography)({
  width: "100%",
  height: "100%",
  margin: '1.7vw 1.3vw 0 0.2vw',
  fontFamily: theme.typography.fontFamily,
  fontSize: '2vw',
  fontWeight: 600,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.31,
  letterSpacing: '-1.6px',
  textAlign: "left",
  color: theme.palette.text.primary
});

const StyleIcon = styled('img')({
  width: "3.75vw",
  height: "3.75vw",
  margin: '0 11.375vw 0 0',
  objectFit: "contain",
  float: 'left'
});

interface Props {
  perk: Perk;
  classes?: string;
}

export const PerkBox: React.FC<Props> = (props: Props) => {
  return (
    <StyleBox className={props.classes} >
      <StyleIcon src={props.perk.icon} alt='icon' />
      <Grid container direction='column' spacing={0} justify='center' alignItems='flex-start'>
        <div>
          <StylePerk>{props.perk.perk}</StylePerk>
          <StyleDetail>{props.perk.detail}</StyleDetail>
        </div>
      </Grid>
    </StyleBox>
  );
}