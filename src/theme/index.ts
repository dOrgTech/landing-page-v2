import { createMuiTheme } from '@material-ui/core/styles';

// TODO: adjust these settings to the theme provided by the designer
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1C272D",
    },
    secondary: {
      main: "#60c093",
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#529dad'
    }
  },
  typography: {
    fontFamily: `'Montserrat', sans-serif`,
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
      root: {
        height: 40,
        "& $notchedOutline": {
          borderWidth: 0
        },
        "&:hover $notchedOutline": {
          borderWidth: 0
        },
        "&$focused $notchedOutline": {
          borderWidth: 0
        }
      },
    },
    MuiLink: {
      root: {
        '&:hover': {
          color: '#60c093'
        }
      }
    },
    MuiAppBar: {
      root: {
        backgroundColor: '#1B262C',
        boxShadow: 'none'
      }
    },
    MuiButton: {
      outlinedSecondary: {
        border: 'solid 1px #529dad',
        '&:hover': {
          border: 'solid 1px #529dad',
          backgroundColor: '#60c093',
          color: '#ffffff'
        }
      }
    }
  }
});