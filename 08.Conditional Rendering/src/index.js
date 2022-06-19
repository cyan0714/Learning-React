import React from 'react'
import ReactDOM from 'react-dom/client'

const buttonStyles = {
  backgroundColor: '#61dbfb',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: 3,
  cursor: 'pointer',
  fontSize: 18,
  color: 'white',
}

const Loggin = () => {
  return (
    <div>
      <p>登录界面</p>
    </div>
  )
}

const Welcome = () => {
  return (
    <div>
      <p>欢迎光临</p>
    </div>
  )
}

const Button = ({ clickFunc, text }) => {
  return (
    <button onClick={clickFunc} style={buttonStyles}>{text}</button>
  )
}

class Main extends React.Component {
  state = {
    isLogined: false,
    message: 'Click show time or Greet people to change me',
  }
  showDate = (time) => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]

    const month = months[time.getMonth()].slice(0, 3)
    const year = time.getFullYear()
    const date = time.getDate()
    return `${month} ${date}, ${year}`
  }
  handleLogin = () => {
    this.setState({
      isLogined: !this.state.isLogined
    })
  }
  handleTime = () => {
    const message = this.showDate(new Date())
    this.setState({ message })
  }
  greetPeople = () => {
    const message = 'Welcome to 30 Days Of React Challenge, 2022'
    this.setState({message})
  }
  render() {
    return (
      <div>
        {this.state.isLogined ? <Welcome /> : <Loggin />}
        {!this.state.isLogined && (
          <p>
            Please login to access more information
          </p>
        )}
        <p>{this.state.message}</p>
        <Button clickFunc={this.handleLogin} text={this.state.isLogined ? 'Logout' : 'Login'}/>
        <Button clickFunc={this.handleTime} text={'handleTime'}/>
        <Button clickFunc={this.greetPeople} text={'greetPeople'}/>
      </div>
    )
  }
}

const rootElement = ReactDOM.createRoot(document.querySelector('#root'))
rootElement.render(<Main />)
