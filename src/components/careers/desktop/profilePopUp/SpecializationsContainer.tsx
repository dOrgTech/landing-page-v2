import React from 'react'
import {styled, Typography, Grid} from '@material-ui/core'
import {theme} from "../../../../theme";

const StyledGrid = styled(Grid)({
  width: '25.375vw',
  height: '11.25vw',
  background: 'transparent',
  boxSizing: 'border-box'
});

const SpecializationItem = styled(Grid)({
  height: '2.125vw',
  width: '11vw',
  minWidth: '11vw',
});

const StyleIcon = styled('img')({
  width: "1vw",
  height: "1vw",
  marginRight: '0.875vw',
  objectFit: "contain",
  float: 'left'
});

const Specialization = styled(Typography)({
  fontFamily: theme.typography.fontFamily,
  fontSize: '0.875vw',
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

export const SpecializationsContainer: React.FC<Props> = (props: Props) => {

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