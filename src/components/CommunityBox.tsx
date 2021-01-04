import React from 'react'
import { Box, styled, Typography, Grid } from '@material-ui/core'

import { Community } from "../constants/community";
import { theme } from "../theme";

const StyleBox = styled(Box)({
  width: '25rem',
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


const StyleIcon = styled('img')({
  width: "3rem",
  height: "3rem",
  objectFit: "contain",
  float: 'left',
  margin:'1rem 1rem 0 0'
 
});

interface Props {
  community: Community;
}

export const CommunityBox: React.FC<Props> = (props: Props) => {
  return (
    <StyleBox>
    
        
      <Grid container direction='row'>
        <StyleTitle variant = 'h5'>{props.community.name} <StyleIcon src={props.community.icon} alt='icon' /></StyleTitle>
         
   
        
      </Grid>
    </StyleBox>
  );
}