import React from 'react'
import ReactDOM from 'react-dom/client'

import avatar from './images/avatar.jpg'

const name = 'Chen Shiyan'
const skills = ['HTML', 'CSS', 'JS', 'VUE']
const LearningDate = 'JUNE 13,2022'
const avatarStyle = { width: '300px', height: '300px', borderRadius: '50%', overflow: 'hidden' }
const skillsStyle = {
  padding: '10px 30px',
  margin: '20px',
  display: 'inline-block',
  backgroundColor: '#2acfcf',
  color: '#fff'
}
const skillsFormatted = skills.map(skill => (
  <span key={skill} style={skillsStyle}>
    {skill}
  </span>
))
const getHexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

// Avator Component
const Avatar = () => (
  <div style={avatarStyle}>
    <img src={avatar} alt='avatar' width='100%' />
  </div>
)

// Hexadecimal color Component
const HexadecimalColor = () => {
  return <div style={{ backgroundColor: getHexaColor() }}>{getHexaColor()}</div>
}
const HexadecimalColorList = Array.from({ length: 5 }).map(() => <HexadecimalColor />)

// Main Component
const Main = () => (
  <div>
    <div>{name}</div>
    <div>{skillsFormatted}</div>
  </div>
)

// Footer Component
const Footer = () => <div>Joined on {LearningDate}</div>
const app = (
  <div className='app'>
    <Avatar />
    {HexadecimalColorList}
    <Main />
    <Footer />
  </div>
)

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(app)
