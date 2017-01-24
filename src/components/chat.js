'use strict'

import React from 'react'
import Header from './header.js'

export default class Chat extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <Chat>
      <Header></Header>
      <MessagesContainer></MessagesContainer>
      <MessageComposer></MessageComposer>
    </Chat>
  }
}
