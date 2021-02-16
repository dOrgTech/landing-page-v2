import React, {useState} from 'react'
import {styled, Typography, Grid, makeStyles} from '@material-ui/core'
import { theme } from "../../../theme";
import {Client} from "../../../constants/clients";
import {ProjectHoverRight} from "./ProjectHover/ProjectHoverRight";
import {ProjectHoverLeft} from "./ProjectHover/ProjectHoverLeft";
import {useDebounce} from "../../../utils/hooks";


const StyledGrid = styled(Grid)({
  width: '100%',
  height:'4.3vw',
  paddingLeft: '2.75vw',
  boxSizing: 'border-box',
  backgroundColor: 'transparent',
  position: 'relative',
  cursor: 'pointer'
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


interface Props {
  client: Client;
  isOnLeft?: boolean;
  classes?: string;
  stickyItem?: string;
  onClick?: (element: JSX.Element, name?: string) => void;
}

export const ClientItem: React.FC<Props> = (props: Props) => {

  const classes: string = props.classes ? props.classes : ''
  const isSticky = props.stickyItem === props.client.name;
  const debouncedIsSticky = useDebounce(isSticky, 50);
  const [isHover, setIsHover] = useState(false);
  const isHighlight = debouncedIsSticky || isHover;

  // handle hover-dependent state
  const handleMouseEnter = () => {
    setIsHover(true);
  }
  const handleMouseOver = () => {
    if (!isHover) {
      handleMouseEnter();
    }
  }
  const handleMouseLeave = () => {
    setIsHover(false);
  }

  // make sticky on click
  const handleClick = () => {
    if (debouncedIsSticky) {
      props.onClick?.(<div/>)
    } else {
      const popup = props.isOnLeft ?
        <ProjectHoverRight client={props.client}/>
        : <ProjectHoverLeft client={props.client}/>
      props.onClick?.(popup, props.client.name);
    }
  }

  // hover-dependent styling
  const iconColor = (isHover: boolean) => {
    if (!isHover) {
      return 'brightness(0) saturate(100%) invert(100%)';
    } else if (isHover && props.client.iconHighlightFilter && !props.client.colorIcon) {
      return props.client.iconHighlightFilter;
    } else {
      return '';
    }
  }

  const styles = makeStyles({
    highlight: {
      background: isHighlight ? props.client.highlightColor : ''
    },
    sticky: {
      boxShadow: debouncedIsSticky ? '0 0.5625vw #1AAF71' : '',
      transform: debouncedIsSticky ? 'translateY(-0.5625vw)' : ''
    },
    icon: {
      filter: iconColor(isHighlight),
    },
    text: {
      color: isHighlight ? props.client.textColor : theme.palette.text.primary,
    }
  })();

  return (
    <StyledGrid id={props.client.name} container direction='row' justify={'flex-start'} alignItems={'center'}
      className={`${classes} ${styles.highlight} ${styles.sticky}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseOver={handleMouseOver}
      onClick={handleClick}>
      <Grid item>
        <ClientIcon src={props.client.icon} alt='client icon' className={styles.icon} />
      </Grid>
      <Grid item>
        <StyledTitle className={styles.text}>{props.client.name}</StyledTitle>
      </Grid>
    </StyledGrid>
  );
}