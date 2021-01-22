import React from 'react'
import {Accordion, AccordionDetails, AccordionSummary, Grid, makeStyles, styled, Typography} from '@material-ui/core'
import {theme} from "../../../../theme";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Opening, Role} from "../../../../constants/openings";

const SummaryGrid = styled(Grid)({
  width: '100%',
  height: '22vw',
  paddingLeft: '0.5vw',
  boxSizing: 'border-box',
  background: 'transparent'
});

const StyledIcon = styled('img')({
  marginRight: '6.5vw',
  width: "6.67vw",
  height: "6.67vw",
  objectFit: "contain",
  float: 'left'
});

const StyledTitle = styled(Typography)({
  minWidth: '55vw',
  maxWidth: '65vw',
  fontFamily: theme.typography.fontFamily,
  fontSize: '4.3vw',
  fontWeight: 600,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: '-0.9px',
  textAlign: "left",
  color: theme.palette.text.primary
});

const StyledLocation = styled(Typography)({
  margin: '1vw 0 0 13.17vw',
  maxWidth: '65vw',
  fontFamily: theme.typography.fontFamily,
  fontSize: '2.6vw',
  fontWeight: 500,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.64,
  letterSpacing: 'normal',
  textAlign: "left",
  color: theme.palette.text.primary
});

const ExpandIconWrapper = styled(Grid)({
  fontSize: '7.5vw',
  color: 'rgba(255, 255, 255, 0.5)'
});

const StyledDescription = styled(Typography)({
  width: '81vw',
  marginTop: '-2.85vw',
  fontFamily: theme.typography.fontFamily,
  fontSize: '2.85vw',
  fontWeight: 500,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 2.33,
  letterSpacing: 'normal',
  textAlign: "left",
  color: theme.palette.text.primary
});

const useAccordionStyle = makeStyles({
  root: {
    background: 'transparent'
  },
  expanded: {
    backgroundColor: '#03284d'
  }
});

interface Props {
  opening: Opening;
  expanded: boolean;
  onChange: (event: React.ChangeEvent<{}>, isExpanded: boolean) => void; //eslint-disable-line
  classes?: string;
  border?: string;
}

export const ExpandIcon: React.FC = () => {
  return (
    <ExpandIconWrapper container item justify='center' alignItems='center'>
      <ExpandMoreIcon fontSize='inherit'/>
    </ExpandIconWrapper>
  );
}

export const CurrentOpeningAccordionMobile: React.FC<Props> = (props: Props) => {

  const accordionStyle = useAccordionStyle();

  const icon = props.opening.role === Role.design ? 'imgs/pentipicon.svg'
    : props.opening.role === Role.frontend ? 'imgs/arrowbracketsicon.svg'
      : 'imgs/gearicon.svg'

  return (
    <Accordion classes={accordionStyle} className={props.classes} expanded={props.expanded} onChange={props.onChange}
      style={{borderBottom: props.border, width: 'inherit', margin: 0}}>
      <AccordionSummary expandIcon={<ExpandIcon/>} aria-controls={`${props.opening.id}-content`} id={`${props.opening.id}-header`}>
        <SummaryGrid container spacing={0} direction='row' justify={'flex-start'} alignItems={'center'}>
          <Grid container spacing={0} direction='row' justify={'flex-start'} alignItems={'flex-start'} style={{height: 'max-content'}}>
            <Grid item xs={12}>
              <StyledIcon src={icon} alt={'icon'}/>
              <StyledTitle>{props.opening.title}</StyledTitle>
            </Grid>
            <Grid item xs={12}>
              <StyledLocation>{props.opening.location}</StyledLocation>
            </Grid>
          </Grid>
        </SummaryGrid>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container direction='row' justify={'center'} alignItems={'flex-start'} style={{width: '100%'}}>
          <Grid item>
            <StyledDescription>{props.opening.description}</StyledDescription>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}