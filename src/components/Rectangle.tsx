import { faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Grid, Link, styled, useTheme, Box } from '@material-ui/core'
import React from 'react'

const StyleBox = styled(Box)({
    height: 500,
    width: 500,
    margin: 'auto'
});

export const Rectangle = () => {
    const theme = useTheme()
  
    return (
        <StyleBox bgcolor={theme.palette.secondary.main}>
            <h1>test</h1>
        </StyleBox>
    );
}