import React from 'react'
import {FooterDesktop} from "./FooterDesktop";
import {FooterMobile} from "./FooterMobile";
import {Theme, useMediaQuery, useTheme} from "@material-ui/core";

export const Footer: React.FC = () => {

  const theme: Theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('md'));

  if (desktop) {
    return (<FooterDesktop/>);
  } else {
    return (<FooterMobile/>);
  }
}