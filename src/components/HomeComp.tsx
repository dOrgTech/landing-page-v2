import React from 'react'
import {HomeCompDesktop} from "./HomeCompDesktop";
import {HomeCompMobile} from "./HomeCompMobile";
import {Theme, useMediaQuery, useTheme} from "@material-ui/core";


export const HomeComp: React.FC = () => {

  const theme: Theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('lg'));

  if (desktop) {
    return (<HomeCompDesktop/>);
  } else {
    return (<HomeCompMobile/>);
  }
}