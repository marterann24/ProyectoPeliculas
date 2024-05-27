import { FirebaseAuth } from '../Firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Swal from "sweetalert2";

const loginWithEmailPassword = async(email , password)=>{
    try {
        const user = await signInWithEmailAndPassword (FirebaseAuth , email , password)
        console.log(user)
        return user
    } catch (error) {
        console.log(error.code)
        if(error.code === 'auth/invalid-credential'){
            Swal.fire({
                position:'center',
                icon:'error',
                title:'Correo o contraseña Incorrecto',
                showConfirmButton:false,
                timer:1000
            })
        }
        if(error.code === 'auth/wrong-password'){
            Swal.fire({
                position:'center',
                icon:'error',
                title:'La contraseña esta mal',
                showConfirmButton:false,
                timer:1000
            })
        }
        if(error.code === 'auth/user-not-found'){
            Swal.fire({
                position:'center',
                icon:'warning',
                title:'Correo no Registrado',
                text:'No tienes cuenta create una',
                showCancelButton: false,
                timer:1000
            })
        }
    }
}

export default loginWithEmailPassword