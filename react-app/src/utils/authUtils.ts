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
    "aryasap@uchicago.edu",
    "jbrouwer@uchicago.edu",
    "chelseaegbarin@uchicago.edu",
    "ericliu1@uchicago.edu",
  "lzielinski@uchicago.edu",
  "pratham@uchicago.edu",
  "tessied@uchicago.edu",
  "amulyaagrawal@uchicago.edu",
  "awliu2@uchicago.edu",
  "gregoriofs@uchicago.edu",
  "jyk@uchicago.edu",
  "katiesun@uchicago.edu",
  "kylew@uchicago.edu",
  "gallom@uchicago.edu",
  "mnjoo@uchicago.edu",
  "rohanv@uchicago.edu",
  "shivanipuli@uchicago.edu",
  "vzhang00@uchicago.edu",
  "aafiasait@uchicago.edu",
  "alexan@uchicago.edu",
  "aryasap@uchicago.edu",
  "bwang616@uchicago.edu",
  "ckawediya@uchicago.edu",
  "claricek@uchicago.edu",
  "dxue@uchicago.edu",
  "lade@uchicago.edu",
  "gwharris8@gmail.com",
  "jroven@uchicago.edu",
  "mhchang@uchicago.edu",
  "nicholaslee@uchicago.edu",
  "tanvib@uchicago.edu",
  "tiffanycheng@uchicago.edu",
  "tristansharma@uchicago.edu",
  "zmauro@uchicago.edu",
  "ag7@uchicago.edu",
  "catherinelu@uchicago.edu",
  "yichihuang@uchicago.edu",
  "charlotteroth@uchicago.edu",
  "erike@uchicago.edu",
  "fmadey@uchicago.edu",
  "wangg@uchicago.edu",
  "geraldyeo@uchicago.edu",
  "hermelas@uchicago.edu",
  "omoreno@uchicago.edu",
  "mariamkatsadze@uchicago.edu",
  "mcvelasco@uchicago.edu",
  "ranyasharma@uchicago.edu",
  "rohan0866@gmail.com",
  "ryanlobo@uchicago.edu",
  "siyakalra@uchicago.edu",
  "skylarliu@uchicago.edu",
  "dearmanspencer@uchicago.edu",
  "arnava@uchicago.edu",
  "bdstarr@uchicago.edu",
  "irislauren@uchicago.edu",
  "jjahn@uchicago.edu",
  "kathyyao@uchicago.edu",
  "maggiex@uchicago.edu",
  "mahum@uchicago.edu",
  "ojerdee@uchicago.edu",
  "rlee20@uchicago.edu",
  "rohandeme@uchicago.edu",
  "tiffanyjlee@uchicago.edu",
  "albertseo@uchicago.edu",
  "drcbrennan@uchicago.edu",
  "fredricngo@uchicago.edu",
  "ggracelu@uchicago.edu",
  "guanc@uchicago.edu",
  "hudsonch@uchicago.edu",
  "irisbd@uchicago.edu",
  "johnruge@uchicago.edu",
  "jwxie@uchicago.edu",
  "karataylor@uchicago.edu",
  "ndelisle@uchicago.edu",
  "pdepaulo@uchicago.edu",
  "rdvejar@uchicago.edu",
  "stludwig@uchicago.edu",
  "tfair1@uchicago.edu",
  "winstonli@uchicago.edu"
]);

const validateEmail = (email: string): boolean => {
  if (!VALID_EMAILS.has(email)) {
    return false;
  }
  return true;
};

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