import React from 'react'
import { useHistory } from 'react-router-dom'
import {styled, Grid} from '@material-ui/core'
import {theme} from "../theme";
import {Route, routes} from "../constants/routes";
import {useNavHoverContext} from "./NavHoverContext";
import {useIsDesktop} from "../utils/hooks";


const StyledGrid = styled(Grid)({
  width: '7.5vw',
  background: 'transparent'
});

const AccentContainer = styled(Grid)({
  width: 'inherit',
  height: '100vh',
});

const CenterLine = styled(Grid)({
  width: 'inherit',
  height: '100vh',
});

const AccentBox = styled(Grid)({
  margin: '0.0625vw 0',
  height: '1.125vw',
  width: '2.875vw',
  boxSizing: 'border-box',
  cursor: 'pointer',
})

const RectangleAccentPrimary = styled('div')({
  width: '1.625vw',
  height: '2.1px',
  opacity: 0.6
});

const RectangleAccentSecondary = styled('div')({
  width: '2.875vw',
  height: '2.1px',
});

interface AccentProps {
  longAccentIndex?: number;
  colorPrimary?: string;
  colorSecondary?: string;
  height?: string;
}

const Accents: React.FC<AccentProps> = (props: AccentProps) => {

  const {state: navHoverIndex, dispatch: setNavHoverIndex} = useNavHoverContext();
  const handleMouseEnter = (val: number) => setNavHoverIndex?.(val);
  const handleMouseLeave = () => setNavHoverIndex?.(-1);


  const history = useHistory();
  const navigateToPage = (route: Route) => history.push(route.path);
  const routeList = [routes.home, routes.about, routes.careers, routes.contact]

  return (
    <AccentContainer container direction={'column'} justify={'center'} alignItems={'center'} style={{height: props.height}}>
      {routeList.map((route: Route, index: number) => (
        <AccentBox key={`route-${index}`}
          container justify={'center'} alignItems={'center'}
          onClick={() => navigateToPage(route)}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave = {() => handleMouseLeave()}>
          {props.longAccentIndex === index  || navHoverIndex === index ?
            <RectangleAccentSecondary style={{backgroundColor: props.colorSecondary}} />
            : <RectangleAccentPrimary style={{backgroundColor: props.colorPrimary}} />}
        </AccentBox>
      ))}
    </AccentContainer>
  );
}

Accents.defaultProps = {
  colorPrimary: theme.palette.text.primary,
  colorSecondary: theme.palette.text.secondary,
}

interface Props {
  height: string;
  xs?: boolean | "auto" | 10 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 11 | 12 | undefined;
  accentContainerHeight?: string;
  centerLineHeight?: string;
  border?: string;
  longAccentIndex?: number;
  accentColorPrimary?: string;
  accentColorSecondary?: string;
}

const RightMargin: React.FC<Props> = (props: Props) => {

  const desktop = useIsDesktop();

  return (
    <StyledGrid item xs={props.xs} style={{height: props.height, width: desktop ? '7.5vw' : '5vw'}}>
      {desktop &&
        <Accents
          height={props.accentContainerHeight}
          longAccentIndex={props.longAccentIndex}
          colorPrimary={props.accentColorPrimary}
          colorSecondary={props.accentColorSecondary}/>}
      {props.centerLineHeight && props.border &&
      <CenterLine item style={{borderBottom: props.border, height: props.centerLineHeight}} />}
    </StyledGrid>
  );
}

RightMargin.defaultProps = {
  xs: false
}

export {RightMargin};
