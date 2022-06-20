import React, { Component } from 'react'
import Welcome from './components/Welcome.js'
import Button from './components/Button.js'
import Loggin from './components/Loggin.js'
import { showDate } from './utils/index.js'

class App extends Component {
  state = {
    isLogined: false,
    message: 'Click show time or Greet people to change me'
  }
  handleLogin = () => {
    this.setState({
      isLogined: !this.state.isLogined
    })
  }
  handleTime = () => {
    const message = showDate(new Date())
    this.setState({ message })
  }
  greetPeople = () => {
    const message = 'Welcome to 30 Days Of React Challenge, 2022'
    this.setState({ message })
  }
  render() {
    return (
      <>
        {this.state.isLogined ? <Welcome /> : <Loggin />}
        {!this.state.isLogined && <p>Please login to access more information</p>}
        <p>{this.state.message}</p>
        <Button clickFunc={this.handleLogin} text={this.state.isLogined ? 'Logout' : 'Login'} />
        <Button clickFunc={this.handleTime} text={'handleTime'} />
        <Button clickFunc={this.greetPeople} text={'greetPeople'} />
      </>
    )
  }
}
export default App
