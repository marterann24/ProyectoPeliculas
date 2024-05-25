import { FirebaseAuth,  } from '../Firebase/config';
import { signOut } from 'firebase/auth';

const logOut = async() =>{
return await FirebaseAuth.signOut()
}
export default logOut