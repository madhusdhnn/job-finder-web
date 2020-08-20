import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import Routes from './components/Routes';
import {initApiInterceptor} from './config/api-interceptor';
import Store from './store';
import dotenv from 'dotenv';

dotenv.config();
initApiInterceptor();

ReactDOM.render(
   <Provider store={Store}>
      <Router>
         <App>
            <Routes />
         </App>
      </Router>
   </Provider>,
   document.getElementById('root')
);

serviceWorker.unregister();
