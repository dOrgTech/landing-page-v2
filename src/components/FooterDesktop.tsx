import {Grid, Link, makeStyles, styled, Typography} from '@material-ui/core'
import React from 'react'
import {getBorderStyle} from "../theme/styles";
import {theme} from "../theme";
import {iconLinks} from "../constants/routes";


const CALL_TO_ACTION = 'Join our Discord';
const COPYRIGHT_TEXT = '© dOrg, LLC';

const FooterContainer = styled(Grid)({
  height: '5vw',
  width: '100vw',
  background: 'transparent'
});

const IconContainer = styled(Link)({
  height: '1.5vw',
  width: '1.25vw',
  marginRight: '0.7vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

const StyledIcon = styled('img')({
  width: 'inherit',
  height: 'auto',
  objectFit: 'contain',
  color: theme.palette.text.primary,
  '&:hover': {
    filter: 'brightness(0) saturate(100%) invert(51%) sepia(98%) saturate(396%) hue-rotate(103deg) brightness(90%) contrast(83%)'
  },
  cursor: 'pointer'
});

const FooterText = styled(Typography)({
  fontFamily: theme.typography.fontFamily,
  fontSize: '0.688vw',
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
  fontSize: '0.688vw',
  fontWeight: 'normal',
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: 'normal',
  textAlign: "left",
  color: theme.palette.text.primary
});

const LeftContainer = styled(Grid)({
  width: '42.5vw',
  height: 'inherit',
  paddingLeft: '1.75vw'
});

const RightContainer = styled(Grid)({
  width: '42.5vw',
  height: 'inherit',
  paddingRight: '1.75vw'
});

const FooterMargin = styled(Grid)({
  width: '7.5vw',
  height: 'inherit'
});

interface Props {
  pageHalf?: 'left' | 'right';
  textColor?: string;
  iconColorFilter?: string;
  classes?: string;
}

export const FooterDesktop: React.FC<Props> = (props: Props) => {

  const renderRight = props.pageHalf === 'right' || !props.pageHalf;
  const renderLeft = props.pageHalf === 'left' || !props.pageHalf;

  const styles = makeStyles({
    icon: {
      filter: props.iconColorFilter ? props.iconColorFilter : ''
    },
    text: {
      color: props.textColor ? props.textColor : theme.palette.text.primary
    },
    callToAction: {
      fontSize: '1vw',
      marginRight: '0.7vw'
    }
  })();

  const borderColor = props.textColor ? props.textColor : theme.palette.text.primary;
  const borders = makeStyles(getBorderStyle(borderColor))();

  return (
    <FooterContainer container justify='flex-start' className={props.classes} style={{width: props.pageHalf ? '50vw' : '100vw'}}>
      {renderLeft && <FooterMargin item className={borders.topBorder} />}
      {renderLeft &&
      <LeftContainer container item spacing={0} direction='row' justify="flex-start" alignItems='center' className={`${borders.topBorder} ${borders.leftBorder}`}>
        <FooterText className={styles.text}>{COPYRIGHT_TEXT}</FooterText>
      </LeftContainer>}
      {renderRight &&
      <RightContainer container item spacing={0} direction='row' justify="flex-end" alignItems='center'
        className={`${borders.topBorder} ${borders.leftBorder} ${borders.rightBorder}`}>
        <Grid item>
          <FooterLink href={iconLinks.discord.path} target="_blank" rel="noopener" className={`${styles.text} ${styles.callToAction}`}>{CALL_TO_ACTION}</FooterLink>
        </Grid>
        <Grid item>
          <IconContainer href={iconLinks.discord.path} target="_blank" rel="noopener">
            <StyledIcon src={iconLinks.discord.icon} className={styles.icon} />
          </IconContainer>
        </Grid>
      </RightContainer>}
      {renderRight && <FooterMargin item className={borders.topBorder} />}
    </FooterContainer>
  );
}