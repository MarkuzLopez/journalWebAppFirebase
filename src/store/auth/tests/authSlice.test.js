import { authSlice, checkingCredentials, login, logOut } from "../authSlice";
import {
  demoUser,
  initialState,
  notAuthenticated,
} from "./fixtures/authFixtures";

describe("Pruebas authSlice", () => {
  test("debe de regresar el estado inicial y llamarse auth", () => {
    // console.log(authSlice);
    expect(authSlice.name).toBe("auth");

    expect(authSlice.reducer(initialState, {})).toEqual(initialState);
  });

  test("debe de realizar la autenticacion", () => {
    const state = authSlice.reducer(initialState, login(demoUser));

    expect(state).toEqual({
      status: "authenticated",
      uid: demoUser.uid,
      email: demoUser.email,
      displayName: demoUser.displayName,
      photoURL: demoUser.photoURL,
      errorMessage: null,
    });
  });

  test("debe de realizar el logOut", () => {
    const state = authSlice.reducer(initialState, logOut(notAuthenticated));
    expect(state).toEqual({
      status: "not-authenticated",
      email: null,
      displayName: null,
      photoURL: null,
      uid: null,
      errorMessage: null,
    });
  });

  test("debe de realizar el chequeo de credenciales", () => {
    const state = authSlice.reducer(initialState, checkingCredentials());
    expect(state).toEqual({
      status: "checking",
      email: null,
      displayName: null,
      photoURL: null,
      uid: null,
      errorMessage: null,
    });
  });
});
