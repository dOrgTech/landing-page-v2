import React from 'react'
import { Box, styled, Typography, Grid } from '@material-ui/core'

import { Stat } from "../constants/stats";
import { theme } from "../theme";

const StyleBox = styled(Box)({
    margin: 'auto',
    width: '21.313rem',
    height: '29.125rem',
    padding: '3.813rem 3.313rem 8.813rem 2.875rem',
    backgroundColor: 'transparent',
    boxSizing: 'border-box',
    '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.15)'
    }
});

const StyleDetail = styled(Typography)({
    width: '100%',
    height: '100%',
    margin: '1.625rem 0 0 0.188rem',
    fontFamily: theme.typography.fontFamily,
    fontSize: '0.938rem',
    fontWeight: 500,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.87,
    letterSpacing: 'normal',
    textAlign: 'left',
    color: theme.palette.text.secondary
});

const StylePerk = styled(Typography)({
    width: "100%",
    height: "100%",
    margin: '1.688rem 1.313rem 1.625rem 0.188rem',
    fontFamily: theme.typography.fontFamily,
    fontSize: '2rem',
    fontWeight: 600,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: 1.31,
    letterSpacing: '-1.6px',
    textAlign: "left",
    color: theme.palette.text.primary
});

const StyleIcon = styled('img')({
    width: "3.75rem",
    height: "3.75rem",
    margin: '0 11.375rem 1.688rem 0',
    objectFit: "contain",
    float: 'left'
});

interface Props {
    stat: Stat;
}

export const PerkBox: React.FC<Props> = (props: Props) => {
    return (
        <StyleBox>
            <StyleIcon src={props.stat.icon} alt='icon' />
            <Grid container direction='column' spacing={0} justify='center' alignItems='center'>
                <div>
                    <StylePerk>{props.stat.stat}</StylePerk>
                    <StyleDetail>{props.stat.title}</StyleDetail>
                </div>
            </Grid>
        </StyleBox>
    );
}