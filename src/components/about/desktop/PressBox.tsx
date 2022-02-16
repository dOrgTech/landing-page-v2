import React from 'react'
import {Box, styled, Grid} from '@material-ui/core'
import { colors, theme } from "../../../theme";
import {Article, Press} from "../../../constants/press";
import {getSonarAnimation} from "../../../theme/styles";


const StyledBox = styled(Box)({
  margin: 'auto',
  width: '100%',
  height: '19.125vw',
  boxSizing: 'border-box',
  position: 'relative'
});

const PatternBackground = styled('img')({
  zIndex: 0,
  position: 'absolute',
  opacity: .72,
});

const StyledGrid = styled(Grid)({
  width: '100%',
  height: '100%',
});

const StyledIcon = styled('img')({
  width: "12.5vw",
  height: "3vw",
  margin: 'auto',
  paddingBottom: '.5vh',
  objectFit: "contain",
  background: 'transparent',
  position: 'relative',
  display: 'block',
  zIndex: 2,
  transitionDuration: '0.3s',
  transitionProperty: 'transform',

  '&:hover': {
    transform: 'scale(1.17)'
  }
});

const StyledRings = styled('img')({
  width: '14.313vw',
  height: '14.5vw',
  objectFit: 'contain',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 1
})
const useSonarAnimation= getSonarAnimation('22.5vw', 3);

interface Props {
  press: Press;
  classes?: string;
}

export const PressBox: React.FC<Props> = (props: Props) => {

  const sonarAnimation = useSonarAnimation();

  return (
    <StyledBox className={props.classes}>
      <PatternBackground src='imgs/patternbackground1.svg' />
      <StyledRings src='imgs/concentric-rings-right.svg' alt={'concentric rings flourish'} className={sonarAnimation.animate}/>
      <StyledGrid container direction='row' spacing={0} justify='center' alignItems='center'>
        {Object.values(props.press).map((article: Article, index: number) => (
          <Grid item xs={6} key={`article-${index}`} container justify={'center'} alignItems={'center'}>
            <a href={article.url} target='_blank' rel='noopener noreferrer'>
              <StyledIcon src={article.logo} srcSet={article.logo + ' 1x, ' + article.logo2x + ' 2x, ' + article.logo3x + ' 3x'} alt='icon' />
            </a>
          </Grid>
        ))}
      </StyledGrid>
    </StyledBox>
  );
}

export default PatternBackground;