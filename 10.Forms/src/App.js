import React, { Component } from 'react'
import PraticeApp from './Exercises/e1'
// 1.Getting data from an input field
// class App extends Component {
//   state = {
//     firstName: ''
//   }
//   handleChange = (e) => {
//     this.setState({firstName: e.target.value})
//   }
//   render() {
//     return (
//       <>
//         <label htmlFor="idFirstName">First Name:</label>
//         <input type="text" name="firstName" id="idFirstName" value={this.state.firstName} onChange={this.handleChange} />
//         <h2>{ this.state.firstName }</h2>
//       </>
//     )
//   }
// }

// 2. Getting multiple input data from form
// class App extends Component {
//   state = {
//     firstName: '',
//     lastName: '',
//     age: 0,
//     job: ''
//   }
//   handleChange = (e) => {
//     const {name, value} = e.target
//     this.setState({[name]: value})
//   }
//   handleSubmit = (e) => {
//     e.preventDefault()
//     console.log('this.state', this.state);
//   }
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <input type="text" name="firstName" placeholder="firstName" onChange={this.handleChange} />
//           <input type="text" name="lastName" placeholder="lastName" onChange={this.handleChange} />
//           <input type="number" name="age" placeholder="age" onChange={this.handleChange} />
//           <input type="text" name="job" placeholder="job" onChange={this.handleChange} />
//           <button className='btn btn-success'>Submit</button>
//         </form>
//       </div>
//     )
//   }
// }

// 3. Get data from different input field types
// const options = [
//   {
//     value: '',
//     label: '-- Select Country--',
//   },
//   {
//     value: 'Finland',
//     label: 'Finland',
//   },
//   {
//     value: 'Sweden',
//     label: 'Sweden',
//   },
//   {
//     value: 'Norway',
//     label: 'Norway',
//   },
//   {
//     value: 'Denmark',
//     label: 'Denmark',
//   },
// ]

// // mapping the options to list(array) of JSX options

// const selectOptions = options.map(({ value, label }) => (
//   <option value={value}> {label}</option>
// ))

// class App extends React.Component {
//   // declaring state
//   state = {
//     firstName: '',
//     lastName: '',
//     email: '',
//     country: '',
//     tel: '',
//     dateOfBirth: '',
//     favoriteColor: '',
//     weight: '',
//     gender: '',
//     file: '',
//     bio: '',
//     skills: {
//       html: false,
//       css: false,
//       javascript: false
//     }
//   }
//   handleChange = e => {
//     /*
//      we can get the name and value like: e.target.name, e.target.value
//     Wwe can also destructure name and value from e.target
//     const name = e.target.name
//     const value = e.target.value
//     */
//     const { name, value, type, checked } = e.target
//     console.log('checked: ', checked);
//     /*
//     [variablename] we can make a value stored in a certain variable could be a key for an object, in this case a key for the state
//     */

//     if (type === 'checkbox') {
//       this.setState({
//         skills: { ...this.state.skills, [name]: checked }
//       })
//     } else if (type === 'file') {
//       console.log(type, 'cehck here')
//       this.setState({ [name]: e.target.files[0] })
//     } else {
//       this.setState({ [name]: value })
//     }
//   }
//   handleSubmit = e => {
//     /*
//      e.preventDefault()
//      stops the default behavior of form element
//      specifically refreshing of page
//     */
//     e.preventDefault()
//     const { firstName, lastName, email, tel, dateOfBirth, favoriteColor, weight, country, gender, bio, file, skills } =
//       this.state

//     const formattedSkills = []
//     for (const key in skills) {
//       console.log(key)
//       if (skills[key]) {
//         formattedSkills.push(key.toUpperCase())
//       }
//     }
//     const data = {
//       firstName,
//       lastName,
//       email,
//       tel,
//       dateOfBirth,
//       favoriteColor,
//       weight,
//       country,
//       gender,
//       bio,
//       file,
//       skills: formattedSkills
//     }
//     /*
//      the is the place where we connect backend api
//      to send the data to the database
//      */
//     console.log(data)
//   }

