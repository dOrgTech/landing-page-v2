import React from 'react'
import { Box, styled, Typography, Grid } from '@material-ui/core'

import { Company } from "../constants/company";
import { theme } from "../theme";

const StyleBox = styled(Box)({
  width: '100%',
  backgroundColor: 'transparent',
  height:'100%',
  boxSizing: 'border-box',
  overflow:'no-wrap',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.15)'
    
  },
  marginRight:'auto'
});

const StyleTitle = styled(Typography)({
  width: '80%',
  fontStretch: 'normal',
  fontStyle: 'normal',
  letterSpacing: '1.5px',
  textAlign: 'left',
  float:'left',
  color: theme.palette.text.primary,
  
});

const StyleStat = styled(Typography)({
  width: "100%",
  height: "100%",
  fontFamily: theme.typography.fontFamily,
  fontWeight: "bold",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.35,
  letterSpacing: "normal",
  textAlign: "start",
  color: theme.palette.text.primary
});

const StyleIcon = styled('img')({
  width: "1.5rem",
  height: "1.5rem",
  objectFit: "contain",
  float: 'left',
  margin:'1rem 1rem 0 0'
 
});

interface Props {
  company: Company;
}

export const CompanyBox: React.FC<Props> = (props: Props) => {
  return (
    <StyleBox>
    
        
      <Grid container direction='row'>
        <StyleTitle variant = 'h5'>{props.company.name} <StyleIcon src={props.company.icon} alt='icon' /></StyleTitle>
         
   
        
      </Grid>
    </StyleBox>
  );
}
