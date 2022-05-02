import React from 'react'
import { Box, styled, Grid } from '@material-ui/core'
import {Article, Press} from "../../../constants/press";
import {getSonarAnimation} from "../../../theme/styles";
import PatternBackground from "../desktop/PressBox";

const StyledBox = styled(Box)({
  margin: 'auto',
  width: '100%',
  height: '41vw',
  boxSizing: 'border-box',
  position: 'relative'
});

const StyledGrid = styled(Grid)({
  width: '100%',
  height: '100%',
});

const StyledIcon = styled('img')({
  width: "28.6vw",
  height: "6.2vw",
  margin: 'auto',
  objectFit: "contain",
  background: 'transparent',
  position: 'relative',
  display: 'block',
  zIndex: 2,
  transitionDuration: '0.3s',
  transitionProperty: 'transform',

  '&:hover': {
    transform: 'scale(1.1)'
  }
});

const StyledRings = styled('img')({
  width: '34.55vw',
  height: '34.95vw',
  objectFit: 'contain',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 1
})
const useSonarAnimation= getSonarAnimation('55vw', 3);

interface Props {
  press: Press;
  classes?: string;
}

export const PressBoxMobile: React.FC<Props> = (props: Props) => {

  const sonarAnimation = useSonarAnimation();

  return (
    <StyledBox className={props.classes}>
      <PatternBackground src='imgs/patternbackground1.svg' />
      <StyledRings src='imgs/concentric-rings-right.svg' alt={'concentric rings flourish'} className={sonarAnimation.animate}/>
      <StyledGrid container direction='row' spacing={0} justify='center' alignItems='center'>
        {Object.values(props.press).map((article: Article, index: number) => (
          <Grid item xs={6} key={`article-${index}`}>
            <a href={article.url} target='_blank' rel='noopener noreferrer'>
              <StyledIcon src={article.logo} srcSet={article.logo + ' 1x, ' + article.logo2x + ' 2x, ' + article.logo3x + ' 3x'} alt='icon' />
            </a>
          </Grid>
        ))}
      </StyledGrid>
    </StyledBox>
  );
}
