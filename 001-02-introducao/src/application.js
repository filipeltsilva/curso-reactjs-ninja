'use strict'

import React from 'react'
import ChildrenPropButton from './children-prop'

const Application = React.createClass({
  render: function () {
    return (
      <div>
        <ChildrenPropButton><span>Texto Children dentro do Span</span></ChildrenPropButton>
      </div>
    )
  }
})

export default Application
