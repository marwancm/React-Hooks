import React, { useEffect, useState } from 'react'

export default function Effect() {
  const [users, setUsers] = useState([])
  const [filteredUsers, setFilteredUsers] = useState([])


  useEffect(()=> {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data)) 

    return ()=>{return false}
  },[])

useEffect(() => {
  setFilteredUsers(users)
},[users])


  const handleChange = (e)=> {
    const filter = users.filter(
      user => user.name.toLowerCase().includes(e.target.value)
    )
    setFilteredUsers(filter)
  }
  return (
    <>
    <input type="text" className='search' onInput={handleChange}/>
      {filteredUsers.map(
        user => 
          <h3 key={user.id}>
              {user.name}
          </h3>
      )}
    </>
  )
}
