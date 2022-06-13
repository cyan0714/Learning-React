import React from 'react'
import ReactDOM from 'react-dom'

const styles = { textAlign: 'center', backgroundColor: '#c2e6f4', borderRadius: '10px', paddingBottom: '20px' }
const buttonStyle = { color: '#fff', backgroundColor: '#f37474', padding: '10px 50px', borderRadius: '10px', borderColor: 'transparent', marginTop: '20px'}

const inputs = ['First name', 'Last name', 'Email']
const inputsFormatted = inputs.map(input => <input key={input} placeholder={input} type="text" />)

const main = (
  <div style={styles}> 
    <h1>SUBSCRIBE</h1>
    <p>Sign up with you email address to receive news and updates</p>
    <div>{ inputsFormatted }</div>
    <button style={buttonStyle}>Subscribe</button>
  </div>
)

const rootElement = document.querySelector('#root')
ReactDOM.render(main, rootElement) // Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead