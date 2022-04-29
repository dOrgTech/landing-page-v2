import { Container } from "@material-ui/core";
import React from "react";
import ReactGA from "react-ga";
import { Markdown } from "../components/Markdown";
import { PRIVACY_POLICY_MARKDOWN } from "../constants/privacyPolicy";

export const PrivacyPolicy: React.FC = () => {
  ReactGA.pageview("/privacy-policy");
  return (
    <Container maxWidth='md' style={{ minHeight: "100%" }}>
      <Markdown>{PRIVACY_POLICY_MARKDOWN}</Markdown>
    </Container>
  );
};
