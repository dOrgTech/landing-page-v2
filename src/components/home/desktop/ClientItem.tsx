import React, {useState} from 'react'
import {styled, Typography, Grid, makeStyles} from '@material-ui/core'
import { theme } from "../../../theme";
import {Client} from "../../../constants/clients";
import {ProjectHoverRight} from "./ProjectHover/ProjectHoverRight";
import {ProjectHoverLeft} from "./ProjectHover/ProjectHoverLeft";


const StyledGrid = styled(Grid)({
  width: '100%',
  height:'4.5vw',
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

const HoverIcon = styled('img')({
  marginLeft: '1.75vw',
  width: "1.25vw",
  height: "1.25vw",
  objectFit: "contain",
  position: 'relative',
  top: '0.1vw'
});

const stickyBorder = '3px solid rgba(255, 255, 255, 1)';

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
          <ProjectHoverRight background={props.client.highlightColor} title={props.client.name} project={props.client.project}/>
          : <ProjectHoverLeft background={props.client.highlightColor} title={props.client.name} project={props.client.project}/>
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
      border: stickyBorder
    },
    icon: {
      filter: iconColor(isHover),
    },
  })();

  return (
    <StyledGrid container direction='row' justify={'flex-start'} alignItems={'center'}
      className={`${classes} ${styles.highlight} ${isSticky ? styles.sticky : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseOver={handleMouseOver}
      onClick={(event) => handleClick(event)}>
      <Grid item>
        <ClientIcon src={props.client.icon} alt='client icon' className={styles.icon} />
      </Grid>
      <Grid item>
        <StyledTitle>{props.client.name}</StyledTitle>
      </Grid>
      <Grid item>
        {isHover && <HoverIcon src={'imgs/external-link-icon.svg'} alt='pop-up content icon' />}
      </Grid>
    </StyledGrid>
  );
}