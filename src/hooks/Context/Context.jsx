import React, { useState, createContext } from 'react'
import User from './User'
import UserContext from './UserContext'

export default function Context() {
  
  const [userOne, setUserOne] = useState("Marwan")

  const userValues = {userOne, setUserOne}

  return (
    <UserContext.Provider value={userValues}>
      <User />
    </UserContext.Provider>
  )
}