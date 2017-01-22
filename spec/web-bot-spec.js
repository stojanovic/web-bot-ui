/* global describe, it, expect */
'use strict'

const WebBot = require('../src/web-bot')

describe('Web bot', () => {
  it('should be a class', () => {
    const webBot = new WebBot({
      apiUrl: 'https://example.com'
    })
    expect(typeof WebBot).toBe('function')
    expect(webBot instanceof WebBot).toBeTruthy()
  })
})
