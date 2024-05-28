import React from "react";
import logo from "./img/Logotipo.png";
import { RiMenuLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { useState, useEffect } from "react";
import {Link , useNavigate} from 'react-router-dom'
import logOut from "../functions/logOut";

const NavMobile = ({user}) => {
  const [newNav, setNewNav] = useState(false);
  const [localName , setLocalName] = useState('')
  const navigate = useNavigate()

  const handleClick = () => {
    setNewNav(false);
  };

  const handleEvent = () =>{
    user ? navigate('/home'): navigate('/')
  }



  useEffect(() => {
    if (newNav) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [newNav]);


  useEffect(()=>{
    const name = localStorage.getItem('nombre')
    if(name){
      setLocalName(name)
    }
  },[])

  const handleCerrar = () =>{
    logOut()
    navigate('/')
    setNewNav(false)
    localStorage.removeItem('nombre')
    setLocalName('')
  }


  return (
    <div className="lg:hidden max-lg:w-full max-lg:mx-4 max-lg:flex max-lg:justify-between max-lg:items-center max-lg:h-full">
      <img src={`${logo}`} className="max-lg:h-12 " onClick={handleEvent}/>
      <div>
        <RiMenuLine
          className="max-lg:text-2xl max-lg:text-white"
          onClick={() => setNewNav(true)}
        />
      </div>
      {newNav && (
        <div className={`mobile-nav ${newNav ? "visible" : ""} `}>
          <IoMdClose
            className="text-4xl text-white absolute right-3 top-4  "
            onClick={handleClick}
          />
          <div className="text-white w-[80%] mx-auto mt-16">
            <h2 className="text-3xl">Opus Lumina</h2>
            {user && <div >
              <img className='h-10 w-10 rounded-full mt-5'
              src={`${user.photoURL ?user.photoURL :'https://i.pinimg.com/564x/b2/a0/29/b2a029a6c2757e9d3a09265e3d07d49d.jpg'}`}></img>
              <p>{user.displayName ? user.displayName:`Hola ${localName ? localName:'Hijo de dios'}`}</p>
              <p>{user.email}</p>
              </div>
            }
            <ul className="mt-5 flex flex-col gap-8">
              {!user && (
                <li onClick={handleClick}>
                  <Link to={"/"}>Inicio</Link>
                </li>
              )}
              <li onClick={handleClick}>
                <Link to={"/Home"}>Peliculas</Link>
              </li>
              {user &&(
              <li onClick={handleClick}>
                <Link to={"/Series"}>Series</Link>
              </li>
              )}
              {user &&(
              <li onClick={handleClick}>
                <Link to={"/Buscar"}>Buscar</Link>
              </li>
              )}
              {user &&(
                <li onClick={handleCerrar}>
                  Cerrar Sesion
              </li>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavMobile;
