import React from 'react'
import CookieConsent from "react-cookie-consent";
import {theme} from "../theme";
import {makeStyles, Theme, useMediaQuery, useTheme} from "@material-ui/core";


const cookieStyle = {
  background: '#000e3c',
}

const cookieButtonStyle = {
  margin: 0,
  width: '9.5vw',
  padding: '0.75vw',
  background: theme.palette.secondary.main,
  fontFamily: theme.typography.fontFamily,
  fontSize: '0.938vw',
  fontWeight: 'bold',
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: '1.5px',
  textAlign: "center",
  color: theme.palette.text.primary,
}

const cookieContentStyle = {
  fontFamily: theme.typography.fontFamily,
  fontSize: '1.5vw',
  fontWeight: 'normal',
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: 'normal',
  textAlign: "center",
  color: theme.palette.text.secondary,
}

const useButtonWrapperStyle = makeStyles({
  buttonWrapper: {
    position: 'relative',
    right: '0.938vw',
    top: '-0.25vw',
    transition: '0.15s',
    '&:hover': {
      border: 'initial',
      boxShadow: '0 0.5vw 0.5vw -0.2vw rgba(255, 255, 255, 1)',
      transform: 'translateY(-0.1vw)',
    },
    '&:focus': {
      border: 'initial',
      boxShadow: '0 0.5vw 0.5vw -0.2vw rgba(255, 255, 255, 1)',
      transform: 'translateY(-0.1vw)',
    }
  },
  buttonWrapperMobile: {
    height: '8vw',
    position: 'relative',
    right: '1vw',
    top: '1.5vw'
  }
});


const cookieButtonStyleMobile = {
  height: '8vw',
  maxWidth: '30vw',
  width: '27vw',
  margin: 0,
  padding: '2.5vw 1vw',
  background: theme.palette.secondary.main,
  fontFamily: theme.typography.fontFamily,
  fontSize: '3vw',
  fontWeight: 'bold',
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: '1.5px',
  textAlign: "center",
  color: theme.palette.text.primary,
}

const cookieContentStyleMobile = {
  marginRight: '3vw',
  maxWidth: '70vw',
  height: '7vw',
  fontFamily: theme.typography.fontFamily,
  fontSize: '3vw',
  fontWeight: 'normal',
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: 'normal',
  textAlign: "center",
  color: theme.palette.text.secondary,
}


interface Props {
  prompt: string;
  debug?: boolean;
}

export const CookieConsentPrompt: React.FC<Props> = (props: Props) => {

  const buttonWrapperStyle = useButtonWrapperStyle();
  const theme: Theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('lg'));

  if (desktop) {
    return (
      <CookieConsent
        debug={props.debug}
        style={cookieStyle}
        buttonStyle={cookieButtonStyle}
        buttonWrapperClasses={buttonWrapperStyle.buttonWrapper}
        contentStyle={cookieContentStyle}>
        {props.prompt}
      </CookieConsent>
    );
  } else {
    return (
      <CookieConsent
        debug={props.debug}
        style={cookieStyle}
        buttonStyle={cookieButtonStyleMobile}
        buttonWrapperClasses={buttonWrapperStyle.buttonWrapperMobile}
        contentStyle={cookieContentStyleMobile}>
        {props.prompt}
      </CookieConsent>
    );
  }
}