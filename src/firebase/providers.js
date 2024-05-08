import { GoogleAuthProvider, EmailAuthProvider , signInWithEmailAndPassword, signInWithPopup, createUserWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { firebaseAuth } from "./config";

const googleSignIn = new GoogleAuthProvider();

export const singInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(firebaseAuth, googleSignIn);
    // const credential =  GoogleAuthProvider.credentialFromResult(result);
    // console.log(credential);
    const { displayName, photoURL, email, uid } = result.user;
    return {
      ok: true,
      displayName,
      photoURL,
      email,
      uid,
    };
  } catch (error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...

    return {
      ok: false,
      errorMessage,
    };
  }
};


export const registerWithEmailAndPassword = async (email, password, displayName) => {
  try {    

    const result =  await createUserWithEmailAndPassword(firebaseAuth, email, password);
    
    const { uid, photoURL } = result.user;
    await updateProfile(firebaseAuth.currentUser, { displayName })

    return { 
      ok: true,
      displayName,
      uid,
      photoURL
    }
    
    console.log(result);

  } catch (error) {
    const errorMessage = error.message;
    return { 
      ok: false,
      errorMessage
    }
  }
}

export const loginWithEmailPassword = async (email, password) => {   
   try {
    const result = await signInWithEmailAndPassword(firebaseAuth, email, password);
    const { uid, displayName, photoURL } = result.user;
    return {
      ok: true,
      uid, 
      displayName,
      email,
      photoURL
    }
   } catch (error) {
    console.log({error });
    const errorMessage = error.message;
    return { 
      ok: false,
      errorMessage
    }
   }
}

export const logOutFirebase = async () => { 
  await signOut(firebaseAuth)
}
