import { FirebaseAuth } from '../Firebase/config';
import { createUserWithEmailAndPassword} from 'firebase/auth'
import Swal from "sweetalert2"; 

 export const registerUser =  async(email , password) =>{
   try {
        const user = await createUserWithEmailAndPassword(FirebaseAuth , email , password)
        console.log(user)
        return user
    } catch (error) {
        console.log(error)
         if (error.code === "auth/email-already-in-use") {
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: "El correo ya esta registrado",
        showConfirmButton: false,
        timer: 1500,
      });
    }

    }
}
