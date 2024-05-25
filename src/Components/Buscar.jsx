import React from 'react'
import { useNavigate } from 'react-router-dom'

const Buscar = () => {
  const navigate = useNavigate()
  return (

    <div>
    <button onClick={()=> navigate('/Inicio')}>hola</button>
      
    </div>

  )
}
 export default Buscar