import React from 'react'
import { Box, styled, Grid } from '@material-ui/core'
import { theme } from "../theme";
import {Article, Press} from "../constants/press";

const BOX_WIDTH = 42.5;
const BOX_HEIGHT = 19.125;
const PADDING = 2;

const StyleBox = styled(Box)({
  margin: 'auto',
  width: BOX_WIDTH.toString() + 'rem',
  height: BOX_HEIGHT.toString() + 'rem',
  padding: PADDING.toString() + 'rem 0',
  backgroundColor: theme.palette.secondary.main,
  boxSizing: 'border-box',
  position: 'relative'
});

const StyleGrid = styled(Grid)({
  width: BOX_WIDTH.toString() + 'rem',
  height: (BOX_HEIGHT - 2*PADDING).toString() + 'rem',
});

const StyleIcon = styled('img')({
  width: "12.5rem",
  height: "100%",
  maxHeight: '3rem',
  margin: 'auto',
  objectFit: "contain",
  background: 'transparent',
  display: 'block',
  position: 'relative',
  zIndex: 2
});

const StyleRings = styled('img')({
  width: '14.313rem',
  height: '14.5rem',
  margin: '0',
  padding: '0',
  objectFit: 'contain',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 1
})

interface Props {
  press: Press;
}

export const PressBox: React.FC<Props> = (props: Props) => {
  return (
    <StyleBox>
      <StyleRings src='imgs/concentric-rings-right.svg' alt={'concentric rings flourish'} />
      <StyleGrid container direction='row' spacing={0} justify='center' alignItems='center'>
        {Object.values(props.press).map((article: Article, index: number) => (
          <Grid item xs={6} key={`article-${index}`}>
            <a href={article.url} target='_blank' rel='noopener noreferrer'>
              <StyleIcon src={article.logo} srcSet={article.logo + ' 1x, ' + article.logo2x + ' 2x, ' + article.logo3x + ' 3x'} alt='icon' />
            </a>
          </Grid>
        ))}
      </StyleGrid>
    </StyleBox>
  );
}
