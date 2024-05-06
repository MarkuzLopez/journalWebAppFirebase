import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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
