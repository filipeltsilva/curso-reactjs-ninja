import React from 'react';
import {render} from 'react-dom';
import Title from './application';

render(React.createElement(Title), document.querySelector('[data-js="application"]'));
