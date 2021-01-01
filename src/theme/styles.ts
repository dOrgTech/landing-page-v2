
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