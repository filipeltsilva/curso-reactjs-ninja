'use strict'

import React from 'react'
import StatefulComponent from './states'

const Application = React.createClass({
  render: function () {
    return (
      <div>
        <StatefulComponent />
      </div>
    )
  }
})

export default Application
