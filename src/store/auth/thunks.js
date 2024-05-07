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
        
        dispatch(login(result))
    }
}

export const startCreatingUserWithEmailPasssword = ({ email, password, displayName }) => {
    return async (dispatch) => { 
        dispatch( checkingCredentials())
        
        const { ok, uid, photoURL, errorMessage } =  await registerWithEmailAndPassword( email, password, displayName);

        if(!ok) { 
            return dispatch(logOut({ errorMessage }));            
        }

        dispatch( login({ email, uid, photoURL, displayName }))
     
    }
}