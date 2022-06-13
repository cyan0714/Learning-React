import React from 'react'
import ReactDOM from 'react-dom/client'

import avatar from './images/avatar.jpg'

const name = 'Chen Shiyan'
const skills = ['HTML', 'CSS', "JS", 'VUE']
const skillsStyle = { padding: '10px 30px', margin: '20px', display: 'inline-block', backgroundColor: '#2acfcf', color: '#fff'}
const skillsFormatted = skills.map(skill => <span key={skill} style={skillsStyle}>{skill}</span>)
const LearningDate = 'JUNE 13,2022'

const header = (
  <div style={{ width: '300px', height: '300px', borderRadius: '50%', overflow: 'hidden'}}>
    <img src={avatar} alt="avatar" width="100%" />
  </div>
)
const main = (
  <div>
    <div>{ name }</div>
    <div>{ skillsFormatted }</div>
  </div>
)
const footer = (
  <div>
    Joined on { LearningDate }
  </div>
)
const app = (
  <div className="app">
    {header}
    {main}
    {footer}
  </div>
)
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(app);