import React from 'react';
import ReactDOM from 'react-dom';

import firebase from 'firebase/app';
import 'firebase/firestore';

import billService from './services/BillService';

import App from './App';

// @ts-ignore
window['bsbills'] = {};

// @ts-ignore
window['bsbills']['billService'] = billService;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
