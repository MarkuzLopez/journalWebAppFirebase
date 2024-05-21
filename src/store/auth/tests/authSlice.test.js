import { authSlice } from "../authSlice"
import { initialState } from "./fixtures/authFixtures";

describe('Pruebas authSlice', () => { 

    test('debe de regresar el estado inicial y llamarse auth', () => { 
        
        // console.log(authSlice);
        expect( authSlice.name ).toBe('auth');

        expect( authSlice.reducer(initialState, {}) ).toEqual(initialState);
     })

 })