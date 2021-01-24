import {Grid, makeStyles, styled} from "@material-ui/core";
import React from "react";
import {HoverMarginRight} from "./HoverMarginRight";
import {HoverFooter} from "./HoverFooter";
import {HoverHeader} from "./HoverHeader";
import {HoverContentBox} from "./HoverContentBox";
import {Project} from "../../../../constants/clients";
import {borderStyles} from "../../../../theme/styles";

const Root = styled(Grid)({
  width: '50vw',
  position: 'relative'
});

const useBorders = makeStyles(borderStyles);

interface Props {
  background: string;
  title: string;
  project: Project;
  classes?: string;
}

export const ProjectHoverRight: React.FC<Props> = (props: Props) => {

  const borders = useBorders();

  return (
    <Root className={props.classes} container spacing={0} direction='row' justify="flex-start" alignItems='flex-start' style={{background: props.background}}>
      <HoverHeader isOnRight/>
      <HoverContentBox title={props.title} project={props.project} classes={borders.leftBorder} />
      <HoverMarginRight accentColorPrimary={'#FFFFFF'} accentColorSecondary={'#FFFFFF'} />
      <HoverFooter isOnRight/>
    </Root>
  );
};