import React from 'react'
import {Accordion, AccordionDetails, AccordionSummary, Grid, makeStyles, styled, Typography} from '@material-ui/core'
import {Client} from "../../../constants/clients";
import {theme} from "../../../theme";
import {ExpandedContentBoxMobile} from "./ExpandedContentBoxMobile";
import {borderStyle, borderStyles} from "../../../theme/styles";


const StyledAccordion = styled(Accordion)({
  width: '100%',
  margin: 0,
  padding: 0,
  position: 'relative',
  zIndex: 1
})

const StyledGrid = styled(Grid)({
  width: '100%',
  height: '9.75vw',
  padding: '0 6.75vw 0 4.75vw',
  boxSizing: 'border-box',
  backgroundColor: 'transparent',
  position: 'relative'
});

const StyledTitle = styled(Typography)({
  fontFamily: theme.typography.fontFamily,
  fontSize: '6.67vw',
  fontWeight: 500,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: 'normal',
  textAlign: "left",
  color: theme.palette.text.primary,
});

const ClientIcon = styled('img')({
  marginRight:'5.25vw',
  width: "5.7vw",
  height: "5.7vw",
  objectFit: "contain",
});

const SelectedIcon = styled('img')({
  width: "4.75vw",
  height: "4.75vw",
  objectFit: "contain",
  filter: 'brightness(0) saturate(100%) invert(100%)'
});

const ShadowOverlay = styled('div')({
  width: '100vw',
  height: '19.5vw',
  backgroundColor: 'rgba(0, 0, 0, 0.1)',
  position: 'absolute',
  top: 0,
  left: '-5vw',
  zIndex: 2
});

const MarginOverlay = styled('div')({
  width: '5vw',
  height: '100%',
  position: 'absolute',
  top: 0
})

const useBorders = makeStyles(borderStyles);

interface Props {
  client: Client;
  expanded: boolean;
  someExpanded: boolean;
  onChange: (event: React.ChangeEvent<{}>, isExpanded: boolean) => void; //eslint-disable-line
  classes?: string;
}

export const ClientItemMobile: React.FC<Props> = (props: Props) => {

  const classes: string = props.classes ? props.classes : '';
  const borders = useBorders();
  const accordionStyle = makeStyles({
    root: {
      margin: 0,
      width: 'inherit',
      background: 'transparent'
    },
    expanded: {
      backgroundColor: props.client.highlightColor
    }
  })();
  const iconColor = (isExpanded: boolean) => {
    if (!isExpanded) {
      return 'brightness(0) saturate(100%) invert(100%)';
    } else if (isExpanded && props.client.iconHighlightFilter && !props.client.colorIcon) {
      return props.client.iconHighlightFilter;
    } else {
      return '';
    }
  }
  const selectStyles = makeStyles({
    hidden: {
      opacity: props.someExpanded && !props.expanded ? 0.3 : 1
    },
    selected: {
      height: props.expanded ? '19.5vw' : '9.75vw',
      backgroundColor: props.expanded ? props.client.highlightColor : 'transparent',
    },
    borders: {
      borderLeft: props.expanded ? borderStyle : '',
      borderRight: props.expanded ? borderStyle : ''
    },
    icon: {
      filter: iconColor(props.expanded)
    },
    text: {
      color: props.expanded && props.client.textColor ? props.client.textColor : theme.palette.text.primary,
    },
    link: {
      filter: props.client.textColorFilter ? props.client.textColorFilter : ''
    }
  })();
  const marginStyle = makeStyles({
    leftMargin: {
      backgroundColor: props.client.highlightColor,
      left: '-5vw'
    },
    rightMargin: {
      backgroundColor: props.client.highlightColor,
      right: '-5vw'
    }
  })();


  return (
    <StyledAccordion classes={accordionStyle} className={classes} square elevation={0}
      expanded={props.expanded} onChange={props.onChange} >
      <AccordionSummary aria-controls={`${props.client.name}-content`} id={`${props.client.name}-header`}
        style={{margin: 0, padding: 0}} className={`${selectStyles.selected} ${selectStyles.borders}`}>
        <StyledGrid container direction='row' justify={'space-between'} alignItems={'center'} className={classes + ' ' + selectStyles.selected}>
          <Grid item xs={11} container direction='row' justify={'flex-start'} alignItems={'center'}>
            <Grid item>
              <ClientIcon src={props.client.icon} alt='client icon' className={`${selectStyles.hidden} ${selectStyles.icon}`}/>
            </Grid>
            <Grid item>
              <StyledTitle className={`${selectStyles.hidden} ${selectStyles.text}`}>{props.client.name}</StyledTitle>
            </Grid>
          </Grid>
          <Grid item xs={1}>
            {props.expanded && <SelectedIcon src={'imgs/external-link-icon.svg'} alt='pop-up content icon' className={selectStyles.link}/>}
          </Grid>
        </StyledGrid>
        {props.expanded && <ShadowOverlay />}
      </AccordionSummary>
      <AccordionDetails style={{margin: 0, padding: 0}}>
        <ExpandedContentBoxMobile client={props.client} classes={`${borders.leftBorder} ${borders.rightBorder}`}/>
        {props.expanded && <MarginOverlay className={marginStyle.leftMargin} />}
        {props.expanded && <MarginOverlay className={marginStyle.rightMargin} />}
      </AccordionDetails>
    </StyledAccordion>
  );
}