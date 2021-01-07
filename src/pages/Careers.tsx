import React from "react";
import {Grid, makeStyles, styled} from "@material-ui/core";
import { Perk, perks } from "../constants/perks";
import { PerkBox } from "../components/careers/desktop/PerkBox";
import {CareersTitleBox} from "../components/careers/desktop/CareersTitleBox";
import {LeftMargin} from "../components/LeftMargin";
import {borderStyle, borderStyles} from "../theme/styles";
import {RightMargin} from "../components/RightMargin";

const Root = styled(Grid)({
  margins: 'auto',
  width: '100vw'
});

const ContentContainer = styled(Grid)({
  maxWidth: '85vw'
});

const PerksContainer = styled(Grid)({
  maxWidth: '85vw'
});

const useBorders = makeStyles(borderStyles);

export const Careers: React.FC = () => {

  const borders = useBorders();

  return (
    <Root container spacing={0} direction='row' justify="flex-start" alignItems='flex-start'>
      <LeftMargin xs={1} border={borderStyle} height='116.775vw' centerLineHeight='57.375vw' />
      <ContentContainer container item xs={10} spacing={0} direction='row' justify="center" alignItems='flex-start'>
        <CareersTitleBox textPrimary={'Discover a new way to'} textSecondary={'work'} classes={borders.bottomLeftBorder}/>
        <PerksContainer container spacing={0} justify="center">
          {Object.values(perks).map((perk: Perk, index: number) => (
            <Grid item xs={3} key={`perk-${index}`}>
              <PerkBox perk={perk} classes={borders.bottomLeftBorder} />
            </Grid>
          ))}
        </PerksContainer>
      </ContentContainer>
      <RightMargin xs={1} border={borderStyle} height='116.775vw' centerLineHeight='57.375vw' longAccentIndex={3}/>
    </Root>
  );
}