'use strict'
let React = require('react');

let Title = React.createClass({
  render: function() {
    return React.createElement('h1', null, 'Título do Componente');
  }
});

module.exports = Title;
