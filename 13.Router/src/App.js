import React, { Component } from 'react'
import {
  BrowserRouter,
  Outlet,
  Routes,
  Route,
  NavLink,
  Link,
  Switch,
  Redirect,
  Prompt,
  withRouter
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Bookkeeper</h1>
        <nav
          style={{
            borderBottom: 'solid 1px',
            paddingBottom: '1rem'
          }}>
          <Link to='/invoices'>Invoices</Link> | <Link to='/expenses'>Expenses</Link>
        </nav>
        <Outlet />
      </div>
    )
  }
}
export default App
