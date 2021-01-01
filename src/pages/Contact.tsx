import React from "react";
import { Grid, styled } from "@material-ui/core";
import {ContactTitleBox} from "../components/ContactTitleBox";
import {LongRightMargin} from "../components/LongRightMargin";
import {LongLeftMargin} from "../components/LongLeftMargin";
import {borderStyle} from "../theme/styles";

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
      <LongLeftMargin xs={1} border={borderStyle} />
      <ContentContainer container item xs={10} spacing={0} direction='row' justify="center" alignItems='flex-start'>
        <Grid item xs={12} lg={6}>
          <ContactTitleBox title={TITLE} subtitle={SUBTITLE} instructions={INSTRUCTIONS} />
        </Grid>
        <Grid item xs={12} lg={6}>
          <div />
        </Grid>
      </ContentContainer>
      <LongRightMargin xs={1} border={borderStyle} />
    </Root>
  );
}
