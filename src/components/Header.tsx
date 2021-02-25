import React from "react";
import {HeaderMobile} from "./HeaderMobile";
import {HeaderDesktop} from "./HeaderDesktop";
import {useIsDesktop} from "../utils/hooks";

export const Header: React.FC = () => {

  const desktop = useIsDesktop();

  if (desktop) {
    return (<HeaderDesktop/>);
  } else {
    return (<HeaderMobile/>);
  }
};
