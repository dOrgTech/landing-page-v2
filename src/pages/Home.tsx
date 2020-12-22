import {
  Box,
  Grid,
  Button,
  styled
} from "@material-ui/core";
import ReactGA from "react-ga";
import React from "react";
import { CompanyBox } from "../components/CompanyBox";
import { PitchBox } from "../components/PitchBox";
import { Company, companies} from "../constants/company";
import { Pitch, pitches } from "../constants/pitches";
const Root = styled(Box)({
  margin: 'auto'
});



const StatsContainer = styled(Grid)({
  width: '42.5rem',
});

const PitchesContainer = styled(Grid)({
  width: '85rem'
});



interface Props {
  onClick?: () => void;
}

export const Home: React.FC<Props> = (props: Props) => {

  ReactGA.pageview('home');

  const [counter, setCounter] = React.useState(0);

  return (
    <Root>


      <StatsContainer container spacing={0} justify="center">
        {Object.values(companies).map((company: Company, index: number) => (
          <Grid item xs={11} key={`company-${index}`} direction="column">
            <CompanyBox company={company} />
          </Grid>
        ))}
      </StatsContainer>
     
     
    </Root>



  );
};
