import React from 'react'
import { Box, styled, Typography, Grid } from '@material-ui/core'

import { Company } from "../constants/company";
import { theme } from "../theme";

const StyleBox = styled(Box)({
  width: '21.25rem',
  height: '4rem',
  padding: '1.75rem 1.75rem 1.75rem 1.75rem',
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.15)'
  }
});

const StyleTitle = styled(Typography)({
  width: '100%',
  margin: '1.938rem 0 0 0',
  padding:'.1rem',
  fontStretch: 'normal',
  fontStyle: 'normal',
  letterSpacing: '1.5px',
  textAlign: 'right',
  float:'right',
  color: theme.palette.text.primary
});

const StyleStat = styled(Typography)({
  width: "100%",
  height: "100%",
  fontFamily: theme.typography.fontFamily,
  fontSize: "3.25rem",
  fontWeight: "bold",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.35,
  letterSpacing: "normal",
  textAlign: "center",
  color: theme.palette.text.primary
});

const StyleIcon = styled('img')({
  width: "1.5rem",
  height: "1.5rem",
  objectFit: "contain",
  float: 'left'
 
});

interface Props {
  company: Company;
}

export const CompanyBox: React.FC<Props> = (props: Props) => {
  return (
    <StyleBox>
      <Grid container alignItems='flex-start'>
        
        <Grid container direction='row'>
          <StyleIcon src={props.company.icon} alt='icon' />
          <StyleTitle variant = 'h5'>{props.company.name}</StyleTitle>
        </Grid>
        
      </Grid>
    </StyleBox>
  );
}
