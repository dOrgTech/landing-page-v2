import {Grid, Link, makeStyles, styled, Typography} from '@material-ui/core'
import React from 'react'
import {borderStyles} from "../theme/styles";
import {theme} from "../theme";


const COPYRIGHT_TEXT = 'Copyright 2020, dorg.tech';
const EMAIL_ICON_PATH = '/imgs/footer/email-icon.svg';
const GITHUB_ICON_PATH = '/imgs/footer/github-logo.svg';
const KEYBASE_ICON_PATH = '/imgs/footer/keybase-logo.svg';
const TWITTER_ICON_PATH = '/imgs/footer/twitter-logo.svg';

const FooterContainer = styled(Grid)({
  height: '18.8vw',
  width: '100vw',
  minWidth: '100vw',
  maxWidth: '100vw'
});

const FooterBody = styled(Grid)({
  width: '90vw',
  height: 'inherit',
  padding: '0 2vw 0 4vw'
});

const FooterMargin = styled(Grid)({
  width: '5vw',
  height: 'inherit'
});

const CopyrightText = styled(Typography)({
  height: '3.1vw',
  fontFamily: theme.typography.fontFamily,
  fontSize: '2.86vw',
  fontWeight: 'normal',
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.17,
  letterSpacing: 'normal',
  textAlign: "left",
  color: theme.palette.text.primary
});

const IconContainer = styled(Link)({
  height: '5vw',
  width: 'auto',
  marginRight: '2.65vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

const StyledIcon = styled('img')({
  width: '4.75vw',
  height: 'auto',
  objectFit: 'contain',
  color: theme.palette.text.primary,
  "&:hover": {
    color: theme.palette.secondary.main
  },
  cursor: 'pointer'
});

const useBorders = makeStyles(borderStyles);

export const FooterMobile: React.FC = () => {

  const borders = useBorders();

  return (
    <FooterContainer container justify='flex-start'>
      <FooterMargin item className={borders.topBorder} />
      <FooterBody container item spacing={0} direction='row' justify="space-between" alignItems='center' className={`${borders.topBorder} ${borders.leftBorder}`}>
        <Grid item xs={7}>
          <CopyrightText>{COPYRIGHT_TEXT}</CopyrightText>
        </Grid>
        <Grid container item xs={5} spacing={0} justify='flex-end' alignItems='center'>
          <Grid item>
            <IconContainer href="https://twitter.com/dOrg_tech" target="_blank" rel="noopener">
              <StyledIcon src={TWITTER_ICON_PATH}/>
            </IconContainer>
          </Grid>
          <Grid item>
            <IconContainer href="https://keybase.io/team/dorg.membrane" target="_blank" rel="noopener">
              <StyledIcon src={KEYBASE_ICON_PATH}/>
            </IconContainer>
          </Grid>
          <Grid item>
            <IconContainer href="https://github.com/dOrgTech" target="_blank" rel="noopener">
              <StyledIcon src={GITHUB_ICON_PATH}/>
            </IconContainer>
          </Grid>
          <Grid item>
            <IconContainer href="mailto:contact@dorg.tech" target="_blank" rel="noopener">
              <StyledIcon src={EMAIL_ICON_PATH}/>
            </IconContainer>
          </Grid>
        </Grid>
      </FooterBody>
      <FooterMargin item className={`${borders.topBorder} ${borders.leftBorder}`} />
    </FooterContainer>
  );
}