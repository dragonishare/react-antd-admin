import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App/App';
import Admin from './pages/Admin/Admin';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App>
    <Admin />
  </App>,
  document.getElementById('root')
);
registerServiceWorker();
