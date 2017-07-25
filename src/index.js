import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';
import './App.css';
import {Button} from 'antd';
import Details from './Details.js';
import BookNow from './BookNow';
import Single from './SinglePage';
import Data from './Data';
import { browserHistory,Router, Route } from 'react-router/lib';
import routes from './routes';
import {Provider} from 'react-redux';
import {getStore} from './store.js'


ReactDOM.render(
  <Provider store={getStore()}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
, document.getElementById('root'));
registerServiceWorker();
