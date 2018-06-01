/*
  A prop key vai permitir que o elemento a ser iterado dentro de um componente receba
  o tratamento adequado pelo React, auxiliando na performance da aplicação.
*/

'use strict'

import React from 'react'

// Propriedades CSS inline por meio do atributo style, são escritas com camelCase e sintaxe de objeto
// JSX permite o autofechamento do XML (/>) quando não há conteúdo dentro do componente
const KeyProp = ({color}) => (
  <div style={{
    backgroundColor: color,
    height: '100px',
    width: '100px'
  }} />
)

KeyProp.defaultProps = {
  color: 'red'
}

export default KeyProp
