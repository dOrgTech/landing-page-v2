import {makeStyles} from "@material-ui/core";

export const borderStyle = '1px solid rgba(255, 255, 255, 0.25)';
export const useBorders = makeStyles({
  allBorders: {
    border: borderStyle
  },
  rightBorder: {
    borderRight: borderStyle
  },
  leftBorder: {
    borderLeft: borderStyle
  },
  topBorder: {
    borderTop: borderStyle
  },
  bottomBorder: {
    borderBottom: borderStyle
  },
  bottomLeftBorder: {
    borderBottom: borderStyle,
    borderLeft: borderStyle
  }
});