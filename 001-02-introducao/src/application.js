'use strict'

import React from 'react'
import Es6ClassComponent from './es6-class-component'

const Application = React.createClass({
  render: function () {
    return (
      <div>
        <Es6ClassComponent lastName='Lemos' />
      </div>
    )
  }
})

export default Application
