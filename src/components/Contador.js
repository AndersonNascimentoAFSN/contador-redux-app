import React, { Component } from 'react'

export default class Contador extends Component {
  render() {
    return (
      <div>
        <span>0</span>
        <div>
          <button type="button">Incrementar</button>
          <button type="button">descrementar</button>
        </div>
      </div>
    )
  }
}

