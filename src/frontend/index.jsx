import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import mountPoint from './utils/mountPoint';
import globalTheme from './assets/themes/global';

globalTheme();

ReactDOM.render(<App />, mountPoint);

module.hot.accept();
