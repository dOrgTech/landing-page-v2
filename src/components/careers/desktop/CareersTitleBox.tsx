import React, {useState} from 'react'
import {Grid, makeStyles, styled, Typography,} from '@material-ui/core'
import { theme } from "../../../theme";
import {getSonarAnimation} from "../../../theme/styles";
import {CSSTransition} from 'react-transition-group';

const StyledGrid = styled(Grid)({
  width: '100%',
  height: '13.75vw',
  padding: '3.625vw 0 0 1.75vw',
  background: 'transparent',
  boxSizing: 'border-box',
  position: 'relative'
});

const StyledTextPrimary = styled(Typography)({
  fontFamily: theme.typography.fontFamily,
  fontSize: '3.25vw',
  fontWeight: 600,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: '-1.6px',
  textAlign: "left",
  color: theme.palette.text.primary
});

const StyledTextSecondary = styled(Typography)({
  fontFamily: theme.typography.fontFamily,
  fontSize: '3.25vw',
  fontWeight: 600,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: '-1.6px',
  textAlign: "left",
  color: theme.palette.text.secondary
});

const StyledRings = styled('img')({
  width: '19.125vw',
  height: '19.063vw',
  objectFit: 'contain',
  position: 'absolute',
  top: 0,
  right: 0,
  zIndex: 1
});
const useSonarAnimation= getSonarAnimation('30vw', 3);

const FadeCover = styled('div')({
  width: '5.1vw',
  height: '4.25vw',
  position:'absolute',
  bottom: '-0.5vw',
  right: '-0.2vw',
  background: theme.palette.primary.main,
});

const duration = 1.5
const useSecondaryTextTransitionStyles = makeStyles({
  appear: {},
  appearActive:  {},
  appearDone:  {},
  enter: {
    width: '100%',
    height: '4.25vw',
  },
  enterActive:  {
    width: '100%',
    height: '0%',
    transition: `height ${duration}s ease-out`,
  },
  enterDone:  {},
  exit: {
    width: '0%',
    height: '4.25vw',
  },
  exitActive:  {
    width: '100%',
    height: '4.25vw',
    transition: `width ${duration}s ease-in`,
  },
  exitDone:  {},
});

interface Props {
  textPrimary: string;
  textSecondary: string[];
  classes?: string;
}

export const CareersTitleBox: React.FC<Props> = (props: Props) => {

  const sonarAnimation = useSonarAnimation();

  const [textIndex, setTextIndex] = useState(0);
  const [transitionIn, setTransitionIn] = useState(true);
  const timeout = {
    appear: duration * 667,
    enter: duration * 1000,
    exit: duration * 1000,
  }
  const secondaryTextTransitionStyles = useSecondaryTextTransitionStyles();
  const transitionClassNames = {
    appear: secondaryTextTransitionStyles.appear,
    appearActive: secondaryTextTransitionStyles.appearActive,
    appearDone: secondaryTextTransitionStyles.appearDone,
    enter: secondaryTextTransitionStyles.enter,
    enterActive: secondaryTextTransitionStyles.enterActive,
    enterDone: secondaryTextTransitionStyles.enterDone,
    exit: secondaryTextTransitionStyles.exit,
    exitActive: secondaryTextTransitionStyles.exitActive,
    exitDone: secondaryTextTransitionStyles.exitDone,
  }

  const handleEntered = (node: HTMLElement, isAppearing: boolean) => {
    setTransitionIn(false);
  }
  const handleExited = (node: HTMLElement) => {
    const nextIndex = (textIndex + 1) % props.textSecondary.length;
    setTextIndex(nextIndex);
    setTransitionIn(true);
  }

  return (
    <StyledGrid className={props.classes} container direction={'row'} spacing={0} justify={'flex-start'} alignItems={'flex-start'}>
      <Grid item>
        <StyledTextPrimary>{props.textPrimary}</StyledTextPrimary>
      </Grid>
      <Grid item style={{position: 'relative'}}>
        <CSSTransition classNames={{...transitionClassNames}} appear in={transitionIn} timeout={timeout} onEntered={handleEntered} onExited={handleExited}>
          <FadeCover/>
        </CSSTransition>
        <StyledTextSecondary>&nbsp;{props.textSecondary[textIndex]}</StyledTextSecondary>
      </Grid>
      <StyledRings src='imgs/concentric-rings-left.svg' alt={'concentric rings flourish'} className={sonarAnimation.animate} />
    </StyledGrid>
  );
}