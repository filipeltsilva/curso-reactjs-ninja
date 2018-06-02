/*
  Estados (states) tornam os componentes dinâmicos, possibilitando modificações em props e valores.

  this.state: objeto que tratará o estado da aplicação/componente.

  Componentes que manipulam o estado da aplicação são stateful. Caso contrário, stateless.

  Todo componente stateful deve ser criado através de uma classe ES6 extendendo de Component ou
  usando o React.createClass() do padrão ES5.
*/

'use strict'

import React, { Component } from 'react'

class StatefulComponent extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Filipe'
    }
  }
  // Para mudar o valor de um estado, usar o método setState(). Não pode atribuir diretamente
  render () {
    return (
      <div className='container' onClick={() => this.setState({name: 'Zé Ruela'})}>
        <h2>{this.state.name}</h2>
      </div>
    )
  }
}

export default StatefulComponent
