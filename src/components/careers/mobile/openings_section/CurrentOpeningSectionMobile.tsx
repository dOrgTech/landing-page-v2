import React from 'react'
import {Grid, makeStyles, styled, Typography} from '@material-ui/core'
import {theme} from "../../../../theme";
import {Opening, Openings} from "../../../../constants/openings";
import {borderStyles, borderStyle} from "../../../../theme/styles";
import {CurrentOpeningAccordionMobile} from "./CurrentOpeningAccordionMobile";
import {CloseButtonMobile} from "../../../about/mobile/CloseButtonMobile";


const StyledGrid = styled(Grid)({
  width: '100%',
  height: '285vw',
  boxSizing: 'border-box',
  backgroundColor: 'rgba(0, 0, 0, 0.15)',
});

const StyledText = styled(Typography)({
  marginTop: '10.5vw',
  marginBottom: '9.5vw',
  fontFamily: theme.typography.fontFamily,
  fontSize: '6.67vw',
  fontWeight: 600,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: '-0.84px',
  textAlign: "center",
  color: theme.palette.text.primary
});

const useStyleClasses = makeStyles({
  buttonStyle: {
    marginTop: '7.5vw',
    width: '81vw',
    transition: '0.25s',
    backgroundColor: theme.palette.secondary.main,
    border: 'initial',
    '&:hover': {
      border: 'initial',
      boxShadow: '0 1.9vw 1.9vw -0.75vw rgba(255, 255, 255, 1)',
      transform: 'translateY(-0.95vw)',
    },
    '&:focus': {
      border: 'initial',
      boxShadow: '0 1.9vw 1.9vw -0.75vw rgba(255, 255, 255, 1)',
      transform: 'translateY(-0.95vw)',
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

export const CurrentOpeningSectionMobile: React.FC<Props> = (props: Props) => {

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
      <Grid item className={borders.topBorder} style={{width: '100%'}}>
        {Object.values(props.openings).map((opening: Opening, i: number) => (
          <CurrentOpeningAccordionMobile
            key={opening.id}
            opening={opening}
            expanded={expanded===opening.id}
            onChange={handleChange(opening.id)}
            border={borderStyle} />
        ))}
      </Grid>
      <Grid item>
        <CloseButtonMobile classes={styleClasses.buttonStyle} text={props.buttonText} handleClick={props.onButtonClick} />
      </Grid>
    </StyledGrid>
  );
}