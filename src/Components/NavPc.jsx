import React from 'react'
import { Link } from "react-router-dom";
import { useNavigate} from "react-router-dom"
import UserAccount from './UserAccount'

const NavPc = ( {setAccount ,account ,user , setUser} ) => {
  const navigate = useNavigate()
  return (
    <div className="w-[80%] mx-auto h-[70px] text-white text-[18px] font-bold opacity-100 flex justify-between items-center max-lg:hidden">
        
        <div className='flex justify-center'>
          
          <h2 
          className='cursor-pointer'
          onClick={()=> user ? navigate('/home') : navigate('/') }>OPUS LUMINA</h2>
        </div>
        
        <div className='flex gap-10 '>

        <ul className="flex gap-10">
          {!user && 
          <li >
            <Link to={'/'}>Inicio</Link>
          </li >
          }
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
        </div>

        <div className='flex justify-space bettween gap-10'>
            {user?<img 
            className='h-10 w-10 rounded-full cursor-pointer'
            onClick={()=>setAccount(!account)} src={`${user.photoURL ?user.photoURL :'https://i.pinimg.com/564x/b2/a0/29/b2a029a6c2757e9d3a09265e3d07d49d.jpg'}`}></img>:<div className='flex gap-10'>
               <button onClick={() => navigate('Inicio-Sesion')}>Iniciar sesion</button>
               <button onClick={() => navigate('/Registrar')}>Registrarse</button>
            </div>} 
            
        </div>
        {account && <UserAccount setAccount={setAccount} user={user} />}
      </div>
  )
}

export default NavPc