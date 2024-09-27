import { User } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import { getCurrentUserToken, signInWithGoogle, logout } from '../utils/authUtils';
import { useFirebase } from './FirebaseContext';
import { Alert } from 'react-bootstrap';

export type AuthenticationContextType = {
    user: User | null;
    token: string | null;
    handleLogin: () => void;
    handleLogout: () => void;
}

export const AuthenticationContext = createContext<AuthenticationContextType | undefined>(undefined);

export const AuthenticationContextProvider = ({children} : {children: React.ReactNode}) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const {auth} = useFirebase();
    // Listen for auth state changes
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(async (user) => {
        if (user) {
          setUser(user);
          const token = await getCurrentUserToken();
          setToken(token);
        } else {
          setUser(null);
          setToken(null);
        }
      });
  
      // Cleanup subscription on unmount
      return () => unsubscribe();
    }, []);
  
    const handleLogin = async () => {
      const userData = await signInWithGoogle();
      if(userData == null){
        //Alert user that they are not authorized
        alert("You are not authorized to access this page. Currently only KTP Board members are allowed to access this page. Rush KTP Fall 2024!");
      }
        setUser(userData);
    
      
    };
  
    const handleLogout = async () => {
      await logout();
      setUser(null);
      setToken(null);
    };
    return (
        <AuthenticationContext.Provider value={{
            user,
            token,
            handleLogin,
            handleLogout
        }}>
            {children}
        </AuthenticationContext.Provider>
    );
}

export const useAuthentication = () => {
    const context = useContext(AuthenticationContext);
    if (!context) {
        throw new Error('useAuthentication must be used within an AuthenticationContextProvider');
    }
    return context;
}
