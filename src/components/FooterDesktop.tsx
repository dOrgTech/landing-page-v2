import {Divider, Grid, Link, makeStyles, styled} from '@material-ui/core'
import React from 'react'
import {getBorderStyle} from "../theme/styles";
import {theme} from "../theme";
import {iconLinks, IconLink, Route, routes} from "../constants/routes";
import {useHistory} from 'react-router-dom' 

const CALL_TO_ACTION_HANDBOOK = 'Handbook';
const CALL_TO_ACTION_PRIVACY_POLICY = 'Privacy Policy';

const FooterContainer = styled(Grid)({
  height: '5vw',
  width: '100vw',
  background: 'transparent'
});

const IconContainer = styled(Link)({
  height: '1.5vw',
  width: '1.25vw',
  marginRight: '1vw',
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
    filter: 'brightness(0) saturate(100%) invert(80%) sepia(150%) saturate(400%) hue-rotate(48deg) brightness(140%) contrast(170%)'
  },
  cursor: 'pointer'
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
  paddingLeft: '1.75vw',
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
  // navigation
  const history = useHistory();
  const navigateToPage = (route: Route) => {
    history.push(route.path);
  }
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
  const socialIcons = Object.values(iconLinks)
  socialIcons.pop()

  return (
    <FooterContainer container justify='flex-start' className={props.classes} style={{width: props.pageHalf ? '50vw' : '100vw'}}>
      {renderLeft && <FooterMargin item className={borders.topBorder} />}
      {renderLeft &&
      <LeftContainer container item spacing={0} direction='row' justify="flex-start" alignItems='center' className={`${borders.topBorder} ${borders.leftBorder}`}>
        {socialIcons.map((iconLink: IconLink) => (
          <IconContainer href={iconLink.path} target="_blank" rel="noopener" key={iconLink.icon}>
            <StyledIcon src={iconLink.icon} className={styles.icon} />
          </IconContainer>
        ))}
      </LeftContainer>}
      {renderRight &&
      <RightContainer container item spacing={0} direction='row' justify="space-between" alignItems='center'
        className={`${borders.topBorder} ${borders.leftBorder} ${borders.rightBorder}`}>
        <Grid container item spacing={0} direction='row' justify="flex-end" alignItems='center'>
          <Grid item>
            <FooterLink onClick={() => navigateToPage(routes.privacyPolicy)} rel="noopener" style={{cursor: 'pointer'}} className={`${styles.text} ${styles.callToAction}`}>{CALL_TO_ACTION_PRIVACY_POLICY}</FooterLink>
          </Grid>
          <Grid item>
            <Divider orientation='vertical' style={{color: 'white', background: 'white', width: '100%'}}/>
          </Grid>
          <Grid item>
            <FooterLink href={iconLinks.gitBook.path} target="_blank" rel="noopener" className={`${styles.text} ${styles.callToAction}`}>{CALL_TO_ACTION_HANDBOOK}</FooterLink>
          </Grid>
          <Grid item>
            <IconContainer href={iconLinks.gitBook.path} target="_blank" rel="noopener">
              <StyledIcon src={iconLinks.gitBook.icon} className={styles.icon} />
            </IconContainer>
          </Grid>
        </Grid>
      </RightContainer>}
      {renderRight && <FooterMargin item className={borders.topBorder} />}
    </FooterContainer>
  );
}