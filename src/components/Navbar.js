import React from 'react'
import { auth } from '../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import Signin from './Signin'
import Logout from './Logout'

const Navbar = () => {
  const [user] = useAuthState(auth)
  console.log(user)
  return (
    <div className='bg-gray-800 h-20 flex justify-between items-center p-4'>
      <h1 className='text-white text-3xl'>
        Chat app
      </h1>
      {user ? <Logout/> : <Signin/>}
    </div>
  )
}

export default Navbar