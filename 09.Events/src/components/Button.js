import React, { Component } from 'react'
import { getRandomInt } from '../utils/index.js'

class Button extends Component {
  state = {
    top: 200,
    left: 200,
  }
  onMouseEnter = () => {
    this.setState({
      top: getRandomInt(100, 500),
      left: getRandomInt(100, 500),
    })
  }
  render() {
    const buttonStyles = {
      position: 'absolute',
      top: this.state.top,
      left: this.state.left,
      backgroundColor: '#61dbfb',
      padding: 10,
      border: 'none',
      borderRadius: 5,
      margin: 3,
      cursor: 'pointer',
      fontSize: 18,
      color: 'white',
    }
    return (
      <button onMouseEnter={this.onMouseEnter} style={buttonStyles}>你应该抓不到我</button>
    )
  }
}

export default Button