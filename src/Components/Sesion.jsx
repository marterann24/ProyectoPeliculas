import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {singInWithGoogle} from '../functions/signWithGoogle'
import { signInWithFacebook } from '../functions/signWithFacebook';
import * as Yup from 'yup';
import loginWithEmailPassword from '../functions/Login'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import logo2 from './img/Logotipo.png'
import Swal from "sweetalert2"; 
import {onAuthStateChanged} from 'firebase/auth'
import { FirebaseAuth } from '../Firebase/config';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Correo inválido').required('Campo requerido'),
  password: Yup.string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .matches(/[A-Z]/, 'Debe contener al menos una letra mayúscula')
    .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Debe contener al menos un carácter especial')
    .required('Campo requerido'),
});

const Sesion = () => {

  const navigate = useNavigate()

  const handleFacebook = async () => {
    try {
      const credentials = await signInWithFacebook();
      console.log('Inicio de sesión exitoso con Facebook:', credentials.user);
      if(credentials.user){
        Swal.fire({
          position:'center',
          icon:'success',
          title:`Bienvenido ${credentials.user.displayName}`,
          showConfirmButton:false,
          timer:2000
      })
      setTimeout(()=>{
        navigate('/Home')
      },3000)
      }
    } catch (error) {
      console.error('Error en el inicio de sesión con Facebook:', error);
      if(error){
        Swal.fire({
          position:'center',
          icon:'warning',
          title:`Error conectar con facebook`,
          showConfirmButton:false,
          timer:2000
      })
      setTimeout(()=>{
        navigate('/Home')
      },3000)
      }
    }
  }

  const handleGoogle = async() =>{ 
    let credentials = await singInWithGoogle()
    console.log(credentials)
    if(credentials.operationType === 'signIn'){
      Swal.fire({
        position:'center',
        icon:'success',
        title:`Bienvenido ${credentials.user.displayName}`,
        showConfirmButton:false,
        timer:1000
    })
    setTimeout(()=>{
      navigate('/Home')
    },2000)
    }
  }


  onAuthStateChanged(FirebaseAuth, (usuarioFirebase)=>{
    if(usuarioFirebase){
      navigate('/home')
    }
  })

  return ( 
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={LoginSchema}
      onSubmit={(values) => {
        const traerDatos = async() =>{
          const datos = await loginWithEmailPassword(values.email, values.password)
          if(datos.operationType === 'signIn'){
            Swal.fire({
              position:'center',
              icon:'success',
              title:`Bienvenido ${datos.user.displayName ? datos.user.displayName: 'Usuario'}`,
              showConfirmButton:false,
              timer:2000
          })
          setTimeout(()=>{
            navigate('/Home')
          },3000)
          }
        }
        traerDatos()
        
      }}
    >
      {() => (
        <Form className='max-sm:h-[100vh] flex justify-center items-center text-white h-[100vh]'>
          <div className='max-sm:w-[80%] mx-auto bg-[#535c91] max-sm:min-h-[58%] rounded-md relative min-h-[50%] w-[400px]'>
            <div className='w-[90%] m-auto'>
               <div className='flex flex-col justify-center items-center   '>
                <img src={`${logo2}`} alt="" className='max-sm:h-28 my-2 h-32'/>
                <h2 className='text-3xl text-center'>¡Bienvenido!</h2>
               </div>

               <div className='my-4'>
                <div>
                  <label htmlFor="email">Correo </label>
                  <Field className='w-full border-b-2 border-white bg-transparent outline-none px-2' name="email" type="email"  />
                  <ErrorMessage name="email" component="div" />
                </div>

                <div >
                  <label htmlFor="password">Contraseña</label>
                  <Field className='w-full border-b-2 border-white bg-transparent outline-none px-2' name="password" type="password" />
                  <ErrorMessage name="password" component="div" />
                </div> 

                <div className='bg-purple-600 py-2 flex justify-center rounded-lg my-4 
                '> 
                  <button
                  type="submit">Iniciar Sesión</button>
                </div>
               </div>

              <p className='text-center '>O</p>
              <div className='flex gap-4 justify-center mt-3'> 
                <img className='h-10 rounded-md cursor-pointer ' src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png" onClick={handleFacebook} 
                />
                <img className='h-10 rounded-md cursor-pointer ' src="https://cdn-icons-png.flaticon.com/512/2965/2965278.png" alt="" onClick={handleGoogle}/>
              </div>
            </div>
            <p className='text-center my-3'>¿No tienes cuenta? <span className='text-blue-600 cursor-pointer' onClick={()=>navigate('/Registrar')}>Crea una</span></p>
          </div>

        </Form>
      )}
    </Formik>
  );
};

export default Sesion;