'use strict'

import React from 'react'
import TitleProp from './props'

const Application = React.createClass({
  render: () => {
    return (
      <div>
        <TitleProp name='Filipe' />
      </div>
    )
  }
})

export default Application
