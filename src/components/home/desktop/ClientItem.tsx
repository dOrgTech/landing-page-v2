import React, {useState} from 'react'
import {styled, Typography, Grid, makeStyles} from '@material-ui/core'
import { theme } from "../../../theme";
import {Client} from "../../../constants/clients";


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


interface Props {
  client: Client
  classes?: string;
}

export const ClientItem: React.FC<Props> = (props: Props) => {

  const classes: string = props.classes ? props.classes : ''

  const [isHover, setIsHover] = useState(false);

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
      '&:hover': {
        backgroundColor: props.client.highlightColor
      }
    },
    icon: {
      filter: iconColor(isHover),
    },
  })();

  return (
    <StyledGrid container direction='row' justify={'flex-start'} alignItems={'center'}
      className={classes + ' ' + styles.highlight}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}>
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