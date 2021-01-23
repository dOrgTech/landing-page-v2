import {Grid, makeStyles, styled} from "@material-ui/core";
import React from "react";
import {borderStyles} from "../../../../theme/styles";
import {HoverFooter} from "./HoverFooter";
import {HoverHeader} from "./HoverHeader";
import {HoverContentBox} from "./HoverContentBox";
import {Project} from "../../../../constants/clients";
import {HoverMarginLeft} from "./HoverMarginLeft";

const Root = styled(Grid)({
  width: '50vw',
  position: 'absolute',
  left: 0
});

const useBorders = makeStyles(borderStyles);

interface Props {
  background: string;
  title: string;
  project: Project;
  classes?: string;
}

export const ProjectHoverLeft: React.FC<Props> = (props: Props) => {

  const borders = useBorders();

  return (
    <Root className={props.classes} container spacing={0} direction='row' justify="flex-start" alignItems='flex-start' style={{background: props.background}}>
      <HoverHeader />
      <HoverMarginLeft />
      <HoverContentBox title={props.title} project={props.project} classes={borders.leftBorder + ' ' + borders.rightBorder} />
      <HoverFooter />
    </Root>
  );
};