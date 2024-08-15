import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

    const {userid} = useParams()

  return (
    <>
        <div className='bg-gray-600 text-white text-xl rounded-lg py-2'>USER : {userid}</div>
    </>
  )
}

export default User
