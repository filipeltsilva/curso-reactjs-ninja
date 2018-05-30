// Props são utilizadas para passagem de determinados valores para os componentes
'use strict'

import React from 'react'

const TitleProp = React.createClass({
  render: function () {
    return (<h1>Olá, {this.props.name}!</h1>)
  }
})

export default TitleProp
