/*
  Componentes criados através de classes devem herdar de Component.
  É possível usar defaultProps, a exemplo do ocorrido nas funções puras, para determinar valores padrão.
*/
'use strict'

import React, { Component } from 'react'

class Es6ClassComponent extends Component {
  render () {
    return (
      <div className='component'>
        <h1>Olá, {`${this.props.name} ${this.props.lastName}`}!</h1>
      </div>
    )
  }
}

Es6ClassComponent.defaultProps = {
  name: 'Zé',
  lastName: 'Ninguém'
}

export default Es6ClassComponent
