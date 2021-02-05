// font used for StatBoxMobile statistics, in accordance with design spec
import {hexToRGB} from "../Utils/colorUtils";
import {makeStyles} from "@material-ui/core";

export const mobileStatFont = "'Open Sans', sans-serif";

// borders used for grid-like look
export const borderStyle = '1px solid rgba(255, 255, 255, 0.25)';

export interface BorderClasses {
  allBorders: {
    border: string
  },
  rightBorder: {
    borderRight: string
  },
  leftBorder: {
    borderLeft: string
  },
  topBorder: {
    borderTop: string
  },
  bottomBorder: {
    borderBottom: string
  },
  bottomLeftBorder: {
    borderBottom: string,
    borderLeft: string
  }
}

export const borderStyles: BorderClasses = {
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
};

export const getBorderStyle = (hexColor: string): BorderClasses => {
  return {
    allBorders: {
      border: `1px solid ${hexToRGB(hexColor, 0.25)}`
    },
    rightBorder: {
      borderRight: `1px solid ${hexToRGB(hexColor, 0.25)}`
    },
    leftBorder: {
      borderLeft: `1px solid ${hexToRGB(hexColor, 0.25)}`
    },
    topBorder: {
      borderTop: `1px solid ${hexToRGB(hexColor, 0.25)}`
    },
    bottomBorder: {
      borderBottom: `1px solid ${hexToRGB(hexColor, 0.25)}`
    },
    bottomLeftBorder: {
      borderBottom: `1px solid ${hexToRGB(hexColor, 0.25)}`,
      borderLeft: `1px solid ${hexToRGB(hexColor, 0.25)}`
    }
  };
};

export const getSonarAnimation = (size: string, durationInSeconds: number): ((props?: never) => Record<"@keyframes sonar" | "animate", string>) => {
  return makeStyles(theme => ({
    '@keyframes sonar': {
      from: {
        width: 0,
        height: 0,
        opacity: 1
      },
      to: {
        width: size,
        height: size,
        opacity: 0
      }
    },
    animate: {
      animation: `$sonar ${durationInSeconds}s ease-out infinite`,
    }
  }));
}