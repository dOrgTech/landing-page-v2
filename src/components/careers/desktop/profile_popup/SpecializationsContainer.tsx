import React from 'react'
import {styled, Typography, Grid} from '@material-ui/core'
import {theme} from "../../../../theme";

const StyledGrid = styled(Grid)({
  width: '43.5vh',
  height: '100%',
  background: 'transparent',
  boxSizing: 'border-box'
});

const SpecializationItem = styled(Grid)({
  height: '4vh',
  width: '20.5vh',
  minWidth: '20.5vh',
  marginBottom: '2.8vh'
});

const StyleIcon = styled('img')({
  width: "1.85vh",
  height: "1.85vh",
  marginRight: '1.65vh',
  objectFit: "contain",
  float: 'left'
});

const Specialization = styled(Typography)({
  fontFamily: theme.typography.fontFamily,
  fontSize: '1.65vh',
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