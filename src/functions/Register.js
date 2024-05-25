import { FirebaseAuth } from '../Firebase/config';
import { createUserWithEmailAndPassword} from 'firebase/auth'

 export const registerUser =  async(email , password) =>{
   try {
        const user = await createUserWithEmailAndPassword(FirebaseAuth , email , password)
        console.log(user)
        return user
    } catch (error) {
        console.log(error)
    }
}
