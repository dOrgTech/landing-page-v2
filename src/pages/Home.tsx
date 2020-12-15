import {
  Box,
  styled,
} from "@material-ui/core";
import React from "react";
import ReactGA from "react-ga";

const Root = styled(Box)({
  margin: 'auto'
});

const TestSvg = styled(Box)({
  backgroundImage: `url('${process.env.PUBLIC_URL}/imgs/test.svg');`,
  height: 500,
  width: 500,
  margin: 'auto'
});

const TestPng = styled(Box)({
  backgroundImage: `url('${process.env.PUBLIC_URL}/imgs/test.png');`,
  height: 500,
  width: 500,
  margin: 'auto'
});

const TestGif = styled(Box)({
  backgroundImage: `url('${process.env.PUBLIC_URL}/imgs/test.gif');`,
  height: 500,
  width: 500,
  margin: 'auto'
});

export const Home = () => {

  ReactGA.pageview('home');

  return (
    <Root>
      <TestSvg />
      <TestPng />
      <TestGif />
    </Root>
  );
};
