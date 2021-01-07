import React from "react";
import { Grid, styled } from "@material-ui/core";
import {ContactTitleBox} from "../components/contact/desktop/ContactTitleBox";
import {RightMargin} from "../components/RightMargin";
import {LeftMargin} from "../components/LeftMargin";
import {borderStyle} from "../theme/styles";
import {ContactForm} from "../components/contact/desktop/ContactForm";

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

export const Contact: React.FC = () => {
  return (
    <Root container spacing={0} direction='row' justify="flex-start" alignItems='flex-start'>
      <LeftMargin xs={1} border={borderStyle} />
      <ContentContainer container item xs={10} spacing={0} direction='row' justify="center" alignItems='flex-start'>
        <Grid item xs={6}>
          <ContactTitleBox title={TITLE} subtitle={SUBTITLE} instructions={INSTRUCTIONS} />
        </Grid>
        <Grid item xs={6}>
          <ContactForm />
        </Grid>
      </ContentContainer>
      <RightMargin xs={1} border={borderStyle} />
    </Root>
  );
}
