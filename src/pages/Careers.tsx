import React from "react";
import { Box, Grid, styled } from "@material-ui/core";
import { Perk, perks } from "../constants/perks";
import { PerkBox } from "../components/careers/desktop/PerkBox";

const Root = styled(Box)({
  margins: 'auto'
});

const PerksContainer = styled(Grid)({
  width: '85.252rem'
});

export const Careers: React.FC = () => {
  return (
    <Root>
      <PerksContainer container spacing={0} justify="center">
        {Object.values(perks).map((perk: Perk, index: number) => (
          <Grid item xs={3} key={`perk-${index}`}>
            <PerkBox perk={perk} />
          </Grid>
        ))}
      </PerksContainer>
    </Root>
  );
}