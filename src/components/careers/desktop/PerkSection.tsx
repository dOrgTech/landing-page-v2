import React from 'react'
import {styled, Grid, Typography} from '@material-ui/core'
import {PerkItem} from "./PerkItem";
import {Perk, Perks} from "../../../constants/perks";
import {theme} from "../../../theme";


const PERKS_TITLE='Perks';

const StyledGrid = styled(Grid)({
  width: '100%',
  padding: '7.5vw 0 2.5vw 0',
  boxSizing: 'border-box',
  backgroundColor: 'rgba(0, 0, 0, 0.15)',
});

const TitleContainer = styled(Grid)({
  marginBottom: '5vw'
});

const StyledTitle = styled(Typography)({
  fontFamily: theme.typography.fontFamily,
  fontSize: '2.625vw',
  fontWeight: 600,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: '-1.26px',
  textAlign: "center",
  color: theme.palette.text.primary
});

const PerkContainer = styled(Grid)({
  marginBottom: '5vw'
})

interface Props {
  perks: Perks;
  item?: boolean;
  xs?: boolean | "auto" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  classes?: string;
}

export const PerkSection: React.FC<Props> = (props: Props) => {
  return (
    <StyledGrid className={props.classes} item={props.item} xs={props.xs} container justify='center' alignItems='center'>
      <TitleContainer item xs={12} container justify='center' alignItems='flex-start'>
        <StyledTitle>{PERKS_TITLE}</StyledTitle>
      </TitleContainer>
      {Object.values(props.perks).map((perk: Perk, index: number) => (
        <PerkContainer key={`perk-${index}`} item xs={4} container justify={'center'} alignItems={'center'}>
          <PerkItem perk={perk} />
        </PerkContainer>
      ))}
    </StyledGrid>
  );
}