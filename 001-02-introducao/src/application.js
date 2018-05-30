'use strict'

import React from 'react'
import TitleProp from './props'

const Application = React.createClass({
  render: function () {
    return (
      <div>
        <TitleProp name='Filipe' />
      </div>
    )
  }
})

export default Application
