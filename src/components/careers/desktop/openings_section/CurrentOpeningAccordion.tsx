import React from 'react'
import {Accordion, AccordionDetails, AccordionSummary, Grid, makeStyles, styled, Typography} from '@material-ui/core'
import {colors,theme} from "../../../../theme";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Opening, Role} from "../../../../constants/openings";

const SummaryGrid = styled(Grid)({
  width: '100%',
  height: '5vw',
  boxSizing: 'border-box',
  background: 'transparent'
});

const StyledIcon = styled('img')({
  marginLeft: '2.625vw',
  marginRight: '2.125vw',
  width: "1.75vw",
  height: "1.75vw",
  objectFit: "contain",
  float: 'left'
});

const StyledTitle = styled(Typography)({
  fontFamily: theme.typography.fontFamily,
  fontSize: '1.25vw',
  fontWeight: 600,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: '-1px',
  textAlign: "left",
  color: theme.palette.text.primary
});

const StyledLocation = styled(Typography)({
  marginRight: '2vw',
  fontFamily: theme.typography.fontFamily,
  fontSize: '0.75vw',
  fontWeight: 500,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: 'normal',
  textAlign: "right",
  color: theme.palette.text.primary
});

const ExpandIconWrapper = styled(Grid)({
  fontSize: '2vw',
  color: 'rgba(255, 255, 255, 0.5)'
});

const StyledDescription = styled(Typography)({
  width: '49.3vw',
  marginTop: '-0.75vw',
  fontFamily: theme.typography.fontFamily,
  fontSize: '0.75vw',
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
    backgroundColor: colors.blue,
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

export const CurrentOpeningAccordion: React.FC<Props> = (props: Props) => {

  const accordionStyle = useAccordionStyle();

  const icon = props.opening.role === Role.design ? 'imgs/pentipicon.svg'
    : props.opening.role === Role.frontend ? 'imgs/arrowbracketsicon.svg'
      : 'imgs/gearicon.svg'

  return (
    <Accordion classes={accordionStyle} className={props.classes} expanded={props.expanded} onChange={props.onChange}
      style={{borderBottom: props.border, width: 'inherit', margin: 0}}>
      <AccordionSummary expandIcon={<ExpandIcon/>} aria-controls={`${props.opening.id}-content`} id={`${props.opening.id}-header`}>
        <SummaryGrid container direction='row' justify={'space-between'} alignItems={'center'}>
          <Grid item xs={6} container direction='row' justify={'flex-start'} alignItems={'center'} style={{height: 'inherit'}}>
            <StyledIcon src={icon} alt={'icon'}/>
            <StyledTitle>{props.opening.title}</StyledTitle>
          </Grid>
          <Grid item xs={6}>
            <StyledLocation>{props.opening.location}</StyledLocation>
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