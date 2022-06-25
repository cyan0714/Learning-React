import React, { Component } from 'react'

const countries = [
  {
    value: 'China',
    label: 'China',
  },
  {
    value: "USA",
    label: 'USA',
  },
  {
    value: "Russia",
    label: 'Russia',
  }
]
const selectOptions = countries.map(({ value, label }) => {
  return <option value={value} key={value}>{label}</option>
})

class PraticeApp extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    tel: '',
    date: '',
    color: '',
    weight: '',
    gender: '',
    file: '',
    bio: '',
    skills: {
      html: false,
      css: false,
      javascript: false
    },
    touched: {
      firstName: false,
      lastName: false,
    },
  }

  handleChange = (e) => {
    const { name, value, type, checked } = e.target
    if (type === 'checkbox') {
      this.setState({
        skills: { ...this.state.skills, [name]: checked }
      })
    } else if (type === 'file') {
      this.setState({ [name]: e.target.files[0] })
    } else {
      this.setState({ [name]: value })
    }
  }

  handleBlur = (e) => {
    const { name, value } = e.target

    // 注意：setState 本身并不是异步，只是因为 react 的性能优化机制体现为异步。在 react 的生命周期函数或者作用域下为异步，在原生的环境下为同步。
    this.setState({ touched: { ...this.state.touched, [name]: true } })
    setTimeout(() => {
      this.setState({ firstName: this.validate() })
    },0)
  }

  validate = () => {
    const errors = {
      firstName: '',
    }

    if (
      (this.state.touched.firstName && this.state.firstName.length < 3) ||
      (this.state.touched.firstName && this.state.firstName.length > 12)
    ) {
      errors.firstName = 'First name must be between 2 and 12'
    } else {
      errors.firstName = this.state.firstName
    }
    return errors.firstName
  }

  handleSubmit = e => {
    e.preventDefault()
    const { firstName, lastName, email, tel, date, color, weight, country, gender, bio, file, skills } = this.state

    const formattedSkills = []
    for (const key in skills) {
      if (skills[key]) {
        formattedSkills.push(key.toUpperCase())
      }
    }
    const data = {
      firstName,
      lastName,
      email,
      tel,
      date,
      color,
      weight,
      country,
      gender,
      bio,
      file,
      skills: formattedSkills
    }
    console.log('dataObj',data)
  }
  render() {
    const { firstName, lastName, email, tel, date, color, weight, gender, bio } = this.state

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="firstName" placeholder="First Name" value={firstName} onChange={this.handleChange} onBlur={this.handleBlur}></input>
          <input type="text" name="lastName" placeholder="Last Name" value={lastName} onChange={this.handleChange}></input>
          <input type="email" name="email" placeholder="Email" value={email} onChange={this.handleChange}></input>
          <input type="tel" name="tel" placeholder="Tel" value={tel} onChange={this.handleChange}></input>
          <input type="date" name="date" value={date} onChange={this.handleChange}></input>
          <input type="color" name="color" value={color} onChange={this.handleChange}></input>
          <input type="number" name="weight" value={weight} placeholder="Weight" onChange={this.handleChange}></input>
          <div>
            <span>Country</span>
            <select name="country" onChange={this.handleChange}>
              {selectOptions}
            </select>
          </div>
          <div>
            <span>Gender</span>
            <div>
              <input type="radio" id="female" name="gender" value="Female" checked={gender === 'Female'} onChange={this.handleChange} />
              <label htmlFor="female">Female</label>
            </div>
            <div>
              <input type="radio" id="male" name="gender" value="Male" checked={gender === 'Male'} onChange={this.handleChange} />
              <label htmlFor="male">Male</label>
            </div>
          </div>
          <div>
            <span>Select languages you like</span>
            <div>
              <input type="checkbox" id="html" name="html" onChange={this.handleChange} />
              <label htmlFor="html">HTML</label>
            </div>
            <div>
              <input type="checkbox" id="css" name="css" onChange={this.handleChange} />
              <label htmlFor="css">CSS</label>
            </div>
            <div>
              <input type="checkbox" id="js" name="js" onChange={this.handleChange} />
              <label htmlFor="js">JS</label>
            </div>
          </div>
          <div>
            <label htmlFor='bio'>Bio</label> <br />
            <textarea id='bio'
                      name='bio'
                      value={bio}
                      onChange={this.handleChange}
                      cols='120'
                      rows='10'
                      placeholder='Write about yourself ...'/>
          </div>
          <div>
            <input type='file' name='file' onChange={this.handleChange} />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default PraticeApp;