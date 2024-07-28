import React, { createContext, useContext, useMemo } from 'react';
import { storage, FirebaseApp, firestore, auth } from '../libs/FirebaseApp';
import { FirebaseStorage } from 'firebase/storage';
import { Firestore } from 'firebase/firestore';
import { Auth } from 'firebase/auth';

interface FirebaseContextProps {
    firestore: Firestore;
    storage: FirebaseStorage;
    auth: Auth;
  }

  
export const FirebaseContext = createContext <FirebaseContextProps>({firestore: firestore, storage: storage, auth: auth});

export const FirebaseProvider = ({ children }: { children: React.ReactNode }) => {
    const firebaseAppRef = useMemo(() => FirebaseApp, []);
    const storageRef = useMemo(() => storage, [firebaseAppRef]);
    const firestoreRef = useMemo(() => firestore, [firebaseAppRef]);
    const authRef = useMemo(() => auth, [firebaseAppRef])

    return (
        <FirebaseContext.Provider value={{firestore: firestoreRef, storage: storageRef, auth: authRef }}>
            {children}
        </FirebaseContext.Provider>
    );
};

export const useFirebase = () => {
  return useContext(FirebaseContext);
};
