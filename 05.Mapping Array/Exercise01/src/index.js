import React from 'react'
import ReactDOM from 'react-dom/client'

function getNumberType(num) {
  if (num % 2 === 0 && num !== 2) {
    // evens
    return '#21bf73'
  } else {
    if (num === 1) return '#fddb3a' // odds
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        // odds
        return '#fddb3a'
      }
    }
    // prime
    return '#fd5e53'
  }
}

const squareStyle = bgColor => {
  return {
    backgroundColor: bgColor,
    width: '100px',
    height: '100px',
    lineHeight: '100px',
    fontSize: '40px',
    textAlign: 'center',
    border: '1px solid #fff',
    color: '#fff',
  }
}

const Square = ({ bgColor, num }) => {
  return <div style={squareStyle(bgColor)}>{num}</div>
}

const Squares = () => {
  const squareArr = Array.from({ length: 32 }, (v, i) => i)
  return squareArr.map(square => <Square key={square} bgColor={getNumberType(square)} num={square} />)
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
