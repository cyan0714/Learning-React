import React from 'react'
import ReactDOM from 'react-dom/client'

const tenHighestPopulation = [
  { country: 'World', population: 7693165599 },
  { country: 'China', population: 1377422166 },
  { country: 'India', population: 1295210000 },
  { country: 'United States of America', population: 323947000 },
  { country: 'Indonesia', population: 258705000 },
  { country: 'Brazil', population: 206135893 },
  { country: 'Pakistan', population: 194125062 },
  { country: 'Nigeria', population: 186988000 },
  { country: 'Bangladesh', population: 161006790 },
  { country: 'Russian Federation', population: 146599183 },
  { country: 'Japan', population: 126960000 }
]

const worldPopulation = tenHighestPopulation[0].population

const countryStyle = () => {
  return {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  }
}

const Country = ({ countryObj }) => {
  return (
    <div style={countryStyle()}>
      <div style={{ width: '200px' }}>{countryObj.country}</div>
      <div style={{ width: '500px' }}>
        <div
          style={{
            width: (countryObj.population / worldPopulation).toFixed(2) * 100 + '%',
            height: '50px',
            backgroundColor: '#ffa500'
          }}></div>
      </div>
      <span style={{ marginLeft: '10px' }}>{countryObj.population}</span>
    </div>
  )
}

const Countries = () => {
  return tenHighestPopulation.map(c => <Country key={c.country} countryObj={c} />)
}

const App = () => {
  return <Countries />
}

const rootElement = ReactDOM.createRoot(document.querySelector('#root'))
rootElement.render(<App />)
