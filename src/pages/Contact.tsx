import React from "react";
import {Grid, makeStyles, styled, Theme, useMediaQuery, useTheme} from "@material-ui/core";
import {ContactTitleBox} from "../components/contact/desktop/ContactTitleBox";
import {RightMargin} from "../components/RightMargin";
import {LeftMargin} from "../components/LeftMargin";
import {borderStyle, borderStyles} from "../theme/styles";
import {ContactForm} from "../components/contact/desktop/ContactForm";
import {ContactTitleBoxMobile} from "../components/contact/mobile/ContactTitleBoxMobile";
import {ContactFormMobile} from "../components/contact/mobile/ContactFormMobile";

const TITLE = 'Get in Touch.';
const SUBTITLE = 'Not sure where to start?';
const INSTRUCTIONS = "Tell us about your product, your timeline, how you heard about us, and where you're located.";

const Root = styled(Grid)({
  margins: 'auto',
  width: '100vw'
});

const ContentContainer = styled(Grid)({
  maxWidth: '85vw'
});

const useBorders = makeStyles(borderStyles);

export const Contact: React.FC = () => {

  const borders = useBorders();

  const theme: Theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('lg'));

  if (desktop) {
    return (
      <Root container spacing={0} direction='row' justify="flex-start" alignItems='flex-start'>
        <LeftMargin xs={1} border={borderStyle} height='57.375vw'/>
        <ContentContainer container item xs={10} spacing={0} direction='row' justify="center" alignItems='flex-start'>
          <Grid item xs={6}>
            <ContactTitleBox title={TITLE} subtitle={SUBTITLE} instructions={INSTRUCTIONS} classes={borders.leftBorder}/>
          </Grid>
          <Grid item xs={6}>
            <ContactForm classes={borders.leftBorder}/>
          </Grid>
        </ContentContainer>
        <RightMargin xs={1} border={borderStyle} height='57.375vw' longAccentIndex={4}/>
      </Root>
    );
  } else {
    return (
      <Root container spacing={0} direction='row' justify="flex-start" alignItems='flex-start' style={{width: '105vw'}}>
        <LeftMargin xs={1} border={borderStyle} height='203.75vw'/>
        <ContentContainer container item xs={10} spacing={0} direction='row' justify="center" alignItems='flex-start' style={{maxWidth: '91vw'}}>
          <Grid item xs={12}>
            <ContactTitleBoxMobile title={TITLE} subtitle={SUBTITLE} instructions={INSTRUCTIONS} classes={borders.bottomLeftBorder}/>
          </Grid>
          <Grid item xs={12}>
            <ContactFormMobile classes={borders.leftBorder}/>
          </Grid>
        </ContentContainer>
        <RightMargin xs={1} border={borderStyle} height='203.75vw' />
      </Root>
    );
  }
}
