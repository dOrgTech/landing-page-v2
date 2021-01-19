import React from 'react'
import {Grid, makeStyles, styled, Typography} from '@material-ui/core'
import {CloseButton} from "../../about/desktop/CloseButton";
import {theme} from "../../../theme";
import {CurrentOpeningAccordion} from "./CurrentOpeningAccordion";
import {Openings} from "../../../constants/openings";
import {borderStyles, borderStyle} from "../../../theme/styles";

const StyledGrid = styled(Grid)({
  width: '100%',
  height: '63.75vw',
  boxSizing: 'border-box',
  backgroundColor: 'rgba(0, 0, 0, 0.15)',
});

const StyledText = styled(Typography)({
  fontFamily: theme.typography.fontFamily,
  fontSize: '2.625vw',
  fontWeight: 600,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: '-1.26px',
  textAlign: "center",
  color: theme.palette.text.primary
});

const useStyleClasses = makeStyles({
  buttonStyle: {
    transition: '0.25s',
    backgroundColor: theme.palette.secondary.main,
    border: 'initial',
    '&:hover': {
      border: 'initial',
      boxShadow: '0 0.5vw 0.5vw -0.2vw rgba(255, 255, 255, 1)',
      transform: 'translateY(-0.25vw)',
    },
    '&:focus': {
      border: 'initial',
      boxShadow: '0 0.5vw 0.5vw -0.2vw rgba(255, 255, 255, 1)',
      transform: 'translateY(-0.25vw)',
    }
  }
});

const useBorders = makeStyles(borderStyles);

interface Props {
  titleText: string;
  buttonText: string;
  onButtonClick: () => void;
  openings: Openings;
  classes?: string;
}

export const CurrentOpeningsSection: React.FC<Props> = (props: Props) => {

  const borders = useBorders();
  const styleClasses = useStyleClasses();

  const [expanded, setExpanded] = React.useState<string | false>(false);
  // eslint-disable-next-line
  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <StyledGrid className={props.classes} container direction='column' justify={'flex-start'} alignItems={'center'}>
      <Grid item>
        <StyledText>{props.titleText}</StyledText>
      </Grid>
      <Grid item className={borders.leftBorder + ' ' + borders.topBorder + ' ' + borders.rightBorder} style={{width: '61.25vw'}}>
        <CurrentOpeningAccordion opening={props.openings.designer} expanded={expanded==='panel1'} onChange={handleChange('panel1')}  border={borderStyle}/>
      </Grid>
      <Grid item>
        <CloseButton classes={styleClasses.buttonStyle} text={props.buttonText} handleClick={props.onButtonClick} />
      </Grid>
    </StyledGrid>
  );
}