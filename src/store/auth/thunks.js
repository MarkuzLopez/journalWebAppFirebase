import { loginWithEmailPassword, registerWithEmailAndPassword, singInWithGoogle } from "../../firebase/providers"
import { checkingCredentials, login, logOut } from "./authSlice"

export const checkingAuthentication = () => { 
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


// accion asincrona cuando se logue con las credenciale

export const starLoginWithEmailPassword = ({ email, password }) => {     
    return async (dispatch) => { 
        dispatch( checkingAuthentication ())
        const  { ok, errorMessage , uid, photoURL, displayName }  = await loginWithEmailPassword(email, password);
console.log(ok, errorMessage);
        if(!ok) return dispatch(logOut({errorMessage} ));

        dispatch( login({ email, uid, photoURL, displayName }))
    }
}
