import { loginWithEmailPassword, logOutFirebase, registerWithEmailAndPassword, singInWithGoogle } from "../../firebase/providers"
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
        
        const result =  await registerWithEmailAndPassword( email, password, displayName);

        if(!result.ok) { 
            return dispatch(logOut(result.errorMessage )); 
        }

        dispatch( login(result))
     
    }
}


// accion asincrona cuando se logue con las credenciale

export const starLoginWithEmailPassword = ({ email, password }) => {     
    return async (dispatch) => { 
        dispatch( checkingCredentials())
        const result  = await loginWithEmailPassword(email, password);

        if(!result.ok) return dispatch(logOut(result.errorMessage));

        dispatch( login(result))
    }
}


export const starLogOut = () => { 
    return async ( dispatch ) => {
        await logOutFirebase();
        dispatch( logOut({}));
    }
}