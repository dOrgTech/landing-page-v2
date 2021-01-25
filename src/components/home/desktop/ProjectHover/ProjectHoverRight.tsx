import {Grid, makeStyles, styled} from "@material-ui/core";
import React from "react";
import {HoverContentBox} from "./HoverContentBox";
import {Project} from "../../../../constants/clients";
import {borderStyle, borderStyles} from "../../../../theme/styles";
import {HeaderDesktop} from "../../../HeaderDesktop";
import {FooterDesktop} from "../../../FooterDesktop";
import {RightMargin} from "../../../RightMargin";

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
      <HeaderDesktop pageHalf={'right'}/>
      <HoverContentBox title={props.title} project={props.project} classes={borders.leftBorder} />
      <RightMargin height='57.375vw' border={borderStyle} longAccentIndex={0} accentColorPrimary={'#FFFFFF'} accentColorSecondary={'#FFFFFF'} />
      <FooterDesktop pageHalf={'right'}/>
    </Root>
  );
};