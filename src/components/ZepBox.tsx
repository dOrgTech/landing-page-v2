import { styled, useTheme, Box } from '@material-ui/core'
import React from 'react'

const StyleBox = styled(Box)({
  height: 500,
  width: 500,
  margin: 'auto'
});

export const ZepBox = () => {
  const theme = useTheme()
  
  return (
    <StyleBox>
      <h1>test</h1>
    </StyleBox>
  );
}
  