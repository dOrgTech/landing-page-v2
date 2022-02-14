import React from 'react'
import {Box, styled, Grid} from '@material-ui/core'
import { colors, theme } from "../../../theme";
import {Article, Press} from "../../../constants/press";
import {getSonarAnimation} from "../../../theme/styles";


const StyledBox = styled(Box)({
  margin: 'auto',
  width: '100%',
  height: '19.125vw',
  padding: '1vw 0',
  boxSizing: 'border-box',
  position: 'relative'
});

const PatternBackground = styled('img')({
  zIndex: 0,
  position: 'absolute',
  width: 'inherit',
  height: '99%',
  
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
  objectFit: "contain",
  background: 'transparent',
  display: 'block',
  position: 'relative',
  zIndex: 2,
  '&:hover': {
    transition: 'width 0.3s, height 0.3s',
    width: "15vw",
    height: "3.6vw",
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
      <PatternBackground src='imgs/patternbackground1.png' style={{marginTop: '-11.5px'}}/>
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