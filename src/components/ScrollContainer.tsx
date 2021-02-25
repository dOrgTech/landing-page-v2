import React, {CSSProperties} from "react";
import {Box, makeStyles, styled} from "@material-ui/core";
import {theme} from "../theme";
import {hexToRGBA} from "../utils/colorUtils";
import {useIsDesktop} from "../utils/hooks";


const StyledBox = styled(Box)({
  overflowY: 'auto',
  overflowX: 'hidden',
  scrolLBehavior: 'smooth',
  scrollbarColor: `${hexToRGBA(theme.palette.secondary.main, 0.5)} ${hexToRGBA(theme.palette.secondary.main, 0.15)}`,
  scrollbarWidth: 'thin',
  '&::-webkit-scrollbar': {
    background: 'transparent',
    opacity: 0,
    width: '8px',
    height: 0
  },
  '&::-webkit-scrollbar-track': {
    background: `${hexToRGBA(theme.palette.secondary.main, 0.15)}`,
    width: '8px',
  },
  '&::-webkit-scrollbar-thumb': {
    background: `${hexToRGBA(theme.palette.secondary.main, 0.5)}`,
    width: '8px',
  }
});

interface Props {
  children?: React.ReactNode;
  style?: CSSProperties;
  className?: string;
}

export const ScrollContainer: React.FC<Props> = (props: Props) => {

  const className = props.className ? props.className : '';

  const desktop = useIsDesktop();

  const mobileStyle = makeStyles({
    transparent: {
      scrollbarWidth: desktop ? 'thin' : 'none',
      '&::-webkit-scrollbar': {
        width: desktop ? '8px' : '0px',
      },
      '&::-webkit-scrollbar-track': {
        width: desktop ? '8px' : '0px',
      },
      '&::-webkit-scrollbar-thumb': {
        width: desktop ? '8px' : '0px',
      }
    }
  })();

  return (
    <StyledBox style={props.style} className={`${className} ${mobileStyle.transparent}`}>
      {props.children}
    </StyledBox>
  );
};