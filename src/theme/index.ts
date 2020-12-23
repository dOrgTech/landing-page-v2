import { createMuiTheme } from '@material-ui/core/styles';

// TODO: adjust these settings to the theme provided by the designer
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
          backgroundColor: '#1AAF71',
          color: '#ffffff'
        }
      }
    }
  }
});