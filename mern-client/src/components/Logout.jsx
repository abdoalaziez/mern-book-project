import React, { useContext } from 'react'
import { AuthContext } from '../contects/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom'


const Logout = () => {
    const {logOut} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
 
    const from = location.state?.from?.pathname || "/";
    const handleLogout =() =>{
        logOut().then(() => {
            // Sign-out successful.
            alert("Sign-out successful")
            navigate(from, {replace: true})
          }).catch((error) => {
            console.log(error)
          });
  
    }
    return (
      <div className='h-screen bg-teal-100 flex justify-center items-center'>
          <button className='bg-blue-700 text-white px-5 py-3 rounded'
          onClick={handleLogout}>
              Logout
          </button>
      </div>
  )
  }

export default Logout