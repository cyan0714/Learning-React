import React from 'react'
import ReactDOM from 'react-dom/client'


const Button = ({clickFunc}) => {
  return (
    <div onClick={clickFunc}>click me</div>
  )
}

const foo = () => {
  alert('Hello, Class Components')
}

class Main extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {name, age, height} = this.props.personalInfo
    return (
      <div>
        <p>{this.props.dream}</p>
        <p>{name}</p>
        <p>{age}</p>
        <p>{height}</p>
        <Button clickFunc={foo}/>
      </div>
    )
  }
}
const personalInfo = {
  name: 'shiyan',
  age: 14,
  height: 1.80
}

const rootElement = ReactDOM.createRoot(document.querySelector('#root'))
rootElement.render(<Main dream='Dream to be a prominent frontend programmer' personalInfo={personalInfo} />)
