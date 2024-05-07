import { registerWithEmailAndPassword, singInWithGoogle } from "../../firebase/providers"
import { checkingCredentials, login, logOut } from "./authSlice"

export const checkingAuthentication = (email, password) => { 
    return async (dispatch) => { 
        dispatch( checkingCredentials() )
    }
}

export const startGoogleSignIn = () => { 
    return async (dispatch) => {         
        dispatch( checkingCredentials() )
        const result = await  singInWithGoogle();        
        if(!result.ok) return dispatch( logOut(result.errorMessage));
    }
}

export const startCreatingUserWithEmailPasssword = ({ email, password, displayName }) => {
    return async (dispatch) => { 
        dispatch( checkingCredentials())
        console.log(email, password, displayName, 'aqisdads');
        const result =  await registerWithEmailAndPassword( email, password, displayName);
     console.log({ result});
    }
}