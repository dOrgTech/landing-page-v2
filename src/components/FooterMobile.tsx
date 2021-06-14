import {Grid, Link, makeStyles, styled, Typography} from '@material-ui/core'
import React from 'react'
import {borderStyles} from "../theme/styles";
import {theme} from "../theme";
import {iconLinks} from "../constants/routes";


const CALL_TO_ACTION = 'Join our Discord';
const COPYRIGHT_TEXT = '© dOrg, LLC';

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

const FooterText = styled(Typography)({
  fontFamily: theme.typography.fontFamily,
  fontSize: '2.85vw',
  fontWeight: 'normal',
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: 'normal',
  textAlign: "left",
  color: theme.palette.text.primary
});

const FooterLink = styled(Link)({
  fontFamily: theme.typography.fontFamily,
  fontSize: '2.85vw',
  fontWeight: 'normal',
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
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
      <FooterBody container item spacing={0} direction='row' justify="space-between" alignItems='center'
        className={`${borders.topBorder} ${borders.leftBorder} ${borders.rightBorder}`}>
        <Grid item xs={6}>
          <FooterText>{COPYRIGHT_TEXT}</FooterText>
        </Grid>
        <Grid container item xs={6} spacing={0} justify='flex-end' alignItems='center'>
          <Grid item>
            <FooterLink href={iconLinks.discord.path} target="_blank" rel="noopener" style={{marginRight: '2.65vw'}}>{CALL_TO_ACTION}</FooterLink>
          </Grid>
          <Grid item>
            <IconContainer href={iconLinks.discord.path} target="_blank" rel="noopener">
              <StyledIcon src={iconLinks.discord.icon}/>
            </IconContainer>
          </Grid>
        </Grid>
      </FooterBody>
      <FooterMargin item className={borders.topBorder} />
    </FooterContainer>
  );
}