import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ReactGA from 'react-ga';
import {HashRouter} from "react-router-dom";

ReactGA.initialize('TODO: use dOrg\'s google analytics ID UA-ID');

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
