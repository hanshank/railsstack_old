import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.scss';
import App from './components/App';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={App} />
  </BrowserRouter>,
  document.getElementById('root')
);
