/*
  A função, para ser pura, deve sempre retornar um mesmo valor passando os mesmos parâmetros.
  Ela não modifica a aplicação externamente e não depende de nada além dos seus parâmetros.
*/
'use strict'

import React from 'react'

const PureFunctionComponent = ({name, lastName}) => (
  <h1>Olá, {`${name} ${lastName}`}!</h1>
)

// Com funções puras, pode-se usar o objeto defaultProps como alternativa ao getDefaultProps()
PureFunctionComponent.defaultProps = {
  name: 'Zé',
  lastName: 'Ninguém'
}

export default PureFunctionComponent
