'use strict'

import React from 'react'

export default class MessagesContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div>
        { this.props.messages }
      </div>
  }
}
