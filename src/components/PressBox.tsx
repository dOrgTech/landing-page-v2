import React from 'react'
import { Box, styled, Typography, Grid } from '@material-ui/core'
import { theme } from "../theme";
import {Article, Press} from "../constants/press";


const StyleBox = styled(Box)({
  margin: 'auto',
  width: '43.063rem',
  height: '19.125rem',
  padding: '0 4.5rem 4.486rem 0',
  backgroundColor: theme.palette.secondary.main,
  boxSizing: 'border-box',
});

const StyleIcon = styled('img')({
  width: "12.5rem",
  height: "100%",
  margin: '5rem 0 0rem 9rem',
  objectFit: "contain",
  background: 'transparent'
});

interface Props {
  press: Press;
}

export const PressBox: React.FC<Props> = (props: Props) => {
  return (
    <StyleBox>
      <Grid container direction='row' spacing={0} justify='flex-start' alignItems='flex-start'>
        {Object.values(props.press).map((article: Article, index: number) => (
          <Grid item xs={6} key={`article-${index}`}>
            <StyleIcon src={article.logo3x} alt='icon' />
          </Grid>
        ))}
      </Grid>
    </StyleBox>
  );
}
