console.log('Webpack funcionando');

let React = require('react');
let ReactDOM = require('react-dom');
let Title = require('./application');

ReactDOM.render(React.createElement(Title), document.querySelector('[data-js="application"]'));
