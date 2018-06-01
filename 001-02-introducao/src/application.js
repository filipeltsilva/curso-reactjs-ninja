'use strict'

import React from 'react'
import KeyProp from './key-prop'

const Application = React.createClass({
  render: function () {
    return (
      <div>
        {['red', 'green', 'blue'].map((square) => (
          <KeyProp key={square} color={square} />
        ))}
      </div>
    )
  }
})

export default Application
