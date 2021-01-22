import React from 'react'
import {styled, Typography, Grid} from '@material-ui/core'
import {theme} from "../../../../theme";

const StyledGrid = styled(Grid)({
  width: 'max-content',
  height: '6.5vw',
  padding: '2vw 3vw',
  boxSizing: 'border-box',
  borderRadius: '14px',
  backgroundColor: theme.palette.secondary.main
});

const StyledName = styled(Typography)({
  fontFamily: theme.typography.fontFamily,
  fontSize: '2.9vw',
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
  xs?: boolean | "auto" | 10 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 11 | 12 | undefined;
  classes?: string;
}

const ChipLargeMobile: React.FC<Props> = (props: Props) => {

  return (
    <StyledGrid item xs={props.xs} className={props.classes} container direction='row' justify='center' alignItems='center'>
      <StyledName>{props.text}</StyledName>
    </StyledGrid>
  );
}

ChipLargeMobile.defaultProps = {
  xs: false
}

export {ChipLargeMobile};