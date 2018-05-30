'use strict'

import React from 'react'
import DefaultProps from './get-default-props'

const Application = React.createClass({
  render: function () {
    return (
      <div>
        <DefaultProps name='Filipe' lastName='Lemos' />
      </div>
    )
  }
})

export default Application
