// Models
import { IUserLogin } from 'models';

// Firebase-Config
import { app } from './firebase.config';

// Firebase
import {
  getAuth,
  checkActionCode,
  confirmPasswordReset,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from 'firebase/auth';

const auth = getAuth(app);

export const useFirebase = (data: IUserLogin) => {
  const checkAction = async (oobCode: string) => {
    try {
      const info = await checkActionCode(auth, oobCode);
      return info;
    } catch (error) {
      throw new Error(`INVALID_OOB_CODE : ${error}`);
    }
  };

  const handleSingIn = async () => {
    const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
    const user = userCredential.user;
    const idToken = await user.getIdToken();

    return { user, idToken };
  };

  const handleRecover = () => {
    return sendPasswordResetEmail(auth, data.email);
  };

  const handleConfirmPasswordReset = (oobCode: string, newPassword: string) => {
    return confirmPasswordReset(auth, oobCode, newPassword);
  };

  return { handleSingIn, handleRecover, handleConfirmPasswordReset, checkAction };
};
