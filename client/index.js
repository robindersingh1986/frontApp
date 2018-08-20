// import React from 'react'; // import React package
// import ReactDOM from 'react-dom'; // import ReactDOM package
// import App from './app'; // import our frame component
// import './styles/main.css'; // import our external css file
// import routes from './routes';

// // using the render method, we will mount this node into our DOM (html file)
// // on the element with id of 'app'
// ReactDOM.render(
//   <App />, // mount our frame component
//   document.getElementById("app")
// );

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
//import { createStore } from 'redux'
import {createStore, applyMiddleware, compose} from 'redux'

import rootReducer from './reducers'
import App from './app'
import './styles/main.css'; // import our external css file

//const store = createStore(frontApp, rootReducer)
let store = createStore(rootReducer, {}, compose(applyMiddleware(), window.devToolsExtension
  ? window.devToolsExtension() : f => f))
  
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
