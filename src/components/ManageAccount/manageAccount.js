import React, { useState } from 'react'
import '../../assets/css/style.css'
import axios from 'axios'
import { API_BASE_URL } from '../Constants/constants'
import manageAccountJpg from '../../assets/images/manageAccount.jpg'

export default (props) => {
  const [mobile, setMobile] = useState('')
  const [address, setAddress] = useState('')
  const [password, setPassword] = useState('')

  const saveUserDetails = () => {
    console.info(props.username)
    axios({
      method: 'POST',
      url: API_BASE_URL + 'profile/',
      headers: {
        'Content-Type': 'application/json',
        authToken: props.authToken,
      },
      data: {
        username: props.username,
        password: password,
        mobileNumber: mobile,
        address: address
      },
    })
      .then((response) => {
        if(response.data == "account details saved"){
          alert('Your account details saved successfully')
        }
        else {
          alert('Details not saved. Please enter again')
        }
      })
  }

  return (
    <div className="main-container">
      <img
        className="orderfood-image"
        src={manageAccountJpg}
        alt="orderFood-image"
      />
      <div className="form-container">
        <h2 className="form-title">Manage Account</h2>
        <input
          type="text"
          className="form-input-text-input"
          name="username"
          value={props.username}
          readOnly="readOnly"
        />

        <input
          type="text"
          className="form-input-text-input"
          name="password"
          placeholder="Enter Password"
          onChange={(evnt) => setPassword(evnt.target.value)}
          required
        />

        <input
          type="text"
          className="form-input-text-input"
          name="phone"
          placeholder="Enter Phone Number"
          onChange={(evnt) => setMobile(evnt.target.value)}
          required
        />

        <textarea
          id="description"
          name="description"
          className="form-input-text-area"
          rows="4"
          cols="50"
          placeholder="Enter your address"
          onChange={(evnt) => setAddress(evnt.target.value)}
        />

        <button className="signup-btn" type="button" onClick={saveUserDetails}>
          Save
        </button>
      </div>
    </div>
  )
}
