import React from 'react';
import ReactDOM from 'react-dom';
import { createStore , applyMiddleware } from "redux";
import reducer from "./reducers/reducer"
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const store = createStore(reducer , applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
