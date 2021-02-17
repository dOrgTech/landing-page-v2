import React from "react";
import ReactGA from "react-ga";
import {Grid, makeStyles, styled, Theme, useMediaQuery, useTheme} from "@material-ui/core";
import {ContactTitleBox} from "../components/contact/desktop/ContactTitleBox";
import {RightMargin} from "../components/RightMargin";
import {LeftMargin} from "../components/LeftMargin";
import {borderStyle, borderStyles} from "../theme/styles";
import {ContactForm} from "../components/contact/desktop/ContactForm";
import {ContactTitleBoxMobile} from "../components/contact/mobile/ContactTitleBoxMobile";
import {ContactFormMobile} from "../components/contact/mobile/ContactFormMobile";
import {useDebounce, useWindowSize} from "../utils/hooks";

const TITLE = 'Get in Touch.';
const SUBTITLE = 'Not sure where to start?';
const INSTRUCTIONS = "Tell us about your product, your timeline, how you heard about us, and where you're located.";

const Root = styled(Grid)({
  margins: 'auto',
  width: '100vw',
  minWidth: '100vw',
  maxWidth: '100vw'
});

const ContentContainer = styled(Grid)({
  width: '85vw'
});

const useBorders = makeStyles(borderStyles);

export const Contact: React.FC = () => {

  ReactGA.pageview('/contact');

  const borders = useBorders();

  const theme: Theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('lg'));

  const windowSize = useWindowSize()
  const debouncedWindowSize = useDebounce(windowSize, 100);
  const containerHeight = Math.max(0.3 * debouncedWindowSize.width, debouncedWindowSize.height - (0.1 * debouncedWindowSize.width));

  if (desktop) {
    return (
      <Root container spacing={0} direction='row' justify="flex-start" alignItems='flex-start' style={{height: `${containerHeight}px`}}>
        <LeftMargin border={borderStyle} height={`5vh`}/>
        <ContentContainer container item spacing={0} direction='row' justify="center" alignItems='flex-start'
          className={`${borders.leftBorder} ${borders.rightBorder}`}>
          <Grid item xs={6}>
            <ContactTitleBox title={TITLE} subtitle={SUBTITLE} instructions={INSTRUCTIONS} />
          </Grid>
          <Grid item xs={6}>
            <ContactForm classes={borders.leftBorder} />
          </Grid>
        </ContentContainer>
        <RightMargin height='5vh' accentContainerHeight={`${containerHeight}px`} longAccentIndex={3}/>
      </Root>
    );
  } else {
    return (
      <Root container spacing={0} direction='row' justify="flex-start" alignItems='flex-start'>
        <LeftMargin border={borderStyle} height='203.75vw'/>
        <ContentContainer container item spacing={0} direction='row' justify="center" alignItems='flex-start' style={{width: '90vw'}}
          className={borders.rightBorder}>
          <Grid item xs={12}>
            <ContactTitleBoxMobile title={TITLE} subtitle={SUBTITLE} instructions={INSTRUCTIONS} classes={borders.bottomLeftBorder}/>
          </Grid>
          <Grid item xs={12}>
            <ContactFormMobile classes={borders.leftBorder}/>
          </Grid>
        </ContentContainer>
        <RightMargin border={borderStyle} height='203.75vw' />
      </Root>
    );
  }
}
