import React from 'react'
import { styled, Typography, Grid } from '@material-ui/core'
import { Company } from "../../../constants/company";
import { theme } from "../../../theme";

const StyledGrid = styled(Grid)({
  width: '30vw',
  height:'100%',
  marginBottom: '2vw',
  boxSizing: 'border-box',
  backgroundColor: 'transparent',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.15)'
  },
  position: 'relative'
});

const StyledTitle = styled(Typography)({
  fontFamily: theme.typography.fontFamily,
  fontSize: '2vw',
  fontWeight: 500,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: '-1.5px',
  textAlign: "left",
  color: theme.palette.text.primary,
});

const StyledIcon = styled('img')({
  width: "2vw",
  height: "2vw",
  objectFit: "contain",
  float: 'left',
  marginRight:'2.25vw',
  position: 'relative',
  bottom: '0.25vw'
});

interface Props {
  company: Company;
}

export const CompanyBox: React.FC<Props> = (props: Props) => {
  return (
    <StyledGrid container direction='row' justify={'flex-start'} alignItems={'flex-start'}>
      <Grid item>
        <StyledIcon src={props.company.icon} alt='icon' />
      </Grid>
      <Grid item>
        <StyledTitle>{props.company.name}</StyledTitle>
      </Grid>
    </StyledGrid>
  );
}