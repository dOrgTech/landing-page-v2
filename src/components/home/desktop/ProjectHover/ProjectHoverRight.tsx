import {Grid, makeStyles, styled} from "@material-ui/core";
import React from "react";
import {HoverContentBox} from "./HoverContentBox";
import {Client} from "../../../../constants/clients";
import {getBorderStyle} from "../../../../theme/styles";
import {HeaderDesktop} from "../../../HeaderDesktop";
import {FooterDesktop} from "../../../FooterDesktop";
import {RightMargin} from "../../../RightMargin";
import {theme} from "../../../../theme";
import {useDebounce, useWindowSize} from "../../../../utils/hooks";

const Root = styled(Grid)({
  width: '50vw',
  position: 'relative'
});

interface Props {
  client: Client
  classes?: string;
}

export const ProjectHoverRight: React.FC<Props> = (props: Props) => {

  const windowSize = useWindowSize()
  const debouncedWindowSize = useDebounce(windowSize, 100);

  const borderColor = props.client.textColor ? props.client.textColor : theme.palette.text.primary;
  const borders = makeStyles(getBorderStyle(borderColor))();

  return (
    <Root container spacing={0} direction='row' justify="flex-start" alignItems='flex-start'
      className={props.classes} style={{background: props.client.highlightColor}}>
      <HeaderDesktop pageHalf={'right'}
        textColor={props.client.textColor}
        logoColorFilter={props.client.iconHighlightFilter}
        underlineColor={props.client.iconHighlightColor as string}/>
      <HoverContentBox client={props.client} classes={`${borders.leftBorder} ${borders.rightBorder}`} />
      <RightMargin height='100%'
        accentContainerHeight={`${debouncedWindowSize.height - (0.1 * debouncedWindowSize.width)}px`}
        longAccentIndex={0}
        accentColorPrimary={props.client.textColor ? props.client.textColor : theme.palette.text.primary}
        accentColorSecondary={props.client.textColor ? props.client.textColor : theme.palette.text.primary} />
      <FooterDesktop pageHalf={'right'} textColor={props.client.textColor} iconColorFilter={props.client.textColorFilter} />
    </Root>
  );
};