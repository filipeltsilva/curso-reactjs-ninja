/*
  O método getDefaultProps() retorna um objeto com valor default para as props utilizadas no componente.
  Não é obrigatório passar todas as props. Dessa forma, a prop é renderizada com o valor padrão configurado no método.
*/
'use strict'

import React from 'react'

const DefaultProps = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'Zé',
      lastName: 'Ninguém',
      age: 10
    }
  },
  render: function () {
    return (
      <h1>Olá, {this.props.name} {this.props.lastName}! Você tem {this.props.age} anos de idade.</h1>
    )
  }
})

export default DefaultProps
