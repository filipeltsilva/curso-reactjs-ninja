/*
  Alguns atributos HTML precisam de um tratamento especial para serem renderizados no React.
  O class precisa ser passado como className no componente.
  O for utilizado em label deve ser passado como htmlFor.
  Atributos data e aria podem ser passados normalmente.
*/
'use strict'

import React from 'react'

const HtmlAttribute = React.createClass({
  render: function () {
    return (
      <div className='container css-class'>
        <label htmlFor='my-input' data-label='nome-label'>Nome</label>
        <input type='text' id='my-input' aria-required='true' />
      </div>
    )
  }
})

export default HtmlAttribute
