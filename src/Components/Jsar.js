import React, { Component } from 'react'

export default class Jsar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [
        {
          name: 'nana yaw',
          main: 'Ghana',
        },
      ],
    }
  }
  render() {
    return (
      <section style={{ margin: '1rem' }}>
        <div>
          <h1>Name: </h1>
          <p>country: </p>
          <hr />
        </div>
      </section>
    )
  }
}
