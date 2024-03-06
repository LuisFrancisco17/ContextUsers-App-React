import React, { useContext, useEffect } from "react"
import UserContext from "../context/User/UserContext"

const UserList = () => {
  const { getUsers } = useContext(UserContext)

  useEffect(()=> {
    getUsers();
  }, [])

  return (
    <div>UserList</div>
  )
}

export default UserList