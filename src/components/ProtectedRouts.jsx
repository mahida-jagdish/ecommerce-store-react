import React from 'react'
import { useUser } from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';

const ProtectedRouts = ({children}) => {
    const {user} = useUser();
  return (
    <div>
        {
            user ? children : <Navigate to='/' />
        }
    </div>
  )
}

export default ProtectedRouts