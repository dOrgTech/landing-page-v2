import React, {CSSProperties} from "react";
import {Box, styled} from "@material-ui/core";
import {theme} from "../theme";
import {hexToRGB} from "../utils/colorUtils";


const StyledBox = styled(Box)({
  overflowY: 'auto',
  overflowX: 'hidden',
  scrolLBehavior: 'smooth',
  scrollbarColor: `${hexToRGB(theme.palette.secondary.main, 0.5)} ${hexToRGB(theme.palette.secondary.main, 0.15)}`,
  scrollbarWidth: 'thin',
  '&::-webkit-scrollbar': {
    background: 'transparent',
    opacity: 0,
    width: '8px',
    height: 0
  },
  '&::-webkit-scrollbar-track': {
    background: `${hexToRGB(theme.palette.secondary.main, 0.15)}`,
    width: '8px',
  },
  '&::-webkit-scrollbar-thumb': {
    background: `${hexToRGB(theme.palette.secondary.main, 0.5)}`,
    width: '8px',
  }
});

interface Props {
  children?: React.ReactNode;
  style?: CSSProperties;
  className?: string;
}

export const ScrollContainer: React.FC<Props> = (props: Props) => {

  return (
    <StyledBox style={props.style} className={props.className}>
      {props.children}
    </StyledBox>
  );
};