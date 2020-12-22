import React from 'react'
import { styled } from "@material-ui/core";



const Logo = styled("img")({
  width: 'auto',
  height: '20vw',
  maxHeight: '32px',
  cursor: 'pointer'
});
  
export function DOrgLogo(props:any) {

  return (
    <Logo src={process.env.PUBLIC_URL + "/imgs/dOrgLogo.svg"} alt="dOrg Logo" />
  );
}
