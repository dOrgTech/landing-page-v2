import {Grid, makeStyles, styled} from "@material-ui/core";
import React from "react";
import {borderStyles} from "../../../../theme/styles";
import {HoverContentBox} from "./HoverContentBox";
import {Project} from "../../../../constants/clients";
import {HomeTitleBox} from "../HomeTitleBox";
import {HeaderDesktop} from "../../../HeaderDesktop";
import {FooterDesktop} from "../../../FooterDesktop";
import {LeftMargin} from "../../../LeftMargin";

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

export const ProjectHoverLeft: React.FC<Props> = (props: Props) => {

  const borders = useBorders();
  const styleClasses = makeStyles({
    title: {
      background: props.background,
      position: 'absolute',
      top: '2vw',
      left: '9.25vw',
      zIndex: 1
    },
    header: {
      zIndex: 0
    }
  })();

  return (
    <Root className={props.classes} container spacing={0} direction='row' justify="flex-start" alignItems='flex-start' style={{background: props.background}}>
      <HeaderDesktop pageHalf={'left'} classes={styleClasses.header}/>
      <LeftMargin height={'57.375vw'}/>
      <HoverContentBox title={props.title} project={props.project} classes={borders.leftBorder} />
      <FooterDesktop pageHalf={'left'}/>
      <HomeTitleBox classes={styleClasses.title}
        titleTextPrimary={'We build custom'}
        titleTextSecondary={'Dapps'}
        subTitleText={'We’ve helped some of Web3’s top projects design, code and ship.'} />
    </Root>
  );
};