import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { registerUser } from '../functions/Register';
import {useNavigate} from 'react-router-dom'


const RegistrationSchema = Yup.object().shape({
  name: Yup.string().min(5, 'El nombre debe tener al menos 5 caracteres').required('Campo requerido'),
  email: Yup.string().email('Correo inválido').required('Campo requerido'),
  password: Yup.string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .matches(/[A-Z]/, 'Debe contener al menos una letra mayúscula')
    .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Debe contener al menos un carácter especial')
    .required('Campo requerido'),
});

const Registro = () => {
  const navigate = useNavigate()

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={RegistrationSchema}
      onSubmit={(values) => {
        const newUser = async() =>{
        const user = await registerUser(values.email , values.password)
        if(user.operationType === 'signIn'){
          navigate('/Home')
        }
        }
        newUser()
      }}
    >
      {() => (
        <Form className='pt-20'>
          <div>
            <label htmlFor="name">Nombre</label>
            <Field name="name" type="text" />
            <ErrorMessage name="name" component="div" />
          </div>
          <div>
            <label htmlFor="email">Correo</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label htmlFor="password">Contraseña</label>
            <Field name="password" type="password" />
            <ErrorMessage name="password" component="div" />
          </div>
          <div>
            <button type="submit">Registrarse</button>
          </div>
          <div>
            <button type="button" onClick={() => console.log('Registrarse con Google')}>
              Registrarse con Google
            </button>
            <button type="button" onClick={() => console.log('Registrarse con Facebook')}>
              Registrarse con Facebook
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Registro;