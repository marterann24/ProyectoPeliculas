import { FacebookAuthProvider,  signInWithPopup} from 'firebase/auth';
import { FirebaseAuth } from "../Firebase/config";    


const facebookProvider = new FacebookAuthProvider();

export const signInWithFacebook = async () => {
  try {
    const credentials = await signInWithPopup(FirebaseAuth, facebookProvider);
    console.log(credentials);
    return credentials;
  } catch (error) {
    console.log(error)
  }
};