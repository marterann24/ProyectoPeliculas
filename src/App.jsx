import { useState , useEffect} from 'react'
import {Routes, Route , useNavigate} from "react-router-dom"
import './App.css'
import Sesion from './Components/Sesion'
import Registro from './Components/Registro'
import {Home} from './Components/Home'
import Series from './Components/Series'
import {Perfil} from './Components/Perfil'
import {Detalle} from './Components/Detalle'
import {Plan} from './Components/Plan'
import { Landing } from './Components/Landing'
import  Buscar  from './Components/Buscar'
import { Nav } from './Components/Nav'
import { onAuthStateChanged } from 'firebase/auth'
import { FirebaseAuth } from './Firebase/config'


function App() {
  const [id , setId] = useState(0)
  const [user , setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FirebaseAuth, (usuarioFirebase) => {
      if (usuarioFirebase) {
        setUser(usuarioFirebase);
      } else {
        setUser(null);
      }
    });
    
    // Cleanup function to unsubscribe the listener on unmount
    return () => unsubscribe();
  }, []);

  console.log(user);
  return (
    <>
    <Nav setUser={setUser} user={user}/>
    <Routes>

        <Route path='/' element={<Landing/>} />
        <Route path='/home' element={<Home setId={setId}/>} /> 
        <Route path='/Series' element={<Series/>} /> 
        <Route path='Inicio-Sesion' element={user?navigate('/Home'):<Sesion/> } />
        <Route path='Registrar' element={user?navigate('/Home'):<Registro/>} />
        <Route path='Perfil' element={<Perfil/>} />
        <Route path={`Detalle:${id}`} element={<Detalle id={id}/>} />
        <Route path='Plan' element={<Plan/>} />
        <Route path='Buscar' element={<Buscar/>} />        
      </Routes>
    </>
  )
}

export default App
