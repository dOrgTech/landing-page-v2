import {Grid, styled, Typography} from "@material-ui/core";
import React from "react";
import {Companies} from "../../../constants/companies";
import {Communities} from "../../../constants/communities";
import {Client} from "../../../constants/clients";
import {ClientItem} from "./ClientItem";
import {theme} from "../../../theme";

const StyledGrid = styled(Grid)({
  width: '100%'
});

const ClientGrid = styled(Grid)({
  width: '100%'
});

const TitleContainer = styled(Grid)({
  width: '100%',
  height: '0.75vw',
  paddingLeft: '1.688vw',
  marginBottom: '2.188vw',
  borderLeft: '0.188vw solid ' + theme.palette.text.secondary
});

const StyledTitle = styled(Typography)({
  fontFamily: theme.typography.fontFamily,
  fontSize: '0.813vw',
  fontWeight: 'bold',
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: '1.3px',
  textAlign: "left",
  color: theme.palette.text.secondary,
});

interface Props {
  title: string;
  isOnLeft?: boolean;
  clients: Companies | Communities;
  classes?: string;
}

export const ClientContainer: React.FC<Props> = (props: Props) => {

  return (
    <StyledGrid className={props.classes} container direction='column' justify='flex-start' alignItems='flex-start'>
      <TitleContainer item>
        <StyledTitle>{props.title}</StyledTitle>
      </TitleContainer>
      <ClientGrid item container direction='column' justify='flex-start' alignItems='flex-start'>
        {Object.values(props.clients).map((client: Client) => (
          <Grid item key={`${client.name}`} style={{width: '100%'}}>
            <ClientItem isOnLeft={props.isOnLeft} client={client} />
          </Grid>
        ))}
      </ClientGrid>
    </StyledGrid>
  );
};