/*
  A prop children permite a renderização de estruturas HTML mais complexas dentro das
  tags que a envolvem. Essas tags são tratadas como nós pais
*/

'use strict'

import React from 'react'

const ChildrenPropButton = ({children}) => (
  <button onClick={(event) => {
    event.preventDefault()
    alert('Clicou')
  }}>{children}</button>
)

export default ChildrenPropButton
