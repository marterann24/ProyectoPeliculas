import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useNavigate} from "react-router-dom"
import UserAccount from './UserAccount'

export const Nav = ({setUser ,user} ) => {
  const navigate = useNavigate()
  const [ account , setAccount] = useState(false)

  return (
    <nav className="h-[70px] w-full flex justify-center fixed z-10 backdrop-blur ">
      <div className="sm:w-[90%] lg:w-[80%] mx-auto h-[70px] text-white text-[18px] font-bold opacity-100 flex justify-between items-center ">
        
        <div className='flex justify-center'>
          {/* <img src='./img/logo.jpg' alt='logo'/> */}
          <h2>OPUS LUMINA</h2>
        </div>
        
        <div className='flex gap-10 '>

        <ul className="flex gap-10">
          <li >
            <Link to={'/'}>Inicio</Link>
          </li >
          <li>
            <Link to={'/Home'}>Peliculas</Link>
          </li>
          <li>
            <Link to={'/Series'}>Series</Link>
          </li>
          <li>
            <Link to={'/Buscar'}>Buscar</Link>
          </li>
        </ul>
        {/* <select name="select" className='text-white bg-transparent'>
          <option value="Generos" selected> Generos</option>
          <option value="ciencia ficcion">Value 1</option>
          <option value="Niños">Value 2</option>
          <option value="Adultos">Value 3</option>
        </select> */}
        </div>

        <div className='flex justify-space bettween gap-10'>
            {user?<img 
            className='h-10 w-10 rounded-full cursor-pointer'
            onClick={()=>setAccount(!account)} src={`${user.photoURL ?user.photoURL :'https://i.pinimg.com/564x/b2/a0/29/b2a029a6c2757e9d3a09265e3d07d49d.jpg'}`}></img>:<div className='flex gap-10'>
               <button onClick={() => navigate('Inicio-Sesion')}>Iniciar sesion</button>
               <button onClick={() => navigate('/Registrar')}>Registro</button>
            </div>} 
            
        </div>
        {account && <UserAccount setAccount={setAccount}/>}
      </div>
    </nav>

  )
}
