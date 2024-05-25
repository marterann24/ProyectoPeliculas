import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {singInWithGoogle} from '../functions/signWithGoogle'
import * as Yup from 'yup';
import loginWithEmailPassword from '../functions/Login'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

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
  return ( 
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={LoginSchema}
      onSubmit={(values) => {
        const traerDatos = async() =>{
          const datos = await loginWithEmailPassword(values.email, values.password)
          if(datos.operationType === 'signIn'){
            navigate('/Home')
          }
        }
        traerDatos()
        
      }}
    >
      {() => (
        <Form className='pt-[100px] text-white'>
          <div>
            <label htmlFor="email">Correo</label>
            <Field className='bg-blue-600' name="email" type="email" />
            <ErrorMessage name="email" component="div" />
          </div>

          <div className='flex'>
            <label htmlFor="password">Contraseña</label>
            <Field className='bg-blue-600' name="password" type="password" />
            <ErrorMessage name="password" component="div" />
          </div> 

          <div> 
            <button
            type="submit">Iniciar Sesión</button>
          </div>

          <div> 
            <button //class="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
            className='text-white' type="button" onClick={singInWithGoogle}>
              Iniciar con Google   
            </button>
            <button 
            type="button" onClick={() => console.log('Iniciar sesión con Facebook')}>
              Iniciar con Facebook
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Sesion;