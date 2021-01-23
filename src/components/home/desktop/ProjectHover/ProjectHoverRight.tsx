import {Grid, styled} from "@material-ui/core";
import React from "react";
import ReactGA from "react-ga";
import {HoverMarginRight} from "./HoverMarginRight";
import {borderStyle} from "../../../../theme/styles";
import {HoverFooter} from "./HoverFooter";
import {HoverHeader} from "./HoverHeader";

const Root = styled(Grid)({
  width: '50vw'
});

const ContentContainer = styled(Grid)({
  height: '57.375vw',
  width: '42.5vw',
  paddingTop: '3.125vw',
  position: 'relative',
  borderLeft: borderStyle
});

const StyledRings = styled('img')({
  width: '19.125vw',
  height: '19.063vw',
  objectFit: 'contain',
  position: 'absolute',
  transform: 'scaleY(-1)',
  bottom: 0,
  right: 0
});

interface Props {
  background: string;
}

export const ProjectHoverRight: React.FC<Props> = (props: Props) => {

  ReactGA.pageview('home');

  return (
    <Root container spacing={0} direction='row' justify="flex-start" alignItems='flex-start' style={{background: props.background}}>
      <HoverHeader />
      <ContentContainer container item spacing={0} direction='row' justify="center" alignItems='flex-start'>
      </ContentContainer>
      <HoverMarginRight border={borderStyle} height='57.375vw' />
      <HoverFooter right />
    </Root>
  );
};