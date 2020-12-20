import {
  Box,
  Grid,
  Button,
  styled
} from "@material-ui/core";
import React, { CSSProperties } from "react";
import ReactGA from "react-ga";
import {SquareInfoBox} from "../components/SquareInfoBox";
import {SQUARE_INFO_BOX_STRINGS} from "../strings/about-strings";


const Root = styled(Box)({
  margin: 'auto'
});

const TestImage: CSSProperties = {
  height: 500,
  width: 500,
  backgroundSize: 'contain',
  margin: 'auto'
};

const TestSvg = styled(Box)({
  backgroundImage: `url('${process.env.PUBLIC_URL}/imgs/test.svg');`,
  ...TestImage
});

const TestPng = styled(Box)({
  backgroundImage: `url('${process.env.PUBLIC_URL}/imgs/test.png');`,
  ...TestImage
});

const TestGif = styled(Box)({
  backgroundImage: `url('${process.env.PUBLIC_URL}/imgs/test.gif');`,
  ...TestImage
});

interface Props {
  onClick?: () => void;
}

export const Home: React.FC<Props> = (props: Props) => {

  ReactGA.pageview('home');

  const [counter, setCounter] = React.useState(0);

  return (
    <Root>
      <Grid container direction="row">
        <TestSvg />
        <TestPng />
        <TestGif />
      </Grid>
      <Grid container spacing={0} style={{width: '42.5rem', height: '38.25rem'}}>
        <Grid item xs={6}>
          <SquareInfoBox text={SQUARE_INFO_BOX_STRINGS.ONE.TEXT} number={SQUARE_INFO_BOX_STRINGS.ONE.NUMBER} iconPath={SQUARE_INFO_BOX_STRINGS.ONE.ICON_PATH} />
        </Grid>
        <Grid item xs={6}>
          <SquareInfoBox text={SQUARE_INFO_BOX_STRINGS.TWO.TEXT} number={SQUARE_INFO_BOX_STRINGS.TWO.NUMBER} iconPath={SQUARE_INFO_BOX_STRINGS.TWO.ICON_PATH} />
        </Grid>
        <Grid item xs={6}>
          <SquareInfoBox text={SQUARE_INFO_BOX_STRINGS.THREE.TEXT} number={SQUARE_INFO_BOX_STRINGS.THREE.NUMBER} iconPath={SQUARE_INFO_BOX_STRINGS.THREE.ICON_PATH} />
        </Grid>
        <Grid item xs={6}>
          <SquareInfoBox text={SQUARE_INFO_BOX_STRINGS.FOUR.TEXT} number={SQUARE_INFO_BOX_STRINGS.FOUR.NUMBER} iconPath={SQUARE_INFO_BOX_STRINGS.FOUR.ICON_PATH} />
        </Grid>
        <Grid item xs={6}>
          <SquareInfoBox text={SQUARE_INFO_BOX_STRINGS.FIVE.TEXT} number={SQUARE_INFO_BOX_STRINGS.FIVE.NUMBER} iconPath={SQUARE_INFO_BOX_STRINGS.FIVE.ICON_PATH} />
        </Grid>
        <Grid item xs={6}>
          <SquareInfoBox text={SQUARE_INFO_BOX_STRINGS.SIX.TEXT} number={SQUARE_INFO_BOX_STRINGS.SIX.NUMBER} iconPath={SQUARE_INFO_BOX_STRINGS.SIX.ICON_PATH} />
        </Grid>
      </Grid>
      <Button onClick={() => {
        setCounter(counter + 1)
        if (props.onClick) {
          props.onClick();
        }
      }}>
        {counter}
      </Button>
    </Root>
  );
};
