import { createMuiTheme } from '@material-ui/core/styles';
import {borderStyle} from "./styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#001047",
    },
    secondary: {
      main: "#1AAF71",
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#1AAF71'
    }
  },
  typography: {
    fontFamily: `'Spartan', sans-serif`,
    h1: {
      fontSize: 45,
      letterSpacing: -1
    },
    h2: {
      fontSize: 40,
      letterSpacing: -1
    },
    h3: {
      fontSize: 40,
      lineHeight: 1.5,
      letterSpacing: '-1px'
    },
    h4: {
      fontWeight:500,
      fontSize: 40,
      lineHeight: 1.5,
      letterSpacing: '-1px'
      
    },
    h5: {
      fontSize: 40,
      lineHeight: 1.5,
      letterSpacing: '-1px'
      
    },
    subtitle1: {
      fontSize: 22,
      lineHeight: 1.75
    },
    body1: {
      fontSize: 14
    }
  },
  overrides: {
    MuiTextField: {
      root: {
        border: 'solid 1px #529dad',
        borderRadius: 4,
        backgroundColor: '#242F35',
        '& .MuiInput-underline:before': {
          borderBottomColor: 'none',
        },
        '& .MuiInput-underline:hover:before': {
          borderBottomColor: 'none',
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: 'none',
        },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
          borderBottom: '0'
        }
      },
    },
    MuiInput: {
      multiline: {
        fontFamily: `'Spartan', sans-serif`,
        fontSize: '0.938vw',
        fontWeight: 600,
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: 1.5,
        letterSpacing: '-0.45px',
        textAlign: "left",
        color: "#001047",
        alignItems: 'flex-start'
      }
    },
    MuiLink: {
      root: {
        '&:hover': {
          color: '#60c093'
        }
      }
    },
    MuiButton: {
      outlinedSecondary: {
        border: 'solid 1px #529dad',
        '&:hover': {
          border: 'solid 1px #529dad',
          backgroundColor: '#1AAF71',
          color: '#ffffff'
        }
      }
    },
    MuiMenu: {
      paper: {
        backgroundColor: "#001047",
        border: borderStyle
      },
      list: {
        backgroundColor: 'rgba(0, 0, 0, 0.15)'
      }
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});