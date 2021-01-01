import React from "react";
import { Box, Grid, styled } from "@material-ui/core";
import {ContactTitleBox} from "../components/ContactTitleBox";

const TITLE = 'Get in Touch.';
const SUBTITLE = 'Not sure where to start?';
const INSTRUCTIONS = "Tell us about your product, your timeline, how you heard about us, and where you're located.";

const Root = styled(Box)({
  margins: 'auto'
});

const Container = styled(Grid)({
  width: '85rem'
});

export const Contact: React.FC = () => {
  return (
    <Root>
      <Container container spacing={0} justify="center" alignItems='flex-start'>
        <ContactTitleBox title={TITLE} subtitle={SUBTITLE} instructions={INSTRUCTIONS} />
      </Container>
    </Root>
  );
}
