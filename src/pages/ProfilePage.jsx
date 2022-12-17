import React from 'react'
import { useSelector } from 'react-redux'

function ProfilePage() {
    const {user}=useSelector((state)=> state.users)
  return (
    <div style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" alt="" width={300} height={300} />
        <h1>Name:{user?.name}</h1>
        <h1>Email:{user?.email}</h1>
    </div>
  )
}

export default ProfilePage