import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import About from './components/About'
// import Experience from './components/Experience'
// import Publications from './components/Publications'
// import Projects from './components/Projects'
// import Press from './components/Press'
// import Contact from './components/Cv'


// import { render } from 'react-snapshot';
// import * as serviceWorker from './serviceWorker';

import reportWebVitals from './components/reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
