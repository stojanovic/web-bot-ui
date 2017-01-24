'use strict'

import React from 'react'
import Header from './header.js'

export default class Chat extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div>
      <Header></Header>
      <MessagesContainer></MessagesContainer>
      <MessageComposer></MessageComposer>
    </div>
  }
}
