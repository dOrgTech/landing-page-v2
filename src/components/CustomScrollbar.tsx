import React from "react";
import { Scrollbar } from "react-scrollbars-custom";
import {makeStyles, Theme, useMediaQuery, useTheme} from "@material-ui/core";
import {hexToRGB} from "../utils/colorUtils";

// see: https://github.com/xobotyi/react-scrollbars-custom

interface Props {
  rtl?: boolean;
  noScrollX?: boolean;
  noScrollY?: boolean;
  contentClass?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

// eslint-disable-next-line react/display-name
export const CustomScrollbar: React.FC<Props> = (props: Props) => {

  const theme: Theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('lg'));

  const scrollbarStyles = makeStyles({
    thumbY: {
      background: `${hexToRGB(theme.palette.secondary.main, 0.5)} !important`
    },
    trackY: {
      background: `${hexToRGB(theme.palette.secondary.main, 0.15)} !important`,
      width: '8px !important',
    },
    thumbX: { },
    trackX: { },
    content: { },
    scroller: { },
    wrapper: { },
    holder: { }
  })();

  return (
    <Scrollbar
      native={!desktop}
      rtl={props.rtl}
      noScrollX={props.noScrollX}
      noScrollY={props.noScrollY}
      style={{...props.style}}
      thumbYProps={{ className: scrollbarStyles.thumbY }}
      trackYProps={{ className: scrollbarStyles.trackY }}
      thumbXProps={{ className: scrollbarStyles.thumbX }}
      trackXProps={{className: scrollbarStyles.trackX}}
      contentProps={{ className: `${scrollbarStyles.content} ${props.contentClass? props.contentClass : ''}` }}
      scrollerProps={{ className: scrollbarStyles.scroller }}
      wrapperProps={{ className: scrollbarStyles.wrapper }}
      className={scrollbarStyles.holder}>
      {props.children}
    </Scrollbar>
  );
}