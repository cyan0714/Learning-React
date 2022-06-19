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

const Button = ({ clickFunc, text }) => {
  return (
    <button onClick={clickFunc} style={buttonStyles}>{text}</button>
  )
}

class Main extends React.Component {
  state = {
    count: 0
  }
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <p>计数器：{this.state.count}</p>
        <Button clickFunc={() => {this.setState({count: this.state.count + 1})}} text='+ 1'/>
        <Button clickFunc={() => {this.setState({count: this.state.count - 1})}} text='- 1'/>
      </div>
    )
  }
}

const rootElement = ReactDOM.createRoot(document.querySelector('#root'))
rootElement.render(<Main />)
