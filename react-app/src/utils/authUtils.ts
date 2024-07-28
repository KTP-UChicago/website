import { Alert } from 'react-bootstrap';
import { auth, provider } from '../libs/FirebaseApp';
import { signInWithPopup, signOut, User, getIdToken } from 'firebase/auth';

export const signInWithGoogle = async (): Promise<User | null> => {
  try {
    const result = await signInWithPopup(auth, provider);
    if(result.user && result.user.email && validateEmail(result.user.email)){
        return result.user;
    }else{
        await signOut(auth);
        auth.currentUser?.delete();
        return null;
    }
  } catch (error) {
    console.error("Error signing in with Google: ", error);
    return null;
  }
};

const VALID_EMAILS = new Set([
    "mnjoo@uchicago.edu",
    "nicholaslee@uchicago.edu",
    "kylew@uchicago.edu",
    "irislauren@uchicago.edu",
    "yichihuang@uchicago.edu",
    "lade@uchicago.edu",
    "ryanlobo@uchicago.edu",
    "siyakalra@uchicago.edu",
    "catherinelu@uchicago.edu",
    "jessicao@uchicago.edu",
    "aryasap@uchicago.edu"
])
const validateEmail = (email: string): boolean => {
    if(!VALID_EMAILS.has(email)){
        return false;
    }
    return true;
}

export const logout = async (): Promise<void> => {
  try {
    await signOut(auth);
    console.log("User signed out");
  } catch (error) {
    console.error("Error signing out: ", error);
  }
};

export const deleteAccount = async (): Promise<void> => {
    try {
        const user = auth.currentUser;
        if (user) {
        await user.delete();
        console.log("User account deleted");
        } else {
        console.error("No user signed in");
        }
    } catch (error) {
        console.error("Error deleting account: ", error);
    }
    };

export const getCurrentUserToken = async (): Promise<string | null> => {
  const user = auth.currentUser;
  if (user) {
    return await getIdToken(user);
  } else {
    return null;
  }
};