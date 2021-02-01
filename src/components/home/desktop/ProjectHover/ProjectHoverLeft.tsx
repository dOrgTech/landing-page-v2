import {Grid, makeStyles, styled} from "@material-ui/core";
import React from "react";
import {borderStyles} from "../../../../theme/styles";
import {HoverContentBox} from "./HoverContentBox";
import {Client} from "../../../../constants/clients";
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
  client: Client
  classes?: string;
}

export const ProjectHoverLeft: React.FC<Props> = (props: Props) => {

  const borders = useBorders();
  const styleClasses = makeStyles({
    title: {
      background: props.client.highlightColor,
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
    <Root container spacing={0} direction='row' justify="flex-start" alignItems='flex-start'
      className={props.classes} style={{background: props.client.highlightColor}}>
      <HeaderDesktop pageHalf={'left'} classes={styleClasses.header} textColor={props.client.textColor} iconColorFilter={props.client.textColorFilter} />
      <LeftMargin height={'100%'}/>
      <HoverContentBox client={props.client} classes={borders.leftBorder} />
      <FooterDesktop pageHalf={'left'} textColor={props.client.textColor} iconColorFilter={props.client.textColorFilter} />
      <HomeTitleBox classes={styleClasses.title}
        titleTextPrimary={'We build custom'}
        titleTextSecondary={'Dapps'}
        subTitleText={'We’ve helped some of Web3’s top projects design, code and ship.'} />
    </Root>
  );
};