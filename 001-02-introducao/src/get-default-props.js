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
      lastName: 'Ninguém'
    }
  },
  render: function () {
    return (
      <h1>Olá, {this.props.name} {this.props.lastName}!</h1>
    )
  }
})

export default DefaultProps
