import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './css/style.css';
import App from './js/App';

ReactDOM.render(
  <Router>
    <App />
  </Router>, document.getElementById('app'));