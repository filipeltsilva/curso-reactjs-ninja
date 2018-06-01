/*
  Eventos são informados inline no componente, com sintaxe camelCase.
  No entanto, o browser não renderizará o evento inline, o que seria uma má prática. O React
  administra isso.
*/

'use strict'

import React from 'react'

const EventButton = () => (
  <button onClick={(event) => {
    event.preventDefault()
    alert('Clicou')
  }}>Clique</button>
)

export default EventButton
