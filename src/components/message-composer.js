'use strict'

import React from 'react'

export default class MessageComposer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div>
        { this.props.newMessage }
        <input />
      </div
  }
}
