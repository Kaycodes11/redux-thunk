import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux"
import thunk from 'redux-thunk';
import reducers from "./components/reducers/rootReducer";

const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/* react libary make and manage the component and react-dom add  instance of it to Document Object Model

redux gives a store to keep all the reducers within it and react-redux allows to connect store and App component
react-dedux connect redux with component and applyMiddlware connect a middleware like thunk to the Redux Store (that has all the reducers)

# REACT PORTAL:
Anytime needed to render the REACT component that return some HTML (i.e JSX) that not created from within any "src/component";
then use createPortal method with ReactDOM; and its first argument is returning JSX and second is document.querySeclor("#modal")
& then import that component made with createPortal() within any "src/component" to load as neeeded.

By using event propogation method it won't allow to propogate up to parent element thus whatever code parent element has won't run
and so if needed to run code from parent element then skip propogation method as/until needed.

*/