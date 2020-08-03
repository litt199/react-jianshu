import React from 'react';
import ReactDOM from 'react-dom';
import {GlobalStyled} from './style.js';
import {GlobalStyledIcon} from './static/iconfont/iconfont'

import App from './App';

ReactDOM.render(
  <div>
    <GlobalStyled/>
    <GlobalStyledIcon/>
    <App />
  </div>,
  document.getElementById('root')
);
