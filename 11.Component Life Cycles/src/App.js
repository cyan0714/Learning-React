import React, { Component } from 'react'
class App extends Component {
  constructor(props) {
    super(props)
    console.log('I am  the constructor and  I will be the first to run.')
    this.state = {
      firstName: 'John',
      data: []
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('I am getDerivedStateFromProps and I will be the second to run.')
    return { firstName: 'cyan' }
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('nextProps', nextProps, 'nextState', nextState)
    // if the return is true, the application will never update.
    return true
  }

  componentDidMount() {
    console.log('I am componentDidMount and I will be last to run.')
    const data = [
      { name: 'China', population: '13亿'},
      { name: 'India', population: '14亿'},
      { name: 'USA', population: '2亿'},
    ]
    setTimeout(() => {
      this.setState({
        data
      })
    }, 2000)
  }
  renderCountries = () => {
    return this.state.data.map(country => {
      return (
        <div>
          <div>
            <h1>{country.name}</h1>
            <p>Population: {country.population}</p>
          </div>
        </div>
      )
    })
  }

  render() {
    console.log('执行了render()函数');
    return (
      <div className='App'>
        <h1>React Component Life Cycle</h1>
        <h1>{this.state.firstName}</h1>
        <div>
          <p>There are {this.state.data.length} countries in the api</p>
          <div className='countries-wrapper'>{this.renderCountries()}</div>
        </div>
      </div>
    )
  }
}
export default App
