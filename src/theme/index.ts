import { createMuiTheme } from "@material-ui/core/styles";
import { borderStyle } from "./styles";

export const colors = {
  blue: "#4494F8",
  green: "#73F25F",
  yellow: "#EFEE02",
  orange: "#FF7B22",
  magenta: "#E65688",
  purple: "#5F6EEF",
  gray: "#373B3D",
};

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: colors.purple,
      contrastText: "#000",
    },
    text: {
      primary: "#FFF",
      secondary: colors.green,
    },
  },
  typography: {
    fontFamily: `'Spartan', sans-serif`,
    h1: {
      fontSize: 45,
      letterSpacing: -1,
      color: "#FFF",
    },
    h2: {
      fontSize: 40,
      letterSpacing: -1,
      color: "#FFF",
    },
    h3: {
      fontSize: 40,
      lineHeight: 1.5,
      letterSpacing: "-1px",
      color: "#FFF",
    },
    h4: {
      fontWeight: 500,
      fontSize: 40,
      lineHeight: 1.5,
      letterSpacing: "-1px",
      color: "#FFF",
    },
    h5: {
      fontSize: 40,
      lineHeight: 1.5,
      letterSpacing: "-1px",
      color: "#FFF",
    },
    subtitle1: {
      fontSize: 22,
      lineHeight: 1.75,
      color: "#FFF",
    },
    body1: {
      fontSize: 14,
      color: "#FFF",
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        boxShadow: "none",
      },
    },
    MuiTextField: {
      root: {
        border: "solid 1px #529dad",
        borderRadius: 4,
        backgroundColor: "#242F35",
        "& .MuiInput-underline:before": {
          borderBottomColor: "none",
        },
        "& .MuiInput-underline:hover:before": {
          borderBottomColor: "none",
        },
        "& .MuiInput-underline:after": {
          borderBottomColor: "none",
        },
        "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
          borderBottom: "0",
        },
      },
    },
    MuiInput: {
      multiline: {
        fontFamily: `'Spartan', sans-serif`,
        fontSize: "0.938vw",
        fontWeight: 600,
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: 1.5,
        letterSpacing: "-0.45px",
        textAlign: "left",
        color: colors.gray,
        alignItems: "flex-start",
      },
    },
    MuiLink: {
      root: {
        color: "#ffffff",
        "&:hover": {
          color: "#60c093",
        },
      },
    },
    MuiButton: {
      outlinedSecondary: {
        border: "solid 1px #529dad",
        "&:hover": {
          border: "solid 1px #529dad",
          backgroundColor: "#1AAF71",
          color: "#ffffff",
        },
      },
    },
    MuiMenu: {
      paper: {
        backgroundColor: colors.gray,
        border: borderStyle,
      },
      list: {
        backgroundColor: "rgba(0, 0, 0, 0.15)",
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});
