import React, { Component } from 'react'
import Button from './components/Button'
import { getRandomInt } from './utils/index.js'
console.log(getRandomInt(100, 500));
class App extends Component {
  state = {
    isLogined: false,
    message: 'Click show time or Greet people to change me'
  }
  render() {
    return (
      <>
        <Button />
      </>
    )
  }
}
export default App
