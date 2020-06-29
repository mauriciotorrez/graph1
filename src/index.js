import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

import React from 'react';

import ReactDOM from 'react-dom';

import App from './App';
import Main from './Main';
import "./assets/css/index.css"
import './helpers/initFA';
import Spanish from "./languages/es-MX.json"
import English from "./languages/en-US.json"
import { IntlProvider } from "react-intl"
import { Provider } from 'react-redux';
import { store } from './redux/reducer';
let local = navigator.language;
let lang;
if (local === "en") {
  lang = English;
}
else {
  lang = Spanish;
  local = "es";
}
ReactDOM.render(
  <Main>
    <IntlProvider locale={local} messages={lang}>
      <Provider store={store}>
        <App />
      </Provider>
    </IntlProvider>
  </Main>,
  document.getElementById('main')
);
