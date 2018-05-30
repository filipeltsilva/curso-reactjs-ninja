/*
  Props são utilizadas para passagem de determinados valores para os componentes
  Uma expressão em JSX é passada via {}. Para usar dados que não sejam string nas props, deve-se informá-los dentro dessa estrutura.
*/
'use strict'

import React from 'react'

const TitleProp = React.createClass({
  render: function () {
    return (<h1>Olá, {this.props.name}!</h1>)
  }
})

export default TitleProp
