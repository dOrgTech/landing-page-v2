import React, {useState} from "react";
import { Scrollbar } from "react-scrollbars-custom";
import {makeStyles, Theme, useMediaQuery, useTheme} from "@material-ui/core";
import {ScrollState} from "react-scrollbars-custom/dist/types/types";

// see: https://github.com/xobotyi/react-scrollbars-custom

interface Props {
  rtl?: boolean;
  noScrollX?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export const CustomScrollbar: React.FC<Props> = (props: Props) => {

  const theme: Theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('lg'));

  const [show, setShow] = useState(false);
  const handleScrollStart = (scrollState: ScrollState) => { setShow(true); }
  const handleScrollStop = (scrollState: ScrollState) => { setShow(false); }

  const scrollbarStyles = makeStyles({
    thumbY: {
      opacity: desktop ? 1 : (show ? 1 : 0)
    },
    trackY: {
      opacity: desktop ? 1 : (show ? 1 : 0)
    },
    content: { },
    scroller: { },
    wrapper: { },
    holder: { }
  })();

  return (
    <Scrollbar
      rtl={props.rtl}
      noScrollX={props.noScrollX}
      style={{...props.style}}
      thumbYProps={{ className: scrollbarStyles.thumbY }}
      trackYProps={{ className: scrollbarStyles.trackY }}
      contentProps={{ className: scrollbarStyles.content }}
      scrollerProps={{ className: scrollbarStyles.scroller }}
      wrapperProps={{ className: scrollbarStyles.wrapper }}
      className={scrollbarStyles.holder}
      onScrollStart={handleScrollStart}
      onScrollStop={handleScrollStop}>
      {props.children}
    </Scrollbar>
  );
}