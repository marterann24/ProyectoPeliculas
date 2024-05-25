import React from 'react'
import logOut from '../functions/logOut';
import { useNavigate} from "react-router-dom"
import { onAuthStateChanged } from 'firebase/auth'
import { FirebaseAuth } from '../Firebase/config'

const UserAccount = ({setAccount}) => {
  const navigate = useNavigate()


  const handleCerrar = () =>{
    setAccount(false)
    logOut()
    navigate('/')
  }
  return (
    <div
    className='absolute h-52 w-52 lg:bg-black lg:right-0 lg:top-14'
    >
        <ul>
            <li>Hacerte premium</li>
            <li>Cuenta</li>
            <li onClick={handleCerrar}>Cerrar sesion</li>
        </ul>
    </div>
  )
}

export default UserAccount