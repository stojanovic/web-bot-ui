'use strict'

import React from 'react'

export default class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <Header>
      <div>{this.props.botName}</div>
    </Header>
  }
}
