import {Grid, styled} from "@material-ui/core";
import React from "react";
import {Companies} from "../../../constants/companies";
import {Communities} from "../../../constants/communities";
import {Client} from "../../../constants/clients";
import {ClientItemMobile} from "./ClientItemMobile";

const StyledGrid = styled(Grid)({
  width: '100%',
  minHeight: '160vw',
  position: 'relative',
  zIndex: 1
});

const StyledRings = styled('img')({
  width: '68.75vw',
  height: '69.55vw',
  objectFit: 'contain',
  position: 'absolute',
  transform: 'scaleY(-1)',
  bottom: '-0.4vw',
  right: '0.1vw',
  zIndex: 0
});

interface Props {
  clients: Companies | Communities;
  classes?: string;
}

export const ClientContainerMobile: React.FC<Props> = (props: Props) => {

  const [expanded, setExpanded] = React.useState<string | false>(false);
  // eslint-disable-next-line
  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <StyledGrid className={props.classes} container spacing={0} direction='column' justify='flex-start' alignItems='flex-start'>
      {Object.values(props.clients).map((client: Client) => (
        <Grid item key={`${client.name}`} style={{width: '100%'}}>
          <ClientItemMobile client={client} expanded={expanded===client.name} someExpanded={expanded as boolean} onChange={handleChange(client.name)}/>
        </Grid>
      ))}
      {!expanded && <StyledRings src='imgs/concentric-rings-left.svg' alt={'concentric rings flourish'} />}
    </StyledGrid>
  );
}