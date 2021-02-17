import React from "react";
import { Scrollbar } from "react-scrollbars-custom";
import {makeStyles, Theme, useMediaQuery, useTheme} from "@material-ui/core";
import {hexToRGB} from "../utils/colorUtils";

// see: https://github.com/xobotyi/react-scrollbars-custom

interface Props {
  rtl?: boolean;
  noScrollX?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  contentClass?: string;
}

export const CustomScrollbar: React.FC<Props> = (props: Props) => {

  const theme: Theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('lg'));

  const scrollbarStyles = makeStyles({
    thumbY: {
      background: `${hexToRGB(theme.palette.secondary.main, 0.5)} !important`
    },
    trackY: {
      background: `${hexToRGB(theme.palette.secondary.main, 0.15)} !important`,
      width: '8px !important'
    },
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
      style={{...props.style}}
      thumbYProps={{ className: scrollbarStyles.thumbY }}
      trackYProps={{ className: scrollbarStyles.trackY }}
      contentProps={{ className: `${scrollbarStyles.content} ${props.contentClass? props.contentClass : ''}` }}
      scrollerProps={{ className: scrollbarStyles.scroller }}
      wrapperProps={{ className: scrollbarStyles.wrapper }}
      className={scrollbarStyles.holder}>
      {props.children}
    </Scrollbar>
  );
}