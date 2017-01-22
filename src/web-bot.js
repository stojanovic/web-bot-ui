'use strict'

class WebBot {
  constructor(options = { theme: 'blue' }) {
    if (!options.apiUrl)
      throw new Error('API URL is required for Web Bot!')
  }
}

export default WebBot
