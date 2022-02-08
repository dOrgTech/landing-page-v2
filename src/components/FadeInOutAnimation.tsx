import React, {useState} from 'react'
import {makeStyles, styled, Typography,} from '@material-ui/core'
import {CSSTransition} from 'react-transition-group';
import {colors, theme} from "../theme";

const StyledText = styled(Typography)({
  fontFamily: theme.typography.fontFamily,
  color: theme.palette.text.secondary
});

const FadeCover = styled('div')({
  width: '101%',
  height: '120%',
  position:'absolute',
  bottom: '-10%',
  right: '-1%',
  background: theme.palette.primary.main,
});

interface Props {
  textSecondary: string[];
  background?: string;
  textClasses?: string;
  multiColor?: boolean;
  containerClasses?: string;
  duration?: number;
  noSpace?: boolean;
}

export const FadeInOutAnimation: React.FC<Props> = (props: Props) => {

  const duration = props.duration ? props.duration : 1.5;
  const useSecondaryTextTransitionStyles = makeStyles({
    appear: {
      width: '0%',
      height: '0%',
    },
    appearActive: {
      width: '0%',
      height: '0%',
    },
    appearDone:  {},
    enter: {
      width: '101%',
      height: '120%',
    },
    enterActive:  {
      width: '101%',
      height: '0%',
      transition: `height ${duration}s ease-out`,
    },
    enterDone:  {},
    exit: {
      width: '0%',
      height: '120%',
    },
    exitActive:  {
      width: '101%',
      height: '120%',
      transition: `width ${duration}s ease-in`,
    },
    exitDone:  {},
  });
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

  const [textIndex, setTextIndex] = useState(0);
  const [transitionIn, setTransitionIn] = useState(true);
  const handleEntered = (node: HTMLElement, isAppearing: boolean) => {
    setTransitionIn(false);
  }
  const handleExited = (node: HTMLElement) => {
    const nextIndex = (textIndex + 1) % props.textSecondary.length;
    setTextIndex(nextIndex);
    setTransitionIn(true);
  }

  return (
    <div style={{position: 'relative'}} className={props.containerClasses}>
      <CSSTransition classNames={{...transitionClassNames}} appear in={transitionIn} timeout={timeout} onEntered={handleEntered} onExited={handleExited}>
        <FadeCover style={{background: props.background ? props.background : theme.palette.primary.main}}/>
      </CSSTransition>
      <StyledText 
        className={props.textClasses} 
        style={{color: props.multiColor ? Object.values(colors)[textIndex] : 'unset'}}
      >
        {props.noSpace ? '' : '\u00A0'}{props.textSecondary[textIndex]}
      </StyledText>
    </div>
  );
}