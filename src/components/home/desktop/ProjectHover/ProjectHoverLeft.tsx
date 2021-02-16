import {Grid, makeStyles, styled} from "@material-ui/core";
import React from "react";
import {getBorderStyle} from "../../../../theme/styles";
import {HoverContentBox} from "./HoverContentBox";
import {Client} from "../../../../constants/clients";
import {HomeTitleBox} from "../HomeTitleBox";
import {HeaderDesktop} from "../../../HeaderDesktop";
import {FooterDesktop} from "../../../FooterDesktop";
import {LeftMargin} from "../../../LeftMargin";
import {theme} from "../../../../theme";
import {SUBTITLE_TEXT, TITLE_TEXT_PRIMARY, TITLE_TEXT_SECONDARY} from "../../../../pages/Home";

const Root = styled(Grid)({
  width: '50vw',
  position: 'relative'
});

interface Props {
  client: Client
  classes?: string;
}

export const ProjectHoverLeft: React.FC<Props> = (props: Props) => {

  const {textColor, textColorFilter, highlightColor, iconHighlightColor, homeTitleBackground} = props.client

  const borderColor = textColor ? textColor : theme.palette.text.primary;
  const borders = makeStyles(getBorderStyle(borderColor))();
  const styleClasses = makeStyles({
    title: {
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
      className={props.classes} style={{background: highlightColor}}>
      <HeaderDesktop pageHalf={'left'} classes={styleClasses.header} textColor={textColor} logoColorFilter={textColorFilter} />
      <LeftMargin height={'100%'}/>
      <HoverContentBox rtl client={props.client} classes={borders.leftBorder} />
      <FooterDesktop pageHalf={'left'} textColor={textColor} iconColorFilter={textColorFilter} />
      <HomeTitleBox classes={styleClasses.title}
        titleTextPrimary={TITLE_TEXT_PRIMARY}
        titleTextSecondary={TITLE_TEXT_SECONDARY}
        subTitleText={SUBTITLE_TEXT}
        titleColorPrimary={textColor}
        titleColorSecondary={iconHighlightColor}
        background={homeTitleBackground ? homeTitleBackground : highlightColor}/>
    </Root>
  );
};
