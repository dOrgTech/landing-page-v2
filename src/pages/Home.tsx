import {
  Box,
  Grid,
  Button,
  styled
} from "@material-ui/core";
import React, { CSSProperties } from "react";
import ReactGA from "react-ga";

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
