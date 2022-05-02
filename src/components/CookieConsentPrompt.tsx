import React from 'react'
import CookieConsent from "react-cookie-consent";
import {theme} from "../theme";
import {makeStyles} from "@material-ui/core";
import {useIsDesktop} from "../utils/hooks";

const cookieStyle = {
  background: '#101112',
}

const cookieButtonStyle = {
  margin: 0,
  padding: '0.73vw 1vw .73vw 1vw',
  background: theme.palette.secondary.main,
  fontFamily: theme.typography.fontFamily,
  fontSize: '0.938vw',
  fontWeight: 'bold',
  lineHeight: 1,
  letterSpacing: '1.5px',
  textAlign: 'center',
  color: theme.palette.text.primary,
  whiteSpace: 'nowrap',
}

const cookieContentStyle = {
  padding: '.25vw',
  fontFamily: theme.typography.fontFamily,
  fontSize: '1.2vw',
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
    width: '9.5vw',
    position: 'relative',
    right: '2vw',
    top: '-0.09vw',
    transition: '0.3s',
    transitionProperty: 'transform',
    '&:hover': {
      transform: 'scale(1.05)',
    },
    '&:focus': {
      transform: 'scale(1.05)',
    }
  },
  buttonWrapperMobile: {
    height: 'max-content',
    width: 'max-content',
    margin: 0,
    padding: 0,
    position: 'relative',
    right: '3.5vw',
    top: '1.4vw',
    boxSizing: 'border-box',
  }
});


const cookieButtonStyleMobile = {
  height: '7.5vw',
  maxWidth: '30vw',
  width: '30vw',
  margin: 0,
  padding: '1vw 1vw',
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
  boxSizing: 'border-box',
  whiteSpace: 'nowrap',
}

const cookieContentStyleMobile = {
  marginRight: '3vw',
  width: '59vw',
  maxWidth: '59vw',
  height: '6vw',
  fontFamily: theme.typography.fontFamily,
  fontSize: '2.8vw',
  fontWeight: 'normal',
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.2,
  letterSpacing: 'normal',
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxSizing: 'border-box',
}


interface Props {
  prompt: string;
  debug?: boolean;
}

export const CookieConsentPrompt: React.FC<Props> = (props: Props) => {

  const buttonWrapperStyle = useButtonWrapperStyle();
  const desktop = useIsDesktop();

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