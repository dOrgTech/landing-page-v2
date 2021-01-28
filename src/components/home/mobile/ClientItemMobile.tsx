import React from 'react'
import {Accordion, AccordionDetails, AccordionSummary, Grid, makeStyles, styled, Typography} from '@material-ui/core'
import {Client} from "../../../constants/clients";
import {theme} from "../../../theme";
import {ExpandedContentBoxMobile} from "./ExpandedContentBoxMobile";

const StyledAccordion = styled(Accordion)({
  maxWidth: '89.73vw',
  margin: 0,
  padding: 0
})

const StyledGrid = styled(Grid)({
  width: '100%',
  height: '9.75vw',
  paddingLeft: '4.75vw',
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
  marginLeft: '24vw',
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
  top: 0
});

interface Props {
  client: Client;
  expanded: boolean;
  someExpanded: boolean;
  onChange: (event: React.ChangeEvent<{}>, isExpanded: boolean) => void; //eslint-disable-line
  classes?: string;
}

export const ClientItemMobile: React.FC<Props> = (props: Props) => {

  const classes: string = props.classes ? props.classes : '';

  const accordionStyle = makeStyles({
    root: {
      margin: 0,
      width: 'inherit',
      background: theme.palette.primary.main
    },
    expanded: {
      backgroundColor: props.client.highlightColor
    }
  })();

  const selectStyles = makeStyles({
    hidden: {
      opacity: props.someExpanded && !props.expanded ? 0.3 : 1
    },
    selected: {
      height: props.expanded ? '19.5vw' : '9.75vw',
      backgroundColor: props.expanded ? props.client.highlightColor : theme.palette.primary.main
    }
  })();

  return (
    <StyledAccordion classes={accordionStyle} className={classes} square elevation={0}
      expanded={props.expanded} onChange={props.onChange} >
      <AccordionSummary aria-controls={`${props.client.name}-content`} id={`${props.client.name}-header`}
        style={{margin: 0, padding: 0}} className={selectStyles.selected}>
        <StyledGrid container direction='row' justify={'flex-start'} alignItems={'center'} className={classes + ' ' + selectStyles.selected}>
          <Grid item>
            <ClientIcon src={props.client.icon} alt='client icon' className={selectStyles.hidden}/>
          </Grid>
          <Grid item>
            <StyledTitle className={selectStyles.hidden}>{props.client.name}</StyledTitle>
          </Grid>
          <Grid item>
            {props.expanded && <SelectedIcon src={'imgs/external-link-icon.svg'} alt='pop-up content icon' />}
          </Grid>
        </StyledGrid>
        {props.expanded && <ShadowOverlay />}
      </AccordionSummary>
      <AccordionDetails style={{margin: 0, padding: 0}}>
        <ExpandedContentBoxMobile title={props.client.name} project={props.client.project} />
      </AccordionDetails>
    </StyledAccordion>
  );
}