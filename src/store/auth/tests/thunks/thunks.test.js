import { loginWithEmailPassword, logOutFirebase, registerWithEmailAndPassword, singInWithGoogle } from "../../../../firebase/providers";
import { checkingCredentials, login, logOut } from "../../authSlice";
import { checkingAuthentication, startCreatingUserWithEmailPasssword, startGoogleSignIn, starLoginWithEmailPassword, starLogOut } from "../../thunks";
import { demoUser } from "../fixtures/authFixtures";

jest.mock('../../../../firebase/providers')


describe('Pruebas en AuthThunks ', () => { 

    const dispatch = jest.fn();
    beforeEach(() =>  jest.clearAllMocks() );


    test('debe de invicar el checkingCredentials', async () => { 
        

        /** la primera () so para invocar la funcion
         * la se segunda () es para el valor que retornar la funcion
         */
        await checkingAuthentication()(dispatch);
        // expect(dispatch).toHaveBeenCalledWith({"payload": undefined, "type": "auth/checkingCredentials"})
        expect(dispatch).toHaveBeenCalledWith( checkingCredentials());
     })

     test('deberia de mandar a llamar startGoogleSignIn debe de llamar checkingCredentials y login success', async () => { 

        const loginData = { ok: true, ...demoUser };
        await  singInWithGoogle.mockResolvedValue( loginData )
        
        // const dispatch = jest.fn();

        await startGoogleSignIn()(dispatch);
        expect(dispatch).toHaveBeenCalledWith( checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith( login(loginData) )
      })

      test('deberia de mandar a llamar startGoogleSignIn debe de llamar checkingCredentials y logOut Error', async () => { 

        const loginData = { ok: false, errorMessage: 'Un error en Google' };        
        await  singInWithGoogle.mockResolvedValue( loginData )
        
        // const dispatch = jest.fn();

        await startGoogleSignIn()(dispatch);
        expect(dispatch).toHaveBeenCalledWith( checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith( logOut(loginData.errorMessage) )
      })

      test('deberia de mandar a llamar eml metodoo creating user and  Passsword checking credentials - success', async () => { 

        const userData = {
          displayName: 'Fernando',
          email: 'fernando@gmail.com',
          password: '12345678'
        }

        await  registerWithEmailAndPassword.mockResolvedValue (userData.email, userData.password, userData.displayName);                 
        await  startCreatingUserWithEmailPasssword(userData)(dispatch);

        expect(dispatch).toHaveBeenCalledWith( checkingCredentials());
        
       })

       test('deberia de mandar a llamar LoginWithEmailPassword checking y login (exito) ', async () => {

        const loginData = { ok: true, ...demoUser };
        const userData = { email: demoUser.email, password: '123456' }

        await loginWithEmailPassword.mockResolvedValue(loginData);
        await starLoginWithEmailPassword(userData)(dispatch);        
        
        expect(dispatch).toHaveBeenCalledWith( checkingCredentials() );        
       })

       test('deberia de mandar a llamar LoginWithEmailPassword checking y login (rejected) ', async () => {

        const loginData = { ok: false, errorMessage: 'Un error en Google' };   
        const userData = { email: 'test@gmail.com', password: '123456' }

        await loginWithEmailPassword.mockResolvedValue(loginData);
        await starLoginWithEmailPassword(userData)(dispatch);        
        
        expect(dispatch).toHaveBeenCalledWith( checkingCredentials() );

       })

       test('Deberia de mandar a llamar startLogout', async () => { 

        await logOutFirebase();
        await starLogOut()(dispatch);

        expect(dispatch).toHaveBeenCalledWith( logOut({}) );
      })

 })