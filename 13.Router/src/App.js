import React, { Component } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Switch,
  Redirect,
  Prompt,
  withRouter,
} from 'react-router-dom'

const Home = (props) => <h1>Welcome Home</h1>

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Routes>
            <Route path='/home' element={<Home/>} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}
export default App
