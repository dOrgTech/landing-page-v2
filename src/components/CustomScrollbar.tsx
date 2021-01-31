import React from "react";
import { Scrollbar } from "react-scrollbars-custom";
import {makeStyles} from "@material-ui/core";

// see: https://github.com/xobotyi/react-scrollbars-custom

const useScrollbarstyles = makeStyles({
  thumbY: {

  },
  trackY: {

  },
  content: {

  },
  scroller: {

  },
  wrapper: {

  },
  holder: {

  }
});

interface Props {
  rtl?: boolean;
  noScrollX?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export const CustomScrollbar: React.FC<Props> = (props: Props) => {

  const scrollbarStyles = useScrollbarstyles();

  return (
    <Scrollbar
      style={{...props.style}}
      rtl={props.rtl}
      noScrollX={props.noScrollX}
      thumbYProps={{ className: scrollbarStyles.thumbY }}
      trackYProps={{ className: scrollbarStyles.trackY }}
      contentProps={{ className: scrollbarStyles.content }}
      scrollerProps={{ className: scrollbarStyles.scroller }}
      wrapperProps={{ className: scrollbarStyles.wrapper }}
      className={scrollbarStyles.holder}>
      {props.children}
    </Scrollbar>
  );
}