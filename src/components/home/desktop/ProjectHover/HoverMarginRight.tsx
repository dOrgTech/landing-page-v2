import React from 'react'
import {styled, Grid, makeStyles} from '@material-ui/core'
import {theme} from "../../../../theme";
import {borderStyles} from "../../../../theme/styles";


const StyledGrid = styled(Grid)({
  width: '7.5vw',
  height: '57.375vw',
  background: 'transparent'
});

const CenterLine = styled(Grid)({
  width: 'inherit',
  height: '57.375vw',
});

const RectangleAccentPrimary = styled('div')({
  width: '1.625vw',
  height: '0.125vw',
  marginTop: '1.125vw',
  opacity: '0.6',
});

const RectangleAccentSecondary = styled('div')({
  width: '2.875vw',
  height: '0.125vw',
  marginTop: '1.125vw',
});

const useBorders = makeStyles(borderStyles);

interface AccentProps {
  colorPrimary?: string;
  colorSecondary?: string;
}

const Accents: React.FC<AccentProps> = (props: AccentProps) => {
  return (
    <CenterLine container direction={'column'} justify={'center'} alignItems={'center'}>
      <RectangleAccentSecondary style={{backgroundColor: props.colorSecondary}} />
      <RectangleAccentPrimary style={{backgroundColor: props.colorPrimary}} />
      <RectangleAccentPrimary style={{backgroundColor: props.colorPrimary}} />
      <RectangleAccentPrimary style={{backgroundColor: props.colorPrimary}} />
      <RectangleAccentPrimary style={{backgroundColor: props.colorPrimary}} />
    </CenterLine>
  );
}

Accents.defaultProps = {
  colorPrimary: theme.palette.text.primary,
  colorSecondary: theme.palette.text.secondary,
}

interface Props {
  xs?: boolean | "auto" | 10 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 11 | 12 | undefined;
  accentColorPrimary?: string;
  accentColorSecondary?: string;
}

const HoverMarginRight: React.FC<Props> = (props: Props) => {

  const borders = useBorders();

  return (
    <StyledGrid item xs={props.xs} className={borders.leftBorder}>
      <Accents colorPrimary={props.accentColorPrimary} colorSecondary={props.accentColorSecondary}/>
    </StyledGrid>
  );
}

HoverMarginRight.defaultProps = {
  xs: false
}

export {HoverMarginRight};