//   render() {
//     // accessing the state value by destrutcturing the state
//     const { firstName, lastName, email, tel, dateOfBirth, favoriteColor, weight, country, gender, bio } = this.state
//     return (
//       <div className='App'>
//         <h3>Add Student</h3>
//         <form onSubmit={this.handleSubmit}>
//           <div className='row'>
//             <div className='form-group'>
//               <label htmlFor='firstName'>First Name </label>
//               <input
//                 type='text'
//                 name='firstName'
//                 value={firstName}
//                 onChange={this.handleChange}
//                 placeholder='First Name'
//               />
//             </div>
//             <div className='form-group'>
//               <label htmlFor='lastName'>Last Name </label>
//               <input
//                 type='text'
//                 name='lastName'
//                 value={lastName}
//                 onChange={this.handleChange}
//                 placeholder='Last Name'
//               />
//             </div>
//             <div className='form-group'>
//               <label htmlFor='email'>Email </label>
//               <input type='email' id="email" name='email' value={email} onChange={this.handleChange} placeholder='Email' />
//             </div>
//           </div>

//           <div className='form-group'>
//             <label htmlFor='tel'>Telephone </label>
//             <input type='tel' id="tel" name='tel' value={tel} onChange={this.handleChange} placeholder='Tel' />
//           </div>

//           <div className='form-group'>
//             <label htmlFor='dateOfBirth'>Date of birth </label>
//             <input
//               type='date'
//               name='dateOfBirth'
//               value={dateOfBirth}
//               onChange={this.handleChange}
//               placeholder='Date of Birth'
//             />
//           </div>
//           <div className='form-group'>
//             <label htmlFor='favoriteColor'>Favorite Color</label>
//             <input
//               type='color'
//               id='color'
//               name='color'
//               value={favoriteColor}
//               onChange={this.handleChange}
//               placeholder='Favorite Color'
//             />
//           </div>
//           <div className='form-group'>
//             <label htmlFor='weight'>Weight </label>
//             <input
//               type='number'
//               id='weight'
//               name='weight'
//               value={weight}
//               onChange={this.handleChange}
//               placeholder='Weight in Kg'
//             />
//           </div>
//           <div>
//             <label htmlFor='country'>Country</label> <br />
//             <select name='country' id="country" onChange={this.handleChange}>
//               {selectOptions}
//             </select>
//           </div>

//           <div>
//             <p>Gender</p>
//             <div>
//               <input
//                 type='radio'
//                 id='female'
//                 name='gender'
//                 value='Female'
//                 onChange={this.handleChange}
//                 checked={gender === 'Female'}
//               />
//               <label htmlFor='female'>Female</label>
//             </div>
//             <div>
//               <input
//                 id='male'
//                 type='radio'
//                 name='gender'
//                 value='Male'
//                 onChange={this.handleChange}
//                 checked={gender === 'Male'}
//               />
//               <label htmlFor='male'>Male</label>
//             </div>
//             <div>
//               <input
//                 id='other'
//                 type='radio'
//                 name='gender'
//                 value='Other'
//                 onChange={this.handleChange}
//                 checked={gender === 'Other'}
//               />
//               <label htmlFor='other'>Other</label>
//             </div>
//           </div>

//           <div>
//             <p>Select your skills</p>
//             <div>
//               <input type='checkbox' id='html' name='html' onChange={this.handleChange} />
//               <label htmlFor='html'>HTML</label>
//             </div>
//             <div>
//               <input type='checkbox' id='css' name='css' onChange={this.handleChange} />
//               <label htmlFor='css'>CSS</label>
//             </div>
//             <div>
//               <input type='checkbox' id='javascript' name='javascript' onChange={this.handleChange} />
//               <label htmlFor='javascript'>JavaScript</label>
//             </div>
//           </div>
//           <div>
//             <label htmlFor='bio'>Bio</label> <br />
//             <textarea
//               id='bio'
//               name='bio'
//               value={bio}
//               onChange={this.handleChange}
//               cols='120'
//               rows='10'
//               placeholder='Write about yourself ...'
//             />
//           </div>

//           <div>
//             <input type='file' name='file' onChange={this.handleChange} />
//           </div>
//           <div>
//             <button>Submit</button>
//           </div>
//         </form>
//       </div>
//     )
//   }
// }

// 4. practice
export default PraticeApp
