import React from "react";
import {Theme, useMediaQuery, useTheme} from "@material-ui/core";
import {HeaderMobile} from "./HeaderMobile";
import {HeaderDesktop} from "./HeaderDesktop";

export const Header: React.FC = () => {

  const theme: Theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('md'));

  if (desktop) {
    return (<HeaderDesktop/>);
  } else {
    return (<HeaderMobile/>);
  }
};
