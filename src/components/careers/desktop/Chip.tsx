import React from 'react'
import {styled, Typography, Grid} from '@material-ui/core'
import { theme } from "../../../theme";
import {hexToRGB} from "../../../Utils/colorUtils";

const StyledGrid = styled(Grid)({
  width: 'max-content',
  height: '1.5vw',
  padding: '0 0.4vw',
  boxSizing: 'border-box',
  backgroundColor: hexToRGB(theme.palette.secondary.main, 0.2),
  borderRadius: '4px',
  '&:hover': {
    backgroundColor: hexToRGB(theme.palette.secondary.main, 0.6)
  }
});

const StyledName = styled(Typography)({
  fontFamily: theme.typography.fontFamily,
  fontSize: '0.625vw',
  fontWeight: 'normal',
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.1,
  letterSpacing: 'normal',
  textAlign: 'left',
  color: theme.palette.text.primary
});

interface Props {
  text: string;
  margin?: string;
  xs?: boolean | "auto" | 10 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 11 | 12 | undefined;
  classes?: string;
}

const Chip: React.FC<Props> = (props: Props) => {

  return (
    <StyledGrid item xs={props.xs} className={props.classes} container direction='row' justify='flex-start' alignItems='center' style={{margin: props.margin}}>
      <StyledName>{props.text}</StyledName>
    </StyledGrid>
  );
}

Chip.defaultProps = {
  xs: false,
  margin: '0.15vw'
}

export {Chip};