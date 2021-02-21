import React from 'react'
import {styled, Typography, Grid} from '@material-ui/core'
import { theme } from "../../../theme";
import {hexToRGBA} from "../../../utils/colorUtils";

const StyledGrid = styled(Grid)({
  width: 'max-content',
  height: '1.5vw',
  padding: '0 0.4vw',
  boxSizing: 'border-box',
  backgroundColor: hexToRGBA(theme.palette.secondary.main, 0.2),
  borderRadius: '4px',
  '&:hover': {
    backgroundColor: hexToRGBA(theme.palette.secondary.main, 0.6)
  }
});

const StyledName = styled(Typography)({
  fontFamily: theme.typography.fontFamily,
  fontSize: '0.625vw',
  fontWeight: 'normal',
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: 'normal',
  textAlign: 'left',
  color: theme.palette.text.primary
});

interface Props {
  text: string;
  xs?: boolean | "auto" | 10 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 11 | 12 | undefined;
  classes?: string;
}

const ChipSmall: React.FC<Props> = (props: Props) => {

  return (
    <StyledGrid item xs={props.xs} className={props.classes} container direction='row' justify='center' alignItems='center'>
      <StyledName>{props.text}</StyledName>
    </StyledGrid>
  );
}

ChipSmall.defaultProps = {
  xs: false
}

export {ChipSmall};