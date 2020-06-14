import React, { useState } from 'react'
import './App.css'
import Signup from './components/SignUp/signup'
import Login from './components/login/login'
import Home from './components/Home/home'

export default () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
  const [isRegister, setIsRegister] = useState(false)
  const [username, setUsername] = useState(false)

  return (
    <div className="App">
      {!isUserLoggedIn && !isRegister && (
        <Login
          setIsUserLoggedIn={setIsUserLoggedIn}
          setIsRegister={setIsRegister}
          setUsername={setUsername}
        />
      )}
      {!isUserLoggedIn && isRegister && (
        <Signup setIsRegister={setIsRegister} />
      )}
      {isUserLoggedIn && <Home />}
    </div>
  )
}
