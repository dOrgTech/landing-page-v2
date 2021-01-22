import React from 'react'
import {styled, Typography, Grid} from '@material-ui/core'
import {theme} from "../../../../theme";

const StyledGrid = styled(Grid)({
  width: '100%',
  height: '32.5vw',
  background: 'transparent',
  boxSizing: 'border-box'
});

const SpecializationItem = styled(Grid)({
  height: '8.125vw',
  width: '42vw',
  minWidth: '42vw',
  paddingBottom: '4.325vw'
});

const StyleIcon = styled('img')({
  width: "3.8vw",
  height: "3.8vw",
  marginRight: '3.33vw',
  objectFit: "contain",
  float: 'left'
});

const Specialization = styled(Typography)({
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

interface Props {
  specializations: string[];
  classes?: string;
}

export const SpecializationsContainerMobile: React.FC<Props> = (props: Props) => {

  return (
    <StyledGrid className={props.classes} container spacing={0} direction='column' justify='flex-start' alignItems='flex-start'>
      {props.specializations.map((it, i) => (
        <SpecializationItem item xs={3} key={`specialization-${i}`}>
          <StyleIcon src={'imgs/check-mark-icon.svg'} alt='check mark icon' />
          <Specialization>{it}</Specialization>
        </SpecializationItem>
      ))}
    </StyledGrid>
  );
}