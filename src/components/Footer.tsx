import React from 'react'
import {FooterDesktop} from "./FooterDesktop";
import {FooterMobile} from "./FooterMobile";
import {useIsDesktop} from "../utils/hooks";

export const Footer: React.FC = () => {

  const desktop = useIsDesktop();

  if (desktop) {
    return (<FooterDesktop/>);
  } else {
    return (<FooterMobile/>);
  }
}