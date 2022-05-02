import { Box, Grid, Link, makeStyles, styled } from "@material-ui/core";
import React from "react";
import { borderStyles } from "../theme/styles";
import { theme } from "../theme";
import { iconLinks, IconLink } from "../constants/routes";

const CALL_TO_ACTION_HANDBOOK = "Handbook";

const FooterContainer = styled(Grid)({
  height: "18.8vw",
  width: "100vw",
  minWidth: "100vw",
  maxWidth: "100vw",
});

const FooterBody = styled(Grid)({
  width: "90vw",
  height: "inherit",
  padding: "0 2vw 0 4vw",
});

const FooterMargin = styled(Grid)({
  width: "5vw",
  height: "inherit",
});

const FooterLink = styled(Link)({
  fontFamily: theme.typography.fontFamily,
  fontSize: "2.85vw",
  fontWeight: "normal",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: "normal",
  textAlign: "left",
  color: theme.palette.text.primary,
});

const IconContainer = styled(Link)({
  height: "5vw",
  width: "auto",
  marginRight: "3.5vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const StyledIcon = styled("img")({
  width: "4.75vw",
  height: "auto",
  objectFit: "contain",
  color: theme.palette.text.primary,
  "&:hover": {
    color: theme.palette.secondary.main,
  },
  cursor: "pointer",
});

const SocialIcons = styled(Box)({
  display: "flex",
});

const RightGrid = styled(Grid)({
  maxWidth: "40%",
});

const useBorders = makeStyles(borderStyles);

export const FooterMobile: React.FC = () => {
  const borders = useBorders();
  const socialIcons = Object.values(iconLinks);
  socialIcons.pop();

  return (
    <FooterContainer container justify='flex-start'>
      <FooterMargin item className={borders.topBorder} />
      <FooterBody
        container
        item
        spacing={0}
        direction='row'
        justify='space-between'
        alignItems='center'
        className={`${borders.topBorder} ${borders.leftBorder} ${borders.rightBorder}`}>
        <Grid item xs={6}>
          <SocialIcons>
            {socialIcons.map((iconLink: IconLink) => (
              <IconContainer href={iconLink.path} target='_blank' rel='noopener' key={iconLink.icon}>
                <StyledIcon src={iconLink.icon} />
              </IconContainer>
            ))}
          </SocialIcons>
        </Grid>
        <RightGrid container item spacing={1} direction='row' justify='flex-end' alignItems='center'>
          <Grid item>
            <FooterLink href={iconLinks.gitBook.path} target='_blank' rel='noopener'>
              {CALL_TO_ACTION_HANDBOOK}
            </FooterLink>
          </Grid>
          <Grid item>
            <IconContainer href={iconLinks.gitBook.path} target='_blank' rel='noopener'>
              <StyledIcon src={iconLinks.gitBook.icon} />
            </IconContainer>
          </Grid>
        </RightGrid>
      </FooterBody>
      <FooterMargin item className={borders.topBorder} />
    </FooterContainer>
  );
};
