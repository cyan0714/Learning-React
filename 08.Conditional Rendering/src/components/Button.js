import buttonStyles from '../assets/styles/button.js'

const Button = ({ clickFunc, text }) => (<button onClick={clickFunc} style={buttonStyles}>{text}</button>)

export default Button