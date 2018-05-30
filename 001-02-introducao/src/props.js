'use strict'

import React from 'react'

// Props são utilizadas para passagem de atributos HTML nos componentes
const TitleProp = React.createClass({
  render: function () {
    return (<h1>Olá, {this.props.name}!</h1>)
  }
})

export default TitleProp
