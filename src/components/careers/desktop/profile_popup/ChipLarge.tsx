import React from 'react'
import {styled, Typography, Grid} from '@material-ui/core'
import {theme} from "../../../../theme";

const StyledGrid = styled(Grid)({
  width: 'max-content',
  height: '1.65vw',
  padding: '0.5vw 0.9vw',
  boxSizing: 'border-box',
  borderRadius: '14px',
  backgroundColor: theme.palette.secondary.main
});

const StyledName = styled(Typography)({
  fontFamily: theme.typography.fontFamily,
  fontSize: '0.75vw',
  fontWeight: 'normal',
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: '-0.36px',
  textAlign: 'left',
  color: theme.palette.text.primary
});

interface Props {
  text: string;
  textColor?: string;
  xs?: boolean | "auto" | 10 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 11 | 12 | undefined;
  classes?: string;
}

const ChipLarge: React.FC<Props> = (props: Props) => {

  const textColor = props.textColor ? props.textColor : theme.palette.text.primary;

  return (
    <StyledGrid item xs={props.xs} className={props.classes} container direction='row' justify='center' alignItems='center'>
      <StyledName style={{color: textColor}}>{props.text}</StyledName>
    </StyledGrid>
  );
}

ChipLarge.defaultProps = {
  xs: false
}

export {ChipLarge};