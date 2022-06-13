import React from 'react'
import ReactDOM from 'react-dom'

import feTechnologies from './images/frontend_technologies.png'

const pic = (
  <div>
    <img src={feTechnologies} alt="frontend_technologies" />
  </div>
)

const rootElement = document.querySelector('#root')
ReactDOM.render(pic, rootElement)