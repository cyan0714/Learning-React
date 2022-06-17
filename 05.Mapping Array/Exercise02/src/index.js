import React from 'react'
import ReactDOM from 'react-dom/client'

const getHexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

const squareStyle = bgColor => {
  return {
    backgroundColor: bgColor,
    width: '100px',
    height: '100px',
    lineHeight: '100px',
    fontSize: '18px',
    textAlign: 'center',
    border: '1px solid #fff',
    color: '#fff',
  }
}

const Square = ({ bgColor }) => {
  return <div style={squareStyle(bgColor)}>{bgColor}</div>
}

const Squares = () => {
  const squareArr = Array.from({ length: 32 }, (v, i) => i)
  return squareArr.map(square => <Square key={square} bgColor={getHexaColor()} />)
}

const App = () => {
  return (
    <div style={{ width: '820px', display: 'flex', flexWrap: 'wrap' }}>
      <Squares />
    </div>
  )
}

const rootElement = ReactDOM.createRoot(document.querySelector('#root'))
rootElement.render(<App />)
