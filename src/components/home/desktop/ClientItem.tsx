import React, {useState} from 'react'
import {styled, Typography, Grid, makeStyles} from '@material-ui/core'
import { theme } from "../../../theme";
import {Client} from "../../../constants/clients";
import {ProjectHoverRight} from "./ProjectHover/ProjectHoverRight";
import {ProjectHoverLeft} from "./ProjectHover/ProjectHoverLeft";


const StyledGrid = styled(Grid)({
  width: '100%',
  height:'4.3vw', // design spec says 4.5vw but 4.3 precludes need for scroll bar in communities container
  paddingLeft: '2.75vw',
  boxSizing: 'border-box',
  backgroundColor: 'transparent',
  position: 'relative'
});

const StyledTitle = styled(Typography)({
  fontFamily: theme.typography.fontFamily,
  fontSize: '2vw',
  fontWeight: 500,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: '-1.08px',
  textAlign: "left",
  color: theme.palette.text.primary,
});

const ClientIcon = styled('img')({
  marginRight:'2.25vw',
  width: "2.25vw",
  height: "2.25vw",
  objectFit: "contain",
  position: 'relative',
  top: '-0.25vw'
});

const Link = styled('a')({
  textDecoration: 'none',
  marginLeft: '1.75vw',
});

const HoverIcon = styled('img')({
  width: "1.25vw",
  height: "1.25vw",
  objectFit: "contain",
  position: 'relative',
  top: '0.1vw'
});

interface Props {
  client: Client;
  isOnLeft?: boolean;
  classes?: string;
  onMouseEnter?: (popup: JSX.Element) => void;
  onMouseLeave?: () => void;
  stickyItem?: string;
  onClick?: (name?: string) => void;
}

export const ClientItem: React.FC<Props> = (props: Props) => {

  const classes: string = props.classes ? props.classes : ''
  const isSticky = props.stickyItem === props.client.name;
  const [isHover, setIsHover] = useState(false);


  // handle hover-dependent state
  const handleMouseEnter = () => {
    if (!props.stickyItem) {
      setIsHover(true);
      if (props.onMouseEnter) {
        const popup = props.isOnLeft ?
          <ProjectHoverRight client={props.client} />
          : <ProjectHoverLeft client={props.client} />
        props.onMouseEnter?.(popup);
      }
    }
  }
  const handleMouseOver = () => {
    if (!isHover) {
      handleMouseEnter();
    }
  }
  const handleMouseLeave = () => {
    if (!props.stickyItem) {
      setIsHover(false);
      props.onMouseLeave?.();
    }
  }

  const handleClick = (event: React.MouseEvent | MouseEvent) => {
    if (!props.stickyItem) {
      props.onClick?.(props.client.name);
    } else if (isSticky) {
      props.onClick?.();
    }
  }

  // hover-dependent styling
  const iconColor = (isHover: boolean) => {
    if (!isHover) {
      return 'brightness(0) saturate(100%) invert(100%)';
    } else if (isHover && props.client.iconHighlightFilter) {
      return props.client.iconHighlightFilter;
    } else {
      return '';
    }
  }

  const styles = makeStyles({
    highlight: {
      backgroundColor: isHover ? props.client.highlightColor : ''
    },
    sticky: {
      border: isSticky ? '3px solid rgba(255, 255, 255, 1)' : ''
    },
    icon: {
      filter: iconColor(isHover),
    },
    text: {
      color: isHover ? props.client.textColor : theme.palette.text.primary,
    }
  })();

  return (
    <StyledGrid container direction='row' justify={'flex-start'} alignItems={'center'}
      className={`${classes} ${styles.highlight} ${styles.sticky}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseOver={handleMouseOver}
      onClick={(event) => handleClick(event)}>
      <Grid item>
        <ClientIcon src={props.client.icon} alt='client icon' className={styles.icon} />
      </Grid>
      <Grid item>
        <StyledTitle className={styles.text}>{props.client.name}</StyledTitle>
      </Grid>
      <Grid item>
        {isHover &&
        <Link href={props.client.link} target='_blank' rel='noopener noreferrer' onClick={(e) => e.stopPropagation()}>
          <HoverIcon src={'imgs/external-link-icon.svg'} alt={`external link for ${props.client.name}`} />
        </Link>}
      </Grid>
    </StyledGrid>
  );
}